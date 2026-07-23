import type { Metadata } from "next";
import PrivuneLegalPage from "@/components/PrivuneLegalPage";

const url = "https://jonnylab.app/privune/privacy/ko";
const enUrl = "https://jonnylab.app/privune/privacy";

export const metadata: Metadata = {
  title: "Privune 개인정보 처리방침 | JonnyLab",
  description: "Privune의 사진, OCR 결과, 메타데이터 및 구매 정보 처리 방식을 설명합니다.",
  alternates: { canonical: url, languages: { en: enUrl, ko: url, "x-default": enUrl } },
  openGraph: { title: "Privune 개인정보 처리방침 | JonnyLab", description: "Privune의 사진, OCR 결과, 메타데이터 및 구매 정보 처리 방식입니다.", url, siteName: "JonnyLab", type: "website", locale: "ko_KR", alternateLocale: ["en_US"] },
  robots: { index: true, follow: true },
};

const sections = [
  { title: "소개", content: <p>본 개인정보 처리방침은 JonnyLab이 사진 속 잠재적인 민감정보를 찾고 가릴 수 있도록 돕는 iPhone 앱 Privune(이하 “Privune” 또는 “앱”)과 관련된 정보를 처리하는 방식을 설명합니다. Privune은 온디바이스 처리, 내보내기 전 사용자 검토, 별도의 안전한 사본(Safe Copy) 생성을 중심으로 설계되었습니다.</p> },
  { title: "Privune이 처리하는 정보", content: <><p>사용자가 사진을 선택하면 Privune은 앱 기능을 제공하기 위해 이미지, 인식된 텍스트, 잠재적 민감정보, 가림 영역 및 내보내기 설정을 기기에서 로컬로 처리합니다. 사진에 표시된 전화번호, 이메일 주소, 주민등록번호·외국인등록번호, 결제 카드 번호, 은행 계좌번호, 차량 등록번호 및 주소 등이 포함될 수 있습니다.</p><p>이 처리로 모든 민감정보가 탐지된다는 의미는 아닙니다. 탐지는 사용자를 돕는 기능이며, 공유 전 선택 영역을 최종 검토할 책임은 사용자에게 있습니다.</p></> },
  { title: "온디바이스 사진 및 OCR 처리", content: <p>OCR, 민감정보 탐지, 영역 검토, 가림 렌더링 및 지원되는 메타데이터 제거·정리는 iPhone에서 이루어집니다. Privune 처리 중 사진은 기기에 남아 있습니다. Privune은 사진, OCR 텍스트 또는 탐지된 민감정보를 JonnyLab에 업로드하지 않습니다.</p> },
  { title: "민감정보 탐지", content: <p>Privune은 인식된 텍스트와 이미지 영역을 분석해 민감할 수 있는 정보를 제안합니다. 이미지 품질, 텍스트 배치, 언어 및 기타 요인에 따라 제안이 누락되거나 잘못될 수 있습니다. Privune은 모든 민감정보 탐지를 보장하지 않으며 법률, 규제 준수, 보안 또는 전문 검토를 대신하지 않습니다.</p> },
  { title: "원본 사진 및 안전한 사본", content: <><p>Privune은 원본 사진을 수정하지 않습니다. 사용자가 선택 영역을 검토하고 조정한 후 선택한 단색 가림 또는 픽셀화 효과가 적용된 별도의 안전한 사본을 렌더링합니다.</p><p>저장하거나 공유하기 전에 영역과 생성된 안전한 사본을 확인해야 합니다. 사진 보관함에 저장된 안전한 사본은 사용자가 iOS의 기능으로 삭제할 때까지 남아 있습니다.</p></> },
  { title: "메타데이터 제거 및 정리", content: <p>Privune은 안전한 사본을 만들 때 위치/GPS, 카메라 제조사·모델, 촬영 날짜, EXIF, TIFF, IPTC, 작성자, 설명 및 저작권 필드 등 지원되는 메타데이터를 존재하는 범위에서 제거합니다. 이미지 형식에는 지원되지 않거나 독점적인 필드가 있을 수 있으므로 모든 파일에서 가능한 모든 메타데이터가 제거된다고 보장하지 않습니다.</p> },
  { title: "임시 파일", content: <p>Privune은 미리보기, 저장 또는 공유를 위해 안전한 사본의 임시 파일을 기기에 생성할 수 있습니다. 해당 파일은 앱 수명 주기와 정리 규칙에 따라 삭제되며, 운영체제 동작에 따라 정확한 시점은 달라질 수 있습니다. 사진 보관함에 저장한 안전한 사본은 사용자가 삭제할 때까지 유지됩니다.</p> },
  { title: "구매 및 RevenueCat", content: <><p>Apple은 자체 약관과 정책에 따라 App Store 거래, 결제, 구독 갱신·취소 및 환불 요청을 처리합니다. JonnyLab은 전체 결제 카드 정보를 수신하거나 저장하지 않습니다.</p><p>Privune은 구매 및 이용 권한 관리 서비스인 RevenueCat을 사용합니다. RevenueCat은 자체 <a href="https://www.revenuecat.com/privacy-policy/" target="_blank" rel="noopener noreferrer">개인정보 처리방침</a>에 따라 구매 관련 식별자, 제품·이용 권한 정보, 거래·영수증 정보, 기기·운영체제 정보 및 익명 앱 사용자 식별자를 처리할 수 있습니다. RevenueCat은 Privune으로부터 사진, OCR 텍스트 또는 탐지된 민감정보를 받지 않습니다.</p></> },
  { title: "JonnyLab이 수집하지 않는 정보", content: <p>JonnyLab은 Privune 사용자 계정 시스템이나 자체 백엔드를 운영하지 않습니다. Privune은 사진, OCR 텍스트, 탐지 결과, 가림 영역, 내보내기 기록 또는 저장된 안전한 사본을 JonnyLab에 전송하지 않습니다. 앱은 OCR 결과를 영구 저장하거나 내보내기 기록을 유지하지 않습니다.</p> },
  { title: "분석 및 추적", content: <p>Privune은 광고 SDK 또는 분석 SDK를 사용하지 않습니다. JonnyLab은 Privune으로 광고 프로필을 만들거나 다른 회사의 앱 또는 웹사이트 전반에서 사용자의 활동을 추적하지 않습니다.</p> },
  { title: "네트워크 접근", content: <p>핵심 사진 선택, OCR, 탐지, 검토, 가림 및 내보내기에는 서버로 콘텐츠를 업로드할 필요가 없습니다. Apple과 RevenueCat은 구매, 구독, 이용 권한 및 구매 복원 작업을 위해 네트워크를 사용할 수 있으며, 구매 관련 정보에는 각 서비스의 약관과 방침이 적용됩니다.</p> },
  { title: "사진 보관함 권한", content: <p>Privune은 사용자가 사진을 선택하고 안전한 사본을 저장하는 데 필요한 사진 접근 권한을 요청합니다. 사용자는 iOS 설정에서 권한을 제한하거나 철회할 수 있습니다. 접근이 제한되거나 거부되면 일부 선택 또는 저장 기능이 작동하지 않을 수 있습니다. Privune은 사용자가 시작한 사진 작업을 제공하는 목적으로만 접근합니다.</p> },
  { title: "데이터 보유", content: <><p>OCR 텍스트, 탐지된 민감정보 및 편집 상태는 진행 중인 작업을 위해 로컬로 사용되며 JonnyLab이 보유하지 않습니다. 임시 파일은 위 설명에 따라 처리됩니다. 저장된 안전한 사본은 사용자가 삭제할 때까지 사진 보관함에 남고, 원본 사진은 계속 사용자가 관리합니다.</p><p>Apple과 RevenueCat은 자체 방침, 법적 의무 및 서비스 요건에 따라 구매 관련 정보를 보유할 수 있습니다.</p></> },
  { title: "아동의 개인정보", content: <p>Privune은 만 13세 미만 아동을 대상으로 하지 않습니다. Privune에는 계정이나 백엔드가 없으므로 JonnyLab이 이를 통해 아동의 개인정보를 고의로 수집하지 않습니다. 아동이 지원 문의를 통해 JonnyLab에 직접 정보를 보냈다고 생각되면 검토할 수 있도록 연락해 주세요.</p> },
  { title: "보안", content: <p>Privune은 사진을 로컬로 처리하고 계정, 업로드, 분석 및 자체 백엔드를 사용하지 않아 정보 노출을 줄입니다. 그러나 어떠한 기기, 소프트웨어 또는 전송 방식도 절대적으로 안전하지 않습니다. iPhone을 보호하고 모든 안전한 사본을 검토하며 저장·공유 위치를 신중하게 선택하세요.</p> },
  { title: "해외 사용자", content: <p>핵심 사진 처리는 기기에서 이루어집니다. Apple 또는 RevenueCat은 자체 방침과 적용되는 보호조치에 따라 사용자의 국가 외 지역에서 구매 관련 정보를 처리할 수 있습니다. 개인정보 권리는 지역에 따라 다를 수 있으므로 Privune 관련 문의나 요청은 연락처로 보내주세요.</p> },
  { title: "방침 변경", content: <p>Privune, 플랫폼 요구사항, 제3자 서비스 또는 관련 법률의 변경을 반영하기 위해 본 방침을 업데이트할 수 있습니다. 개정 방침을 이 URL에 게시하고 시행일을 수정합니다.</p> },
  { title: "문의", content: <p>Privune 개인정보 관련 문의 또는 요청은 JonnyLab의 <a href="mailto:support@jonnylab.app">support@jonnylab.app</a>으로 보내주세요. 사용자가 스스로 정리된 예시를 공유하기로 선택한 경우가 아니라면 민감정보가 포함된 원본 사진을 보내지 마세요.</p> },
];

export default function PrivunePrivacyKoPage() {
  return <PrivuneLegalPage lang="ko" title="개인정보 처리방침" effectiveDate="시행일: 2026년 7월 23일" alternateHref="/privune/privacy" alternateLabel="View in English" sections={sections} otherDocumentHref="/privune/terms/ko" otherDocumentLabel="이용약관" />;
}
