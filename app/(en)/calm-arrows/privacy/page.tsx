import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy — Calm Arrows",
  description: "How Calm Arrows handles data: progress stays on the device, with no ads, analytics, or account.",
  path: "/calm-arrows/privacy",
});

const sections = [
  {
    title: "Summary",
    body: "Calm Arrows is a puzzle game by JonnyLab for iPhone and iPad. It has no account, no advertising, and no analytics or tracking SDKs. The game itself makes no network requests except to the App Store when you view or buy an optional tip.",
  },
  {
    title: "Information we collect",
    body: "JonnyLab does not collect personal information through Calm Arrows. The game does not ask for your name, email address, location, contacts, photos, or advertising identifier.",
  },
  {
    title: "Data stored on your device",
    body: "Your current level, daily-puzzle streak, and the haptics setting are stored locally on your device. They are not sent to JonnyLab. Deleting the app removes them.",
  },
  {
    title: "Optional tips",
    body: "Tips are optional in-app purchases processed by Apple through the App Store. Apple handles payment under its own terms and privacy policy. JonnyLab does not receive your payment details. Tips unlock nothing in the game. Refund requests are handled by Apple.",
  },
  {
    title: "Sharing a result",
    body: "If you choose to share a daily-puzzle result, the game hands a short text (the game name, date, and stars) to the iOS share sheet. Where it goes after that is up to you and the app you pick.",
  },
  {
    title: "Children",
    body: "Calm Arrows does not knowingly collect personal information from anyone, including children.",
  },
  {
    title: "Changes",
    body: "If this policy changes, the updated version will be posted at this address with a new date.",
  },
];

export default function CalmArrowsPrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link href="/calm-arrows" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950">
        ← Calm Arrows
      </Link>
      <h1 className="mt-6 mb-3 text-3xl font-bold tracking-tight text-zinc-950">Privacy Policy</h1>
      <p className="mb-12 text-sm text-zinc-500">Last updated: September 30, 2026</p>
      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-2 text-lg font-bold text-zinc-950">{section.title}</h2>
            <p className="leading-relaxed text-zinc-600">{section.body}</p>
          </section>
        ))}
        <section>
          <h2 className="mb-2 text-lg font-bold text-zinc-950">Contact</h2>
          <p className="leading-relaxed text-zinc-600">
            Questions or requests: <a className="underline" href="mailto:support@jonnylab.app">support@jonnylab.app</a>
          </p>
        </section>
      </div>
    </main>
  );
}
