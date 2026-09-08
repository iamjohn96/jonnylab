<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# JonnyLab static website

- Next.js static export: npm ci, npm run dev, npm run build (output: out/). No production Next.js server or next start.
- app/(en) and app/(ko) preserve URLs and set HTML languages through components/SiteDocument.tsx. Switching root layouts causes a full page load.
- Preserve product, privacy, support and store attribution URLs. No runtime proxy, server actions or image optimization service.
- Cloudflare Pages receives only contents of out/, never source, reports, environment files or customer data. Each direct-upload release needs a build and upload; Git pushes do not deploy Pages.
- public/_headers and _redirects configure static hosting. Hostname redirects belong in Cloudflare zone rules.
- Preserve MX/mail TXT records, API subdomains and other Workers during domain changes. Keep the previous deployment for rollback until the new domain is verified.
- Inquiry form creates a local draft/mailto link. Standalone automation demo is simulated and must not send customer data.
