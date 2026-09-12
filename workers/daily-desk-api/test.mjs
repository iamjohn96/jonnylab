import assert from "node:assert/strict";
import worker from "./src/index.mjs";

class FakeD1 {
  records = new Map();

  prepare(sql) {
    return {
      bind: (...values) => ({
        first: async () => {
          const record = this.records.get(values[0]);
          return record ? { revision: record.revision, stateJson: record.stateJson, updatedAt: record.updatedAt } : null;
        },
        run: async () => {
          if (sql.startsWith("INSERT")) {
            const [owner, stateJson, createdAt, updatedAt] = values;
            if (this.records.has(owner)) throw new Error("already exists");
            this.records.set(owner, { revision: 1, stateJson, createdAt, updatedAt });
            return { meta: { changes: 1 } };
          }
          if (sql.startsWith("UPDATE")) {
            const [stateJson, updatedAt, owner, revision] = values;
            const record = this.records.get(owner);
            if (!record || record.revision !== revision) return { meta: { changes: 0 } };
            this.records.set(owner, { ...record, revision: record.revision + 1, stateJson, updatedAt });
            return { meta: { changes: 1 } };
          }
          throw new Error(`unexpected query: ${sql}`);
        },
      }),
    };
  }
}

const env = { DAILY_DESK_DB: new FakeD1() };
const accessAudience = "6a49e71044542c9e27edb0c320990373121681185c881e1c5cd5bd20429fea4e";
const context = (email, aud = accessAudience) => email ? { access: { aud, getIdentity: async () => ({ email }) } } : {};
const request = (method, body) => new Request("https://jonnylab.app/daily-desk/api/state", {
  method,
  headers: body ? { "content-type": "application/json" } : undefined,
  body: body ? JSON.stringify(body) : undefined,
});

const anonymous = await worker.fetch(request("GET"), env, context());
assert.equal(anonymous.status, 403);

const wrongApplication = await worker.fetch(request("GET"), env, context("first@example.com", "wrong-audience"));
assert.equal(wrongApplication.status, 403);

const empty = await worker.fetch(request("GET"), env, context("first@example.com"));
assert.deepEqual(await empty.json(), { revision: 0, state: null, updatedAt: null });

const created = await worker.fetch(request("PUT", { revision: 0, state: { routines: [], days: {} } }), env, context("first@example.com"));
assert.equal(created.status, 200);
assert.equal((await created.json()).revision, 1);

const firstUser = await worker.fetch(request("GET"), env, context("first@example.com"));
assert.deepEqual((await firstUser.json()).state, { routines: [], days: {} });

const secondUser = await worker.fetch(request("GET"), env, context("second@example.com"));
assert.deepEqual(await secondUser.json(), { revision: 0, state: null, updatedAt: null });

const stale = await worker.fetch(request("PUT", { revision: 0, state: { routines: ["stale"], days: {} } }), env, context("first@example.com"));
assert.equal(stale.status, 409);

console.log("daily-desk-api tests passed");
