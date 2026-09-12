# Daily Desk private API

This Worker is deliberately separate from the static Pages project. Cloudflare Access must authenticate the request before the Worker runs. The Worker then fails closed when `ctx.access` has no verified identity and derives the database owner only from that identity; it never accepts an owner identifier from the browser.

`wrangler.example.jsonc` is intentionally not deployable until the Cloudflare Access application and the `daily-desk-private` D1 database have been created. Copy it to `wrangler.jsonc`, replace only the D1 database ID returned by Cloudflare, apply the migration, then deploy after reviewing the Access policy.

The production route is managed in the Cloudflare dashboard, not in `wrangler.jsonc`:

- Zone: `jonnylab.app`
- Route: `jonnylab.app/daily-desk/api/*`
- Worker: `daily-desk-api`

This separation is intentional because the local Wrangler OAuth token can deploy Worker code and D1 bindings but does not have zone route permissions. Confirm the route still exists after any infrastructure migration.

The Worker uses a revision number for compare-and-swap writes. A stale browser tab receives `409 state_conflict` instead of silently overwriting a newer record.
