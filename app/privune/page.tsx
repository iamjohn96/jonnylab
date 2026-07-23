import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "Privune — Private Photo Redaction for iPhone | JonnyLab",
  description:
    "Privune detects private information in photos on-device and creates sanitized Safe Copies without modifying the original.",
  path: "/privune",
});

const workflow = [
  ["Select a photo", "Choose one photo from your library."],
  ["Detect private details", "On-device OCR identifies areas that may contain sensitive information."],
  ["Review and adjust", "Select, deselect, move, resize, or add regions before export."],
  ["Create a Safe Copy", "Apply solid masks or pixelation without changing the original."],
  ["Save or share", "Save the sanitized result or share it from iPhone."],
];

const detectedTypes = [
  "Phone numbers",
  "Email addresses",
  "Resident and foreigner registration numbers",
  "Payment card numbers",
  "Bank account numbers",
  "Vehicle registration numbers",
  "Addresses",
];

const editingTools = [
  ["Solid masking", "Cover selected details with an opaque mask."],
  ["Pixelation", "Obscure selected details with a pixelated treatment."],
  ["Precise selection", "Select or deselect findings and add regions manually."],
  ["Flexible editing", "Move and resize regions, then zoom and pan while reviewing."],
];

const privacyArchitecture = [
  "On-device OCR and image processing",
  "No photo upload",
  "No user account",
  "No custom backend",
  "No analytics",
  "Original photo is never modified",
  "Temporary generated files are automatically cleaned up",
];

const faqs = [
  ["Does Privune upload my photos?", "No. OCR, detection, review, rendering, and supported metadata removal happen locally on your iPhone."],
  ["Does Privune modify the original photo?", "No. Privune creates a separate Safe Copy. Your original photo remains unchanged."],
  ["What information can Privune detect?", "Privune looks for phone numbers, email addresses, resident and foreigner registration numbers, payment cards, bank accounts, vehicle numbers, and addresses."],
  ["Is detection always accurate?", "No. Detection is assistive and may miss or incorrectly select details. Always review every selected area and the finished Safe Copy before sharing."],
  ["What metadata does Privune remove?", "Safe Copies remove supported location, camera, capture-date, EXIF, TIFF, IPTC, author, comment, and copyright fields where present. Proprietary fields in every image format cannot be guaranteed."],
  ["What is included in the Free version?", "Free includes the complete review and editing workflow, solid and pixelated redaction, and up to 3 Safe Copies per local calendar day."],
  ["What does Privune Pro unlock?", "Privune Pro unlocks unlimited Safe Copies through monthly, annual, or lifetime access. Regional pricing is shown by the App Store."],
  ["Does Privune require an account?", "No. Privune does not have a user account system."],
  ["How do I restore a purchase?", "Open the purchase screen, use Restore Purchases, and make sure you are signed in with the Apple ID used for the original purchase."],
  ["How do I contact support?", "Visit Privune Support or email support@jonnylab.app. Please remove sensitive information from screenshots before sending them."],
];

