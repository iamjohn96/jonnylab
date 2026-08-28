import Link from "next/link";
import DeadlineLensLanguageSwitcher from "@/components/DeadlineLensLanguageSwitcher";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "Deadline Lens 개인정보처리방침 | JonnyLab",
  description: "JonnyLab의 개인정보 보호 중심 Android 생산성 앱 Deadline Lens 개인정보처리방침입니다.",
  path: "/deadline-lens/privacy/ko",
  locale: "ko_KR",
});

const sections = [
  ["서비스 제공자", ["Deadline Lens는 JonnyLab이 제공합니다. 본 방침에 관한 문의는 support@jonnylab.app으로 보내실 수 있습니다."]],
  ["적용 대상", ["본 개인정보처리방침은 Android 앱 Deadline Lens(패키지명: com.jonnylab.deadlinelens)에 적용됩니다."]],
  ["수집하는 개인정보", ["Deadline Lens는 개인정보를 수집하거나 JonnyLab 서버로 전송하지 않습니다."]],
  ["수집하지 않는 정보", ["광고 식별자, 위치, 연락처, 결제 정보, 건강 정보, 금융 정보, 계정 정보, 문서 이미지, OCR 텍스트, 저장된 마감일 또는 이용 행동 정보를 수집하지 않습니다."]],
  ["이미지와 OCR 텍스트", ["사용자가 촬영하거나 선택한 이미지와 이미지에서 인식한 텍스트는 기기 안에서 처리됩니다. 촬영을 위해 생성한 임시 이미지는 OCR 처리 후 또는 사용자가 취소하면 제거됩니다. Deadline Lens는 문서 이미지나 OCR 결과를 외부 서버로 전송하지 않습니다."]],
  ["로컬 저장 데이터", ["사용자가 추출 결과를 저장하면 일정 제목, 날짜, 작업 내용, 완료 상태 및 알림 설정이 기기의 로컬 데이터베이스에만 저장됩니다. 앱의 Android 백업은 비활성화되어 있습니다."]],
  ["데이터 전송", ["Deadline Lens에는 앱 자체의 인터넷 통신 기능이 없으며 문서 이미지, OCR 텍스트, 일정 정보 또는 기타 개인정보를 JonnyLab 서버로 전송하지 않습니다. 클라우드 동기화나 클라우드 백업을 제공하지 않습니다."]],
  ["광고, 분석 및 추적", ["Deadline Lens에는 광고, 분석 SDK 또는 사용자 행동 추적 서비스가 없습니다. 광고 식별자를 사용하지 않습니다."]],
  ["제3자 기술 사용", ["Deadline Lens는 Google ML Kit의 기기에 포함되는 텍스트 인식 기능을 사용합니다. 앱은 OCR을 위해 사용자의 문서나 OCR 결과를 외부 서버로 전송하지 않습니다. Android 운영체제, 시스템 카메라 앱 및 시스템 이미지 선택기는 플랫폼 또는 사용자가 선택한 앱의 정책에 따라 자체적인 처리를 할 수 있습니다."]],
  ["데이터 보관 및 삭제", ["저장된 마감일은 사용자가 앱에서 삭제하거나 앱 데이터를 제거할 때까지 기기에 남아 있습니다. Deadline Lens에서 저장된 항목을 개별적으로 삭제할 수 있습니다. 앱을 삭제하면 Android 운영체제의 일반적인 앱 제거 절차에 따라 로컬 앱 데이터도 삭제됩니다."]],
  ["아동 개인정보 보호", ["Deadline Lens는 만 13세 이상 사용자를 대상으로 하며 만 13세 미만 아동을 위해 설계된 앱이 아닙니다. 앱이 JonnyLab 서버에서 개인정보를 수집하지 않으므로 JonnyLab은 Deadline Lens를 통해 아동의 개인정보를 고의로 수집하지 않습니다."]],
  ["보안 조치", ["Deadline Lens는 문서를 기기에서 처리하고, 저장 항목을 로컬에 보관하며, Android 앱 백업을 비활성화하고, 앱 자체 인터넷 통신 기능을 두지 않는 방식으로 데이터 노출 가능성을 줄입니다. 어떠한 기기 저장 방식도 위험이 전혀 없다고 보장할 수 없으므로 사용자는 자신의 기기 접근을 보호해야 합니다."]],
  ["개인정보처리방침 변경", ["앱 구조, 기능 또는 데이터 처리 방식이 변경되면 본 개인정보처리방침을 갱신할 수 있습니다. 변경 사항은 갱신된 시행일 또는 최종 업데이트 날짜와 함께 이 페이지에 게시됩니다."]],
  ["문의", ["Deadline Lens 또는 본 개인정보처리방침에 관한 문의 및 요청은 JonnyLab의 support@jonnylab.app으로 보내주세요."]],
  ["시행일", ["본 개인정보처리방침은 2026년 8월 28일부터 시행하며, 최종 업데이트 날짜는 2026년 8월 28일입니다."]],
] as const;

export default function DeadlineLensPrivacyKoPage() {
  return <main lang="ko" className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
    <div className="flex flex-wrap items-center justify-between gap-4"><Link href="/deadline-lens/ko" className="text-sm text-zinc-500 hover:text-zinc-950">← Deadline Lens</Link><DeadlineLensLanguageSwitcher current="ko" englishHref="/deadline-lens/privacy" koreanHref="/deadline-lens/privacy/ko" /></div>
    <header className="mt-10 border-b border-zinc-200 pb-10"><p className="text-sm font-semibold text-indigo-700">JonnyLab · com.jonnylab.deadlinelens</p><h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950">Deadline Lens 개인정보처리방침</h1><p className="mt-4 text-sm text-zinc-500">시행일 및 최종 업데이트: 2026년 8월 28일</p></header>
    <div className="space-y-10 py-10">{sections.map(([title, body], index) => <section key={title}><h2 className="mb-3 text-lg font-semibold text-zinc-950">{index + 1}. {title}</h2><div className="space-y-3">{body.map((paragraph) => <p key={paragraph} className="leading-7 text-zinc-600">{paragraph}</p>)}</div></section>)}</div>
    <div className="border-t border-zinc-200 pt-8 text-sm"><a href="mailto:support@jonnylab.app" className="font-semibold text-indigo-700 hover:text-indigo-600">support@jonnylab.app 문의</a></div>
  </main>;
}
