import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "Support — Calm Arrows",
  description: "Support and frequently asked questions for Calm Arrows.",
  path: "/calm-arrows/support",
});

const faqs = [
  {
    q: "Why won't an arrow move?",
    a: "An arrow can only leave when every square between its tip and the edge of the board is empty. Another arrow or a gray stone in the way blocks it.",
  },
  {
    q: "What do the numbers on gray arrows mean?",
    a: "That arrow is frozen. The number is how many other arrows still have to leave the board, anywhere on it, before it thaws.",
  },
  {
    q: "Can I get stuck?",
    a: "No. Every board can be cleared, and no move makes a board unsolvable. The Hint button highlights an arrow that can leave.",
  },
  {
    q: "When does the daily puzzle change?",
    a: "At midnight UTC, at the same moment for everyone.",
  },
  {
    q: "Where is my progress stored?",
    a: "On your device only. Deleting the app deletes your progress, and it does not sync between devices.",
  },
  {
    q: "What do tips unlock?",
    a: "Nothing. The whole game is free. Tips are an optional way to support development. Purchases and refunds are handled by Apple.",
  },
];

export default function CalmArrowsSupportPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link href="/calm-arrows" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950">
        ← Calm Arrows
      </Link>
      <h1 className="mt-6 mb-3 text-3xl font-bold tracking-tight text-zinc-950">Calm Arrows Support</h1>
      <p className="mb-12 text-zinc-600">Help with the rules, the daily puzzle, and tips.</p>

      <section className="mb-16">
        <h2 className="mb-6 text-xl font-bold text-zinc-950">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="mb-2 font-semibold text-zinc-950">{item.q}</p>
              <p className="text-sm leading-relaxed text-zinc-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h2 className="mb-2 text-lg font-bold text-zinc-950">Still need help?</h2>
        <p className="mb-4 text-zinc-600">Include your device model and iOS version so we can help faster.</p>
        <a
          href="mailto:support@jonnylab.app?subject=Calm%20Arrows%20Support"
          className="inline-block rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
        >
          support@jonnylab.app
        </a>
      </section>
    </main>
  );
}
