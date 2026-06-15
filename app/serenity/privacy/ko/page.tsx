import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보 처리방침 — Serenity",
  description: "Serenity - Sleep & Relax 개인정보 처리방침",
};

const sections = [
  {
    title: "수집하는 정보",
    body: [
      "Serenity는 앱 경험을 제공하고 개선하는 데 필요한 최소한의 정보만 수집합니다.",
      "구매 정보: Serenity Pro를 구매하거나 구독할 때 거래는 Google Play 결제를 통해 처리됩니다. Jonny Lab은 결제 정보를 직접 수집하거나 저장하지 않습니다.",
      "이용 정보: 앱 개선을 위해 재생된 사운드, 세션 시간 등 익명의 이용 통계를 수집할 수 있습니다. 이 정보는 사용자의 신원과 연결되지 않습니다.",
      "기기 정보: 오류 보고, 호환성 확인 및 앱 안정성 개선을 위해 운영체제 버전, 기기 모델과 같은 기본 기기 정보와 오류 로그를 수집할 수 있습니다.",
    ],
  },
  {
    title: "수집하지 않는 정보",
    body: [
      "사용자가 직접 문의하지 않는 한 이름, 이메일 주소, 우편 주소 등 개인 식별 정보를 수집하지 않습니다.",
      "위치 또는 건강 데이터를 수집하지 않으며, 기기의 오디오를 녹음하거나 연락처, 사진 또는 파일에 접근하지 않습니다.",
    ],
  },
  {
    title: "정보 공유",
    body: [
      "개인정보를 판매하거나 거래하지 않습니다. Serenity 운영 및 개선을 지원하는 서비스 제공업체가 익명의 분석 및 진단 데이터를 처리할 수 있습니다.",
    ],
  },
  {
    title: "데이터 저장 및 삭제",
    body: [
      "앱 설정과 믹스 프리셋은 사용자의 기기에 로컬로 저장됩니다. Serenity는 해당 데이터를 위한 사용자 계정 시스템이나 클라우드 저장소를 운영하지 않습니다.",
      "기기 설정에서 Serenity의 앱 데이터를 삭제하거나 앱을 제거하여 로컬 저장 데이터를 삭제할 수 있습니다.",
    ],
  },
  {
    title: "구독 및 구매",
    body: [
      "Serenity Pro 구독 및 구매는 Google Play 결제를 통해 관리됩니다. 구독 관리, 결제, 취소 및 환불에는 Google의 관련 약관과 정책이 적용됩니다.",
    ],
  },
  {
    title: "데이터 보안",
    body: [
      "Serenity와 관련하여 처리되는 데이터를 보호하기 위해 합리적인 보호 조치를 사용합니다. 서비스 제공업체로 전송되는 데이터는 해당되는 경우 전송 중 암호화됩니다.",
    ],
  },
  {
    title: "아동의 개인정보",
    body: [
      "Serenity는 만 13세 미만 아동을 대상으로 하지 않으며, 아동의 개인정보를 고의로 수집하지 않습니다.",
    ],
  },
  {
    title: "처리방침 변경",
    body: [
      "본 개인정보 처리방침은 변경될 수 있습니다. 변경 사항은 갱신된 시행일과 함께 이 페이지에 게시됩니다.",
    ],
  },
  {
    title: "문의",
    body: [
      "본 개인정보 처리방침에 관한 문의는 support@jonnylab.app으로 보내주세요.",
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
      <p className="mb-12 text-sm text-zinc-500">시행일: 2026년 6월 14일</p>
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
