import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보 처리방침 — Serenity",
  description: "Android 수면/휴식 앱 Serenity의 개인정보 처리방침입니다.",
};

const sections = [
  {
    title: "개요",
    body: [
      "Serenity는 계정 없이 사용할 수 있도록 설계되었습니다. 앱은 설정, 믹서 볼륨, 프리셋을 사용자의 기기에 로컬로 저장합니다.",
      "앱 빌드에는 분석, 광고, 추적 SDK를 사용하지 않습니다.",
    ],
  },
  {
    title: "수집하는 정보",
    body: [
      "Serenity는 이름, 이메일 주소, 전화번호, 위치, 연락처, 사진, 파일 또는 건강 정보를 요청하지 않습니다.",
      "기기의 오디오를 녹음하지 않으며 이용 분석도 수집하지 않습니다.",
    ],
  },
  {
    title: "수집하지 않는 정보",
    body: [
      "개인 식별 정보, 광고 식별자 또는 앱의 백그라운드 활동 기록을 수집하지 않습니다.",
      "사용자가 저장한 사운드 선택, 볼륨 조절, 프리셋은 Serenity가 실행되는 기기 안에만 남습니다.",
    ],
  },
  {
    title: "결제",
    body: [
      "Serenity Pro는 Google Play를 통해 판매됩니다. 결제 정보, 구독, 취소, 환불은 Google의 약관과 정책에 따라 Google이 처리합니다.",
      "Jonny Lab은 카드 정보를 수신하거나 저장하지 않습니다.",
    ],
  },
  {
    title: "데이터 저장 및 삭제",
    body: [
      "Serenity는 로컬 저장만 사용하므로 Android 시스템 설정에서 앱 데이터를 삭제하거나 앱을 제거하면 됩니다.",
      "앱을 제거하거나 앱 데이터를 삭제하면 Serenity가 기기에 저장한 설정과 프리셋이 삭제됩니다.",
    ],
  },
  {
    title: "공유",
    body: [
      "개인정보를 판매하지 않습니다. Serenity는 분석이나 광고 데이터를 수집하지 않으므로 해당 목적의 데이터 공유도 없습니다.",
    ],
  },
  {
    title: "아동",
    body: [
      "Serenity는 만 13세 미만 아동을 대상으로 하지 않으며, 아동의 개인정보를 고의로 수집하지 않습니다.",
    ],
  },
  {
    title: "변경",
    body: [
      "본 정책은 필요에 따라 변경될 수 있습니다. 변경 시 이 페이지의 시행일을 갱신합니다.",
    ],
  },
  {
    title: "문의",
    body: [
      "본 개인정보 처리방침에 대한 문의는 support@jonnylab.app으로 보내주세요.",
    ],
  },
];

export default function SerenityPrivacyKoPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/serenity"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
      >
        ← Serenity
      </Link>

      <h1 className="mt-6 mb-2 text-3xl font-bold tracking-tight text-zinc-950">
        Serenity 개인정보 처리방침
      </h1>
      <p className="mb-12 text-sm text-zinc-500">시행일: 2026년 6월 19일</p>
      <Link
        href="/serenity/privacy"
        className="mb-10 inline-block text-sm text-indigo-600 transition-colors hover:text-indigo-500"
      >
        View in English
      </Link>

      <div className="space-y-10">
        {sections.map((section, index) => (
          <section key={section.title}>
            <h2 className="mb-3 text-base font-semibold text-zinc-950">
              {index + 1}. {section.title}
            </h2>
            <div className="space-y-3">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-zinc-600">
                  {paragraph}
                </p>
              ))}
            </div>
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
