import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — Fileio",
};

const faqs = [
  {
    q: "What cloud services does Fileio support?",
    a: "Currently Google Drive. iCloud access is available through the native iOS file picker.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. Fileio does not upload your files to any server. Cloud integrations use secure OAuth authentication.",
  },
  {
    q: "How do I restore my purchase?",
    a: "Open Fileio → Settings → Restore Purchases.",
  },
  {
    q: "Google Sign-in isn't working. What should I do?",
    a: "Make sure you have a stable internet connection. Try signing out and back in. If the issue persists, contact support.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "iOS: Settings → Apple ID → Subscriptions → Fileio. Android: Play Store → Subscriptions.",
  },
];

export default function FileioSupportPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <div className="mb-2">
        <Link
          href="/fileio"
          className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors"
        >
          ← Fileio
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-zinc-950 mt-6 mb-12 tracking-tight">
        Fileio Support
      </h1>

      <section className="mb-16">
        <h2 className="text-xl font-bold text-zinc-950 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="bg-white border border-zinc-200 shadow-sm rounded-xl p-5"
            >
              <p className="font-semibold text-zinc-950 mb-2">{item.q}</p>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border border-zinc-200 shadow-sm rounded-2xl p-8">
        <h2 className="text-lg font-bold text-zinc-950 mb-2">Still need help?</h2>
        <p className="text-zinc-600 mb-4">
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
