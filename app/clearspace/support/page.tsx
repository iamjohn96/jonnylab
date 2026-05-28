import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — ClearSpace",
};

const faqs = [
  {
    q: "Does ClearSpace upload my photos?",
    a: "No. All processing happens entirely on your device. Your photos never leave your phone.",
  },
  {
    q: "What does the free version include?",
    a: "The free version lets you scan up to 100 photos and see the results. Deleting requires ClearSpace Pro.",
  },
  {
    q: "How do I restore my purchase?",
    a: "Open ClearSpace → Settings → Restore Purchases.",
  },
  {
    q: "The app isn't finding duplicates. What should I check?",
    a: "Make sure you've granted full photo library access in Settings → Privacy → Photos → ClearSpace → All Photos.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "iOS: Settings → Apple ID → Subscriptions → ClearSpace. Android: Play Store → Subscriptions.",
  },
];

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <div className="mb-2">
        <Link
          href="/clearspace"
          className="text-sm text-zinc-500 hover:text-white transition-colors"
        >
          ← ClearSpace
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-white mt-6 mb-12 tracking-tight">
        ClearSpace Support
      </h1>

      <section className="mb-16">
        <h2 className="text-xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="bg-[#111111] border border-white/10 rounded-xl p-5"
            >
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#111111] border border-white/10 rounded-2xl p-8">
        <h2 className="text-lg font-bold text-white mb-2">Still need help?</h2>
        <p className="text-zinc-400 mb-4">
          We typically respond within 24 hours.
        </p>
        <a
          href="mailto:support@jonnylab.app"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          support@jonnylab.app
        </a>
      </section>
    </main>
  );
}
