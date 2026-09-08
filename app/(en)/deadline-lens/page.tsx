import Link from "next/link";
import DeadlineLensLanguageSwitcher from "@/components/DeadlineLensLanguageSwitcher";
import DeadlineLensVisual from "@/components/DeadlineLensVisual";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "Deadline Lens — Never Miss a Deadline | JonnyLab",
  description: "Deadline Lens is a free, privacy-first Android app that finds dates and actions in documents on your device and turns them into local deadline reminders.",
  path: "/deadline-lens",
});

const features = [
  ["Scan or import", "Capture a document with the system camera or choose an image with Android's system picker."],
  ["Detect dates and actions", "On-device Korean OCR identifies text, dates, and related tasks without uploading the document."],
  ["Review and save", "Confirm, edit, search, and manage deadlines in a local database on your device."],
  ["Get local reminders", "Choose when to be reminded and manage upcoming, due soon, completed, and overdue items."],
];

const privacy = ["On-device processing", "No account", "No ads", "No tracking", "No cloud upload"];
const flow = ["Capture or select a document", "Recognize text and dates", "Review and edit the result", "Save the deadline and set a reminder"];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Deadline Lens",
  url: "https://jonnylab.app/deadline-lens",
  operatingSystem: "Android",
  applicationCategory: "ProductivityApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@type": "Organization", name: "JonnyLab", url: "https://jonnylab.app" },
  description: "A privacy-first Android app that finds dates and actions in documents on-device and organizes them as deadlines.",
};

export default function DeadlineLensPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-8"><div className="flex justify-end"><DeadlineLensLanguageSwitcher current="en" englishHref="/deadline-lens" koreanHref="/deadline-lens/ko" autoDetect /></div></div>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-8 lg:grid-cols-[1fr_440px] lg:items-center lg:pb-20">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">Deadline Lens · Android · JonnyLab</p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-6xl">Never miss an important deadline in your documents.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">Deadline Lens finds dates and related actions in documents or images, lets you review the results, and keeps your deadlines and reminders on your Android device.</p>
            <p className="mt-4 font-semibold text-zinc-900" lang="ko">문서 속 중요한 일을 놓치지 마세요</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-lg bg-zinc-950 px-5 py-3 text-sm font-semibold text-white">Preparing for Android release</span>
              <Link href="/deadline-lens/privacy" className="rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:border-zinc-500">Privacy Policy</Link>
            </div>
            <p className="mt-5 text-sm text-zinc-500">Free · No ads · No sign-up · For ages 13+</p>
          </div>
          <DeadlineLensVisual />
        </div>
      </section>

      <section className="bg-zinc-50"><div className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-2 text-sm font-semibold text-indigo-700">Focused productivity</p>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-zinc-950">From a document to a clear deadline</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{features.map(([title, body], index) => <article key={title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"><span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-700">{index + 1}</span><h3 className="font-semibold text-zinc-950">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-600">{body}</p></article>)}</div>
      </div></section>

      <section className="bg-zinc-950 text-white"><div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div><p className="mb-2 text-sm font-semibold text-indigo-300">Privacy first</p><h2 className="text-3xl font-bold tracking-tight">Your documents stay with you</h2><p className="mt-4 leading-7 text-zinc-300">Images, recognized text, and extracted results are processed on your device. Deadline Lens has no app networking, account system, advertising, analytics, tracking, or cloud sync.</p></div>
        <div className="grid gap-3 sm:grid-cols-2">{privacy.map((item) => <div key={item} className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-4 text-sm font-semibold"><span className="mr-2 text-indigo-300">✓</span>{item}</div>)}</div>
      </div></section>

      <section className="bg-white"><div className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl"><p className="mb-2 text-sm font-semibold text-amber-700">Simple workflow</p><h2 className="text-3xl font-bold tracking-tight text-zinc-950">You stay in control at every step</h2></div>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">{flow.map((item, index) => <li key={item} className="relative border-l-2 border-indigo-200 pl-5"><p className="text-xs font-bold uppercase tracking-wider text-indigo-700">Step {index + 1}</p><p className="mt-2 font-semibold text-zinc-900">{item}</p></li>)}</ol>
        <div className="mt-14 flex flex-wrap gap-5 border-t border-zinc-200 pt-8 text-sm font-semibold"><Link href="/deadline-lens/privacy" className="text-indigo-700 hover:text-indigo-600">Read the Privacy Policy →</Link><a href="mailto:support@jonnylab.app" className="text-zinc-700 hover:text-zinc-950">Contact support@jonnylab.app</a></div>
      </div></section>
    </main>
  );
}
