<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# JonnyLab website and private workspace

## Scope and architecture

- This repository is the canonical source for the JonnyLab marketing site, product
  and legal pages, static demonstration assets, and the private Daily Desk
  workspace. Read `PROJECT_STATE.md` before changing a current feature or release.
- The site is a Next.js static export. Use `npm ci`, `npm run dev`, and
  `npm run build`; build output is `out/`. There is no production Next.js server
  and `next start`, server actions, runtime proxies, and image optimization
  services are out of scope.
- Keep public website routes in `app/(en)` and `app/(ko)`. Their layouts preserve
  URL and HTML-language behavior through `components/SiteDocument.tsx`; do not
  merge or replace root layouts casually.
- Keep Daily Desk isolated: its page is `app/(desk)/daily-desk`, its client UI is
  `components/DailyDesk.tsx`, and its private persistence API is the separate
  `workers/daily-desk-api/` Cloudflare Worker. Do not turn personal Desk data into
  a static asset, browser analytics event, public API, repository fixture, or
  marketing content.
- The Daily Desk Worker derives the storage owner solely from a verified Cloudflare
  Access identity and hashes it before D1 storage. Do not accept an owner ID,
  identity email, Access audience, or authorization assertion supplied by browser
  input. Preserve the revision-based compare-and-swap write behavior.

## Code and module conventions

- Prefer small, route-local page components and shared components only when the
  presentation or behavior is genuinely reused. Keep site metadata in
  `lib/siteMetadata.ts`, shared document structure in `components/SiteDocument.tsx`,
  and public route behavior in the appropriate language group.
- New indexable public pages need factual title, description, canonical URL, and
  Open Graph metadata. Use `createPageMetadata` when it fits; preserve the correct
  English (`en_US`) or Korean (`ko_KR`) locale. Private Daily Desk pages must retain
  their noindex metadata and hosting header.
- Use TypeScript for Next.js application code and the existing Node/Worker module
  conventions for focused tests and Worker code. Keep browser state validation at
  the Daily Desk boundary; a malformed server response must not be treated as a
  valid journal state.
- Do not weaken static-export compatibility to add convenience. A feature that
  needs authenticated persistence belongs behind a separately provisioned Worker
  boundary, not in a public page bundle.

## Content, privacy, and compatibility

- Preserve published product, privacy, support, store-attribution, canonical and
  language-switch URLs. Public claims must match verified product behavior; do not
  invent AI, security certifications, encryption, compliance, cloud processing,
  analytics, tracking, app capabilities, or support contacts.
- Use the existing support channels and brand components. English is the default
  for public product pages and Korean pages must remain semantically aligned where
  a translated route exists.
- The inquiry form creates a local draft/mailto link. The standalone automation
  demo is simulated and must never send or retain customer data.
- Do not commit API keys, passwords, private keys, access tokens, credentials,
  personal journal content, `.env` files, release archives, or generated `out/`.
  Record only variable names and provisioning prerequisites in documentation.
- Add dependencies only when the existing Next.js/React/browser or Worker runtime
  cannot implement the requirement safely. Document the reason and verify lockfile
  changes. Avoid dependencies for small static UI behavior.

## Verification and release

- For a focused UI/content change, run the relevant tests plus `npm run lint` and
  `npm run build`. For Daily Desk API changes, run
  `node workers/daily-desk-api/test.mjs` in addition to the site checks. Use
  `git diff --check` before committing. Do not claim browser, accessibility,
  Access, D1, Worker, or live-deployment behavior unless it was actually checked.
- Cloudflare Pages receives only the contents of `out/`, never source, reports,
  environment files, release manifests, or customer data. A commit or Git push
  backs up source but does not deploy Pages. Production release requires a fresh
  `npm run release` and an explicit upload of the reviewed artifact.
- `public/_headers` and `public/_redirects` configure static hosting. Hostname
  redirects belong in Cloudflare zone rules. Cloudflare Worker routes, Access
  policies, D1 migrations, DNS, and deployment actions are infrastructure changes:
  inspect and obtain explicit authorization for the exact target before modifying
  them.
- Preserve MX/mail TXT records, API subdomains, Access applications, Workers, and
  unrelated services during website work. Keep a known working deployment for
  rollback until the changed public route is verified.

## Repository practice

- Keep temporary plans, release archives, build output, diagnostics, and user data
  out of commits. Update `PROJECT_STATE.md` when a milestone, deployment fact,
  privacy boundary, test result, or next priority materially changes; keep it as a
  concise factual snapshot rather than a chronological conversation history.
- Inspect the working tree before edits. Preserve unrelated changes. Do not reset,
  discard, reformat broadly, or modify the historical `jonnylab-automation-site`
  folder as part of normal website work.
- Commit only reviewed, scoped source and documentation changes with an imperative,
  descriptive message. Push only when explicitly authorized. Reusable agent skills
  may guide implementation and verification, but must not expand the approved
  scope, publish content, change infrastructure, or access private data.
