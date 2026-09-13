import Link from "next/link";
import DeadlineLensLanguageSwitcher from "@/components/DeadlineLensLanguageSwitcher";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "Deadline Lens Privacy Policy | JonnyLab",
  description: "Privacy Policy for Deadline Lens, the privacy-first Android productivity app by JonnyLab.",
  path: "/deadline-lens/privacy",
});

const sections = [
  ["Service provider", ["Deadline Lens is provided by JonnyLab. The app uses Google Play and RevenueCat to offer, process, and restore the optional one-time purchase. Questions about this policy may be sent to support@jonnylab.app."]],
  ["Scope", ["This Privacy Policy applies to the Deadline Lens Android app, package name com.jonnylab.deadlinelens."]],
  ["Personal information we collect", ["Deadline Lens does not collect or transmit document images, OCR text, saved deadlines, or reminder content to JonnyLab servers."]],
  ["Information we do not collect", ["Deadline Lens does not collect advertising identifiers, location, contacts, health information, financial account information, document images, OCR text, saved deadlines, or usage behavior for advertising. Google Play processes payment details; Deadline Lens does not receive card or bank-account details."]],
  ["Images and OCR text", ["Images you capture or select and the text recognized from them are processed on your device. Temporary images created for capture are removed after OCR processing or when you cancel. Deadline Lens does not send document images or OCR results to an external server."]],
  ["Data stored locally", ["When you choose to save an extracted result, its deadline title, date, task details, completion state, and reminder settings are stored only in a local database on your device. The app's Android backup is disabled."]],
  ["Data transmission", ["Document images, OCR text, and deadline information do not leave your device. The app connects to Google Play and RevenueCat only for purchase offering, payment or receipt status, entitlement updates, and purchase restoration. It does not provide cloud sync or cloud backup."]],
  ["Purchases and RevenueCat", ["Google Play processes payment. RevenueCat may process an anonymous app user identifier, purchase or transaction and receipt data, entitlement status, and limited device technical information needed to offer, verify, restore, and support a purchase. Deadline Lens does not send document images, OCR text, saved deadlines, or reminder content to RevenueCat. The app does not create a user account."]],
  ["Advertising, analytics, and tracking", ["Deadline Lens contains no advertising SDK, advertising tracking, or behavioral analytics service, and it does not request an advertising identifier. Purchase functionality involves Google Play and RevenueCat service data as described above."]],
  ["Third-party technology", ["Deadline Lens uses the on-device text recognition capability included with Google ML Kit, plus Google Play and RevenueCat for the optional one-time purchase. The app does not send your documents or OCR results to an external server for OCR. Android, the system camera app, and the system image picker may perform their own processing under the policies of the platform or app you choose."]],
  ["Retention and deletion", ["Saved deadlines remain on your device until you delete them in the app or remove the app's data. You can delete individual saved items in Deadline Lens. Uninstalling the app also deletes its local app data through Android's standard app removal process.", "To request deletion of purchase data held by RevenueCat, contact support@jonnylab.app with the Google Play order information available to you. We will use it only to locate and process the request."]],
  ["Children's privacy", ["Deadline Lens is intended for people aged 13 and older and is not designed for children under 13. Because the app does not collect personal information on JonnyLab servers, JonnyLab does not knowingly collect personal information from children through Deadline Lens."]],
  ["Security measures", ["Deadline Lens reduces exposure by processing documents on-device, storing saved items locally, disabling Android app backup, and limiting network use to the purchase and restoration purposes described above. No method of device storage is completely risk-free, so users should protect access to their device."]],
  ["Changes to this policy", ["We may update this Privacy Policy if the app's structure, features, or data handling changes. Updates will be published on this page with a revised effective or last-updated date."]],
  ["Contact", ["For questions or requests about Deadline Lens or this Privacy Policy, contact JonnyLab at support@jonnylab.app."]],
  ["Effective date", ["This Privacy Policy is effective August 28, 2026 and was last updated September 12, 2026."]],
] as const;

export default function DeadlineLensPrivacyPage() {
  return <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
    <div className="flex flex-wrap items-center justify-between gap-4"><Link href="/deadline-lens" className="text-sm text-zinc-500 hover:text-zinc-950">← Deadline Lens</Link><DeadlineLensLanguageSwitcher current="en" englishHref="/deadline-lens/privacy" koreanHref="/deadline-lens/privacy/ko" autoDetect /></div>
    <header className="mt-10 border-b border-zinc-200 pb-10"><p className="text-sm font-semibold text-indigo-700">JonnyLab · com.jonnylab.deadlinelens</p><h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950">Deadline Lens Privacy Policy</h1><p className="mt-4 text-sm text-zinc-500">Effective: August 28, 2026 · Last updated: September 12, 2026</p></header>
    <div className="space-y-10 py-10">{sections.map(([title, body], index) => <section key={title}><h2 className="mb-3 text-lg font-semibold text-zinc-950">{index + 1}. {title}</h2><div className="space-y-3">{body.map((paragraph) => <p key={paragraph} className="leading-7 text-zinc-600">{paragraph}</p>)}</div></section>)}</div>
    <div className="border-t border-zinc-200 pt-8 text-sm"><a href="mailto:support@jonnylab.app" className="font-semibold text-indigo-700 hover:text-indigo-600">Contact support@jonnylab.app</a></div>
  </main>;
}
