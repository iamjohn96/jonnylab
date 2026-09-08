import ReasonTraceSupportPage from "@/components/ReasonTraceSupportPage";
import { createPageMetadata } from "@/lib/siteMetadata";
export const metadata = createPageMetadata({ title: "ReasonTrace Support | JonnyLab", description: "Help with ReasonTrace decisions, Decision Echo, reminders, purchases, export, privacy controls, and deletion.", path: "/reasontrace/support" });
export default function Page() { return <ReasonTraceSupportPage locale="en" />; }
