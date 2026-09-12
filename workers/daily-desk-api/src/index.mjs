const MAX_STATE_BYTES = 256 * 1024;
const ACCESS_AUD = "6a49e71044542c9e27edb0c320990373121681185c881e1c5cd5bd20429fea4e";

function json(value, init = {}) {
  return new Response(JSON.stringify(value), {
    ...init,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      ...init.headers,
    },
  });
}

function error(status, code) {
  return json({ error: code }, { status });
}

function validEnvelope(value) {
  return Boolean(
    value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      Number.isSafeInteger(value.revision) &&
      value.revision >= 0 &&
      value.state &&
      typeof value.state === "object" &&
      !Array.isArray(value.state),
  );
}

async function ownerHash(email) {
  const normalized = email.trim().toLowerCase();
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(normalized));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function authenticatedOwner(ctx) {
  if (!ctx.access) return null;
  if (ctx.access.aud !== ACCESS_AUD) return null;

  const identity = await ctx.access.getIdentity();
  if (!identity || typeof identity.email !== "string" || !identity.email.trim()) return null;

  return ownerHash(identity.email);
}

async function readRecord(db, owner) {
  return db
    .prepare("SELECT revision, state_json AS stateJson, updated_at AS updatedAt FROM daily_desk_states WHERE owner_hash = ?")
    .bind(owner)
    .first();
}

const worker = {
  async fetch(request, env, ctx) {
    if (!env.DAILY_DESK_DB) return error(503, "storage_unavailable");

    const owner = await authenticatedOwner(ctx);
    if (!owner) return error(403, "access_required");

    const url = new URL(request.url);
    if (url.pathname !== "/daily-desk/api/state") return error(404, "not_found");

    if (request.method === "GET") {
      const record = await readRecord(env.DAILY_DESK_DB, owner);
      if (!record) return json({ revision: 0, state: null, updatedAt: null });

      try {
        return json({
          revision: record.revision,
          state: JSON.parse(record.stateJson),
          updatedAt: record.updatedAt,
        });
      } catch {
        return error(500, "stored_state_invalid");
      }
    }

    if (request.method !== "PUT") return error(405, "method_not_allowed");
    if (!request.headers.get("content-type")?.includes("application/json")) return error(415, "json_required");

    const raw = await request.text();
    if (new TextEncoder().encode(raw).byteLength > MAX_STATE_BYTES) return error(413, "state_too_large");

    let payload;
    try {
      payload = JSON.parse(raw);
    } catch {
      return error(400, "invalid_json");
    }
    if (!validEnvelope(payload)) return error(400, "invalid_state");

    const stateJson = JSON.stringify(payload.state);
    if (new TextEncoder().encode(stateJson).byteLength > MAX_STATE_BYTES) return error(413, "state_too_large");

    const current = await readRecord(env.DAILY_DESK_DB, owner);
    const now = new Date().toISOString();

    if (!current) {
      if (payload.revision !== 0) return error(409, "state_conflict");
      try {
        await env.DAILY_DESK_DB
          .prepare("INSERT INTO daily_desk_states (owner_hash, revision, state_json, created_at, updated_at) VALUES (?, 1, ?, ?, ?)")
          .bind(owner, stateJson, now, now)
          .run();
        return json({ revision: 1, updatedAt: now });
      } catch {
        return error(409, "state_conflict");
      }
    }

    if (current.revision !== payload.revision) return error(409, "state_conflict");

    const result = await env.DAILY_DESK_DB
      .prepare("UPDATE daily_desk_states SET revision = revision + 1, state_json = ?, updated_at = ? WHERE owner_hash = ? AND revision = ?")
      .bind(stateJson, now, owner, payload.revision)
      .run();

    if (result.meta.changes !== 1) return error(409, "state_conflict");
    return json({ revision: payload.revision + 1, updatedAt: now });
  },
};

export default worker;
