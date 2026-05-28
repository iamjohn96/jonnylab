import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — ClearSpace",
};

const sections = [
  {
    title: "Overview",
    body: "ClearSpace is designed with privacy as its foundation. We collect no personal data, require no account, and process everything locally on your device.",
  },
  {
    title: "Information We Collect",
    body: "We do not collect, store, or transmit any personal information. ClearSpace does not have servers that receive your data.",
  },
  {
    title: "Photo Library Access",
    body: "ClearSpace requests access to your photo library solely to scan for duplicates and low-quality images. All analysis is performed locally on your device. No photos or photo metadata are transmitted to any server.",
  },
  {
    title: "Analytics & Tracking",
    body: "We do not use any analytics, tracking, or advertising SDKs.",
  },
  {
    title: "In-App Purchases",
    body: "Subscription purchases are processed by Apple (App Store) or Google (Play Store). We do not receive or store payment information.",
  },
  {
    title: "Third-Party Services",
    body: "We use RevenueCat solely to manage subscription state. RevenueCat may process anonymous subscription data. See RevenueCat's privacy policy at revenuecat.com/privacy.",
  },
  {
    title: "Children's Privacy",
    body: "ClearSpace does not knowingly collect information from children under 13.",
  },
  {
    title: "Changes",
    body: "We may update this policy. Changes will be posted at jonnylab.app/clearspace/privacy.",
  },
  {
    title: "Contact",
    body: "Questions? Email: support@jonnylab.app",
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <div className="mb-2">
        <Link
          href="/clearspace"
          className="text-sm text-zinc-500 hover:text-white transition-colors"
        >
          ← ClearSpace
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-white mt-6 mb-2 tracking-tight">
        ClearSpace Privacy Policy
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
