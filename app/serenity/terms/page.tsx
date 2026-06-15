import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Serenity",
  description: "Terms of Use for Serenity - Sleep & Relax.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By downloading, accessing, purchasing, or using Serenity, you agree to these Terms of Use. If you do not agree to these terms, do not use the app.",
  },
  {
    title: "About Serenity",
    body: "Serenity provides sound playback, sound mixing, saved presets, and sleep timer features intended to support sleep, relaxation, focus, meditation, and similar personal routines.",
  },
  {
    title: "Not Medical Advice",
    body: "Serenity is a general wellness app and is not a medical device. It does not provide medical advice, diagnosis, or treatment and is not a substitute for professional care. Consult a qualified healthcare professional about sleep or health concerns.",
  },
  {
    title: "Safe Use",
    body: "Use a comfortable volume and do not use Serenity where reduced awareness of your surroundings could be unsafe, including while driving, cycling, or operating machinery. You are responsible for using the app safely.",
  },
  {
    title: "Subscriptions and Purchases",
    body: "Serenity may offer auto-renewing monthly or yearly subscriptions and a one-time lifetime purchase. Prices and available products are displayed before purchase. Subscriptions automatically renew unless cancelled before the renewal date. Purchases, cancellations, and refunds are managed through Google Play and are subject to its applicable terms.",
  },
  {
    title: "License and Acceptable Use",
    body: "We grant you a limited, personal, non-exclusive, non-transferable, revocable license to use Serenity. You may not copy, redistribute, resell, reverse engineer, interfere with, or misuse the app or its sound content except where applicable law permits.",
  },
  {
    title: "Availability and Changes",
    body: "We may add, change, suspend, or discontinue features or sound content and may update these terms from time to time. Updated terms will be posted on this page with a new effective date.",
  },
  {
    title: "Disclaimer and Limitation of Liability",
    body: "Serenity is provided on an “as is” and “as available” basis to the extent permitted by law. We do not guarantee that the app will always be uninterrupted or that it will improve sleep or other outcomes. To the extent permitted by law, Jonny Lab is not liable for indirect, incidental, or consequential losses arising from use of the app.",
  },
  {
    title: "Contact",
    body: "Questions about these Terms of Use can be sent to support@jonnylab.app.",
  },
];

export default function SerenityTermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/serenity"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
      >
        ← Serenity
      </Link>

      <h1 className="mt-6 mb-2 text-3xl font-bold tracking-tight text-zinc-950">
        Serenity Terms of Use
      </h1>
      <p className="mb-12 text-sm text-zinc-500">
        Effective date: June 14, 2026
      </p>
      <Link
        href="/serenity/terms/ko"
        className="mb-10 inline-block text-sm text-indigo-600 transition-colors hover:text-indigo-500"
      >
        한국어로 보기
      </Link>

      <div className="space-y-10">
        {sections.map((section, index) => (
          <section key={section.title}>
            <h2 className="mb-2 text-base font-semibold text-zinc-950">
              {index + 1}. {section.title}
            </h2>
            <p className="leading-relaxed text-zinc-600">{section.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-6 text-sm">
        <a
          href="mailto:support@jonnylab.app"
          className="text-indigo-600 transition-colors hover:text-indigo-500"
        >
          Contact support@jonnylab.app
        </a>
      </div>
    </main>
  );
}
