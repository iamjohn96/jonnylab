import type { Metadata } from "next";
import SerenityLegalPage from "@/components/SerenityLegalPage";

const url = "https://jonnylab.app/serenity/terms/ko";
export const metadata: Metadata = {
  title: "이용약관 — Serenity: Sleep Sound Mixer",
  description: "Android 및 iOS용 Serenity의 구독과 Lifetime 구매를 포함한 이용약관입니다.",
  alternates: { canonical: url, languages: { en: "https://jonnylab.app/serenity/terms", ko: url, "x-default": "https://jonnylab.app/serenity/terms" } },
  openGraph: { title: "Serenity 이용약관", description: "Android 및 iOS용 Serenity 이용 조건입니다.", url, siteName: "JonnyLab", type: "website", locale: "ko_KR", alternateLocale: ["en_US"] },
  robots: { index: true, follow: true },
};

const sections = [
  { title: "약관 동의", content: <><p>본 이용약관(이하 “약관”)은 Android 및 iOS용 <strong>Serenity: Sleep Sound Mixer</strong>(이하 “Serenity” 또는 “앱”)에 관하여 사용자와 JonnyLab 사이에 적용됩니다. 앱을 다운로드, 이용, 구매 또는 접근하면 본 약관에 동의하는 것입니다.</p><p>iOS 앱에는 Apple이 달리 제시하는 라이선스가 없는 한 Apple의 <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">표준 최종 사용자 사용권 계약(표준 EULA)</a>도 적용됩니다. 본 약관은 이를 보완하며 법적으로 제한할 수 없는 권리를 대체하지 않습니다.</p></> },
  { title: "이용 자격", content: <p>본 약관에 동의할 법적 능력이 있어야 합니다. 거주지에서 미성년자인 경우 부모 또는 법정대리인이 약관과 구매 내용을 검토하고 허락·감독하는 경우에만 이용하세요.</p> },
  { title: "앱 이용 라이선스", content: <><p>본 약관과 플랫폼 규칙에 따라, JonnyLab은 사용자가 소유·관리하는 지원 기기에서 개인적·비상업적 목적으로 앱을 이용할 수 있는 제한적이고 개인적이며 비독점적·양도 불가·재허락 불가·철회 가능한 라이선스를 부여합니다.</p><p>iOS에서는 Apple 표준 EULA 및 App Store 이용 규칙, Android에서는 Google Play 약관도 적용됩니다.</p></> },
  { title: "앱 기능 및 제공 범위", content: <><p>Serenity는 수면·휴식·집중용 ambient sound 재생, 최대 5개 사운드 믹싱, 개별 볼륨, Saved Mixes, Sleep Timer, fade-out 및 백그라운드 재생을 제공합니다. 사운드는 앱 번들에 포함됩니다.</p><h3>플랫폼 전용 기능</h3><p>운영체제에 종속된 기능은 해당 플랫폼에서만 제공됩니다. iOS Lock Screen 및 Control Center 재생 제어는 iOS 전용이며, Android 시스템 통합 기능은 Android 전용입니다. 기기, OS 버전, 권한 및 플랫폼 정책에 따라 제공 여부가 달라질 수 있습니다.</p></> },
  { title: "사용자 책임", content: <p>안전한 이용, 호환 기기·OS 유지, 스토어 계정 보호, 결제 전 구매 정보 확인 및 관련 법률과 플랫폼 약관 준수는 사용자의 책임입니다.</p> },
  { title: "Pro 기능", content: <p>Serenity Pro는 앱 구매 화면에 표시된 기능을 잠금 해제합니다. Android와 iOS에서 RevenueCat으로 entitlement를 확인합니다. 플랫폼 기능에 의존하는 Pro 기능은 플랫폼별로 다를 수 있으며, 전용 기능은 해당 플랫폼 전용으로 표시합니다.</p> },
  { title: "자동 갱신 구독", content: <><p>Monthly와 Yearly는 사용자가 선택한 기간의 자동 갱신 구독입니다. 스토어 규칙에 따라 갱신 전에 취소하지 않으면 같은 기간으로 자동 갱신되고, 갱신 시 해당 지역에 표시되는 가격이 스토어 계정에 청구됩니다.</p><h3>Android — Google Play</h3><p>구독에 사용한 Google 계정으로 Google Play가 청구합니다. 갱신, 결제 시점 및 관리 방법은 Google Play가 정합니다.</p><h3>iOS — Apple App Store</h3><p>구독에 사용한 Apple 계정으로 Apple이 청구합니다. 갱신, 결제 시점 및 관리 방법은 App Store와 StoreKit이 정합니다.</p></> },
  { title: "Lifetime 구매", content: <><p>Lifetime은 반복 청구가 없는 일회성 비소모성 인앱 구매입니다. 앱과 해당 Pro 기능이 제공·지원되는 기간 동안 이용 권한을 제공합니다. JonnyLab, Serenity, 스토어, 운영체제 또는 플랫폼의 영구 존속을 보장하지 않습니다.</p><p>법이 허용하는 범위에서 기술 요건, 플랫폼 정책, 보안 또는 서비스 제공 상황에 따라 기능이 변경될 수 있습니다. 복원은 원래 구매 계정, 스토어 기록·규칙과 앱 제공 여부에 따릅니다.</p></> },
  { title: "청구 및 결제", content: <><p>Google Play 또는 App Store 확인 화면에 표시되는 현지화 가격과 통화가 기준입니다. Android 결제는 Google, iOS 결제는 Apple이 처리하며 JonnyLab은 전체 카드 정보를 직접 수집·저장하지 않습니다.</p><p>RevenueCat은 구매 검증과 entitlement 관리를 지원하지만 스토어의 판매·결제 관리 역할을 대체하지 않습니다.</p></> },
  { title: "취소 및 구독 관리", content: <><p>앱 삭제만으로 구독이 취소되지 않습니다.</p><h3>Android</h3><p>구매한 Google Play 계정의 구독 메뉴에서 관리·취소하세요. <a href="https://support.google.com/googleplay/answer/7018481">Google Play 구독 관리 안내</a>를 확인하세요.</p><h3>iOS</h3><p>Apple 계정의 구독 설정(지원되는 iOS에서는 설정 &gt; 사용자 이름 &gt; 구독)에서 관리·취소하세요. <a href="https://support.apple.com/118428">Apple 구독 관리 안내</a>를 확인하세요.</p></> },
  { title: "구매 복원", content: <><p>Serenity는 Restore Purchases를 제공합니다. Android는 원래 구매한 Google 계정, iOS는 Apple 계정이 필요하며 스토어 기록과 규칙이 적용됩니다.</p><p>Lifetime은 일반적으로 동일 플랫폼·스토어 계정에서 복원할 수 있습니다. Apple과 Google은 별도 구매 시스템이므로 한 플랫폼 구매가 다른 플랫폼으로 이전된다고 보장하지 않습니다. RevenueCat은 entitlement를 확인하지만 무관한 스토어 계정을 병합하거나 플랫폼 간 이전을 보장하지 않습니다.</p></> },
  { title: "환불", content: <><h3>Android</h3><p>Google Play의 환불 절차·정책이 적용됩니다. 시기, 지역 및 법률에 따라 자격과 처리 주체가 달라질 수 있습니다. <a href="https://support.google.com/googleplay/answer/15574908">Google Play 환불 정책</a>을 확인하세요.</p><h3>iOS</h3><p>Apple이 정책과 관련 법률에 따라 App Store 환불 요청을 결정합니다. JonnyLab은 Apple App Store 환불을 직접 처리할 수 없습니다. <a href="https://support.apple.com/118223">Apple 환불 요청 안내</a>를 확인하세요.</p></> },
  { title: "가격 또는 기능 변경", content: <p>가격, 구매 옵션 및 Pro 기능이 변경될 수 있습니다. 구독 가격 변경에는 필요한 경우 스토어의 고지·동의 규칙이 적용되며 관련 소비자 권리를 침해하지 않습니다. 새 구매 전 현재 제공 기능과 가격을 표시합니다.</p> },
  { title: "지식재산권", content: <p>Serenity의 코드, 디자인, 사운드 라이브러리, 문구, 그래픽, 상표 및 콘텐츠는 JonnyLab이 소유하거나 적법하게 사용하며 관련 지식재산권법의 보호를 받습니다. 위 제한적 라이선스 외 권리는 이전되지 않습니다.</p> },
  { title: "금지 행위", content: <><p>다음 행위를 해서는 안 됩니다.</p><ul><li>허가 없이 앱·사운드·코드를 복제, 배포, 공개 이용 또는 상업적으로 재판매하는 행위</li><li>법률이 명시적으로 허용하는 경우 외에 리버스 엔지니어링, 디컴파일, 분해, 수정 또는 소스 코드 추출을 시도하는 행위</li><li>구매·구독·entitlement·보안 시스템을 우회하거나 방해하는 행위</li><li>앱 또는 관련 서비스에 비정상적·무단으로 접근하는 행위</li><li>정상 작동을 방해하거나 타인에게 해를 끼치는 방식으로 이용하는 행위</li><li>관련 법률 또는 플랫폼 규칙을 위반하는 행위</li></ul></> },
  { title: "건강 및 웰니스 면책", content: <><p>Serenity는 ambient sound 및 일반 웰니스 앱이며 의료기기가 아닙니다. 질병이나 상태의 진단, 치료, 치유 또는 예방을 목적으로 하지 않으며 특정 수면·휴식·집중·건강 결과를 보장하지 않습니다.</p><p>운전, 기계 조작, 교통 중 자전거 이용 또는 주의력 저하·졸음이 위험한 환경에서는 사용하지 마세요. 편안한 음량으로 사용하고 적절히 노출 시간을 제한하여 청력을 보호하세요.</p></> },
  { title: "의료 조언 아님", content: <p>Serenity는 의료 또는 정신건강 조언을 제공하지 않으며 수면 장애, 정신건강, 청력 문제나 지속적인 건강 문제에 관한 전문가 진료를 대체하지 않습니다. 필요하면 적절한 의료 전문가에게 문의하고, 응급 상황에서는 응급 서비스에 연락하세요.</p> },
  { title: "제공 및 서비스 변경", content: <p>기능, 사운드, 플랫폼 지원 또는 앱을 업데이트, 추가, 제한, 일시 중단 또는 종료할 수 있습니다. 중단 없고 오류 없는 작동을 보장하지 않으며, 변경 시 관련 소비자 권리와 스토어 의무를 존중합니다.</p> },
  { title: "보증의 부인", content: <p>관련 법률이 허용하는 최대 범위에서 Serenity는 “있는 그대로”, “제공 가능한 상태로” 제공됩니다. JonnyLab은 상품성, 특정 목적 적합성, 비침해성 등 법적으로 부인 가능한 보증을 부인합니다. 거주지에서 배제할 수 없는 법정 보증이나 권리는 제외되지 않습니다.</p> },
  { title: "책임 제한", content: <p>관련 법률이 허용하는 최대 범위에서 JonnyLab은 Serenity로 인한 간접적·부수적·특별·결과적·징벌적 손해 또는 데이터·수익·기회의 손실에 책임지지 않습니다. 사기, 고의적 위법행위 등 법적으로 제한할 수 없는 책임에는 적용되지 않습니다.</p> },
  { title: "배상", content: <p>법률이 허용하는 범위에서 사용자의 고의적 오용, 약관 위반 또는 타인의 권리 침해로 발생한 합리적인 청구·손실·비용에 대해 사용자가 책임집니다. JonnyLab의 행위로 발생했거나 소비자법상 허용되지 않는 범위에는 적용되지 않습니다.</p> },
  { title: "종료", content: <p>언제든 이용을 중단할 수 있습니다. 본 약관을 중대하게 위반하면 라이선스가 종료될 수 있습니다. 성질상 존속해야 하는 지식재산권·면책·책임 조항은 존속합니다. 종료만으로 스토어 구독이 취소되지 않으므로 Google Play 또는 Apple 계정에서 취소해야 합니다.</p> },
  { title: "준거법", content: <p>본 약관은 JonnyLab의 사업자 소재지에 적용되는 법률을 따릅니다. 다만 사용자의 국가 또는 지역에서 강행적으로 적용되는 소비자 보호 권리는 영향을 받지 않습니다.</p> },
  { title: "약관 변경", content: <p>Serenity, 플랫폼 요건, 서비스 또는 법률 변경을 반영해 약관을 업데이트할 수 있습니다. 동일 URL에 게시하고 최종 업데이트일을 수정하며, 필요한 경우 추가 고지합니다. 변경 후 계속 이용하면 법이 허용하는 범위에서 변경 약관에 동의한 것입니다.</p> },
  { title: "문의", content: <p>약관 문의는 JonnyLab의 <a href="mailto:support@jonnylab.app">support@jonnylab.app</a>으로 보내주세요.</p> },
];

export default function SerenityTermsKoPage() {
  return <SerenityLegalPage lang="ko" title="이용약관" updatedLabel="최종 업데이트: 2026년 7월 19일" alternateHref="/serenity/terms" alternateLabel="View in English" sections={sections} otherDocumentHref="/serenity/privacy/ko" otherDocumentLabel="개인정보 처리방침" />;
}
