import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Fileio",
};

const sections = [
  {
    title: "Overview",
    body: "Fileio is a file management app that helps you access and organize files across local storage and cloud services.",
  },
  {
    title: "Information We Collect",
    body: "Account information when you sign in with Google or Apple (name, email, profile photo). We do not store your files on our servers.",
  },
  {
    title: "File Access",
    body: "Fileio accesses your files solely to display and manage them within the app. Files are not uploaded to our servers.",
  },
  {
    title: "Cloud Services",
    body: "When you connect Google Drive, your data is governed by Google's privacy policy. We use OAuth for secure authentication and do not store your cloud credentials.",
  },
  {
    title: "Analytics & Tracking",
    body: "We do not use third-party analytics or advertising SDKs.",
  },
  {
    title: "In-App Purchases",
    body: "Subscription purchases are processed by Apple (App Store) or Google (Play Store) via RevenueCat. We do not receive or store payment information.",
  },
  {
    title: "Children's Privacy",
    body: "Fileio does not knowingly collect information from children under 13.",
  },
  {
    title: "Contact",
    body: "Questions? Email: support@jonnylab.app",
  },
];

export default function FileioPrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <div className="mb-2">
        <Link
          href="/fileio"
          className="text-sm text-zinc-500 hover:text-white transition-colors"
        >
          ← Fileio
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-white mt-6 mb-2 tracking-tight">
        Fileio Privacy Policy
      </h1>
      <p className="text-sm text-zinc-500 mb-12">Last updated: May 2026</p>

      <div className="space-y-10">
        {sections.map((s, i) => (
          <section key={s.title}>
            <h2 className="text-base font-semibold text-white mb-2">
              {i + 1}. {s.title}
            </h2>
            <p className="text-zinc-400 leading-relaxed">{s.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
