import type { Metadata } from "next";
import SerenityLegalPage from "@/components/SerenityLegalPage";

const url = "https://jonnylab.app/serenity/privacy/ko";
export const metadata: Metadata = {
  title: "개인정보 처리방침 — Serenity: Sleep Sound Mixer",
  description: "Android 및 iOS용 Serenity의 로컬 데이터와 구매 처리에 관한 개인정보 처리방침입니다.",
  alternates: { canonical: url, languages: { en: "https://jonnylab.app/serenity/privacy", ko: url, "x-default": "https://jonnylab.app/serenity/privacy" } },
  openGraph: { title: "Serenity 개인정보 처리방침", description: "Android 및 iOS에서 Serenity가 정보를 처리하는 방식입니다.", url, siteName: "JonnyLab", type: "website", locale: "ko_KR", alternateLocale: ["en_US"] },
  robots: { index: true, follow: true },
};

const sections = [
  { title: "소개", content: <><p>본 개인정보 처리방침은 JonnyLab이 <strong>Serenity: Sleep Sound Mixer</strong>(이하 “Serenity” 또는 “앱”)와 관련된 정보를 처리하는 방식을 설명합니다. 본 방침은 Android와 iOS 버전에 모두 적용됩니다. Serenity는 계정, 로그인, 광고, 분석 또는 클라우드 동기화 없이 작동하도록 설계되었습니다.</p><p>공통 처리 방식과 구매를 중심으로 한 플랫폼별 차이를 아래에서 구분해 설명합니다.</p></> },
  { title: "수집하는 정보", content: <><p>Serenity 자체는 이름, 이메일 주소, 전화번호, 위치, 연락처, 사진, 파일, 건강 정보, 마이크 녹음, 카메라 데이터 또는 광고 식별자를 요청하거나 수집하지 않습니다. 믹스, 설정 또는 재생 활동을 JonnyLab 서버에 업로드하지 않습니다.</p><p>구매 또는 복원 시 해당 스토어와 RevenueCat이 아래와 같이 제한된 구매·기술 정보를 처리할 수 있습니다. 이는 앱이 직접 처리하는 데이터와 구분됩니다.</p></> },
  { title: "수집하지 않는 정보", content: <><p>사용자 계정, 로그인, 광고, 사용자 콘텐츠 업로드, 클라우드 동기화 또는 iCloud Sync가 없습니다. 분석·광고 추적 SDK를 사용하지 않으며 사운드 선택, 볼륨 조절, 청취 기록 또는 백그라운드 활동 기록을 수집하지 않습니다.</p><p>위치, 연락처, 사진, 마이크 또는 카메라에 접근하지 않습니다. 사운드는 JonnyLab 서버에서 스트리밍하지 않고 앱 번들에 포함됩니다.</p></> },
  { title: "기기에 로컬로 저장되는 데이터", content: <><p>Saved Mixes, 개별 믹서 볼륨과 앱 설정은 기기에 로컬로 저장됩니다. iOS의 Saved Mixes는 SwiftData를 사용하고 Android는 앱의 로컬 기기 저장소를 사용합니다. 해당 정보는 JonnyLab에 업로드되지 않습니다.</p><p>앱 안에서 Saved Mix를 삭제할 수 있습니다. 플랫폼에서 지원하는 경우 앱 데이터를 지우거나 앱을 삭제/제거해 모든 로컬 데이터를 없앨 수 있습니다. 앱 삭제만으로 구독이 취소되지는 않습니다.</p></> },
  { title: "인앱 구매 및 구독", content: <><p>Serenity는 월간·연간 자동 갱신 구독과 일회성 비소모성 Lifetime 구매를 제공할 수 있습니다. JonnyLab은 전체 결제 카드 정보를 직접 수집하거나 저장하지 않습니다.</p><h3>Android — Google Play</h3><p>Google Play가 Android 구매, 결제, 구독 갱신, 취소, 계정 관리 및 환불 가능 여부를 Google의 약관과 정책에 따라 처리합니다. 접근 권한 확인에 필요한 구매 기록 또는 토큰을 제공할 수 있습니다.</p><h3>iOS — Apple App Store 및 StoreKit</h3><p>Apple이 App Store와 StoreKit을 통해 iOS 구매를 처리하고, 구매에 사용한 Apple 계정에 청구하며, 구독과 환불 요청을 Apple의 약관과 정책에 따라 관리합니다. 접근 권한 확인에 필요한 영수증 또는 거래 정보를 제공할 수 있습니다.</p></> },
  { title: "제3자 서비스", content: <><h3>Google Play (Android)</h3><p>Google이 처리하는 정보에는 Google의 방침이 적용됩니다. <a href="https://policies.google.com/privacy">Google 개인정보처리방침</a>과 <a href="https://play.google.com/intl/en_us/about/play-terms/">Google Play 서비스 약관</a>을 확인하세요.</p><h3>Apple App Store / StoreKit (iOS)</h3><p>Apple이 처리하는 정보에는 Apple의 방침이 적용됩니다. <a href="https://www.apple.com/legal/privacy/">Apple 개인정보 처리방침</a>을 확인하세요.</p><h3>RevenueCat (Android 및 iOS)</h3><p>RevenueCat은 두 플랫폼에서 구매 검증과 entitlement 관리를 제공합니다. 구매·구독 상태, 제품 식별자, 스토어 영수증 또는 구매 토큰, 기기·운영체제 정보 및 익명 앱 사용자 식별자를 처리할 수 있습니다. Serenity는 RevenueCat CustomerInfo로 Pro 권한 활성 여부, 구매 복원과 구독 상태를 확인합니다.</p><p>Serenity에는 앱 계정이 없으며 RevenueCat 익명 식별자를 앱 계정에 연결하지 않습니다. JonnyLab은 구매 정보를 광고 추적에 사용하지 않습니다. <a href="https://www.revenuecat.com/privacy-policy">RevenueCat 개인정보 처리방침</a>을 확인하세요.</p></> },
  { title: "정보 이용 방법", content: <><p>로컬 데이터는 선택한 사운드, Saved Mixes, 볼륨, 타이머, fade-out 및 재생 설정을 제공하는 데만 사용됩니다. 구매 관련 정보는 구매 검증, Pro 권한 제공·유지, 구매 복원 및 구독 상태 확인에 사용됩니다.</p><p>행동 기반 광고나 광고 프로필 생성에 사용하지 않습니다.</p></> },
  { title: "데이터 공유", content: <><p>JonnyLab은 개인정보를 판매하지 않습니다. 구매 완료·검증·복원과 entitlement 관리에 필요한 범위에서만 해당 플랫폼 스토어 및 RevenueCat과 구매 관련 정보를 공유하거나, 법률상 요구되는 경우에만 공개합니다.</p><p>믹스와 설정은 로컬에 남으므로 JonnyLab이 제3자와 공유하지 않습니다.</p></> },
  { title: "데이터 보유", content: <><p>로컬 믹스와 설정은 사용자가 삭제하거나, 지원되는 경우 앱 데이터를 지우거나, 앱을 삭제/제거할 때까지 기기에 남습니다. JonnyLab은 서버 사본을 보유하지 않습니다.</p><p>Apple, Google 및 RevenueCat은 각자의 방침, 법적 의무와 서비스 요건에 따라 구매 관련 정보를 보유합니다. 스토어 기록은 Apple 또는 Google을 통해 직접 처리해야 할 수 있습니다.</p></> },
  { title: "데이터 보안", content: <p>믹스와 설정을 기기에 보관하고 플랫폼 스토어가 결제를 처리하도록 하여 Serenity의 데이터 처리를 제한합니다. 완전히 안전한 시스템은 없으며 로컬 데이터 보안은 기기 보안에도 달려 있습니다. Apple, Google 및 RevenueCat은 각자 처리하는 정보에 자체 보호조치를 적용합니다.</p> },
  { title: "아동의 개인정보", content: <p>Serenity는 만 13세 미만 아동을 대상으로 하지 않으며, JonnyLab은 앱을 통해 아동의 개인정보를 고의로 수집하지 않습니다. 아동이 Serenity와 관련해 정보를 제공했다고 생각되면 검토할 수 있도록 문의해 주세요.</p> },
  { title: "해외 사용자", content: <p>Apple, Google 또는 RevenueCat은 자체 방침과 보호조치에 따라 사용자의 국가 외 지역에서 구매 관련 정보를 처리할 수 있습니다. 사용자가 운영체제의 백업·전송 기능을 별도로 사용하지 않는 한 로컬 앱 데이터는 기기에 남습니다.</p> },
  { title: "사용자의 권리와 선택", content: <><p>앱에서 개별 Saved Mix를 삭제하고 위 방식으로 모든 로컬 앱 데이터를 제거할 수 있습니다. Android는 Google 계정, iOS는 Apple 계정에서 구매, 구독 및 개인정보 선택사항을 관리할 수 있습니다.</p><p>거주지에 따라 개인정보에 관한 법적 권리가 있을 수 있습니다. Serenity 관련 요청은 <a href="mailto:support@jonnylab.app">support@jonnylab.app</a>으로 보내주세요. JonnyLab은 스토어 계정이나 결제 기록을 통제하지 않으므로 Apple 또는 Google로 안내할 수 있습니다.</p></> },
  { title: "개인정보 처리방침 변경", content: <p>Serenity, 플랫폼 요구사항, 제3자 서비스 또는 관련 법률의 변경을 반영하기 위해 본 방침을 업데이트할 수 있습니다. 변경된 방침은 동일한 공개 URL에 게시하고 위 최종 업데이트일을 수정합니다.</p> },
  { title: "문의", content: <p>개인정보 문의 또는 요청은 JonnyLab의 <a href="mailto:support@jonnylab.app">support@jonnylab.app</a>으로 보내주세요.</p> },
];

export default function SerenityPrivacyKoPage() {
  return <SerenityLegalPage lang="ko" title="개인정보 처리방침" updatedLabel="최종 업데이트: 2026년 7월 19일" alternateHref="/serenity/privacy" alternateLabel="View in English" sections={sections} otherDocumentHref="/serenity/terms/ko" otherDocumentLabel="이용약관" />;
}
