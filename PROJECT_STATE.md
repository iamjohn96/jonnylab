# JonnyLab website — project state

Updated: 2026-09-13

## Purpose

This repository is the source for the JonnyLab public website and its product,
support, privacy, and marketing pages. It also contains a private, Access-protected
Daily Desk workspace for recording broad recurring work without generating detailed
daily tasks or making daily AI calls.

The configured source remote is `https://github.com/iamjohn96/jonnylab.git`.

## Current milestone

The last published product source revision is `aeafbef` (`Update Deadline Lens
purchase privacy disclosures`). Its static export was uploaded to Cloudflare Pages
Production on 2026-09-13; the deployment URL is
`https://d0f78979.jonnylab.pages.dev`. The public production routes listed below
returned HTTPS 200 responses after that upload.

Daily Desk is implemented; its sky-blue visual refinement is in `6dad5c6`. It is
an established private workspace, not a new product-launch project. This handoff
updates documentation only. Check `git status` and the current `HEAD` before
assuming the documentation commit itself has been published.

## System overview

| Area | Implementation | Data boundary |
| --- | --- | --- |
| Public site | Next.js 16 static export from `app/`, `components/`, `public/` | Public, static Pages assets only |
| Product/legal pages | English and Korean route groups, shared site components | Public factual content; preserve canonical and policy URLs |
| Automation demo | Static browser simulation in `public/automation-demo/` | No live customer-data delivery |
| Daily Desk UI | `app/(desk)/daily-desk/page.tsx`, `components/DailyDesk.tsx` | Private route, `noindex`; no analytics or AI calls |
| Daily Desk persistence | `workers/daily-desk-api/` plus D1 migration | Access identity-derived owner hash; one record per owner |

## Completed major work

- Public JonnyLab pages, product pages, support pages, and privacy pages use the
  existing navigation, footer, metadata, responsive styling, and static-export
  model. Deadline Lens English/Korean product and privacy routes are included.
- Product structured data is present on the ClearSpace, Fileio, Serenity, Privune,
  and ReasonTrace product pages. The standalone automation demo uses its own
  `/automation-demo/` canonical URL rather than the marketing route's canonical.
- Deadline Lens public copy and its English/Korean privacy policies describe its
  optional one-time Google Play purchase and RevenueCat purchase restoration
  boundary. Document images, OCR text, saved deadlines, and reminder content remain
  described as device-local and must not be represented as RevenueCat data.
- Daily Desk supports broad routine proposals; done, skipped, and pending states;
  entry and day notes; save-and-next; date navigation; close/reopen; routine
  editing; historical routine snapshots; and JSON backup export.
- Daily Desk persists state through a separate Worker, not through a public static
  file. The Worker requires a verified Access identity, uses a SHA-256 hash of the
  normalized identity email as the D1 key, limits request state to 256 KiB, rejects
  malformed input, returns no-store JSON, and prevents stale writes with revisions.
- The Daily Desk Worker migration creates `daily_desk_states`; its focused test
  covers anonymous/wrong-audience rejection, per-user isolation, first save, and
  stale-write conflict.
- The static Daily Desk page was last live-checked after commit `6dad5c6` at
  `https://jonnylab.app/daily-desk`; unauthenticated access redirected to Cloudflare
  Access and the page rendered after authorized access. The published UI is not a
  public, indexable feature page.

## Current work and next priority

There is no active product feature implementation at handoff. The next agent should
first inspect `git status`, this file, and `AGENTS.md`, then identify the user's
specific request. For Daily Desk, use it in normal work before proposing product
changes. Collect concrete friction such as a missing routine, confusing status, or
backup failure; do not add an AI task generator, external automations, recurring
jobs, or new integrations speculatively.

If a Daily Desk change is requested, verify the private path end-to-end: Access
enforcement, authenticated read/write, owner isolation, stale-write handling,
noindex behavior, and desktop/mobile rendering. If public website work is requested,
keep it separate from private Desk data and the Worker API.

## Known limitations and technical debt

- The site is static Pages hosting; `git push` does not deploy it. Each Pages release
  needs a reviewed build artifact and an explicit upload.
- The last public verification covered the homepage plus Deadline Lens English and
  Korean product and privacy routes after the `aeafbef` Pages upload. It did not
  replace a fresh visual review or authenticated Daily Desk read/write check for a
  later release.
- The Daily Desk Worker route and Access policy are managed outside the repository.
  The source includes its Worker and D1 configuration, but this handoff does not
  independently prove the current production D1 migration, route attachment, or
  authenticated write path after the most recent source commit.
- Daily Desk export is one-way JSON backup. It has no import/restore interface.
- Existing UI test coverage is strongest for the Worker’s storage boundary. The
  Next.js application has focused tests for selected page areas, not a complete
  browser end-to-end suite for every product page.
