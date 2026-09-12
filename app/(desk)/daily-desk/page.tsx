import type { Metadata } from "next";
import DailyDesk from "@/components/DailyDesk";

export const metadata: Metadata = {
  title: "Daily Desk",
  description: "A session-only personal routine journal.",
  robots: { index: false, follow: false, nocache: true },
};

export default function DailyDeskPage() {
  return <DailyDesk />;
}
