import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "Fileio Privacy Policy | JonnyLab",
  description:
    "Learn how Fileio handles files and privacy. Fileio works locally without accounts, cloud connections, ads, analytics, or tracking.",
  path: "/fileio/privacy",
});

const sections = [
  {
    title: "Overview",
    paragraphs: [
      "Fileio: File Manager & Scanner is a local file manager, document viewer, and document scanner for Android. Its app features operate on your device, and no Fileio account is required.",
      "Fileio is a privacy-first local file manager and document scanner. It does not require an account, connect to cloud storage, display ads, or use analytics or tracking SDKs.",
    ],
  },
  {
    title: "Information Fileio Does Not Collect",
    paragraphs: [
      "Fileio does not collect or transmit your name, email address, contacts, location, advertising identifier, payment or subscription information, imported or scanned file contents, Google Drive or Dropbox data, app usage analytics, or behavioral tracking information to JonnyLab servers.",
      "To provide its features, Fileio may process file names, file URIs, recent-file records, favorites, settings, and similar metadata locally on your device. This local processing does not mean that the information is collected by JonnyLab.",
    ],
  },
  {
    title: "Local Files and Metadata",
    paragraphs: [
      "Imported files, scanned PDFs, recent-file information, favorites, and settings are stored on your device. They are not automatically uploaded to JonnyLab servers. Fileio does not provide synchronization or cloud backup.",
      "You can use Reset App Data to delete files managed inside Fileio and the app's local metadata. Uninstalling Fileio may also remove app-specific stored data according to Android and device behavior. Keep separate copies of important files before resetting or uninstalling the app.",
    ],
  },
  {
    title: "Document and Photo Selection",
    paragraphs: [
      "Fileio uses the Android system Document Picker and Photo Picker. The app imports only files or images that you explicitly select and does not request broad access to your entire photo, video, or storage library.",
      "Selected items are processed locally on your device to perform the feature you requested.",
    ],
  },
  {
    title: "Camera",
    paragraphs: [
      "Fileio uses the camera only when you choose the document scanning feature. Captured images are processed on your device to create and locally store a PDF.",
      "Fileio does not use the microphone or location for scanning.",
    ],
  },
  {
    title: "Sharing and Open With",
    paragraphs: [
      "A selected file is provided to an external app or service only when you explicitly choose Share or Open With and select a destination. Fileio does not automatically share files externally without your action.",
      "After a file is provided to another app or service, that third party's privacy policy and practices apply.",
    ],
  },
  {
    title: "Cloud Services and Accounts",
    paragraphs: [
      "Fileio does not connect to Google Drive or Dropbox. Those integrations have been removed. Fileio has no OAuth login, Fileio account, or server-side user authentication.",
      "Fileio does not collect or store user credentials or cloud access tokens.",
    ],
  },
  {
    title: "Advertising, Analytics, and Tracking",
    paragraphs: [
      "Fileio displays no ads, includes no AdMob or other advertising SDK, and does not use the Android Advertising ID.",
      "Fileio includes no analytics or tracking SDK.",
    ],
  },
  {
    title: "Payments and Subscriptions",
    paragraphs: [
      "Fileio is completely free. It does not use RevenueCat or another payment SDK and has no subscription, in-app purchase, paid feature restriction, Premium tier, or Pro tier. All core features are available without payment.",
      "Google Play may independently process information related to downloading the app and operating its store under Google's own policies. That processing is separate from Fileio's local file handling.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "Fileio is designed around local processing and minimum necessary access, including Android system pickers instead of broad media or storage permissions. Android backup is disabled for the app.",
      "No system can guarantee absolute security. JonnyLab does not control the security of your device, its operating system, or an external app or service that you choose for sharing. Keep your device protected and review a destination before sharing a file.",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "Fileio does not intentionally collect children's personal information. The app does not provide user accounts or server-side storage of Fileio files.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy when Fileio or its practices change. We will post the revised policy on this page and update the Last Updated date.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about this Privacy Policy may be sent to JonnyLab at support@jonnylab.app.",
    ],
  },
];

export default function FileioPrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link href="/fileio" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950">
        ← Fileio
      </Link>
      <h1 className="mt-6 mb-2 text-3xl font-bold tracking-tight text-zinc-950">
        Fileio Privacy Policy
      </h1>
      <p className="text-sm text-zinc-500">Last updated: July 23, 2026</p>
      <Link href="/fileio/privacy/ko" className="mt-6 mb-10 inline-block text-sm text-indigo-700 hover:text-indigo-600">
        한국어로 보기
      </Link>
      <div className="space-y-10">
        {sections.map((section, index) => (
          <section key={section.title}>
            <h2 className="mb-3 text-base font-semibold text-zinc-950">
              {index + 1}. {section.title}
            </h2>
            <div className="space-y-3">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-zinc-600">{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
      <nav aria-label="Fileio legal links" className="mt-12 flex flex-wrap gap-5 border-t border-zinc-200 pt-6 text-sm">
        <Link href="/fileio/terms" className="font-medium text-indigo-700 hover:text-indigo-600">Terms of Service</Link>
        <Link href="/fileio/support" className="font-medium text-indigo-700 hover:text-indigo-600">Support</Link>
      </nav>
    </main>
  );
}
