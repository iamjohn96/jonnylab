import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "Fileio 개인정보 처리방침 | JonnyLab",
  description:
    "Fileio의 파일 및 개인정보 처리 방식을 확인하세요. Fileio는 계정, 클라우드 연결, 광고, 분석 또는 추적 없이 기기에서 로컬로 동작합니다.",
  path: "/fileio/privacy/ko",
  locale: "ko_KR",
});

const sections = [
  {
    title: "개요",
    paragraphs: [
      "Fileio: File Manager & Scanner는 Android용 로컬 파일 관리자, 문서 뷰어 및 문서 스캐너입니다. 앱 기능은 사용자의 기기에서 동작하며 계정이 필요하지 않습니다.",
      "Fileio는 개인정보 보호를 우선하는 로컬 앱입니다. 클라우드 저장소에 연결하지 않고, 광고를 표시하지 않으며, 분석 또는 추적 SDK를 사용하지 않습니다.",
    ],
  },
  {
    title: "Fileio가 수집하지 않는 정보",
    paragraphs: [
      "Fileio는 이름, 이메일 주소, 연락처, 위치, 광고 식별자, 결제 또는 구독 정보, 가져오거나 스캔한 파일의 내용, Google Drive 또는 Dropbox 데이터, 앱 이용 분석 정보 및 행동 추적 정보를 JonnyLab 서버로 수집하거나 전송하지 않습니다.",
      "앱 기능을 제공하기 위해 파일명, 파일 URI, 최근 파일 기록, 즐겨찾기, 설정 및 이와 유사한 메타데이터를 사용자의 기기에서 로컬로 처리할 수 있습니다. 이러한 로컬 처리는 JonnyLab이 해당 정보를 수집한다는 뜻이 아닙니다.",
    ],
  },
  {
    title: "로컬 파일 및 메타데이터",
    paragraphs: [
      "가져온 파일, 스캔한 PDF, 최근 파일 정보, 즐겨찾기 및 설정은 사용자의 기기에 저장됩니다. JonnyLab 서버로 자동 업로드되지 않으며, Fileio는 동기화 또는 클라우드 백업 기능을 제공하지 않습니다.",
      "Reset App Data를 사용하면 Fileio 앱 내부에서 관리하는 파일과 로컬 메타데이터를 삭제할 수 있습니다. 앱을 제거하면 Android 및 기기의 동작에 따라 앱 전용 저장 데이터가 삭제될 수 있습니다. 초기화 또는 앱 제거 전에 중요한 파일을 별도로 보관하세요.",
    ],
  },
  {
    title: "문서 및 사진 선택",
    paragraphs: [
      "Fileio는 Android 시스템 Document Picker와 Photo Picker를 사용합니다. 사용자가 명시적으로 선택한 파일 또는 이미지만 가져오며, 전체 사진·동영상 또는 저장소 라이브러리에 대한 광범위한 접근 권한을 요청하지 않습니다.",
      "선택한 항목은 사용자가 요청한 기능을 수행하기 위해 기기에서 로컬로 처리됩니다.",
    ],
  },
  {
    title: "카메라",
    paragraphs: [
      "문서 스캔 기능을 사용할 때에만 카메라를 사용합니다. 촬영한 이미지는 PDF 생성 및 로컬 저장을 위해 기기에서 처리됩니다.",
      "Fileio는 스캔을 위해 마이크 또는 위치 정보를 사용하지 않습니다.",
    ],
  },
  {
    title: "공유 및 다른 앱으로 열기",
    paragraphs: [
      "사용자가 직접 공유 또는 다른 앱으로 열기를 선택하고 대상을 지정한 경우에만 선택한 파일이 외부 앱 또는 서비스에 전달됩니다. Fileio는 사용자의 동작 없이 파일을 외부로 자동 공유하지 않습니다.",
      "파일이 다른 앱 또는 서비스에 전달된 이후에는 해당 제3자의 개인정보 처리방침과 처리 방식이 적용됩니다.",
    ],
  },
  {
    title: "클라우드 서비스 및 계정",
    paragraphs: [
      "Fileio는 Google Drive 또는 Dropbox에 연결하지 않습니다. 해당 연동 기능은 제거되었습니다. OAuth 로그인, Fileio 계정 또는 서버 측 사용자 인증 기능이 없습니다.",
      "Fileio는 사용자 인증정보나 클라우드 접근 토큰을 수집하거나 저장하지 않습니다.",
    ],
  },
  {
    title: "광고, 분석 및 추적",
    paragraphs: [
      "Fileio는 광고를 표시하지 않고 AdMob 또는 다른 광고 SDK를 포함하지 않으며 Android 광고 식별자를 사용하지 않습니다.",
      "Fileio는 분석 또는 추적 SDK를 사용하지 않습니다.",
    ],
  },
  {
    title: "결제 및 구독",
    paragraphs: [
      "Fileio는 완전 무료입니다. RevenueCat 또는 다른 결제 SDK를 사용하지 않으며, 구독, 인앱 구매, 유료 기능 제한, Premium 또는 Pro 등급이 없습니다. 모든 핵심 기능을 결제 없이 사용할 수 있습니다.",
      "Google Play는 앱 다운로드 및 스토어 운영과 관련된 정보를 Google의 정책에 따라 독립적으로 처리할 수 있습니다. 이는 Fileio의 로컬 파일 처리와 별개입니다.",
    ],
  },
  {
    title: "보안",
    paragraphs: [
      "Fileio는 로컬 처리와 최소 권한 원칙을 중심으로 설계되었으며, 광범위한 미디어 또는 저장소 권한 대신 Android 시스템 선택기를 사용합니다. 앱의 Android 백업은 비활성화되어 있습니다.",
      "어떤 시스템도 절대적인 보안을 보장할 수 없습니다. JonnyLab은 사용자의 기기와 운영체제 또는 사용자가 공유 대상으로 선택한 외부 앱과 서비스의 보안을 통제하지 않습니다. 기기를 안전하게 보호하고 공유 전 대상을 확인하세요.",
    ],
  },
  {
    title: "아동의 개인정보",
    paragraphs: [
      "Fileio는 아동의 개인정보를 고의로 수집하지 않습니다. 앱은 사용자 계정이나 Fileio 파일의 서버 측 저장 기능을 제공하지 않습니다.",
    ],
  },
  {
    title: "처리방침 변경",
    paragraphs: [
      "Fileio 또는 정보 처리 방식이 변경되면 본 개인정보 처리방침을 갱신할 수 있습니다. 변경된 방침은 이 페이지에 게시하고 최종 업데이트 날짜를 변경합니다.",
    ],
  },
  {
    title: "문의",
    paragraphs: [
      "본 개인정보 처리방침에 관한 문의는 JonnyLab의 support@jonnylab.app으로 보내주세요.",
    ],
  },
];

export default function FileioPrivacyKoPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link href="/fileio" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950">← Fileio</Link>
      <h1 className="mt-6 mb-2 text-3xl font-bold tracking-tight text-zinc-950">Fileio 개인정보 처리방침</h1>
      <p className="text-sm text-zinc-500">최종 업데이트: 2026년 7월 23일</p>
      <Link href="/fileio/privacy" className="mt-6 mb-10 inline-block text-sm text-indigo-700 hover:text-indigo-600">View in English</Link>
      <div className="space-y-10">
        {sections.map((section, index) => (
          <section key={section.title}>
            <h2 className="mb-3 text-base font-semibold text-zinc-950">{index + 1}. {section.title}</h2>
            <div className="space-y-3">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-zinc-600">{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
      <nav aria-label="Fileio 법적 문서 링크" className="mt-12 flex flex-wrap gap-5 border-t border-zinc-200 pt-6 text-sm">
        <Link href="/fileio/terms/ko" className="font-medium text-indigo-700 hover:text-indigo-600">서비스 이용약관</Link>
        <Link href="/fileio/support" className="font-medium text-indigo-700 hover:text-indigo-600">지원</Link>
      </nav>
    </main>
  );
}