- On 2026-09-13, `npm run lint` and `node workers/daily-desk-api/test.mjs` passed.
  The repository-wide `node --test tests/*.test.mjs` run had 15 passing and 2
  failing tests before the Worker test could be reached: `automation.test.mjs`
  reads a missing root `proxy.ts`, and `serenity-pages.test.mjs` reads missing
  pre-route-group paths under `app/serenity/`. These tests are stale relative to
  the current `app/(en)` / `app/(ko)` structure and were not changed in this
  documentation-only handoff.
- On the same date, two clean `npm run build` attempts reached Next.js 16.2.6’s
  “Creating an optimized production build” stage but did not terminate or produce
  `out/daily-desk/index.html`; the second process became idle and was terminated
  as local test cleanup. The cause has not been identified. Treat the current
  production build status as **not re-verified** until this is diagnosed in a
  separately scoped build investigation.
- Public-site analytics behavior requires separate, read-only evidence before any
  instrumentation or configuration change. Missing analytics data is not evidence
  of zero visitors or a failed feature.

## Intentional non-goals

- Do not make Daily Desk public, searchable, shareable, or a source of marketing
  analytics. Do not expose its state in static output, local fixtures, or Git.
- Do not replace verified Access identity with client-side owner selection, a shared
  anonymous record, or unprotected browser storage presented as equivalent private
  persistence.
- Do not add a production Next.js server, server actions, runtime proxy, automatic
  email/customer messaging, AI task generation, or external automation execution
  to satisfy normal Daily Desk usage.
- Do not modify mail DNS, unrelated Workers, API subdomains, Cloudflare Access
  policies, D1 databases, or release infrastructure during a normal UI/content
  change.

## Architecture decisions

1. **Static public site plus separate private API.** Pages holds only static public
   output. Daily Desk needs user-scoped records, so its API lives in a separate
   Worker and D1 boundary rather than the static build.
2. **Cloudflare Access identity is authoritative.** The browser does not choose the
   owner. The Worker validates the configured Access audience, obtains the verified
   identity, and hashes it before database access to avoid storing a raw owner key.
3. **Revision-based writes.** Concurrent tabs must receive a conflict instead of
   silently overwriting newer personal records.
4. **Low-cost, non-agentic Daily Desk.** The workspace organizes a human’s broad
   work rhythm. It records human confirmation; it does not infer completion, run
   external actions, or call an AI model every day.
5. **Factual public copy and static compatibility.** Preserve existing URLs,
   translations, metadata, legal text, and direct-upload release behavior unless a
   separately approved change provides verified facts and a migration plan.

## Verification and build status

The last recorded Daily Desk release verification ran `npm run lint`, `npm run build`,
`npm run release`, `git diff --check`, Worker focused tests, contrast checks, and a
live Access-protected page review. The Daily Desk Worker’s current source test is
`node workers/daily-desk-api/test.mjs`. The 2026-09-13 handoff reran lint and that
Worker test successfully, but did not obtain a clean full-suite or build result; see
the known limitations above.

Historical release results are not a claim that today’s checkout or production service
has just been revalidated. Re-run the relevant commands after source changes; use
fresh live checks after deployment or infrastructure changes.

## Build and deployment

- Build: `npm run build` creates `out/`.
- Release package: `npm run release` creates a local reviewed archive under
  `.releases/`; it is intentionally ignored by Git.
- Public hosting: Cloudflare Pages project `jonnylab`, using direct upload of the
  contents of `out/`. The production domains are `https://jonnylab.app` and
  `https://www.jonnylab.app`.
- Last confirmed public release: source revision `aeafbef`, deployment
  `https://d0f78979.jonnylab.pages.dev`, verified on 2026-09-13. A later source
  commit is not public until its own artifact is explicitly uploaded.
- Private Daily Desk route: `https://jonnylab.app/daily-desk`, protected by
  Cloudflare Access. API route: `/daily-desk/api/state`, served by the distinct
  `daily-desk-api` Worker route.
- A Pages upload, Worker deployment, D1 migration, route change, Access-policy
  change, or DNS change is an external-state operation and needs exact authorization
  and fresh verification. A source commit or GitHub push is not deployment.

## External dependencies and integrations

- Runtime site: Next.js 16.2.6, React 19.2.4, React DOM 19.2.4.
- Hosting: Cloudflare Pages direct upload.
- Private Desk: Cloudflare Access, Cloudflare Worker, and D1. The Access application
  and Worker route are provisioned outside Git; configuration IDs are not duplicated
  in this document.
- Website analytics and public-demo measurement code exist, but are not an
  authorization to collect, change, or interpret analytics without a separate scope.
- No Daily Desk AI provider, email delivery service, scheduler, payment system, or
  customer-data integration is enabled by this repository.

## First action for the next agent

Run `git status --short --branch`, read `AGENTS.md` and this file, then identify the
requested route or component. Preserve the private/public boundary before editing.
For Daily Desk, open the protected page as an authorized user and collect actual
usage feedback before proposing anything beyond a small, evidence-backed change. Do
not deploy a documentation-only commit unless a release is explicitly requested.
