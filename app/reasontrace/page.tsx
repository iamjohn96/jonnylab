import ReasonTraceProductPage from "@/components/ReasonTraceProductPage";
import { createPageMetadata } from "@/lib/siteMetadata";
export const metadata = createPageMetadata({ title: "ReasonTrace — Remember Why You Decided | JonnyLab", description: "A private decision journal for iPhone and iPad that helps you capture reasoning, review outcomes, and learn from your decisions.", path: "/reasontrace" });
export default function Page() { return <ReasonTraceProductPage locale="en" />; }
