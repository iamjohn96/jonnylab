import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — ClearSpace",
  description: "Support and frequently asked questions for ClearSpace.",
};

const faqs = [
  {
    q: "Does ClearSpace upload my photos or videos?",
    a: "No. All media analysis happens on your device. ClearSpace does not upload your photos or videos, use cloud processing, or include analytics and tracking SDKs.",
  },
  {
    q: "What does the free version include?",
    a: "The free version includes unlimited scanning, full results review, manual review tools, and moving up to 50 selected items per month to trash.",
  },
  {
    q: "Why is ClearSpace asking for photo and video access?",
    a: "Android requires these permissions so ClearSpace can scan and display duplicates, similar photos, quality issues, screenshots, visible chat media, and large or old videos. Your media remains on your device.",
  },
  {
    q: "Does ClearSpace scan all files on my phone?",
    a: "No. ClearSpace uses scoped Android media permissions for photos and videos. It does not request All files access and does not scan arbitrary documents, APKs, cache files, or app-private folders.",
  },
  {
    q: "Why are some duplicates or blurry photos not detected?",
    a: "Automated detection is not perfect. Results can vary based on image format, similarity, and sensitivity settings. Try adjusting the sensitivity setting and scan again.",
  },
  {
    q: "Can I recover removed media?",
    a: "Use the five-second undo immediately when available. On Android 11 and later, ClearSpace uses Android system trash confirmation, so Android or your gallery app may keep removed items in Trash for a limited time. The in-app Trash screen is not a complete restore manager, so keep backups of important media.",
  },
  {
    q: "How do I disable cleanup reminders?",
    a: "Turn off monthly cleanup reminders in ClearSpace settings, or disable ClearSpace notifications in Android settings.",
  },
  {
    q: "How do I restore a Pro purchase?",
    a: "Open the ClearSpace Pro screen and select Restore Purchase while signed in to the Google Play account used for the original purchase.",
  },
  {
    q: "How do I delete ClearSpace's local data?",
    a: "Open Android Settings -> Apps -> ClearSpace -> Storage -> Clear data, or uninstall the app. This removes local settings, scan history, reminder state, and local trash metadata.",
  },
];

export default function ClearspaceSupportPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/clearspace"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
      >
        ← ClearSpace
      </Link>

      <h1 className="mt-6 mb-3 text-3xl font-bold tracking-tight text-zinc-950">
        ClearSpace Support
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
          href="mailto:support@jonnylab.app?subject=ClearSpace%20Support"
          className="inline-block rounded-lg bg-teal-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-600"
        >
          support@jonnylab.app
        </a>
      </section>
    </main>
  );
}
