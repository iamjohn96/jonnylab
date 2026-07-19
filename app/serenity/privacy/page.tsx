import type { Metadata } from "next";
import SerenityLegalPage from "@/components/SerenityLegalPage";

const url = "https://jonnylab.app/serenity/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy — Serenity: Sleep Sound Mixer",
  description: "Privacy Policy for Serenity: Sleep Sound Mixer on Android and iOS, including local data and purchase processing.",
  alternates: { canonical: url, languages: { en: url, ko: `${url}/ko`, "x-default": url } },
  openGraph: { title: "Serenity Privacy Policy", description: "How Serenity handles data on Android and iOS.", url, siteName: "JonnyLab", type: "website", locale: "en_US", alternateLocale: ["ko_KR"] },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Introduction",
    content: <><p>This Privacy Policy explains how JonnyLab handles information in <strong>Serenity: Sleep Sound Mixer</strong> (“Serenity” or the “App”). It applies to both the Android and iOS versions. Serenity is designed to work without an account, login, advertising, analytics, or cloud sync.</p><p>Common practices are described first. Where Android and iOS differ—primarily for purchases—we identify the platform-specific practice.</p></>,
  },
  {
    title: "Information We Collect",
    content: <><p>Serenity itself does not request or collect your name, email address, phone number, location, contacts, photos, files, health data, microphone recordings, camera data, or advertising identifier. The App does not upload your mixes, settings, or playback activity to a JonnyLab server.</p><p>If you make or restore a purchase, the applicable store and RevenueCat may process limited purchase and technical information as described below. This is separate from data handled directly by the App.</p></>,
  },
  {
    title: "Information We Do Not Collect",
    content: <><p>Serenity has no user accounts, login, ads, user-content uploads, cloud synchronization, or iCloud Sync. We do not use analytics or advertising tracking SDKs and do not collect sound selections, volume adjustments, listening history, or background activity history.</p><p>The App does not access your location, contacts, photos, microphone, or camera. Sounds are included in the App bundle rather than streamed from a JonnyLab server.</p></>,
  },
  {
    title: "Local Data Stored on the Device",
    content: <><p>Saved Mixes, individual mixer levels, and App settings are stored locally on your device. On iOS, Saved Mixes use SwiftData. Android uses the App’s local device storage. This local information is not uploaded to JonnyLab.</p><p>You can delete a Saved Mix inside the App. You can remove all local Serenity data by clearing App data where your platform offers that option or by deleting/uninstalling the App. Deleting the App does not cancel a subscription.</p></>,
  },
  {
    title: "In-App Purchases and Subscriptions",
    content: <><p>Serenity may offer monthly and yearly auto-renewable subscriptions and a one-time, non-consumable Lifetime purchase. JonnyLab does not directly collect or store your full payment-card details.</p><h3>Android — Google Play</h3><p>Google Play processes Android purchases, billing, subscription renewal, cancellation, account management, and eligible refunds under Google’s terms and policies. Google may provide purchase records or tokens needed to verify access.</p><h3>iOS — Apple App Store and StoreKit</h3><p>Apple processes iOS purchases through the App Store and StoreKit, charges the Apple Account used for the purchase, manages subscriptions, and decides refund requests under Apple’s terms and policies. Apple may provide receipt or transaction information needed to verify access.</p></>,
  },
  {
    title: "Third-Party Services",
    content: <><h3>Google Play (Android)</h3><p>Google’s own terms and privacy practices apply to information it processes. See the <a href="https://policies.google.com/privacy">Google Privacy Policy</a> and <a href="https://play.google.com/intl/en_us/about/play-terms/">Google Play Terms of Service</a>.</p><h3>Apple App Store / StoreKit (iOS)</h3><p>Apple’s own terms and privacy practices apply to information it processes. See the <a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a>.</p><h3>RevenueCat (Android and iOS)</h3><p>RevenueCat provides purchase verification and entitlement management on both platforms. It may process purchase or subscription status, product identifiers, store receipt or purchase-token information, device or operating-system details, and an anonymous App user identifier. Serenity uses RevenueCat CustomerInfo to determine whether Pro access is active, restore access, and check subscription status.</p><p>Serenity does not have an App account and does not connect the RevenueCat anonymous identifier to an App account. Purchase information is not used by JonnyLab for advertising tracking. See the <a href="https://www.revenuecat.com/privacy-policy">RevenueCat Privacy Policy</a>.</p></>,
  },
  {
    title: "How Information Is Used",
    content: <><p>Local data is used only to provide your selected sounds, saved mixes, volume levels, timer, fade-out, and playback preferences. Purchase-related information processed through the stores and RevenueCat is used to validate purchases, grant and maintain Pro entitlements, restore purchases, and confirm subscription status.</p><p>We do not use this information for behavioral advertising or create an advertising profile.</p></>,
  },
  {
    title: "Data Sharing",
    content: <><p>JonnyLab does not sell your personal information. The App shares purchase-related information only as needed with the applicable platform store and RevenueCat to complete, verify, restore, and manage purchases and entitlements, or when disclosure is required by law.</p><p>Because mixes and settings remain local, JonnyLab does not share them with third parties.</p></>,
  },
  {
    title: "Data Retention",
    content: <><p>Local mixes and settings remain on your device until you delete them, clear App data where supported, or delete/uninstall the App. JonnyLab does not retain a server copy of this local data.</p><p>Apple, Google, and RevenueCat retain purchase-related information according to their own policies, legal duties, and service requirements. Contact us if you have a privacy request concerning information associated with Serenity; some store records must be handled directly through Apple or Google.</p></>,
  },
  {
    title: "Data Security",
    content: <p>We limit Serenity’s data handling by keeping mixes and settings on the device and by relying on the platform stores for payment processing. No system is completely secure, and the security of local data also depends on your device security. Apple, Google, and RevenueCat maintain their own safeguards for information they process.</p>,
  },
  {
    title: "Children’s Privacy",
    content: <p>Serenity is not directed to children under 13, and JonnyLab does not knowingly collect personal information from children through the App. If you believe a child has provided information in connection with Serenity, contact us so we can review the request.</p>,
  },
  {
    title: "International Users",
    content: <p>Apple, Google, or RevenueCat may process purchase-related information in countries other than your own, subject to their policies and applicable safeguards. Local App data remains on your device unless you use an operating-system backup or transfer feature outside Serenity’s control.</p>,
  },
  {
    title: "User Rights and Choices",
    content: <><p>You can delete individual Saved Mixes in the App and remove all locally stored App data as described above. You may manage store purchases, subscriptions, and applicable privacy choices through your Google Account on Android or Apple Account on iOS.</p><p>Depending on where you live, you may have rights concerning personal information processed about you. To ask a question or make a request relating to Serenity, email <a href="mailto:support@jonnylab.app">support@jonnylab.app</a>. We may need to direct store-specific requests to Apple or Google because JonnyLab does not control their accounts or payment records.</p></>,
  },
  {
    title: "Changes to This Privacy Policy",
    content: <p>We may update this Privacy Policy to reflect changes to Serenity, platform requirements, third-party services, or applicable law. We will post the updated policy at this same public URL and revise the “Last updated” date above.</p>,
  },
  {
    title: "Contact Us",
    content: <p>For questions or privacy requests, contact JonnyLab at <a href="mailto:support@jonnylab.app">support@jonnylab.app</a>.</p>,
  },
];

export default function SerenityPrivacyPage() {
  return <SerenityLegalPage lang="en" title="Privacy Policy" updatedLabel="Last updated: July 19, 2026" alternateHref="/serenity/privacy/ko" alternateLabel="한국어로 보기" sections={sections} otherDocumentHref="/serenity/terms" otherDocumentLabel="Terms of Use" />;
}
