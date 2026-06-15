import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Clearspace",
  description: "Privacy Policy for Clearspace.",
};

const sections = [
  {
    title: "Overview",
    body: [
      "Clearspace is a private photo cleaner for Android. It helps you review duplicates, similar photos, quality issues, screenshots, chat media, videos, and large files.",
      "Clearspace does not require an account and does not collect or share user data.",
    ],
  },
  {
    title: "Photos and Videos",
    body: [
      "Clearspace requests access to photos and videos solely to scan, analyze, display, compare, organize, and delete items that you choose.",
      "All photo and video analysis happens locally on your device. Your media is never uploaded to JonnyLab servers or shared with third parties.",
    ],
  },
  {
    title: "Local Data",
    body: [
      "Clearspace stores scan history and app settings in a local Room database on your device. This information is not transmitted externally.",
      "You can remove local data by clearing Clearspace's app data in Android settings or uninstalling the app.",
    ],
  },
  {
    title: "Information We Do Not Collect",
    body: [
      "Clearspace does not collect personal information, photo or video content, usage analytics, diagnostics, advertising identifiers, location, contacts, or other user data.",
      "Clearspace does not use analytics, advertising, or tracking SDKs.",
    ],
  },
  {
    title: "Permissions",
    body: [
      "Photo and video permissions are used to find duplicates, quality issues, screenshots, chat media, and large files. Notification permission is used only for optional monthly cleanup reminders that you can disable at any time.",
    ],
  },
  {
    title: "Network and Data Sharing",
    body: [
      "Clearspace does not use network access to process or transfer your photo or video data. We do not sell, share, or transmit user data to third parties.",
      "Google Play may process purchase information when you obtain Clearspace Pro. JonnyLab does not receive or store your payment card details.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "Clearspace is intended for users aged 13 and older. We do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about this Privacy Policy can be sent to support@jonnylab.app.",
    ],
  },
];

export default function ClearspacePrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/clearspace"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
      >
        ← Clearspace
      </Link>

      <h1 className="mt-6 mb-2 text-3xl font-bold tracking-tight text-zinc-950">
        Clearspace Privacy Policy
      </h1>
      <p className="mb-12 text-sm text-zinc-500">
        Effective date: June 15, 2026
      </p>
      <Link
        href="/clearspace/privacy/ko"
        className="mb-10 inline-block text-sm text-teal-700 transition-colors hover:text-teal-600"
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
          className="text-teal-700 transition-colors hover:text-teal-600"
        >
          Contact support@jonnylab.app
        </a>
      </div>
    </main>
  );
}
