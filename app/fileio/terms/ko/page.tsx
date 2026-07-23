import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "Fileio 서비스 이용약관 | JonnyLab",
  description:
    "JonnyLab이 제공하는 로컬 파일 관리자 및 문서 스캐너 Fileio의 서비스 이용약관입니다.",
  path: "/fileio/terms/ko",
  locale: "ko_KR",
});

const sections = [
  {
    title: "약관 동의",
    paragraphs: [
      "본 서비스 이용약관은 JonnyLab이 제공하는 Fileio: File Manager & Scanner의 이용에 적용됩니다. Fileio를 다운로드하거나 이용하면 본 약관에 동의하는 것으로 간주합니다. 동의하지 않는 경우 앱 사용을 중단할 수 있습니다.",
    ],
  },
  {
    title: "서비스 설명",
    paragraphs: [
      "Fileio는 로컬 파일 가져오기 및 관리, 문서·이미지 보기, 문서 스캔 및 PDF 생성, 검색, 정렬, 최근 파일, 즐겨찾기, 이름 변경, 삭제, 공유 및 다른 앱으로 열기 기능을 제공합니다.",
      "Fileio는 계정, 클라우드 연결, 광고, 구독, 인앱 구매 또는 유료 기능 등급을 제공하지 않습니다.",
    ],
  },
  {
    title: "로컬 전용 동작",
    paragraphs: [
      "파일과 앱 메타데이터는 사용자의 기기에서 처리됩니다. JonnyLab은 사용자 파일을 서버에 저장, 동기화 또는 백업하지 않으며 Fileio는 자체 클라우드 백업을 제공하지 않습니다.",
      "중요한 파일을 보존하고 필요한 기기 백업을 마련할 책임은 사용자에게 있습니다. Fileio의 Android 백업은 비활성화되어 있으므로 앱이 관리하는 파일이나 로컬 메타데이터 복원을 앱에 의존해서는 안 됩니다.",
    ],
  },
  {
    title: "사용자 책임",
    paragraphs: [
      "사용자는 Fileio에서 접근, 가져오기, 스캔, 관리 또는 공유하는 파일에 대한 적법한 권한을 보유해야 합니다. 앱을 불법적으로 사용하거나 타인의 저작권, 개인정보, 기밀 또는 기타 권리를 침해하는 방식으로 사용해서는 안 됩니다.",
      "기기를 보호하고 파일 작업을 확인하며 중요한 파일을 별도로 보관할 책임은 사용자에게 있습니다.",
    ],
  },
  {
    title: "파일 작업 및 데이터 손실",
    paragraphs: [
      "이름 변경, 삭제, Reset App Data 및 앱 제거는 파일 또는 로컬 메타데이터를 변경하거나 삭제할 수 있습니다. 삭제를 수반하는 작업을 실행하기 전에 중요한 파일을 사용자가 관리하는 별도 위치에 보관하세요.",
      "공유 또는 다른 앱으로 열기를 사용하면 선택한 외부 앱이 파일을 전달받은 이후 해당 파일을 통제합니다. Fileio는 데이터 복구 또는 클라우드 백업을 제공하지 않습니다.",
    ],
  },
  {
    title: "카메라 및 스캔",
    paragraphs: [
      "사용자는 촬영하거나 스캔할 문서에 대한 적법한 권한을 보유해야 합니다. Fileio는 사용자가 문서 스캔을 시작할 때에만 카메라를 사용하며, 촬영 이미지를 기기에서 로컬로 처리하여 PDF를 생성합니다.",
      "JonnyLab은 스캔 품질, 문서 정확성 또는 특정 목적에 대한 스캔 PDF의 적합성을 보장하지 않습니다. Fileio는 OCR 기능을 제공하지 않습니다.",
    ],
  },
  {
    title: "제3자 서비스",
    paragraphs: [
      "Fileio는 Android 시스템 선택기, 시스템 공유 화면, 외부 뷰어 앱 및 Google Play와 상호작용할 수 있습니다. 이러한 운영체제 기능, 앱 및 서비스는 각 제공자가 통제하며 해당 약관과 개인정보 처리방침이 적용됩니다.",
      "Fileio는 현재 Google Drive 또는 Dropbox와 연동하지 않습니다.",
    ],
  },
  {
    title: "유료 서비스 없음",
    paragraphs: [
      "Fileio는 현재 무료이며 구독 또는 인앱 구매가 없습니다. 향후 서비스 모델이 변경되는 경우 새로운 조건이나 비용을 앱 또는 스토어 등록정보에서 별도로 안내할 수 있습니다. 이 문구는 유료 서비스 계획을 발표하는 것이 아닙니다.",
    ],
  },
  {
    title: "가용성 및 유지보수",
    paragraphs: [
      "JonnyLab은 Fileio 또는 특정 기능을 수정, 유지보수, 중단 또는 종료할 수 있습니다. 모든 기능이 계속 제공되거나 업데이트 및 새로운 기능이 지속될 것을 보장하지 않습니다.",
      "보안 및 플랫폼 정책 호환성을 유지하기 위해 합리적인 노력을 할 수 있으나 중단 없는 제공을 보장하지 않습니다.",
    ],
  },
  {
    title: "보증 부인",
    paragraphs: [
      "관련 법률이 허용하는 범위에서 Fileio는 '있는 그대로' 및 '제공 가능한 상태로' 제공됩니다. JonnyLab은 중단 또는 오류 없는 동작, 모든 파일 형식·기기·운영체제 버전·외부 앱과의 호환성 또는 파일 복구를 보장하지 않습니다.",
      "본 약관은 관련 법률에 따라 제한할 수 없는 보증이나 소비자 권리를 제한하지 않습니다.",
    ],
  },
  {
    title: "책임의 제한",
    paragraphs: [
      "관련 법률이 허용하는 범위에서 JonnyLab은 데이터 손실, 기기 문제 또는 사용자가 선택한 외부 앱의 행위를 포함하여 Fileio로 인해 발생하는 간접적, 부수적, 특별 또는 결과적 손실에 대해 책임을 지지 않습니다.",
      "법률상 배제하거나 제한할 수 없는 책임에는 본 제한이 적용되지 않습니다.",
    ],
  },
  {
    title: "약관 변경",
    paragraphs: [
      "Fileio 또는 관련 요건이 변경되면 본 약관을 갱신할 수 있습니다. 변경된 약관은 이 페이지에 게시하고 최종 업데이트 날짜를 변경합니다.",
    ],
  },
  {
    title: "준거법",
    paragraphs: [
      "본 약관에는 적용 가능한 법률이 적용됩니다. 본 약관은 사용자에게 적용되는 법률에 따라 포기할 수 없는 권리 또는 구제수단을 대체하지 않습니다.",
    ],
  },
  {
    title: "문의",
    paragraphs: [
      "본 약관에 관한 문의는 JonnyLab의 support@jonnylab.app으로 보내주세요.",
    ],
  },
];

export default function FileioTermsKoPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link href="/fileio" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950">← Fileio</Link>
      <h1 className="mt-6 mb-2 text-3xl font-bold tracking-tight text-zinc-950">Fileio 서비스 이용약관</h1>
      <p className="text-sm text-zinc-500">최종 업데이트: 2026년 7월 23일</p>
      <Link href="/fileio/terms" className="mt-6 mb-10 inline-block text-sm text-indigo-700 hover:text-indigo-600">View in English</Link>
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
        <Link href="/fileio/privacy/ko" className="font-medium text-indigo-700 hover:text-indigo-600">개인정보 처리방침</Link>
        <Link href="/fileio/support" className="font-medium text-indigo-700 hover:text-indigo-600">지원</Link>
      </nav>
    </main>
  );
}
