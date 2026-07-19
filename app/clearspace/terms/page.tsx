import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "Terms of Use — ClearSpace",
  description:
    "Terms of Use for ClearSpace, an Android photo and video cleaner by JonnyLab.",
  path: "/clearspace/terms",
});

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By downloading, accessing, purchasing, or using ClearSpace, you agree to these Terms of Use. If you do not agree, do not use the app.",
  },
  {
    title: "About ClearSpace",
    body: "ClearSpace is an Android media cleaner, photo cleaner, duplicate finder, and storage helper for photos and videos. It analyzes media available through Android media permissions and provides cleanup suggestions for duplicate photos, similar photos, burst-style groups, quality issues, screenshots, visible chat media, and large or old videos.",
  },
  {
    title: "Media Scope",
    body: "ClearSpace is not an all-files storage cleaner. It does not request Android All files access and does not claim to scan arbitrary documents, APKs, cache files, app-private folders, or every folder on your device. Results are limited to media available through the permissions you grant and Android's media access rules.",
  },
  {
    title: "Detection Results",
    body: "ClearSpace's duplicate detection, similarity grouping, screenshot detection, chat media detection, video grouping, and quality analysis may miss items or identify media incorrectly. Suggestions are provided for your review and should not be treated as definitive.",
  },
  {
    title: "Review Before Removing Media",
    body: "You are responsible for reviewing all selected items before confirming removal. ClearSpace provides a five-second undo period before starting the removal flow. On Android 11 and later, selected media is moved through Android's system trash confirmation using MediaStore.createTrashRequest. On Android 10 and below, removal may use direct deletion through Android's media APIs. The in-app Trash screen is not a complete restore manager, so keep backups of important photos and videos.",
  },
  {
    title: "Permissions and Reminders",
    body: "You may grant ClearSpace access to photos, videos, and notifications. These permissions are used only for the app features described in the Privacy Policy. Monthly cleanup reminders are optional and can be disabled.",
  },
  {
    title: "ClearSpace Pro",
    body: "ClearSpace may offer paid Pro features through Google Play. Planned purchase options may include weekly, monthly, annual, and lifetime plans, and the prices and available options shown in the app or Google Play before purchase control. Purchases, cancellations, restore flows, refunds, and entitlement availability are managed through Google Play, RevenueCat, and related billing services and are subject to their applicable terms.",
  },
  {
    title: "License and Acceptable Use",
    body: "JonnyLab grants you a limited, personal, non-exclusive, non-transferable, revocable license to use ClearSpace. You may not copy, redistribute, resell, reverse engineer, interfere with, or misuse the app except where applicable law permits.",
  },
  {
    title: "Availability and Limitation of Liability",
    body: "ClearSpace is provided on an as-is and as-available basis to the extent permitted by law. JonnyLab does not guarantee uninterrupted operation, detection accuracy, purchase availability, or recovery of removed media and is not responsible for accidental deletion, data loss, or indirect or consequential losses arising from use of the app.",
  },
  {
    title: "Changes and Contact",
    body: "We may update these terms from time to time. Changes will be posted on this page with an updated effective date. Questions can be sent to support@jonnylab.app.",
  },
];

export default function ClearspaceTermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/clearspace"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
      >
        ← ClearSpace
      </Link>

      <h1 className="mt-6 mb-2 text-3xl font-bold tracking-tight text-zinc-950">
        ClearSpace Terms of Use
      </h1>
      <p className="mb-12 text-sm text-zinc-500">
        Effective date: June 22, 2026
      </p>
      <Link
        href="/clearspace/terms/ko"
        className="mb-10 inline-block text-sm text-teal-700 transition-colors hover:text-teal-600"
      >
        한국어로 보기
      </Link>

      <div className="space-y-10">
        {sections.map((section, index) => (
          <section key={section.title}>
            <h2 className="mb-2 text-base font-semibold text-zinc-950">
              {index + 1}. {section.title}
            </h2>
            <p className="leading-relaxed text-zinc-600">{section.body}</p>
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
