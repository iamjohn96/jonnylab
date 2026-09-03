import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "Fileio Support | JonnyLab",
  description:
    "Support and frequently asked questions for Fileio 2.1 on iOS and Android, including PDF tools, Private Vault, and Fileio Pro.",
  path: "/fileio/support",
});

const faqs = [
  {
    q: "Does Fileio connect to cloud storage?",
    a: "No. Fileio does not connect to Google Drive or Dropbox and does not provide cloud synchronization or backup.",
  },
  {
    q: "Does Fileio require an account?",
    a: "No. Fileio has no account or login. Core features are free, and optional Fileio Pro features are available through monthly or yearly subscriptions.",
  },
  {
    q: "How do Fileio Pro purchases work?",
    a: "Apple App Store processes iOS purchases and Google Play processes Android purchases. RevenueCat is used to show products, confirm Pro access, and restore purchases. Fileio does not send your document contents to RevenueCat.",
  },
  {
    q: "How does Private Vault protect files?",
    a: "Private Vault files are encrypted locally with AES-256, and the Vault automatically locks when you leave the app. Keep your device protected and maintain separate copies of important documents.",
  },
  {
    q: "Where are my files and settings stored?",
    a: "Imported files, scanned PDFs, recent-file information, favorites, and settings are stored locally on your device and are not automatically uploaded to JonnyLab servers.",
  },
  {
    q: "What can Reset App Data remove?",
    a: "Reset App Data deletes files managed inside Fileio and the app's local metadata. Keep a separate copy of anything important before resetting the app.",
  },
  {
    q: "When does Fileio use the camera?",
    a: "Only when you choose the document scanning feature. Captured images are processed on your device to create and locally store a PDF.",
  },
  {
    q: "When is a file sent to another app?",
    a: "Only when you explicitly choose Share or Open With and select an external app. That app's terms and privacy practices apply after it receives the file.",
  },
];

export default function FileioSupportPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link href="/fileio" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950">← Fileio</Link>
      <h1 className="mt-6 mb-12 text-3xl font-bold tracking-tight text-zinc-950">Fileio Support</h1>
      <p className="-mt-8 mb-12 text-sm font-medium text-emerald-700">The latest Fileio updates are available on iPhone, iPad, and Android.</p>
      <section className="mb-16">
        <h2 className="mb-6 text-xl font-bold text-zinc-950">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="mb-2 font-semibold text-zinc-950">{item.q}</p>
              <p className="text-sm leading-relaxed text-zinc-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h2 className="mb-2 text-lg font-bold text-zinc-950">Still need help?</h2>
        <p className="mb-4 text-zinc-600">Contact JonnyLab for Fileio support.</p>
        <a href="mailto:support@jonnylab.app" className="inline-block rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-500">
          support@jonnylab.app
        </a>
      </section>
      <nav aria-label="Fileio legal links" className="mt-10 flex flex-wrap gap-5 text-sm">
        <Link href="/fileio/privacy" className="font-medium text-indigo-700 hover:text-indigo-600">Privacy Policy</Link>
        <Link href="/fileio/terms" className="font-medium text-indigo-700 hover:text-indigo-600">Terms of Service</Link>
      </nav>
    </main>
  );
}
