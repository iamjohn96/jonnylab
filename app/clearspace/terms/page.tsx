import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Clearspace",
  description: "Terms of Use for Clearspace.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By downloading, accessing, purchasing, or using Clearspace, you agree to these Terms of Use. If you do not agree, do not use the app.",
  },
  {
    title: "About Clearspace",
    body: "Clearspace is an Android tool that analyzes media on your device and provides cleanup suggestions for duplicates, similar photos, quality issues, screenshots, chat media, videos, and large files.",
  },
  {
    title: "Detection Results",
    body: "Clearspace's automated detection and quality analysis may miss items or identify media incorrectly. Suggestions are provided for your review and should not be treated as definitive.",
  },
  {
    title: "Review Before Deleting",
    body: "You are responsible for reviewing all selected items before confirming deletion. The five-second undo feature may not protect against every circumstance. Keep backups of important photos and videos.",
  },
  {
    title: "Permissions and Reminders",
    body: "You may grant Clearspace access to photos, videos, and notifications. These permissions are used only for the app features described in the Privacy Policy. Monthly cleanup reminders are optional and can be disabled.",
  },
  {
    title: "Clearspace Pro",
    body: "Clearspace may offer paid Pro features through Google Play. Prices and available purchase options are shown before purchase. Purchases, cancellations, and refunds are managed through Google Play and are subject to its applicable terms.",
  },
  {
    title: "License and Acceptable Use",
    body: "JonnyLab grants you a limited, personal, non-exclusive, non-transferable, revocable license to use Clearspace. You may not copy, redistribute, resell, reverse engineer, interfere with, or misuse the app except where applicable law permits.",
  },
  {
    title: "Availability and Limitation of Liability",
    body: "Clearspace is provided on an “as is” and “as available” basis to the extent permitted by law. JonnyLab does not guarantee uninterrupted operation or recovery of deleted media and is not responsible for accidental deletion, data loss, or indirect or consequential losses arising from use of the app.",
  },
  {
    title: "Changes and Contact",
    body: "We may update these terms from time to time. Changes will be posted on this page with an updated effective date. Questions can be sent to support@jonnylab.app.",
  },
];

export default function ClearspaceTermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/clearspace"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
      >
        ← Clearspace
      </Link>

      <h1 className="mt-6 mb-2 text-3xl font-bold tracking-tight text-zinc-950">
        Clearspace Terms of Use
      </h1>
      <p className="mb-12 text-sm text-zinc-500">
        Effective date: June 15, 2026
      </p>
      <Link
        href="/clearspace/terms/ko"
        className="mb-10 inline-block text-sm text-teal-700 transition-colors hover:text-teal-600"
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
          className="text-teal-700 transition-colors hover:text-teal-600"
        >
          Contact support@jonnylab.app
        </a>
      </div>
    </main>
  );
}
