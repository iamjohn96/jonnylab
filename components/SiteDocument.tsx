import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import Script from "next/script";
import "@/app/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WebsiteAnalytics from "@/components/WebsiteAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const rootMetadata: Metadata = {
  title: "JonnyLab",
  description:
    "Simple, useful, private, and human-controlled products for real everyday problems.",
  openGraph: {
    title: "JonnyLab",
    description:
      "Simple, useful, private, and human-controlled products for real everyday problems.",
    url: "https://jonnylab.app",
    siteName: "JonnyLab",
    type: "website",
    images: [
      {
        url: "https://jonnylab.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "JonnyLab — Small apps for everyday tasks.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JonnyLab",
    description:
      "Simple, useful, private, and human-controlled products for real everyday problems.",
    images: ["https://jonnylab.app/og-image.png"],
  },
};

export default function SiteDocument({
  children,
  language,
}: Readonly<{
  children: React.ReactNode;
  language: "en" | "ko";
}>) {

  return (
    <html lang={language} className={inter.variable}>
      <body className="min-h-screen bg-zinc-50 text-zinc-950 font-sans antialiased">
        <Nav />
        {children}
        <Footer />
        <Script src="/analytics.js" strategy="afterInteractive" />
        <Suspense fallback={null}><WebsiteAnalytics /></Suspense>
      </body>
    </html>
  );
}
