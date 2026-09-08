import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "도란 개인정보처리방침 | JonnyLab",
  description: "Android MVP 도란의 문자 원문 처리, 로컬 완료 기록, 보관 및 삭제 방식을 설명합니다.",
  path: "/doran/privacy",
  locale: "ko_KR",
});

const sections = [
  { title: "1. 개요", body: ["본 개인정보처리방침은 JonnyLab이 Android용 도란 앱(패키지명 com.jonnylab.doran)에서 정보를 처리하는 방식을 설명합니다. 도란은 만 18세 이상 사용자를 대상으로 하며, 현재 사용자 계정 없이 작동합니다."] },
  { title: "2. 사용자가 입력한 문자 원문", body: ["사용자가 직접 입력한 문자 원문은 위험 신호를 살펴보고 안내를 제공하는 동안 앱 메모리에서만 처리됩니다.", "분석이 끝나면 문자 원문을 앱 화면 상태에서 제거합니다. 문자 원문은 JonnyLab 서버로 전송하지 않으며 Room, DataStore, 파일 또는 기타 영구 저장소에 저장하지 않습니다.", "문자 원문을 로그, 분석 정보 또는 오류 보고서에 기록하지 않습니다. 현재 도란은 SMS 읽기 권한을 요청하지 않습니다."] },
  { title: "3. 기기에 저장될 수 있는 완료 기록", body: ["사용자가 행동을 완료한 경우 임의로 생성된 작업 식별자, 시나리오 유형, 완료 상태, 위험 단계, 사용자가 선택한 안전 행동, 스키마 버전, 시작 및 완료 시각과 같은 비민감 메타데이터를 기기 내 Room 데이터베이스에 저장할 수 있습니다.", "문자 원문, 전화번호, URL, 계좌번호, 인증번호 또는 기타 문자 내용은 완료 기록에 포함하지 않습니다."] },
  { title: "4. 권한 및 제3자 서비스", body: ["현재 버전은 SMS 읽기 권한을 요청하지 않으며 광고 SDK, analytics SDK, crash reporting SDK, 외부 AI SDK 또는 Supabase SDK를 사용하지 않습니다.", "현재 도란은 사용자 데이터를 기기 밖으로 전송하거나 제3자에게 제공하지 않습니다."] },
  { title: "5. 보관 및 삭제", body: ["문자 원문은 분석 과정에서만 일시적으로 처리되며 별도로 보관하지 않습니다.", "비민감 완료 기록은 앱의 로컬 데이터로 저장될 수 있습니다. 사용자가 Android 설정에서 도란의 앱 데이터를 삭제하거나 앱을 제거하면 운영체제 동작에 따라 함께 삭제될 수 있습니다."] },
  { title: "6. 보안", body: ["도란은 개인정보 최소 수집을 기본 원칙으로 삼습니다. 다만 어떠한 앱이나 전자적 저장 방식도 절대적인 보안을 보장할 수는 없습니다. 기기 잠금과 운영체제 업데이트 등 기본 보안 설정을 유지해 주세요."] },
  { title: "7. 아동의 개인정보", body: ["도란은 만 18세 이상 사용자를 대상으로 하며 아동을 대상으로 설계되지 않았습니다. JonnyLab은 도란을 통해 아동의 개인정보를 고의로 수집하지 않습니다."] },
  { title: "8. 향후 기능 변경", body: ["Gemini 또는 다른 AI 서비스, Supabase 및 서버 통신, 계정과 로그인, 가족 공유, SMS 또는 OCR, analytics와 crash reporting, 광고, 결제 또는 구독, 클라우드 동기화, 사용자 데이터의 기기 외부 전송 기능을 추가하기 전에 본 방침과 Google Play 데이터 안전 선언을 다시 검토하고 필요한 내용을 갱신합니다."] },
  { title: "9. 문의", body: ["개인정보 관련 문의는 support@jonnylab.app 또는 +82 10-8450-9620으로 연락해 주세요. 운영 주체는 JonnyLab입니다."] },
];

export default function DoranPrivacyPage() {
  return <main className="mx-auto max-w-2xl px-6 py-20"><Link href="/doran" className="text-sm text-zinc-500 hover:text-zinc-950">← 도란</Link><h1 className="mt-6 text-3xl font-bold tracking-tight">도란 개인정보처리방침</h1><p className="mt-2 text-sm text-zinc-500">시행일 및 최종 수정일: 2026년 8월 26일</p><div className="mt-12 space-y-10">{sections.map(section => <section key={section.title}><h2 className="text-lg font-bold">{section.title}</h2><div className="mt-3 space-y-3">{section.body.map(p => <p key={p} className="leading-7 text-zinc-700">{p}</p>)}</div></section>)}</div><nav className="mt-12 flex flex-wrap gap-5 border-t border-zinc-200 pt-6 text-sm"><Link href="/doran/terms" className="font-semibold text-amber-800">이용약관</Link><a href="mailto:support@jonnylab.app" className="font-semibold text-amber-800">문의하기</a></nav></main>;
}
