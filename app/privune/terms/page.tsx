import type { Metadata } from "next";
import PrivuneLegalPage from "@/components/PrivuneLegalPage";

const url = "https://jonnylab.app/privune/terms";

export const metadata: Metadata = {
  title: "Privune Terms of Use | JonnyLab",
  description: "Terms governing use of Privune, Safe Copies, free limits, subscriptions, and lifetime access.",
  alternates: { canonical: url, languages: { en: url, ko: `${url}/ko`, "x-default": url } },
  openGraph: { title: "Privune Terms of Use | JonnyLab", description: "Terms governing use of Privune and Privune Pro.", url, siteName: "JonnyLab", type: "website", locale: "en_US", alternateLocale: ["ko_KR"] },
  robots: { index: true, follow: true },
};

const sections = [
  { title: "Acceptance of Terms", content: <p>By downloading, accessing, or using Privune, you agree to these Terms of Use. If you do not agree, do not use the App. Apple’s applicable App Store terms also apply.</p> },
  { title: "Description of Privune", content: <p>Privune is an iPhone tool that uses on-device OCR and detection to suggest potentially sensitive details in a selected photo, lets you edit redaction regions, and creates a separate Safe Copy with supported metadata removed. Privune does not modify the original photo.</p> },
  { title: "Eligibility", content: <p>You must be legally permitted to use the App and make purchases in your jurisdiction. If you are under the age required to accept these Terms, a parent or legal guardian must approve your use.</p> },
  { title: "User Responsibility", content: <p>You are responsible for the photos you select, your right to process them, your redaction choices, and where you save or share the result. Protect your device and do not use Privune to violate another person’s rights or applicable law.</p> },
  { title: "Detection Limitations", content: <p>Privune assists with finding sensitive information but does not guarantee detection of all sensitive content. Image quality, text layout, language, and other factors can cause missed or incorrect results. Privune is not a substitute for legal, compliance, security, or professional review.</p> },
  { title: "Safe Copy Review Requirement", content: <p>You must review all selected regions and the generated Safe Copy before sharing. You should add, remove, move, or resize regions as necessary. JonnyLab is not responsible for information you choose to share after your review.</p> },
  { title: "Original Photo Handling", content: <p>Privune creates a new output and does not modify your original photo. You remain responsible for managing the original and any copies in your Photos library, backups, messages, or third-party services.</p> },
  { title: "Free Usage Limits", content: <p>Free users may create up to 3 Safe Copies per local calendar day. Limits may be technically enforced using local device storage. Changing device time, reinstalling the App, or manipulating storage to bypass a limit is not permitted. JonnyLab may reasonably adjust free limits in a future App version with appropriate notice.</p> },
  { title: "Privune Pro", content: <p>Privune Pro unlocks unlimited Safe Copies while the applicable entitlement remains active. Pro may be offered through monthly or annual subscriptions or a Lifetime purchase. Prices vary by region and are shown by the App Store before purchase.</p> },
  { title: "Monthly and Annual Subscriptions", content: <p>Monthly and annual subscriptions renew automatically unless cancelled through Apple before the end of the current billing period. The App Store displays the price, billing period, and any trial terms before confirmation.</p> },
  { title: "Lifetime Purchase", content: <p>Lifetime access is a one-time, non-consumable purchase for Privune Pro access on supported versions of the App. “Lifetime” refers to the commercial lifetime of the Privune product or service, not the lifetime of the purchaser. It does not guarantee perpetual availability, compatibility with every future device or operating system, or access to a different product.</p> },
  { title: "Billing and Renewal", content: <p>Apple processes purchases and charges the Apple ID payment method. Subscription renewal and billing are governed by Apple’s terms. JonnyLab does not set currency conversion, taxes, or final regional pricing shown by Apple.</p> },
  { title: "Cancellation", content: <p>You can cancel an auto-renewable subscription in your Apple ID subscription settings. Deleting Privune does not cancel a subscription. Cancellation generally takes effect at the end of the current paid period under Apple’s policies.</p> },
  { title: "Restore Purchases", content: <p>Use Restore Purchases in Privune while signed in with the Apple ID originally used for purchase. Restoration depends on Apple’s records, network availability, and entitlement verification through RevenueCat.</p> },
  { title: "Refunds", content: <p>Purchases are processed by Apple. Refund requests and decisions are handled according to Apple’s policies, and JonnyLab cannot approve or issue an App Store refund directly.</p> },
  { title: "App Store Terms", content: <p>Your use of Privune is also subject to applicable Apple Media Services and App Store terms. If these Terms conflict with mandatory App Store terms, the mandatory store terms control to the extent of the conflict.</p> },
  { title: "Acceptable Use", content: <p>Do not misuse Privune, attempt to bypass usage or purchase controls, interfere with the App, reverse engineer it except where law expressly permits, distribute malicious content, or use it to infringe privacy, intellectual property, or other rights.</p> },
  { title: "Intellectual Property", content: <p>Privune, its software, branding, interface, and original content are owned by JonnyLab or its licensors and protected by applicable law. These Terms grant a personal, limited, non-exclusive, non-transferable, revocable license to use the App. You retain rights in photos you lawfully process.</p> },
  { title: "Availability and Changes", content: <p>We may maintain, improve, change, suspend, or discontinue features when reasonably necessary. Device, iOS, App Store, or third-party changes may affect availability. We will try to avoid unreasonable disruption but cannot guarantee uninterrupted or permanent operation.</p> },
  { title: "Disclaimer of Warranties", content: <p>To the extent permitted by law, Privune is provided “as is” and “as available.” We do not warrant perfect detection, universal metadata removal, uninterrupted availability, or that every Safe Copy will meet a particular legal, compliance, or security requirement. Consumer rights that cannot legally be excluded remain unaffected.</p> },
  { title: "Limitation of Liability", content: <p>To the extent permitted by law, JonnyLab is not liable for indirect, incidental, special, or consequential loss arising from use of Privune, including a missed redaction or a user’s sharing decision. Nothing in these Terms limits liability that cannot legally be limited, including applicable statutory consumer rights.</p> },
  { title: "Indemnification", content: <p>Where permitted by law, you agree to be responsible for reasonable losses arising from your unlawful misuse of Privune or violation of another person’s rights. This does not apply to losses caused by JonnyLab or where local consumer law does not permit such an obligation.</p> },
  { title: "Termination", content: <p>You may stop using Privune at any time. We may restrict access for material or repeated violations of these Terms, subject to applicable law and App Store rules. Termination does not cancel subscriptions or create a refund right; manage those through Apple.</p> },
  { title: "Governing Law", content: <p>These Terms are governed by the laws of the Republic of Korea, without regard to conflict-of-law rules, except where the mandatory consumer law of your country or region provides otherwise. Courts with lawful jurisdiction may hear disputes.</p> },
  { title: "Changes to Terms", content: <p>We may revise these Terms for product, legal, or operational changes. Updated Terms will be posted at this URL with a revised effective date. Where required, we will provide additional notice. Continuing to use Privune after the effective date constitutes acceptance where permitted by law.</p> },
  { title: "Contact", content: <p>Questions about these Terms or Privune can be sent to JonnyLab at <a href="mailto:support@jonnylab.app">support@jonnylab.app</a>.</p> },
];

export default function PrivuneTermsPage() {
  return <PrivuneLegalPage lang="en" title="Terms of Use" effectiveDate="Effective: July 23, 2026" alternateHref="/privune/terms/ko" alternateLabel="한국어로 보기" sections={sections} otherDocumentHref="/privune/privacy" otherDocumentLabel="Privacy Policy" />;
}
