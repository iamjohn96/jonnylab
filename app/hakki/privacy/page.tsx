import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보 처리방침 — Hakki",
};

const sections = [
  {
    title: "개요",
    body: "Hakki는 학생들의 학습 관리를 돕는 플래너 앱입니다. 개인정보 보호를 최우선으로 생각합니다.",
  },
  {
    title: "수집하는 정보",
    body: "Apple 또는 Google 로그인 시 이름, 이메일 주소를 수집합니다. 앱 내에서 생성한 시간표, 과제, 학습 기록은 기기에 저장됩니다.",
  },
  {
    title: "Firebase 사용",
    body: "일부 데이터는 Firebase(Google)를 통해 동기화될 수 있습니다. Firebase 개인정보 처리방침을 참고하세요.",
  },
  {
    title: "AI 기능",
    body: "AI 학습 플랜 기능은 Google Gemini API를 사용합니다. 입력한 학습 목표는 API 처리를 위해 전송되며 저장되지 않습니다.",
  },
  {
    title: "광고 및 추적",
    body: "Hakki는 광고 SDK를 사용하지 않습니다.",
  },
  {
    title: "인앱 결제",
    body: "구독 결제는 Apple App Store 또는 Google Play Store를 통해 처리됩니다.",
  },
  {
    title: "아동 개인정보",
    body: "만 14세 미만 아동의 개인정보는 수집하지 않습니다.",
  },
  {
    title: "문의",
    body: "이메일: support@jonnylab.app",
  },
];

export default function HakkiPrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <div className="mb-2">
        <Link
          href="/hakki"
          className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors"
        >
          ← Hakki
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-zinc-950 mt-6 mb-2 tracking-tight">
        Hakki 개인정보 처리방침
      </h1>
      <p className="text-sm text-zinc-500 mb-12">최종 수정: 2026년 5월</p>

      <div className="space-y-10">
        {sections.map((s, i) => (
          <section key={s.title}>
            <h2 className="text-base font-semibold text-zinc-950 mb-2">
              {i + 1}. {s.title}
            </h2>
            <p className="text-zinc-600 leading-relaxed">{s.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
