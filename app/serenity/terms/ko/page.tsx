import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용약관 — Serenity",
  description: "Android 수면/휴식 앱 Serenity의 이용약관입니다.",
};

const sections = [
  {
    title: "동의",
    body: "Serenity를 다운로드, 접근, 구매 또는 사용하면 본 이용약관에 동의하는 것으로 간주됩니다. 동의하지 않으면 앱을 사용하지 마세요.",
  },
  {
    title: "서비스 범위",
    body: "Serenity는 수면, 휴식, 집중 및 이와 유사한 개인 용도를 위한 Android 앱입니다. 사운드 재생, 사운드 믹싱, 프리셋, 수면 타이머 기능을 제공합니다.",
  },
  {
    title: "웰니스 고지",
    body: "Serenity는 일반적인 웰니스 앱이며 의학적 조언, 진단 또는 치료를 제공하지 않습니다. 의료기기가 아니며 전문적인 진료를 대체하지 않습니다.",
  },
  {
    title: "안전한 사용",
    body: "편안한 음량으로 사용하고, 운전, 자전거 이용, 기계 조작처럼 주의력 저하가 위험한 상황에서는 사용하지 마세요.",
  },
  {
    title: "구매",
    body: "Serenity Pro는 월간, 연간, 평생 이용권을 제공할 수 있습니다. 가격은 구매 전에 표시됩니다. 결제 처리, 갱신, 취소, 환불은 Google Play가 자체 약관과 정책에 따라 처리합니다.",
  },
  {
    title: "라이선스",
    body: "Jonny Lab은 Serenity를 사용할 수 있는 제한적이고 개인적이며 비독점적이고 양도 불가능하며 철회 가능한 라이선스를 부여합니다. 관련 법률이 허용하는 경우를 제외하고 앱이나 사운드 콘텐츠를 복제, 재배포, 재판매, 리버스 엔지니어링, 방해 또는 오용해서는 안 됩니다.",
  },
  {
    title: "제공 및 변경",
    body: "기능이나 사운드 콘텐츠를 추가, 변경, 중단 또는 종료할 수 있습니다. 또한 본 약관을 변경할 수 있으며, 새 버전은 새로운 시행일과 함께 이 페이지에 게시됩니다.",
  },
  {
    title: "면책 및 책임 제한",
    body: "관련 법률이 허용하는 범위에서 Serenity는 현재 상태 및 제공 가능한 상태로 제공됩니다. 앱이 중단 없이 항상 동작하거나 특정한 수면 또는 웰니스 결과를 보장하지 않습니다. 관련 법률이 허용하는 범위에서 Jonny Lab은 앱 사용으로 인한 간접적, 부수적 또는 결과적 손해에 대해 책임을 지지 않습니다.",
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
      <p className="mb-12 text-sm text-zinc-500">시행일: 2026년 6월 19일</p>
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
