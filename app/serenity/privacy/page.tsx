import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Serenity",
  description: "Privacy Policy for Serenity - Sleep & Relax.",
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "Serenity collects minimal data to provide and improve the app experience.",
      "Purchase information: When you purchase or subscribe to Serenity Pro, the transaction is processed by Google Play Billing. We do not directly collect or store your payment details.",
      "Usage data: We may collect anonymous usage statistics, such as which sounds are played and session duration, to improve the app experience. This data is not linked to your identity.",
      "Device information: Basic device information, such as operating system version and device model, and crash logs may be collected for crash reporting, compatibility, and app stability purposes.",
    ],
  },
  {
    title: "Information We Do Not Collect",
    body: [
      "We do not collect personal identification information, such as your name, email address, or mailing address, unless you contact us directly.",
      "We do not collect location or health data, record audio from your device, or access your contacts, photos, or files.",
    ],
  },
  {
    title: "Data Sharing",
    body: [
      "We do not sell or trade your personal information. Anonymous analytics and diagnostic data may be processed by service providers that help us operate and improve Serenity.",
    ],
  },
  {
    title: "Data Storage and Deletion",
    body: [
      "App settings and mix presets are stored locally on your device. Serenity does not maintain a user account system or cloud storage for this data.",
      "You can delete locally stored Serenity data by clearing the app's data in your device settings or uninstalling the app.",
    ],
  },
  {
    title: "Subscriptions and Purchases",
    body: [
      "Serenity Pro subscriptions and purchases are managed through Google Play Billing. Subscription management, billing, cancellations, and refunds are handled by Google Play and are subject to Google's applicable terms and policies.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We use reasonable safeguards designed to protect data processed in connection with Serenity. Data transmitted to service providers is encrypted in transit where applicable.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "Serenity is not directed at children under 13, and we do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy, contact us at support@jonnylab.app.",
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
        Effective date: June 14, 2026
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
