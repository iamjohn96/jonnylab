import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — ClearSpace",
};

const sections = [
  {
    title: "Overview",
    body: "ClearSpace is a private photo cleaner app designed to help you review and organize your photo library. No account is required to use ClearSpace.",
  },
  {
    title: "Photos and Videos",
    body: "ClearSpace requests access to your photo library solely to identify possible duplicate, blurry, screenshot, or low-quality photos and videos. Your photos and videos stay on your device. ClearSpace does not upload them to our servers.",
  },
  {
    title: "Information We Collect",
    body: "We do not require an account or collect, store, or transmit your photo library content. ClearSpace does not use advertising or tracking SDKs.",
  },
  {
    title: "Subscriptions and Payments",
    body: "Subscription and payment processing is handled by Apple through the App Store or Google through Google Play. We do not receive or store your payment card details.",
  },
  {
    title: "Diagnostics",
    body: "Basic app diagnostics or crash data may be processed by Apple, Google, or other platform providers when enabled or otherwise applicable. Their handling of that data is governed by their respective privacy policies.",
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
    body: "Questions about this policy can be sent to support@jonnylab.app.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <div className="mb-2">
        <Link
          href="/clearspace"
          className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors"
        >
          ← ClearSpace
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-zinc-950 mt-6 mb-2 tracking-tight">
        ClearSpace Privacy Policy
      </h1>
      <p className="text-sm text-zinc-500 mb-12">Last updated: June 2026</p>

      <div className="space-y-10">
        {sections.map((s, i) => (
          <section key={s.title}>
            <h2 className="text-base font-semibold text-zinc-950 mb-2">
              {i + 1}. {s.title}
            </h2>
            <p className="text-zinc-600 leading-relaxed">{s.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-6 text-sm">
        <a
          href="mailto:support@jonnylab.app"
          className="text-indigo-600 hover:text-indigo-500 transition-colors"
        >
          Contact support@jonnylab.app
        </a>
      </div>
    </main>
  );
}
