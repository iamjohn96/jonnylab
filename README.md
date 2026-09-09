# JonnyLab

Product website and public automation demo, exported from Next.js as static HTML, CSS, JavaScript and assets. Vercel is not required.

## Development

Run npm ci, then npm run dev.

## Build and publish

Run npm run build. Upload the **contents of out/** to the JonnyLab Cloudflare Pages direct-upload project. A ZIP must contain these files at its root. Never upload source files or credentials.

There is no production Next.js server. Each release requires a fresh build and explicit upload. Direct-upload projects have no built-in Git deployment; Wrangler or separately configured CI can automate uploads later.

English and Korean route groups preserve URLs and HTML languages. Images are static files. Path redirects and security headers are in public/_redirects and public/_headers; hostname redirects belong in Cloudflare zone rules.

Before changing the domain, verify the Pages deployment, product and policy routes, mobile layout, demos and inquiry draft. Preserve email DNS and unrelated API/Workers records.

## Canonical working path (2026-09-09)

- Source: `/Users/jonny/Documents/ChatGPT/MacOS/jonnylab-site`
- Remote: `https://github.com/iamjohn96/jonnylab.git`
- Production: `https://jonnylab.app` and `https://www.jonnylab.app`
- Hosting: Cloudflare Pages project `jonnylab` (direct upload).
- Previous `jonnylab-automation-site` folder contains unfinished staged work. Preserve it; do not use it for new releases or reset it. Temporary migration folders are historical copies, not the working source.

Commit reviewed source changes, then run `npm run release`. Upload `.releases/<commit>/jonnylab.zip` to the existing Pages project as a production deployment. The adjacent manifest records the commit and file hashes and must stay local. A Git push backs up source but does not publish Pages. `vercel.json` disables Git-triggered Vercel deployments; existing legacy deployments remain available.

After upload, check the production homepage on desktop and mobile, product links, `/automation`, `/automation-demo/`, and privacy/support pages. Record the deployment URL and source commit in the local release folder. Never change mail DNS or unrelated services as part of a website release.
