import type { Metadata } from "next";

const siteUrl = "https://jonnylab.app";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  locale?: "en_US" | "ko_KR";
};

export function createPageMetadata({
  title,
  description,
  path,
  locale = "en_US",
}: PageMetadataOptions): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "JonnyLab",
      type: "website",
      locale,
    },
    robots: { index: true, follow: true },
  };
}
