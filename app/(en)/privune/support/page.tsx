import type { Metadata } from "next";
import PrivuneSupportPage from "@/components/PrivuneSupportPage";

const url = "https://jonnylab.app/privune/support";

export const metadata: Metadata = {
  title: "Privune Support | JonnyLab",
  description: "Help with Privune photo permissions, redaction editing, Safe Copies, purchases, and metadata removal.",
  alternates: { canonical: url, languages: { en: url, ko: `${url}/ko`, "x-default": url } },
  openGraph: { title: "Privune Support | JonnyLab", description: "Help with Privune, Safe Copies, and purchases.", url, siteName: "JonnyLab", type: "website", locale: "en_US", alternateLocale: ["ko_KR"] },
  robots: { index: true, follow: true },
};

export default function PrivuneSupportRoute() {
  return <PrivuneSupportPage lang="en" />;
}
