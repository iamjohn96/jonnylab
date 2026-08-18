import type { Metadata } from "next";
import Link from "next/link";

const url = "https://jonnylab.app/privune/data-deletion";

export const metadata: Metadata = {
  title: "Privune Data Deletion Request | JonnyLab",
  description:
    "How to request deletion of Privune purchase and entitlement data associated with an anonymous RevenueCat App User ID.",
  alternates: { canonical: url },
  openGraph: {
    title: "Privune Data Deletion Request | JonnyLab",
    description:
      "Steps for requesting deletion of Privune data associated with an anonymous RevenueCat App User ID.",
    url,
    siteName: "JonnyLab",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function PrivuneDataDeletionPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-20">
      <nav aria-label="Document links" className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <Link href="/" className="text-zinc-500 transition-colors hover:text-zinc-950">JonnyLab</Link>
        <span aria-hidden="true" className="text-zinc-300">/</span>
        <Link href="/privune" className="text-zinc-500 transition-colors hover:text-zinc-950">Privune</Link>
      </nav>

      <header className="mt-8 border-b border-zinc-200 pb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">Privune · JonnyLab</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Data Deletion Request</h1>
        <p className="mt-3 text-sm text-zinc-500">Last updated: August 18, 2026</p>
        <p className="mt-6 max-w-2xl leading-7 text-zinc-600">
          Privune has no account system and does not upload your photos or analysis data. This page explains how to ask JonnyLab to delete purchase, entitlement, or support associations connected to Privune.
        </p>
      </header>

      <article className="mt-10 space-y-10 text-[0.98rem] leading-7 text-zinc-600 [&_a]:font-medium [&_a]:text-indigo-600 [&_a]:underline-offset-4 hover:[&_a]:underline [&_li]:pl-1 [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        <section aria-labelledby="request-steps">
          <h2 id="request-steps" className="mb-3 text-xl font-semibold tracking-tight text-zinc-950">How to request deletion</h2>
          <ol>
            <li>Open Privune Settings and copy your anonymous RevenueCat App User ID.</li>
            <li>Email <a href="mailto:support@jonnylab.app?subject=Privune%20Data%20Deletion%20Request">support@jonnylab.app</a> with the subject <strong>Privune Data Deletion Request</strong>.</li>
            <li>Include the anonymous RevenueCat App User ID so we can identify the associated record.</li>
          </ol>
          <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-950">
            Never attach photos, Safe Copies, OCR text, screenshots containing sensitive information, or other sensitive content. They are not needed to process your request.
          </p>
          <p className="mt-4">We normally complete a verified request within 30 days and will reply when it is complete or if we need limited additional information to identify the record.</p>
        </section>

        <section aria-labelledby="deleted-data">
          <h2 id="deleted-data" className="mb-3 text-xl font-semibold tracking-tight text-zinc-950">What we delete</h2>
          <p>We delete RevenueCat-linked customer, purchase-entitlement, and support-association data controlled by Privune or JonnyLab that is associated with the supplied anonymous App User ID, subject to the retention exceptions below.</p>
        </section>

        <section aria-labelledby="retained-data">
          <h2 id="retained-data" className="mb-3 text-xl font-semibold tracking-tight text-zinc-950">What may be retained</h2>
          <p>Google, Apple, payment providers, and RevenueCat may control records under their own policies. Records may also be retained for the periods required for tax, accounting, fraud prevention, dispute handling, or legal compliance. A deletion request does not cancel an active subscription; manage cancellation through the store where you purchased it.</p>
        </section>

        <section aria-labelledby="local-data">
          <h2 id="local-data" className="mb-3 text-xl font-semibold tracking-tight text-zinc-950">Data stored on your device</h2>
          <p>Original photos, Safe Copies, OCR text, sensitive findings, and bounding boxes are not uploaded to Privune or JonnyLab servers. Deleting Privune clears its app-local state according to your device operating system. Safe Copies that you saved to your photo library or files remain there and must be deleted manually by you. Privune never modifies or deletes your originals.</p>
        </section>

        <section aria-labelledby="page-privacy">
          <h2 id="page-privacy" className="mb-3 text-xl font-semibold tracking-tight text-zinc-950">This page does not collect extra data</h2>
          <p>No login, web form, analytics, or unnecessary personal-data collection is required to use this page or submit the email request described above.</p>
        </section>
      </article>

      <footer className="mt-14 border-t border-zinc-200 pt-7 text-sm leading-6 text-zinc-600">
        <p>JonnyLab · Privune</p>
        <a href="mailto:support@jonnylab.app">support@jonnylab.app</a>
        <nav aria-label="Privune legal links" className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          <Link href="/privune">Privune Product Page</Link>
          <Link href="/privune/privacy">Privacy Policy</Link>
          <Link href="/privune/terms">Terms of Use</Link>
          <Link href="/privune/support">Support</Link>
        </nav>
      </footer>
    </main>
  );
}
