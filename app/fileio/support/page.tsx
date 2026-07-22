import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "Support — Fileio",
  description:
    "Support and frequently asked questions for Fileio local file management, scanning, subscriptions, and read-only Google Drive and Dropbox access.",
  path: "/fileio/support",
});

const faqs = [
  {
    q: "What cloud services does Fileio support?",
    a: "Fileio Pro supports read-only access to Google Drive and Dropbox. You can browse cloud folders, view file names and sizes, and temporarily download supported files to Fileio’s app cache for viewing.",
  },
  {
    q: "Can Fileio change files in Google Drive or Dropbox?",
    a: "No. Fileio cannot upload, edit, rename, move, or delete files stored in Google Drive or Dropbox. Local file-management actions such as rename and delete apply only to locally imported files.",
  },
  {
    q: "How does Fileio open Google Docs, Sheets, and Slides?",
    a: "Google Docs and Google Sheets files may be exported into supported formats before opening. Google Slides files may be exported as PPTX, but local PPTX preview is not currently supported.",
  },
  {
    q: "Does Fileio sync or back up my files?",
    a: "No. Fileio does not synchronize local files between devices and does not provide its own cloud backup or cloud-storage service.",
  },
  {
    q: "Is my data safe?",
    a: "Fileio does not upload locally imported files to Fileio servers. Google Drive and Dropbox connections use OAuth, and supported cloud files are downloaded only temporarily to the app cache when needed for viewing. Cloud data is processed on your device and is not transferred to JonnyLab servers.",
  },
  {
    q: "How do I restore my purchase?",
    a: "Open Fileio → Settings → Restore Purchases.",
  },
  {
    q: "Google Sign-in isn't working. What should I do?",
    a: "Make sure you have a stable internet connection. Try signing out and back in. If the issue persists, contact support.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Open the Google Play Store, go to Payments & subscriptions → Subscriptions, then select Fileio.",
  },
];

export default function FileioSupportPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <div className="mb-2">
        <Link
          href="/fileio"
          className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors"
        >
          ← Fileio
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-zinc-950 mt-6 mb-12 tracking-tight">
        Fileio Support
      </h1>

      <section className="mb-16">
        <h2 className="text-xl font-bold text-zinc-950 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="bg-white border border-zinc-200 shadow-sm rounded-xl p-5"
            >
              <p className="font-semibold text-zinc-950 mb-2">{item.q}</p>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border border-zinc-200 shadow-sm rounded-2xl p-8">
        <h2 className="text-lg font-bold text-zinc-950 mb-2">Still need help?</h2>
        <p className="text-zinc-600 mb-4">
          We typically respond within 24 hours.
        </p>
        <a
          href="mailto:support@jonnylab.app"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          support@jonnylab.app
        </a>
      </section>
      <nav aria-label="Fileio legal links" className="mt-10 flex flex-wrap gap-5 text-sm">
        <Link href="/fileio/privacy" className="font-medium text-indigo-700 hover:text-indigo-600">Privacy Policy</Link>
        <Link href="/fileio/terms" className="font-medium text-indigo-700 hover:text-indigo-600">Terms of Use</Link>
        <Link href="/fileio/delete-account" className="font-medium text-indigo-700 hover:text-indigo-600">Delete Account</Link>
      </nav>
    </main>
  );
}
