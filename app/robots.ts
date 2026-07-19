import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://jonnylab.app/sitemap.xml",
    host: "https://jonnylab.app",
  };
}
