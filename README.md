# JonnyLab

Product website and public automation demo, exported from Next.js as static HTML, CSS, JavaScript and assets. Vercel is not required.

## Development

Run npm ci, then npm run dev.

## Build and publish

Run npm run build. Upload the **contents of out/** to the JonnyLab Cloudflare Pages direct-upload project. A ZIP must contain these files at its root. Never upload source files or credentials.

There is no production Next.js server. Each release requires a fresh build and explicit upload. Direct-upload projects have no built-in Git deployment; Wrangler or separately configured CI can automate uploads later.

English and Korean route groups preserve URLs and HTML languages. Images are static files. Path redirects and security headers are in public/_redirects and public/_headers; hostname redirects belong in Cloudflare zone rules.

Before changing the domain, verify the Pages deployment, product and policy routes, mobile layout, demos and inquiry draft. Preserve email DNS and unrelated API/Workers records.
