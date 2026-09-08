import ReasonTracePrivacyPage from "@/components/ReasonTracePrivacyPage";
import { createPageMetadata } from "@/lib/siteMetadata";
export const metadata = createPageMetadata({ title: "ReasonTrace Privacy Policy | JonnyLab", description: "Privacy Policy for ReasonTrace, JonnyLab's private decision journal for iPhone and iPad.", path: "/reasontrace/privacy" });
export default function Page() { return <ReasonTracePrivacyPage locale="en" />; }
