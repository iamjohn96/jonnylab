import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — ClearSpace",
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By downloading, accessing, or using ClearSpace, you agree to these Terms of Use. If you do not agree, do not use the app.",
  },
  {
    title: "About ClearSpace",
    body: "ClearSpace is a utility app that helps identify possible duplicate, blurry, screenshot, or low-quality photos so you can review and organize your photo library.",
  },
  {
    title: "Detection Results",
    body: "ClearSpace's detection results may not be perfect. The app may miss items or identify photos incorrectly, and its suggestions should not be treated as definitive.",
  },
  {
    title: "Review Before Deleting",
    body: "You are responsible for carefully reviewing all selected items before confirming deletion. Keep backups of important photos and videos.",
  },
  {
    title: "Accidental Deletion",
    body: "The developer is not responsible for accidental deletion, data loss, or other consequences when you confirm deletion through ClearSpace.",
  },
  {
    title: "Subscriptions",
    body: "Paid subscriptions renew automatically unless cancelled before the renewal date. You can manage or cancel your subscription through Google Play or the Apple App Store.",
  },
  {
    title: "Changes",
    body: "We may update these terms from time to time. Changes will be posted at jonnylab.app/clearspace/terms.",
  },
  {
    title: "Contact",
    body: "Questions about these terms can be sent to support@jonnylab.app.",
  },
];

export default function TermsPage() {
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
        ClearSpace Terms of Use
      </h1>
      <p className="text-sm text-zinc-500 mb-12">Last updated: June 2026</p>

      <div className="space-y-10">
        {sections.map((section, index) => (
          <section key={section.title}>
            <h2 className="text-base font-semibold text-zinc-950 mb-2">
              {index + 1}. {section.title}
            </h2>
            <p className="text-zinc-600 leading-relaxed">{section.body}</p>
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
