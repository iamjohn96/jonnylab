import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Serenity",
  description: "Privacy Policy for Serenity, the Android sleep and relaxation app.",
};

const sections = [
  {
    title: "Overview",
    body: [
      "Serenity is designed to work without an account. The app keeps your settings, mixer levels, and presets on your device.",
      "We do not use analytics, advertising, or tracking SDKs in the app build.",
    ],
  },
  {
    title: "Information We Collect",
    body: [
      "Serenity does not ask for your name, email address, phone number, location, contacts, photos, files, or health data.",
      "We do not record audio from your device or collect usage analytics.",
    ],
  },
  {
    title: "Information We Do Not Collect",
    body: [
      "We do not collect personal identifiers, ad identifiers, or background activity history from the app.",
      "Any sound selection, volume adjustment, or preset you save stays local to the device running Serenity.",
    ],
  },
  {
    title: "Payments",
    body: [
      "Serenity Pro is sold through Google Play. Google processes payment information, subscriptions, cancellations, and refunds under its own terms and policies.",
      "Jonny Lab does not receive or store your card details.",
    ],
  },
  {
    title: "Data Storage and Deletion",
    body: [
      "Because Serenity uses local storage only, you can remove the app's data through Android system settings or by uninstalling the app.",
      "Uninstalling the app or clearing app data removes the local settings and presets stored by Serenity.",
    ],
  },
  {
    title: "Sharing",
    body: [
      "We do not sell your data. Since Serenity does not collect analytics or ad data, there is no data-sharing program for those purposes.",
    ],
  },
  {
    title: "Children",
    body: [
      "Serenity is not directed to children under 13, and we do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Changes",
    body: [
      "We may update this policy from time to time. When we do, we will update the effective date on this page.",
    ],
  },
  {
    title: "Contact",
    body: [
      "If you have questions about this Privacy Policy, contact support@jonnylab.app.",
    ],
  },
];

export default function SerenityPrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/serenity"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
      >
        ← Serenity
      </Link>

      <h1 className="mt-6 mb-2 text-3xl font-bold tracking-tight text-zinc-950">
        Serenity Privacy Policy
      </h1>
      <p className="mb-12 text-sm text-zinc-500">
        Effective date: June 19, 2026
      </p>
      <Link
        href="/serenity/privacy/ko"
        className="mb-10 inline-block text-sm text-indigo-600 transition-colors hover:text-indigo-500"
      >
        한국어로 보기
      </Link>

      <div className="space-y-10">
        {sections.map((section, index) => (
          <section key={section.title}>
            <h2 className="mb-3 text-base font-semibold text-zinc-950">
              {index + 1}. {section.title}
            </h2>
            <div className="space-y-3">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-zinc-600">
                  {paragraph}
                </p>
              ))}
            </div>
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
