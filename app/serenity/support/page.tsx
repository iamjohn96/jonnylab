import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "Support — Serenity",
  description: "Support and frequently asked questions for Serenity.",
  path: "/serenity/support",
});

const faqs = [
  {
    q: "Why does sound stop when the screen turns off?",
    a: "Check that background activity and notifications are allowed for Serenity in your device settings. Battery-saving settings may also stop background playback.",
  },
  {
    q: "How many sounds can I mix at once?",
    a: "You can play and individually adjust up to five sounds at the same time.",
  },
  {
    q: "Where are my mix presets stored?",
    a: "Your presets and app settings are stored locally on your device. They are not uploaded to a Serenity account or cloud storage.",
  },
  {
    q: "How do I restore a purchase?",
    a: "Open Serenity's Pro or purchase screen and select Restore Purchases while signed in to the Google Play account used for the original purchase.",
  },
  {
    q: "How do I cancel a subscription?",
    a: "Open Google Play, select your profile, then Payments & subscriptions → Subscriptions → Serenity → Cancel subscription.",
  },
  {
    q: "How do I delete Serenity's stored data?",
    a: "Clear Serenity's app data from your device settings or uninstall the app. This removes locally stored settings and presets.",
  },
];

export default function SerenitySupportPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/serenity"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
      >
        ← Serenity
      </Link>

      <h1 className="mt-6 mb-3 text-3xl font-bold tracking-tight text-zinc-950">
        Serenity Support
      </h1>
      <p className="mb-12 text-zinc-600">
        Help with sounds, presets, background playback, and purchases.
      </p>

      <section className="mb-16">
        <h2 className="mb-6 text-xl font-bold text-zinc-950">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <p className="mb-2 font-semibold text-zinc-950">{item.q}</p>
              <p className="text-sm leading-relaxed text-zinc-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h2 className="mb-2 text-lg font-bold text-zinc-950">
          Still need help?
        </h2>
        <p className="mb-4 text-zinc-600">
          Include your device model and Android version so we can help faster.
        </p>
        <a
          href="mailto:support@jonnylab.app?subject=Serenity%20Support"
          className="inline-block rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
        >
          support@jonnylab.app
        </a>
      </section>
    </main>
  );
}
