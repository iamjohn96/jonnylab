import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "Fileio Terms of Service | JonnyLab",
  description:
    "Read the terms for using Fileio, a local file manager and document scanner provided by JonnyLab.",
  path: "/fileio/terms",
});

const sections = [
  {
    title: "Acceptance of Terms",
    paragraphs: [
      "These Terms of Service govern your use of Fileio: File Manager & Scanner, provided by JonnyLab. By downloading, accessing, or using Fileio, you agree to these terms. If you do not agree, you may stop using the app.",
    ],
  },
  {
    title: "Description of the Service",
    paragraphs: [
      "Fileio provides local file importing and management, document and image viewing, document scanning and PDF creation, search, sorting, recent files, favorites, rename, delete, Share, and Open With features.",
      "Fileio does not provide an account, cloud connection, advertising, subscription, in-app purchase, or paid feature tier.",
    ],
  },
  {
    title: "Local-Only Operation",
    paragraphs: [
      "Files and app metadata are processed on your device. JonnyLab does not store, synchronize, or back up your files on its servers, and Fileio does not provide its own cloud backup.",
      "You are responsible for preserving important files and arranging any device backup you consider appropriate. Fileio's Android backup is disabled, so you should not rely on the app to restore its managed files or local metadata.",
    ],
  },
  {
    title: "User Responsibilities",
    paragraphs: [
      "You are responsible for having the lawful right to access, import, scan, manage, and share files used with Fileio. You must not use the app unlawfully or in a way that infringes another person's copyright, privacy, confidentiality, or other rights.",
      "You are responsible for protecting your device, reviewing file operations, and maintaining separate copies of important files.",
    ],
  },
  {
    title: "File Operations and Data Loss",
    paragraphs: [
      "Rename, delete, Reset App Data, and app removal can change or remove files or local metadata. Before using a destructive operation, keep important files somewhere you control.",
      "When you use Share or Open With, the selected external app controls the file after it receives it. Fileio does not provide data recovery or cloud backup.",
    ],
  },
  {
    title: "Camera and Scanning",
    paragraphs: [
      "You must have the lawful right to photograph or scan a document. Fileio uses the camera only when you start document scanning and processes captured images locally to create a PDF.",
    ],
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      "Fileio may interact with Android system pickers, the system share sheet, external viewer apps, and Google Play. Those operating-system features, apps, and services are controlled by their providers and are subject to their own terms and privacy policies.",
      "Fileio does not currently integrate with Google Drive or Dropbox.",
    ],
  },
  {
    title: "No Paid Services",
    paragraphs: [
      "Fileio is currently free and has no subscriptions or in-app purchases. If the service model changes in the future, any new terms or charges may be communicated separately in the app or its store listing. This statement does not announce a planned paid service.",
    ],
  },
  {
    title: "Availability and Maintenance",
    paragraphs: [
      "JonnyLab may modify, maintain, suspend, or discontinue Fileio or a feature. We do not guarantee that every feature will remain available or that updates or new features will continue indefinitely.",
      "We may make reasonable efforts to maintain security and platform-policy compatibility, but uninterrupted availability is not guaranteed.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    paragraphs: [
      "To the extent permitted by applicable law, Fileio is provided “as is” and “as available.” JonnyLab does not guarantee uninterrupted or error-free operation, compatibility with every file format, device, operating-system version, or external app, or recovery of files.",
      "Nothing in these terms limits any warranty or consumer right that cannot be limited under applicable law.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "To the extent permitted by applicable law, JonnyLab is not liable for indirect, incidental, special, or consequential loss arising from Fileio, including data loss, device issues, or the conduct of an external app selected by the user.",
      "This limitation does not apply to responsibility that cannot legally be excluded or limited.",
    ],
  },
  {
    title: "Changes to the Terms",
    paragraphs: [
      "We may update these terms when Fileio or applicable requirements change. We will post the revised terms on this page and update the Last Updated date.",
    ],
  },
  {
    title: "Governing Law",
    paragraphs: [
      "These terms are governed by applicable law. They do not replace rights or remedies that cannot be waived under the law that applies to you.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about these terms may be sent to JonnyLab at support@jonnylab.app.",
    ],
  },
];

export default function FileioTermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link href="/fileio" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950">← Fileio</Link>
      <h1 className="mt-6 mb-2 text-3xl font-bold tracking-tight text-zinc-950">Fileio Terms of Service</h1>
      <p className="text-sm text-zinc-500">Last updated: July 23, 2026</p>
      <Link href="/fileio/terms/ko" className="mt-6 mb-10 inline-block text-sm text-indigo-700 hover:text-indigo-600">
        한국어로 보기
      </Link>
      <div className="space-y-10">
        {sections.map((section, index) => (
          <section key={section.title}>
            <h2 className="mb-3 text-base font-semibold text-zinc-950">{index + 1}. {section.title}</h2>
            <div className="space-y-3">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-zinc-600">{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
      <nav aria-label="Fileio legal links" className="mt-12 flex flex-wrap gap-5 border-t border-zinc-200 pt-6 text-sm">
        <Link href="/fileio/privacy" className="font-medium text-indigo-700 hover:text-indigo-600">Privacy Policy</Link>
        <Link href="/fileio/support" className="font-medium text-indigo-700 hover:text-indigo-600">Support</Link>
      </nav>
    </main>
  );
}
