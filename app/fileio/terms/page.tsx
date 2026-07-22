import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "Terms of Use — Fileio",
  description:
    "Terms of Use for Fileio, a local file manager, document scanner, and read-only cloud file viewer.",
  path: "/fileio/terms",
});

const sections = [
  {
    title: "Acceptance of These Terms",
    paragraphs: [
      "These Terms of Use govern your use of Fileio, an application provided by JonnyLab. By downloading, accessing, or using Fileio, you agree to these terms. If you do not agree, do not use the app.",
    ],
  },
  {
    title: "What Fileio Provides",
    paragraphs: [
      "Fileio is an Android file manager, document viewer, and document scanner. It can browse and manage local files, scan documents to PDF, and, with Fileio Pro, browse and download supported files from Google Drive and Dropbox using read-only access.",
      "Fileio does not provide cloud storage, cloud backup, or synchronization between devices. Fileio cannot upload, edit, rename, move, or delete files stored in Google Drive or Dropbox.",
    ],
  },
  {
    title: "Your Files and Accounts",
    paragraphs: [
      "You remain responsible for the files you access, manage, scan, share, or delete with Fileio and for keeping appropriate backups of important local files. Local file actions can change or permanently remove files on your device.",
      "You must have the right to access and use any files or cloud accounts you connect to Fileio. You are responsible for maintaining the security of your device and sign-in accounts.",
    ],
  },
  {
    title: "Google Drive and Dropbox",
    paragraphs: [
      "Connecting a cloud service is optional. Cloud connections use the provider’s OAuth authorization process. Your use of Google Drive or Dropbox remains subject to that provider’s terms and policies.",
      "Supported cloud files may be downloaded temporarily to Fileio’s app cache for viewing. Google Workspace files may be exported into supported formats before opening. Cloud data is processed on your device and is not transferred to JonnyLab servers.",
    ],
  },
  {
    title: "Fileio Pro and Purchases",
    paragraphs: [
      "Paid features may be offered through subscriptions or in-app purchases. Purchases, renewals, cancellations, refunds, and payment processing are handled by Google Play and, where applicable, RevenueCat under their respective terms. Prices and available plans may vary by region and may change as permitted by law and store policies.",
    ],
  },
  {
    title: "Acceptable Use",
    paragraphs: [
      "You may not misuse Fileio, interfere with its operation, attempt to gain unauthorized access, reverse engineer it except where applicable law permits, or use it to violate law or the rights of others.",
    ],
  },
  {
    title: "Availability and Changes",
    paragraphs: [
      "We may update, change, suspend, or discontinue features to improve Fileio, address security or legal requirements, or respond to third-party service changes. Cloud features may be affected by Google Drive, Dropbox, Google Play, or other services outside JonnyLab’s control.",
    ],
  },
  {
    title: "Disclaimers and Limitation of Liability",
    paragraphs: [
      "Fileio is provided on an “as is” and “as available” basis to the extent permitted by law. We do not guarantee uninterrupted operation, compatibility with every file, or recovery of files that are changed, deleted, corrupted, or unavailable.",
      "To the maximum extent permitted by applicable law, JonnyLab will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of data, profits, or business arising from use of Fileio. Nothing in these terms excludes rights or liabilities that cannot legally be excluded.",
    ],
  },
  {
    title: "Termination",
    paragraphs: [
      "You may stop using Fileio at any time. We may restrict access if you materially violate these terms or if necessary to protect users, services, or legal compliance. Account deletion instructions are available on the Fileio Account Deletion page.",
    ],
  },
  {
    title: "Privacy",
    paragraphs: [
      "The Fileio Privacy Policy explains how information is handled when you use the app and forms part of these terms.",
    ],
  },
  {
    title: "Changes to These Terms",
    paragraphs: [
      "We may update these terms from time to time. We will post the revised version here and update the date below. Continued use of Fileio after an update means you accept the revised terms where permitted by law.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about these terms may be sent to support@jonnylab.app.",
    ],
  },
];

export default function FileioTermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link href="/fileio" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950">← Fileio</Link>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-950">Fileio Terms of Use</h1>
      <p className="mb-12 mt-2 text-sm text-zinc-500">Last updated: July 22, 2026</p>
      <div className="space-y-10">
        {sections.map((section, index) => (
          <section key={section.title}>
            <h2 className="mb-2 text-base font-semibold text-zinc-950">{index + 1}. {section.title}</h2>
            <div className="space-y-3 text-zinc-600 leading-relaxed">
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-5 border-t border-zinc-200 pt-6 text-sm">
        <Link href="/fileio/privacy" className="font-medium text-indigo-700 hover:text-indigo-600">Privacy Policy</Link>
        <Link href="/fileio/delete-account" className="font-medium text-indigo-700 hover:text-indigo-600">Delete Account</Link>
        <Link href="/fileio/support" className="font-medium text-indigo-700 hover:text-indigo-600">Support</Link>
      </div>
    </main>
  );
}
