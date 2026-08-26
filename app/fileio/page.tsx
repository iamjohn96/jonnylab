import Link from "next/link";
import TrustSection from "@/components/TrustSection";
import FileioBrand from "@/components/FileioBrand";
import { createPageMetadata } from "@/lib/siteMetadata";

const googlePlayUrl =
  "https://play.google.com/store/apps/details?id=com.jonnylab.fileio";
const productHuntUrl =
  "https://www.producthunt.com/products/fileio?launch=fileio";

export const metadata = createPageMetadata({
  title: "Fileio — Private PDF Workspace for Android | JonnyLab",
  description:
    "Scan, edit, merge, split, protect, and privately store PDFs on your Android device with Fileio 2.1.",
  path: "/fileio",
});

const features = [
  {
    icon: "01",
    title: "Scan or import documents",
    description:
      "Scan paper documents or choose files and images with Android system pickers.",
  },
  {
    icon: "02",
    title: "Edit PDF pages",
    description:
      "Reorder, rotate, or remove pages before saving the PDF you need.",
  },
  {
    icon: "03",
    title: "Merge and split PDFs",
    description:
      "Combine documents into one PDF or extract selected pages into a separate file.",
  },
  {
    icon: "04",
    title: "Create PDFs from images",
    description:
      "Turn selected images into an organized PDF without uploading them to a web service.",
  },
  {
    icon: "05",
    title: "Protect sensitive documents",
    description:
      "Create password-protected PDF copies and keep private files in an AES-256 encrypted Private Vault.",
  },
];

const workflow = [
  "Scan a document or import selected files and images.",
  "Edit, combine, split, convert, or protect your PDF.",
  "Save it locally, keep it in Private Vault, or share it when you choose.",
];

const trustPoints = [
  "Free core tools with optional monthly and yearly Fileio Pro",
  "No account, cloud connection, synchronization, or cloud backup",
  "No ads, Advertising ID, analytics, or tracking SDKs",
  "Files and app metadata are processed and stored on your device",
];

export default function FileioPage() {
  return (
    <main>
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_360px] lg:items-center lg:py-20">
          <div>
            <div className="mb-7"><FileioBrand /></div>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-6xl">
              Private PDF tools that stay on your device
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              Fileio 2.1 is a focused PDF workspace for Android. Scan or import
              documents, edit pages, merge and split PDFs, convert images, create
              password-protected copies, and keep sensitive files in Private Vault.
            </p>
            <p className="mt-5 max-w-2xl text-base font-semibold text-indigo-800">
              No account. No ads. No behavioral tracking. Core document work happens on your device.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500">
                Get it on Google Play
              </a>
              <Link href="/fileio/support" className="rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:border-zinc-500">
                Support
              </Link>
              <Link href="/fileio/privacy" className="rounded-lg px-2 py-3 text-sm font-semibold text-indigo-700 underline underline-offset-4">
                Privacy Policy
              </Link>
              <a href={productHuntUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg px-2 py-3 text-sm font-semibold text-indigo-700 underline underline-offset-4">
                View on Product Hunt
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-indigo-200 bg-indigo-50 p-6 shadow-sm">
            <p className="text-sm font-semibold text-indigo-800">A local document workflow</p>
            <div className="mt-5 space-y-3">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-3 rounded-xl border border-indigo-100 bg-white p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-zinc-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-sm font-semibold text-indigo-700">What Fileio does</p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950">
              Everyday PDF work, in one focused app
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="mb-3 font-mono text-xs font-bold text-indigo-700" aria-hidden="true">{feature.icon}</div>
                <h3 className="mb-1 font-semibold text-zinc-950">{feature.title}</h3>
                <p className="text-sm leading-6 text-zinc-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold text-indigo-700">Local by design</p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950">Your files stay on your device</h2>
            <p className="mt-4 leading-7 text-zinc-600">
              Imported files, scanned PDFs, edits, and Private Vault documents are
              handled on your device. Fileio does not upload document contents to a
              JonnyLab server or require a Fileio account. RevenueCat and Google Play
              process limited purchase information when you use Fileio Pro.
            </p>
          </div>
        </div>
      </section>

      <TrustSection
        title="Clear privacy boundaries"
        description="Fileio uses Android system pickers for selected files and images, and the camera only when you start a document scan. A selected file is passed to another app only when you choose Share or Open With."
        points={trustPoints}
        privacyHref="/fileio/privacy"
        supportHref="/fileio/support"
        termsHref="/fileio/terms"
      />

      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-zinc-950">Ready to work with your PDFs?</h2>
            <p className="mt-2 text-zinc-600">Fileio 2.1 is available now on Android.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-indigo-500">
              Get it on Google Play
            </a>
            <Link href="/fileio/terms" className="self-center font-medium text-indigo-700 hover:text-indigo-600">Terms of Service</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
