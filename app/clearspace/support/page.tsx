import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — Clearspace",
  description: "Support and frequently asked questions for Clearspace.",
};

const faqs = [
  {
    q: "Does Clearspace upload my photos or videos?",
    a: "No. All media analysis happens on your device. Clearspace does not upload your photos or videos or use analytics and tracking SDKs.",
  },
  {
    q: "What does the free version include?",
    a: "The free version scans up to 500 photos and includes duplicates, screenshots, and basic quality analysis.",
  },
  {
    q: "Why is Clearspace asking for photo and video access?",
    a: "Android requires these permissions so Clearspace can scan and display duplicates, quality issues, screenshots, videos, and large files. Your media remains on your device.",
  },
  {
    q: "Why are some duplicates or blurry photos not detected?",
    a: "Automated detection is not perfect. Results can vary based on image format, similarity, and sensitivity settings. Try adjusting the sensitivity setting and scan again.",
  },
  {
    q: "Can I recover a deleted photo?",
    a: "Use the five-second undo immediately after deletion when available. Android or your gallery app may also keep deleted items in Trash for a limited time. Keep backups of important media.",
  },
  {
    q: "How do I disable cleanup reminders?",
    a: "Turn off monthly cleanup reminders in Clearspace settings, or disable Clearspace notifications in Android settings.",
  },
  {
    q: "How do I restore a Pro purchase?",
    a: "Open the Clearspace Pro screen and select Restore Purchase while signed in to the Google Play account used for the original purchase.",
  },
  {
    q: "How do I delete Clearspace's local data?",
    a: "Open Android Settings → Apps → Clearspace → Storage → Clear data, or uninstall the app. This removes local settings and scan history.",
  },
];

export default function ClearspaceSupportPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/clearspace"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
      >
        ← Clearspace
      </Link>

      <h1 className="mt-6 mb-3 text-3xl font-bold tracking-tight text-zinc-950">
        Clearspace Support
      </h1>
      <p className="mb-12 text-zinc-600">
        Help with scanning, permissions, cleanup, and Pro features.
      </p>

      <section className="mb-16">
        <h2 className="mb-6 text-xl font-bold text-zinc-950">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <p className="mb-2 font-semibold text-zinc-950">{item.q}</p>
              <p className="text-sm leading-relaxed text-zinc-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h2 className="mb-2 text-lg font-bold text-zinc-950">
          Still need help?
        </h2>
        <p className="mb-4 text-zinc-600">
          Include your device model, Android version, and a short description
          of the issue.
        </p>
        <a
          href="mailto:support@jonnylab.app?subject=Clearspace%20Support"
          className="inline-block rounded-lg bg-teal-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-600"
        >
          support@jonnylab.app
        </a>
      </section>
    </main>
  );
}
