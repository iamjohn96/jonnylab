import type { Metadata } from "next";
import Link from "next/link";

const googlePlayUrl =
  "https://play.google.com/store/apps/details?id=com.jonnylab.fileio";

export const metadata: Metadata = {
  title: "Fileio — File Manager, Document Viewer & Scanner",
  description:
    "Fileio is available on Android for file management, document viewing, and scanning. An iOS version is in development.",
};

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
    title: "Dropbox Integration",
    description: "Connect Dropbox to access and download your cloud files.",
  },
  {
    icon: "💾",
    title: "Storage Overview",
    description: "Monitor storage usage and available space on your device.",
  },
];

export default function FileioPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <section className="text-center mb-16">
        <div className="mx-auto mb-6 w-24 h-24 bg-indigo-600 rounded-3xl flex items-center justify-center text-4xl select-none">
          📁
        </div>
        <h1 className="text-4xl font-bold text-zinc-950 mb-3 tracking-tight">
          Fileio
        </h1>
        <p className="text-xl text-zinc-600 mb-6">
          Manage, view, and scan documents — all in one place.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["Live on Android", "iOS in development", "Document Scanner", "Dropbox"].map((badge) => (
            <span
              key={badge}
              className="text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200 px-3 py-1 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
        <a
          href={googlePlayUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-medium transition-colors"
        >
          Get it on Google Play
        </a>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm"
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-zinc-950 mb-1">{f.title}</h3>
              <p className="text-sm text-zinc-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border border-zinc-200 rounded-2xl p-8 mb-10 shadow-sm">
        <h2 className="text-xl font-bold text-zinc-950 mb-3">
          Simple. Fast. Reliable.
        </h2>
        <p className="text-zinc-600 leading-relaxed">
          Whether you&apos;re managing work documents, school files, scanned
          paperwork, or personal records, Fileio keeps everything organized and
          accessible.
        </p>
      </section>

      <div className="flex flex-wrap gap-6 text-sm">
        <a
          href={googlePlayUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-500 transition-colors"
        >
          Google Play
        </a>
        <Link
          href="/fileio/privacy"
          className="text-indigo-600 hover:text-indigo-500 transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          href="/fileio/support"
          className="text-indigo-600 hover:text-indigo-500 transition-colors"
        >
          Support
        </Link>
        <Link
          href="/fileio/delete-account"
          className="text-indigo-600 hover:text-indigo-500 transition-colors"
        >
          Delete Account
        </Link>
      </div>
    </main>
  );
}
