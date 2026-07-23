import type { MetadataRoute } from "next";

const baseUrl = "https://jonnylab.app";

const routes = [
  "",
  "/clearspace",
  "/clearspace/privacy",
  "/clearspace/privacy/ko",
  "/clearspace/support",
  "/clearspace/terms",
  "/clearspace/terms/ko",
  "/fileio",
  "/fileio/delete-account",
  "/fileio/privacy",
  "/fileio/privacy/ko",
  "/fileio/support",
  "/fileio/terms",
  "/fileio/terms/ko",
  "/privune",
  "/privune/privacy",
  "/privune/privacy/ko",
  "/privune/support",
  "/privune/support/ko",
  "/privune/terms",
  "/privune/terms/ko",
  "/serenity",
  "/serenity/privacy",
  "/serenity/privacy/ko",
  "/serenity/support",
  "/serenity/terms",
  "/serenity/terms/ko",
] as const;

const localizedRoutes: Record<
  string,
  MetadataRoute.Sitemap[number]["alternates"]
> = {
  "/clearspace/privacy": {
    languages: {
      en: `${baseUrl}/clearspace/privacy`,
      ko: `${baseUrl}/clearspace/privacy/ko`,
    },
  },
  "/clearspace/privacy/ko": {
    languages: {
      en: `${baseUrl}/clearspace/privacy`,
      ko: `${baseUrl}/clearspace/privacy/ko`,
    },
  },
  "/clearspace/terms": {
    languages: {
      en: `${baseUrl}/clearspace/terms`,
      ko: `${baseUrl}/clearspace/terms/ko`,
    },
  },
  "/clearspace/terms/ko": {
    languages: {
      en: `${baseUrl}/clearspace/terms`,
      ko: `${baseUrl}/clearspace/terms/ko`,
    },
  },
  "/fileio/privacy": {
    languages: {
      en: `${baseUrl}/fileio/privacy`,
      ko: `${baseUrl}/fileio/privacy/ko`,
    },
  },
  "/fileio/privacy/ko": {
    languages: {
      en: `${baseUrl}/fileio/privacy`,
      ko: `${baseUrl}/fileio/privacy/ko`,
    },
  },
  "/fileio/terms": {
    languages: {
      en: `${baseUrl}/fileio/terms`,
      ko: `${baseUrl}/fileio/terms/ko`,
    },
  },
  "/fileio/terms/ko": {
    languages: {
      en: `${baseUrl}/fileio/terms`,
      ko: `${baseUrl}/fileio/terms/ko`,
    },
  },
  "/serenity/privacy": {
    languages: {
      en: `${baseUrl}/serenity/privacy`,
      ko: `${baseUrl}/serenity/privacy/ko`,
    },
  },
  "/serenity/privacy/ko": {
    languages: {
      en: `${baseUrl}/serenity/privacy`,
      ko: `${baseUrl}/serenity/privacy/ko`,
    },
  },
  "/serenity/terms": {
    languages: {
      en: `${baseUrl}/serenity/terms`,
      ko: `${baseUrl}/serenity/terms/ko`,
    },
  },
  "/serenity/terms/ko": {
    languages: {
      en: `${baseUrl}/serenity/terms`,
      ko: `${baseUrl}/serenity/terms/ko`,
    },
  },
  "/privune/privacy": {
    languages: {
      en: `${baseUrl}/privune/privacy`,
      ko: `${baseUrl}/privune/privacy/ko`,
    },
  },
  "/privune/privacy/ko": {
    languages: {
      en: `${baseUrl}/privune/privacy`,
      ko: `${baseUrl}/privune/privacy/ko`,
    },
  },
  "/privune/support": {
    languages: {
      en: `${baseUrl}/privune/support`,
      ko: `${baseUrl}/privune/support/ko`,
    },
  },
  "/privune/support/ko": {
    languages: {
      en: `${baseUrl}/privune/support`,
      ko: `${baseUrl}/privune/support/ko`,
    },
  },
  "/privune/terms": {
    languages: {
      en: `${baseUrl}/privune/terms`,
      ko: `${baseUrl}/privune/terms/ko`,
    },
  },
  "/privune/terms/ko": {
    languages: {
      en: `${baseUrl}/privune/terms`,
      ko: `${baseUrl}/privune/terms/ko`,
    },
  },
};

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    alternates: localizedRoutes[route],
  }));
}
