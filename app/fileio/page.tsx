import Link from "next/link";
import TrustSection from "@/components/TrustSection";
import { createPageMetadata } from "@/lib/siteMetadata";

const googlePlayUrl =
  "https://play.google.com/store/apps/details?id=com.jonnylab.fileio";

export const metadata = createPageMetadata({
  title: "Fileio — File Manager, Document Viewer & Scanner",
  description:
    "Fileio is available on Android for local file management, document viewing, scanning, and read-only Google Drive and Dropbox access with Fileio Pro. An iOS version is in development.",
  path: "/fileio",
});

const features = [
  {
    icon: "🗂",
    title: "File Manager",
    description: "Browse, organize, rename, and manage files on your device.",
  },
  {
    icon: "📄",
    title: "Document Viewer",
    description: "Open PDF, DOCX, XLSX, PPTX, JPG, PNG, and more.",
  },
  {
    icon: "📷",
    title: "Document Scanner",
    description: "Scan paper documents with your camera and save them as PDFs.",
  },
  {
    icon: "⭐",
    title: "Favorites & Recent Files",
    description: "Quickly access important documents and recently opened files.",
  },
  {
    icon: "☁️",
    title: "Read-Only Cloud Access",
    description:
      "With Fileio Pro, browse supported files in Google Drive and Dropbox without changing the originals.",
  },
  {
    icon: "💾",
    title: "Storage Overview",
    description: "Monitor storage usage and available space on your device.",
  },
];

const workflow = [
  "Browse and organize files stored on your device.",
  "Open common document and image formats in one place.",
  "Scan paper documents with your camera and save them as PDFs.",
];

const trustPoints = [
  "Local files are not uploaded to Fileio servers",
  "Google Drive and Dropbox access is read-only",
  "No third-party analytics or advertising SDKs",
  "Payment information is handled by Google Play",
];

const cloudAccessDetails = [
  {
    title: "Browse without changing cloud files",
    description:
      "Fileio Pro lets you browse Google Drive and Dropbox folders and view file names and sizes. Fileio cannot upload, edit, rename, move, or delete cloud files.",
  },
  {
    title: "Temporary downloads for viewing",
    description:
      "Supported cloud files may be downloaded temporarily to Fileio’s app cache so they can be opened in a supported viewer.",
  },
  {
    title: "Google Workspace exports",
    description:
      "Google Docs and Google Sheets files may be exported into supported formats before opening. Google Slides may be exported as PPTX, but local PPTX preview is not currently supported.",
  },
  {
    title: "No cloud sync or backup",
    description:
      "Fileio does not synchronize local files between devices and does not provide its own cloud backup or cloud-storage service.",
  },
];

export default function FileioPage() {
  return (
    <main>
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_360px] lg:items-center lg:py-20">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-2xl"
                aria-hidden="true"
              >
                📁
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-700">Fileio</p>
                <p className="text-sm text-zinc-500">
                  Live on Android · JonnyLab
                </p>
              </div>
            </div>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-6xl">
              Manage, view, and scan documents in one place.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              Fileio brings file management, document viewing, camera scanning,
              favorites, recent files, storage overview, and read-only Google
              Drive and Dropbox access into one Android app.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
              >
                Get it on Google Play
              </a>
              <Link
                href="/fileio/support"
                className="rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:border-zinc-500"
              >
                Support
              </Link>
              <span className="inline-flex items-center rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700">
                iOS in development
              </span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-indigo-200 bg-indigo-50 p-6 shadow-sm">
            <p className="text-sm font-semibold text-indigo-800">
              A simple document workflow
            </p>
            <div className="mt-5 space-y-3">
              {workflow.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-3 rounded-xl border border-indigo-100 bg-white p-4"
                >
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
            <p className="mb-2 text-sm font-semibold text-indigo-700">
              Core tools
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950">
              Keep everyday files and documents accessible
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 text-2xl" aria-hidden="true">
                {f.icon}
              </div>
              <h3 className="mb-1 font-semibold text-zinc-950">{f.title}</h3>
              <p className="text-sm leading-6 text-zinc-600">{f.description}</p>
            </article>
          ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-sm font-semibold text-indigo-700">
              Fileio Pro cloud access
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950">
              Read-only access to Google Drive and Dropbox
            </h2>
            <p className="mt-4 leading-7 text-zinc-600">
              Cloud access is separate from Fileio’s local file-management
              tools. Rename, move, and delete actions apply to locally imported
              files, not files stored in Google Drive or Dropbox.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {cloudAccessDetails.map((detail) => (
              <article
                key={detail.title}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
              >
                <h3 className="font-semibold text-zinc-950">{detail.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {detail.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TrustSection
        title="Clear boundaries for your files and accounts"
        description="Fileio manages locally imported files on your device and does not upload them to Fileio servers. Fileio Pro provides read-only access to Google Drive and Dropbox; supported files may be downloaded temporarily to the app cache for viewing, but cloud files cannot be changed through Fileio."
        points={trustPoints}
        privacyHref="/fileio/privacy"
        supportHref="/fileio/support"
      />

      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-zinc-950">
              Ready to organize your files?
            </h2>
            <p className="mt-2 text-zinc-600">
              Fileio is available now on Android.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href={googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-indigo-500"
            >
              Get it on Google Play
            </a>
            <Link
              href="/fileio/delete-account"
              className="self-center font-medium text-indigo-700 hover:text-indigo-600"
            >
              Delete Account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
