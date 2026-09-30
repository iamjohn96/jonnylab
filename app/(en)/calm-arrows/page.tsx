import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "Calm Arrows — a quiet arrow puzzle",
  description:
    "Calm Arrows is a tap-only arrow puzzle for iPhone and iPad with no ads, no tracking, and no timers.",
  path: "/calm-arrows",
});

const points = [
  {
    title: "Tap an arrow, watch it leave",
    body: "Each arrow slides off the board in the direction it points, as long as nothing is in its way. Clear the board to finish the level.",
  },
  {
    title: "No pressure",
    body: "There are no timers, lives, or energy. A wrong tap only lowers the star count for that level.",
  },
  {
    title: "No ads, no tracking",
    body: "The game shows no advertising, has no analytics, needs no account, and works offline.",
  },
  {
    title: "A daily puzzle",
    body: "One puzzle a day is the same for everyone, with a streak for playing on consecutive days.",
  },
];

export default function CalmArrowsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link href="/" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950">
        ← JonnyLab
      </Link>

      <h1 className="mt-6 mb-3 text-3xl font-bold tracking-tight text-zinc-950">Calm Arrows</h1>
      <p className="mb-12 text-zinc-600">
        A quiet arrow puzzle for iPhone and iPad. The whole game is free. An optional tip in
        Settings supports development and unlocks nothing.
      </p>

      <div className="mb-16 space-y-6">
        {points.map((item) => (
          <div key={item.title} className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="mb-2 font-semibold text-zinc-950">{item.title}</p>
            <p className="text-sm leading-relaxed text-zinc-600">{item.body}</p>
          </div>
        ))}
      </div>

      <p className="text-sm text-zinc-600">
        <Link href="/calm-arrows/support" className="underline">Support</Link>
        {" · "}
        <Link href="/calm-arrows/privacy" className="underline">Privacy Policy</Link>
      </p>
    </main>
  );
}
