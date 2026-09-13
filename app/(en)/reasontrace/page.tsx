import ReasonTraceProductPage from "@/components/ReasonTraceProductPage";
import { createPageMetadata } from "@/lib/siteMetadata";
export const metadata = createPageMetadata({ title: "ReasonTrace — Remember Why You Decided | JonnyLab", description: "A private decision journal for iPhone and iPad that helps you capture reasoning, review outcomes, and learn from your decisions.", path: "/reasontrace" });

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ReasonTrace",
  url: "https://jonnylab.app/reasontrace",
  operatingSystem: "iOS",
  applicationCategory: "ProductivityApplication",
  description:
    "A private decision journal for iPhone and iPad that helps people capture reasoning, review outcomes, and learn from their decisions.",
  publisher: { "@type": "Organization", name: "JonnyLab", url: "https://jonnylab.app" },
};

export default function Page() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><ReasonTraceProductPage locale="en" /></>;
}
