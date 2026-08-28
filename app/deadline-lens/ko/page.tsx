import Link from "next/link";
import DeadlineLensLanguageSwitcher from "@/components/DeadlineLensLanguageSwitcher";
import DeadlineLensVisual from "@/components/DeadlineLensVisual";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "Deadline Lens — 문서 속 중요한 일을 놓치지 마세요 | JonnyLab",
  description: "Deadline Lens는 문서 속 날짜와 할 일을 기기 안에서 찾아 마감일과 로컬 알림으로 정리하는 무료 Android 앱입니다.",
  path: "/deadline-lens/ko",
  locale: "ko_KR",
});

const features = [
  ["촬영 또는 가져오기", "시스템 카메라로 문서를 촬영하거나 Android 시스템 이미지 선택기로 이미지를 고릅니다."],
  ["날짜와 할 일 찾기", "기기 내 한국어 OCR이 문서를 업로드하지 않고 텍스트, 날짜 및 관련 작업을 찾습니다."],
  ["확인하고 저장하기", "결과를 확인하고 수정한 뒤 기기의 로컬 데이터베이스에서 검색하고 관리합니다."],
  ["로컬 알림 받기", "원하는 알림 시점을 정하고 임박, 예정, 완료 및 지난 일정을 관리합니다."],
];
const privacy = ["기기 내 처리", "계정 없음", "광고 없음", "추적 없음", "클라우드 업로드 없음"];
const flow = ["문서 촬영 또는 선택", "텍스트와 날짜 인식", "결과 확인 및 수정", "마감일 저장과 알림 설정"];

export default function DeadlineLensKoPage() {
  return (
    <main lang="ko">
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-8"><div className="flex justify-end"><DeadlineLensLanguageSwitcher current="ko" englishHref="/deadline-lens" koreanHref="/deadline-lens/ko" /></div></div>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-8 lg:grid-cols-[1fr_440px] lg:items-center lg:pb-20">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">Deadline Lens · Android · JonnyLab</p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-6xl">문서 속 중요한 일을 놓치지 마세요</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">Deadline Lens는 문서나 이미지에서 날짜와 관련 작업을 찾아 결과를 확인할 수 있게 하고, 마감일과 알림을 Android 기기 안에 보관합니다.</p>
            <p className="mt-4 font-semibold text-zinc-900" lang="en">Never miss an important deadline in your documents.</p>
            <div className="mt-8 flex flex-wrap gap-3"><span className="rounded-lg bg-zinc-950 px-5 py-3 text-sm font-semibold text-white">Android 출시 준비 중</span><Link href="/deadline-lens/privacy/ko" className="rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:border-zinc-500">개인정보처리방침</Link></div>
            <p className="mt-5 text-sm text-zinc-500">무료 · 광고 없음 · 회원가입 없음 · 만 13세 이상</p>
          </div>
          <DeadlineLensVisual korean />
        </div>
      </section>
      <section className="bg-zinc-50"><div className="mx-auto max-w-6xl px-6 py-16"><p className="mb-2 text-sm font-semibold text-indigo-700">집중을 돕는 생산성 도구</p><h2 className="max-w-2xl text-3xl font-bold tracking-tight text-zinc-950">문서를 분명한 마감일로</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{features.map(([title, body], index) => <article key={title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"><span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-700">{index + 1}</span><h3 className="font-semibold text-zinc-950">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-600">{body}</p></article>)}</div></div></section>
      <section className="bg-zinc-950 text-white"><div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1.2fr] lg:items-center"><div><p className="mb-2 text-sm font-semibold text-indigo-300">개인정보 보호 우선</p><h2 className="text-3xl font-bold tracking-tight">문서는 기기 밖으로 나가지 않습니다</h2><p className="mt-4 leading-7 text-zinc-300">이미지, 인식한 텍스트 및 추출 결과는 기기 안에서 처리됩니다. Deadline Lens에는 앱 자체 인터넷 통신, 계정, 광고, 분석, 추적 또는 클라우드 동기화 기능이 없습니다.</p></div><div className="grid gap-3 sm:grid-cols-2">{privacy.map((item) => <div key={item} className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-4 text-sm font-semibold"><span className="mr-2 text-indigo-300">✓</span>{item}</div>)}</div></div></section>
      <section className="bg-white"><div className="mx-auto max-w-6xl px-6 py-16"><div className="max-w-2xl"><p className="mb-2 text-sm font-semibold text-amber-700">간단한 사용 흐름</p><h2 className="text-3xl font-bold tracking-tight text-zinc-950">모든 단계에서 사용자가 확인합니다</h2></div><ol className="mt-8 grid gap-4 md:grid-cols-4">{flow.map((item, index) => <li key={item} className="relative border-l-2 border-indigo-200 pl-5"><p className="text-xs font-bold text-indigo-700">{index + 1}단계</p><p className="mt-2 font-semibold text-zinc-900">{item}</p></li>)}</ol><div className="mt-14 flex flex-wrap gap-5 border-t border-zinc-200 pt-8 text-sm font-semibold"><Link href="/deadline-lens/privacy/ko" className="text-indigo-700 hover:text-indigo-600">개인정보처리방침 보기 →</Link><a href="mailto:support@jonnylab.app" className="text-zinc-700 hover:text-zinc-950">support@jonnylab.app 문의</a></div></div></section>
    </main>
  );
}
