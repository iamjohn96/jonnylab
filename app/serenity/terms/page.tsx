import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Serenity",
  description: "Terms of Use for Serenity, the Android sleep and relaxation app.",
};

const sections = [
  {
    title: "Acceptance",
    body: "By downloading, accessing, purchasing, or using Serenity, you agree to these Terms of Use. If you do not agree, do not use the app.",
  },
  {
    title: "Product Scope",
    body: "Serenity is an Android app for sleep, relaxation, focus, and similar personal routines. It provides sound playback, sound mixing, presets, and a sleep timer.",
  },
  {
    title: "Wellness Notice",
    body: "Serenity is a general wellness app and is not medical advice, diagnosis, or treatment. It is not a medical device and is not a substitute for professional care.",
  },
  {
    title: "Safe Listening",
    body: "Use a comfortable volume and do not use Serenity where reduced awareness could be unsafe, including while driving, cycling, or operating machinery.",
  },
  {
    title: "Purchases",
    body: "Serenity Pro may offer monthly, yearly, and lifetime options. Prices are shown before purchase. Google Play handles payment processing, renewals, cancellations, and refunds under its own terms and policies.",
  },
  {
    title: "License",
    body: "We grant you a limited, personal, non-exclusive, non-transferable, revocable license to use Serenity. You may not copy, redistribute, resell, reverse engineer, interfere with, or misuse the app or its sound content except where applicable law allows it.",
  },
  {
    title: "Availability and Changes",
    body: "We may add, change, suspend, or discontinue features or sound content. We may also update these terms, and the new version will appear on this page with a new effective date.",
  },
  {
    title: "Disclaimer and Liability",
    body: "Serenity is provided on an as-is and as-available basis to the extent permitted by law. We do not guarantee uninterrupted operation or any particular sleep or wellness outcome. To the extent permitted by law, Jonny Lab is not liable for indirect, incidental, or consequential losses arising from use of the app.",
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
        Effective date: June 19, 2026
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
