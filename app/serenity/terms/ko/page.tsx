import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용약관 — Serenity",
  description: "Serenity - Sleep & Relax 이용약관",
};

const sections = [
  {
    title: "약관 동의",
    body: "Serenity를 다운로드, 접근, 구매 또는 사용하면 본 이용약관에 동의하는 것으로 간주됩니다. 약관에 동의하지 않는 경우 앱을 사용하지 마세요.",
  },
  {
    title: "Serenity 소개",
    body: "Serenity는 수면, 휴식, 집중, 명상 및 이와 유사한 개인 활동을 지원하기 위한 사운드 재생, 사운드 믹싱, 프리셋 저장 및 수면 타이머 기능을 제공합니다.",
  },
  {
    title: "의료 조언 아님",
    body: "Serenity는 일반적인 웰니스 앱이며 의료기기가 아닙니다. 의료 조언, 진단 또는 치료를 제공하지 않으며 전문적인 진료를 대체하지 않습니다. 수면이나 건강에 관한 문제가 있다면 자격을 갖춘 의료 전문가와 상담하세요.",
  },
  {
    title: "안전한 사용",
    body: "편안한 음량으로 사용하고, 운전, 자전거 이용, 기계 조작 등 주변 상황 인식이 저하되면 위험한 환경에서는 사용하지 마세요. 앱을 안전하게 사용할 책임은 사용자에게 있습니다.",
  },
  {
    title: "구독 및 구매",
    body: "Serenity는 자동 갱신되는 월간 또는 연간 구독과 일회성 평생 이용권을 제공할 수 있습니다. 가격과 구매 가능한 상품은 결제 전에 표시됩니다. 구독은 갱신일 전에 취소하지 않으면 자동으로 갱신됩니다. 구매, 취소 및 환불은 Google Play를 통해 관리되며 관련 약관이 적용됩니다.",
  },
  {
    title: "라이선스 및 허용되는 사용",
    body: "Jonny Lab은 Serenity를 사용할 수 있는 제한적이고 개인적이며 비독점적이고 양도 불가능하며 철회 가능한 라이선스를 부여합니다. 관련 법률에서 허용하는 경우를 제외하고 앱이나 사운드 콘텐츠를 복제, 재배포, 재판매, 리버스 엔지니어링, 방해 또는 오용해서는 안 됩니다.",
  },
  {
    title: "서비스 제공 및 변경",
    body: "기능이나 사운드 콘텐츠를 추가, 변경, 중단 또는 종료할 수 있으며 본 약관도 변경할 수 있습니다. 변경된 약관은 새로운 시행일과 함께 이 페이지에 게시됩니다.",
  },
  {
    title: "면책 및 책임 제한",
    body: "관련 법률이 허용하는 범위에서 Serenity는 현재 상태 및 제공 가능한 상태로 제공됩니다. 앱이 항상 중단 없이 작동하거나 수면 또는 기타 결과를 개선한다고 보장하지 않습니다. 관련 법률이 허용하는 범위에서 Jonny Lab은 앱 사용으로 발생한 간접적, 부수적 또는 결과적 손해에 대해 책임을 지지 않습니다.",
  },
  {
    title: "문의",
    body: "본 이용약관에 관한 문의는 support@jonnylab.app으로 보내주세요.",
  },
];

export default function SerenityTermsKoPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/serenity"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
      >
        ← Serenity
      </Link>

      <h1 className="mt-6 mb-2 text-3xl font-bold tracking-tight text-zinc-950">
        Serenity 이용약관
      </h1>
      <p className="mb-12 text-sm text-zinc-500">시행일: 2026년 6월 14일</p>
      <Link
        href="/serenity/terms"
        className="mb-10 inline-block text-sm text-indigo-600 transition-colors hover:text-indigo-500"
      >
        View in English
      </Link>

      <div className="space-y-10">
        {sections.map((section, index) => (
          <section key={section.title}>
            <h2 className="mb-2 text-base font-semibold text-zinc-950">
              {index + 1}. {section.title}
            </h2>
            <p className="leading-relaxed text-zinc-600">{section.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-6 text-sm">
        <a
          href="mailto:support@jonnylab.app"
          className="text-indigo-600 transition-colors hover:text-indigo-500"
        >
          support@jonnylab.app 문의
        </a>
      </div>
    </main>
  );
}
