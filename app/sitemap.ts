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
  "/fileio/support",
  "/fileio/terms",
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
};

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    alternates: localizedRoutes[route],
  }));
}
