import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/storefront-watch/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; style-src 'self'; script-src 'self' https://www.googletagmanager.com; media-src 'self'; img-src 'self' https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'none'",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/storefront-watch",
        destination: "/storefront-watch/index.html",
      },
    ];
  },
};

export default nextConfig;
