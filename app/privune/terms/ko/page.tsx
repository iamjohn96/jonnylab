import type { Metadata } from "next";
import PrivuneLegalPage from "@/components/PrivuneLegalPage";

const url = "https://jonnylab.app/privune/terms/ko";
const enUrl = "https://jonnylab.app/privune/terms";

export const metadata: Metadata = {
  title: "Privune 이용약관 | JonnyLab",
  description: "Privune, 안전한 사본, 무료 한도, 구독 및 Lifetime 이용권에 적용되는 약관입니다.",
  alternates: { canonical: url, languages: { en: enUrl, ko: url, "x-default": enUrl } },
  openGraph: { title: "Privune 이용약관 | JonnyLab", description: "Privune 및 Privune Pro 이용에 적용되는 약관입니다.", url, siteName: "JonnyLab", type: "website", locale: "ko_KR", alternateLocale: ["en_US"] },
  robots: { index: true, follow: true },
};

const sections = [
  { title: "약관 동의", content: <p>Privune을 다운로드, 접근 또는 사용하면 본 이용약관에 동의하는 것으로 봅니다. 동의하지 않으면 앱을 사용하지 마세요. Apple의 관련 App Store 약관도 함께 적용됩니다.</p> },
  { title: "Privune 설명", content: <p>Privune은 온디바이스 OCR과 탐지 기능으로 선택한 사진의 잠재적 민감정보를 제안하고, 사용자가 가림 영역을 편집한 후 지원되는 메타데이터가 제거된 별도의 안전한 사본(Safe Copy)을 만드는 iPhone 도구입니다. 원본 사진은 수정하지 않습니다.</p> },
  { title: "이용 자격", content: <p>사용자는 거주 지역에서 앱을 사용하고 구매할 법적 자격이 있어야 합니다. 본 약관에 동의할 수 있는 법정 연령 미만인 경우 부모 또는 법정대리인의 승인이 필요합니다.</p> },
  { title: "사용자 책임", content: <p>선택한 사진을 처리할 권리, 가림 선택, 결과물의 저장·공유 위치에 대한 책임은 사용자에게 있습니다. 기기를 안전하게 보호하고 타인의 권리나 관련 법률을 침해하는 데 Privune을 사용하지 마세요.</p> },
  { title: "탐지의 한계", content: <p>Privune은 민감정보 탐지를 돕지만 모든 민감한 콘텐츠 탐지를 보장하지 않습니다. 이미지 품질, 텍스트 배치, 언어 및 기타 요인으로 누락 또는 잘못된 결과가 생길 수 있습니다. Privune은 법률, 규제 준수, 보안 또는 전문 검토를 대신하지 않습니다.</p> },
  { title: "안전한 사본 최종 검토", content: <p>공유하기 전에 모든 선택 영역과 생성된 안전한 사본을 최종 검토해야 합니다. 필요하면 영역을 추가, 해제, 이동 또는 크기 조정하세요. 사용자가 검토 후 공유하기로 선택한 정보에 대해 JonnyLab은 책임지지 않습니다.</p> },
  { title: "원본 사진 처리", content: <p>Privune은 새 결과물을 만들며 원본 사진을 수정하지 않습니다. 사진 보관함, 백업, 메시지 또는 제3자 서비스에 있는 원본과 사본 관리는 사용자의 책임입니다.</p> },
  { title: "무료 사용 한도", content: <p>무료 사용자는 현지 달력일 기준 하루 최대 3개의 안전한 사본을 만들 수 있습니다. 이 한도는 기기의 로컬 저장소를 사용해 기술적으로 적용될 수 있습니다. 기기 시간, 재설치 또는 저장소를 조작해 한도를 우회해서는 안 됩니다. JonnyLab은 적절한 안내와 함께 향후 앱 버전에서 무료 한도를 합리적으로 조정할 수 있습니다.</p> },
  { title: "Privune Pro", content: <p>Privune Pro는 해당 이용 권한이 유효한 동안 안전한 사본 생성 횟수 제한을 해제합니다. 월간·연간 구독 또는 Lifetime 구매로 제공될 수 있습니다. 가격은 지역에 따라 다르며 구매 전에 App Store에 표시됩니다.</p> },
  { title: "월간 및 연간 구독", content: <p>월간·연간 구독은 현재 결제 기간이 끝나기 전에 Apple을 통해 취소하지 않으면 자동으로 갱신됩니다. App Store는 확인 전에 가격, 결제 주기 및 체험 조건이 있는 경우 해당 조건을 표시합니다.</p> },
  { title: "Lifetime 구매", content: <p>Lifetime 이용권은 지원되는 Privune 버전에서 Pro에 접근할 수 있는 일회성 비소모성 구매입니다. “Lifetime”은 구매자의 수명이 아니라 Privune 제품 또는 서비스의 상업적 존속 기간을 뜻합니다. 영구 제공, 모든 미래 기기·운영체제 호환 또는 다른 제품 접근을 보장하지 않습니다.</p> },
  { title: "결제 및 갱신", content: <p>구매와 Apple ID 결제 수단 청구는 Apple이 처리합니다. 구독 갱신과 결제에는 Apple 약관이 적용됩니다. JonnyLab은 Apple이 표시하는 환율, 세금 또는 최종 지역 가격을 결정하지 않습니다.</p> },
  { title: "구독 취소", content: <p>Apple ID 구독 설정에서 자동 갱신 구독을 취소할 수 있습니다. Privune을 삭제해도 구독은 취소되지 않습니다. 취소는 일반적으로 Apple 정책에 따라 현재 유료 기간 종료 시 적용됩니다.</p> },
  { title: "구매 복원", content: <p>원래 구매에 사용한 Apple ID로 로그인한 상태에서 Privune의 구매 복원 기능을 사용하세요. 복원은 Apple의 구매 기록, 네트워크 상태 및 RevenueCat을 통한 이용 권한 확인에 따라 달라질 수 있습니다.</p> },
  { title: "환불", content: <p>구매는 Apple이 처리하며 환불 요청과 결정에는 Apple 정책이 적용됩니다. JonnyLab은 App Store 환불을 직접 승인하거나 지급할 수 없습니다.</p> },
  { title: "App Store 약관", content: <p>Privune 사용에는 Apple 미디어 서비스 및 App Store의 관련 약관도 적용됩니다. 본 약관과 의무적으로 적용되는 App Store 약관이 충돌하면 해당 범위에서 의무적 스토어 약관이 우선합니다.</p> },
  { title: "허용되는 사용", content: <p>Privune을 오용하거나 사용·구매 제한을 우회하거나 앱 작동을 방해해서는 안 됩니다. 법률이 명시적으로 허용하는 경우를 제외한 역설계, 악성 콘텐츠 유포, 개인정보·지식재산권 및 기타 권리 침해도 금지됩니다.</p> },
  { title: "지식재산권", content: <p>Privune의 소프트웨어, 브랜드, 인터페이스 및 원본 콘텐츠는 JonnyLab 또는 라이선스 제공자가 소유하며 관련 법률의 보호를 받습니다. 사용자는 개인적이고 제한적이며 비독점적·양도 불가·철회 가능한 앱 사용 권한을 받습니다. 적법하게 처리하는 사진의 권리는 사용자에게 유지됩니다.</p> },
  { title: "제공 및 변경", content: <p>합리적으로 필요한 경우 앱을 유지·개선하거나 기능을 변경·중단할 수 있습니다. 기기, iOS, App Store 또는 제3자 서비스의 변경이 제공 여부에 영향을 줄 수 있습니다. 불합리한 중단을 피하도록 노력하지만 중단 없는 영구 제공은 보장할 수 없습니다.</p> },
  { title: "보증의 부인", content: <p>법률이 허용하는 범위에서 Privune은 “있는 그대로” 및 “이용 가능한 상태로” 제공됩니다. 완벽한 탐지, 모든 형식의 메타데이터 제거, 중단 없는 제공 또는 모든 안전한 사본이 특정 법률·규제·보안 요건을 충족함을 보증하지 않습니다. 법률상 배제할 수 없는 소비자 권리는 영향을 받지 않습니다.</p> },
  { title: "책임의 제한", content: <p>법률이 허용하는 범위에서 JonnyLab은 탐지 누락이나 사용자의 공유 결정을 포함해 Privune 사용으로 발생한 간접적·부수적·특별 또는 결과적 손해에 책임지지 않습니다. 관련 법률상 소비자 권리 등 법적으로 제한할 수 없는 책임은 제한하지 않습니다.</p> },
  { title: "손해에 대한 책임", content: <p>법률이 허용하는 경우 사용자는 Privune의 불법적 오용 또는 타인 권리 침해로 발생한 합리적인 손실에 책임을 집니다. JonnyLab이 초래한 손실이나 지역 소비자법이 이러한 의무를 허용하지 않는 경우에는 적용되지 않습니다.</p> },
  { title: "이용 종료", content: <p>사용자는 언제든 Privune 사용을 중단할 수 있습니다. JonnyLab은 본 약관의 중대하거나 반복적인 위반 시 관련 법률과 App Store 규칙에 따라 접근을 제한할 수 있습니다. 이용 종료만으로 구독이 취소되거나 환불 권리가 생기지 않으며 Apple을 통해 관리해야 합니다.</p> },
  { title: "준거법", content: <p>사용자 국가 또는 지역의 강행 소비자법이 달리 정하는 경우를 제외하고 본 약관은 국제사법 규칙을 배제한 대한민국 법률의 적용을 받습니다. 적법한 관할권을 가진 법원이 분쟁을 심리할 수 있습니다.</p> },
  { title: "약관 변경", content: <p>제품, 법률 또는 운영 변경을 반영하기 위해 본 약관을 개정할 수 있습니다. 개정된 약관은 변경된 시행일과 함께 이 URL에 게시되며 필요한 경우 추가로 안내합니다. 법률이 허용하는 범위에서 시행일 이후 계속 사용하면 개정 약관에 동의한 것으로 봅니다.</p> },
  { title: "문의", content: <p>본 약관 또는 Privune에 관한 문의는 JonnyLab의 <a href="mailto:support@jonnylab.app">support@jonnylab.app</a>으로 보내주세요.</p> },
];

export default function PrivuneTermsKoPage() {
  return <PrivuneLegalPage lang="ko" title="이용약관" effectiveDate="시행일: 2026년 7월 23일" alternateHref="/privune/terms" alternateLabel="View in English" sections={sections} otherDocumentHref="/privune/privacy/ko" otherDocumentLabel="개인정보 처리방침" />;
}
