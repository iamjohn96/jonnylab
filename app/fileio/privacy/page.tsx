import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy — Fileio",
  description:
    "Privacy Policy for Fileio, including local file access, read-only Google Drive and Dropbox access, analytics, and purchase processing.",
  path: "/fileio/privacy",
});

const sections = [
  {
    title: "Overview",
    body: "Fileio is a file manager, document viewer, and document scanner that helps you organize and manage local files and documents.",
  },
  {
    title: "Information We Collect",
    body: "Account information when you sign in with Google or Apple (name, email, profile photo). We do not store your files on our servers.",
  },
  {
    title: "File Access",
    body: "Fileio accesses locally imported files solely to display and manage them within the app. Local file-management actions, including rename and delete, apply to these local files. Locally imported files are not uploaded to Fileio servers.",
  },
  {
    title: "Cloud Services",
    body: "Fileio Pro can connect Google Drive and Dropbox through OAuth. Cloud access is read-only: you can browse cloud folders, view file names and sizes, and temporarily download supported files to Fileio’s app cache for viewing. Google Docs and Google Sheets files may be exported into supported formats before opening. Google Slides files may be exported as PPTX, but local PPTX preview is not currently supported. Fileio does not upload, edit, rename, move, or delete files stored in Google Drive or Dropbox, does not synchronize local files between devices, and does not provide its own cloud backup or cloud-storage service. Information processed by Google Drive and Dropbox remains subject to those services’ privacy practices, and Fileio does not store your cloud credentials.",
  },
  {
    title: "Analytics & Tracking",
    body: "We do not use third-party analytics or advertising SDKs.",
  },
  {
    title: "In-App Purchases",
    body: "Subscription purchases are processed by Google Play via RevenueCat. We do not receive or store payment information.",
  },
  {
    title: "Children's Privacy",
    body: "Fileio does not knowingly collect information from children under 13.",
  },
  {
    title: "Contact",
    body: "Questions? Email: support@jonnylab.app",
  },
];

export default function FileioPrivacyPage() {
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

      <h1 className="text-3xl font-bold text-zinc-950 mt-6 mb-2 tracking-tight">
        Fileio Privacy Policy
      </h1>
      <p className="text-sm text-zinc-500 mb-12">Last updated: June 2026</p>

      <div className="space-y-10">
        {sections.map((s, i) => (
          <section key={s.title}>
            <h2 className="text-base font-semibold text-zinc-950 mb-2">
              {i + 1}. {s.title}
            </h2>
            <p className="text-zinc-600 leading-relaxed">{s.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