export default function PrivunePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <section className="relative overflow-hidden rounded-[2rem] bg-[#111827] px-6 py-14 text-white shadow-[0_30px_120px_rgba(15,23,42,0.28)] sm:px-10 sm:py-16 lg:px-12">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.28),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(45,212,191,0.16),_transparent_42%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-indigo-300/30 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-200">
              iPhone · iOS 17+
            </span>
            <p className="mt-8 text-sm font-medium uppercase tracking-[0.28em] text-indigo-200/80">Privune</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Protect privacy before you share.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Privune detects private information in photos on your iPhone, lets you review what should be hidden, and creates a privacy-safe copy without modifying the original.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span aria-label="Coming to the App Store" className="inline-flex cursor-not-allowed rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/15">
                Coming to the App Store
              </span>
              <Link href="/privune/privacy" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Privacy Policy
              </Link>
              <Link href="/privune/support" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Support
              </Link>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-6">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-400 to-teal-400 text-3xl font-bold text-slate-950">
              P
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-200">The privacy promise</p>
            <div className="mt-5 space-y-3 text-xl font-semibold">
              <p>Never upload.</p>
              <p>Never modify the original.</p>
              <p>Generate a safe copy.</p>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              OCR, detection, review, rendering, and metadata sanitization happen locally on the device.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="workflow-title">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-700">How it works</p>
        <h2 id="workflow-title" className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          You stay in control before every export.
        </h2>
        <div className="mt-9 grid gap-4 md:grid-cols-5">
          {workflow.map(([title, description], index) => (
            <article key={title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">{index + 1}</span>
              <h3 className="mt-4 font-semibold text-zinc-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-[1.75rem] border border-zinc-200 bg-white p-7 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">Detection</p>
          <h2 className="mt-3 text-2xl font-semibold text-zinc-950">What Privune can help identify</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {detectedTypes.map((item) => <li key={item} className="rounded-xl bg-zinc-50 px-4 py-3 text-sm text-zinc-700">{item}</li>)}
          </ul>
          <p className="mt-6 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
            Privune helps identify potentially sensitive details, but detection may not be perfect. Always review the selected areas before sharing.
          </p>
        </article>

        <article className="rounded-[1.75rem] border border-zinc-200 bg-zinc-950 p-7 text-white sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Review and edit</p>
          <h2 className="mt-3 text-2xl font-semibold">Make each redaction deliberate.</h2>
          <div className="mt-6 space-y-4">
            {editingTools.map(([title, description]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-zinc-300">{description}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="py-16">
        <div className="rounded-[1.75rem] border border-teal-200 bg-teal-50 p-7 sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-800">Metadata protection</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">The pixels are only part of the picture.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-zinc-700">
            Generated Safe Copies remove supported location/GPS data, camera make and model, capture date, EXIF, TIFF, IPTC, author, comment, and copyright fields where present. Because image formats can contain proprietary fields, Privune does not promise universal removal of every possible metadata field.
          </p>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2" aria-labelledby="plans-title">
        <h2 id="plans-title" className="sr-only">Free and Privune Pro</h2>
        <article className="rounded-[1.75rem] border border-zinc-200 bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Free</p>
          <h3 className="mt-3 text-2xl font-semibold text-zinc-950">Full control, three Safe Copies a day.</h3>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-6 text-zinc-700">
            <li>Up to 3 Safe Copies per local calendar day</li>
            <li>Full review and editing workflow</li>
            <li>Solid and pixelated redaction</li>
          </ul>
        </article>
        <article className="rounded-[1.75rem] bg-indigo-600 p-8 text-white shadow-[0_24px_80px_rgba(79,70,229,0.22)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-100">Privune Pro</p>
          <h3 className="mt-3 text-2xl font-semibold">Unlimited Safe Copies.</h3>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-6 text-indigo-50">
            <li>Unlimited Safe Copies</li>
            <li>Monthly, annual, or lifetime access</li>
            <li>Localized prices shown by the App Store before purchase</li>
          </ul>
        </article>
      </section>

      <section className="py-16">
        <div className="grid gap-8 rounded-[1.75rem] border border-zinc-200 bg-white p-7 sm:p-9 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">Privacy architecture</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">Designed to minimize data handling.</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-600">
              RevenueCat is used only for purchase and entitlement handling. It does not receive your photos, OCR text, or detected private information.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {privacyArchitecture.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl bg-zinc-50 p-4 text-sm leading-6 text-zinc-700">
                <span aria-hidden="true" className="text-teal-600">✓</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="faq-title">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">FAQ</p>
        <h2 id="faq-title" className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">Questions before you share.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <article key={question} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-950">{question}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[1.75rem] bg-zinc-950 p-8 text-white sm:p-10">
        <h2 className="text-2xl font-semibold">Privune documents and support</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">
          Read how Privune handles photos and purchases, review the terms, or get help without sending private originals.
        </p>
        <nav aria-label="Privune legal and support" className="mt-6 flex flex-wrap gap-3">
          <Link href="/privune/privacy" className="rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950">Privacy Policy</Link>
          <Link href="/privune/terms" className="rounded-lg border border-white/20 px-4 py-2.5 text-sm font-semibold">Terms of Use</Link>
          <Link href="/privune/support" className="rounded-lg border border-white/20 px-4 py-2.5 text-sm font-semibold">Support</Link>
        </nav>
      </section>
    </main>
  );
}
