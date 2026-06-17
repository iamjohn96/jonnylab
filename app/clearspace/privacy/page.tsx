import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — ClearSpace",
  description: "Privacy Policy for ClearSpace.",
};

const sections = [
  {
    title: "Overview",
    body: [
      "ClearSpace is an Android photo and video cleaner. It helps you review duplicate photos, similar photos, burst-style groups, quality issues, screenshots, visible chat media, and large or old videos.",
      "ClearSpace does not require an account. The current Android-native app does not collect user data, share user data, upload photos or videos, use cloud processing, show ads, or include analytics or tracking SDKs.",
    ],
  },
  {
    title: "Photos and Videos",
    body: [
      "ClearSpace requests access to photos and videos solely to scan, analyze, display, compare, organize, and move selected items to trash.",
      "All photo and video analysis happens locally on your device. Your media is never uploaded to JonnyLab servers or shared with third parties.",
      "ClearSpace is a media cleaner for photos and videos. It does not request Android All files access and does not scan arbitrary documents, APKs, cache files, app-private folders, or every file on your device.",
    ],
  },
  {
    title: "Local Data",
    body: [
      "ClearSpace stores scan history, bytes freed, trash metadata, app settings, and reminder state locally on your device using Android storage such as Room and DataStore. This information is not transmitted externally.",
      "You can remove local data by clearing ClearSpace's app data in Android settings or uninstalling the app.",
    ],
  },
  {
    title: "Information We Do Not Collect",
    body: [
      "ClearSpace does not collect personal information, photo or video content, usage analytics, diagnostics, advertising identifiers, location, contacts, or other user data.",
      "ClearSpace does not use analytics, advertising, or tracking SDKs.",
    ],
  },
  {
    title: "Permissions",
    body: [
      "READ_MEDIA_IMAGES is used to access images so ClearSpace can find duplicates, similar photos, screenshots, visible chat media, and quality issues.",
      "READ_MEDIA_VIDEO is used to access videos for large and old video cleanup.",
      "READ_EXTERNAL_STORAGE may be used only for Android 12 and below compatibility. ClearSpace does not request MANAGE_EXTERNAL_STORAGE.",
      "POST_NOTIFICATIONS is used only for optional monthly cleanup reminders that you can disable at any time.",
    ],
  },
  {
    title: "Deletion and Trash",
    body: [
      "ClearSpace does not silently delete media. When you choose items to remove, the app provides a five-second undo period before starting the removal flow.",
      "On Android 11 and later, ClearSpace uses Android's system trash confirmation. On Android 10 and below, Android may require direct deletion through ContentResolver.",
      "The in-app Trash screen is not a complete restore and delete management tool. Restore behavior depends on the Android or device gallery trash system.",
    ],
  },
  {
    title: "Network, Purchases, and Data Sharing",
    body: [
      "ClearSpace does not use network access to process or transfer your photo or video data. We do not sell, share, or transmit your media to third parties.",
      "ClearSpace Pro purchases, if available, are processed through Google Play and RevenueCat for billing, restore, and entitlement status. JonnyLab does not receive or store your payment card details.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "ClearSpace is intended for users aged 13 and older. We do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about this Privacy Policy can be sent to support@jonnylab.app.",
    ],
  },
];

export default function ClearspacePrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/clearspace"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
      >
        ← ClearSpace
      </Link>

      <h1 className="mt-6 mb-2 text-3xl font-bold tracking-tight text-zinc-950">
        ClearSpace Privacy Policy
      </h1>
      <p className="mb-12 text-sm text-zinc-500">
        Effective date: June 17, 2026
      </p>
      <Link
        href="/clearspace/privacy/ko"
        className="mb-10 inline-block text-sm text-teal-700 transition-colors hover:text-teal-600"
      >
        한국어로 보기
      </Link>

      <div className="space-y-10">
        {sections.map((section, index) => (
          <section key={section.title}>
            <h2 className="mb-3 text-base font-semibold text-zinc-950">
              {index + 1}. {section.title}
            </h2>
            <div className="space-y-3">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-zinc-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-6 text-sm">
        <a
          href="mailto:support@jonnylab.app"
          className="text-teal-700 transition-colors hover:text-teal-600"
        >
          Contact support@jonnylab.app
        </a>
      </div>
    </main>
  );
}
