import type { Metadata } from "next";

const siteUrl = "https://jonnylab.app";
const defaultOgImage = {
  url: `${siteUrl}/og-image.png`,
  width: 1200,
  height: 630,
  alt: "JonnyLab — Small apps for everyday tasks.",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  locale?: "en_US" | "ko_KR";
  ogImage?: { url: string; width?: number; height?: number; alt?: string };
};

export function createPageMetadata({
  title,
  description,
  path,
  locale = "en_US",
  ogImage,
}: PageMetadataOptions): Metadata {
  const url = `${siteUrl}${path}`;
  const image = ogImage ?? defaultOgImage;

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
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
    robots: { index: true, follow: true },
  };
}
