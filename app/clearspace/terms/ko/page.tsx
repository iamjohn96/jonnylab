import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용약관 — Clearspace",
  description: "Clearspace 이용약관",
};

const sections = [
  {
    title: "약관 동의",
    body: "Clearspace를 다운로드, 접근, 구매 또는 사용하면 본 이용약관에 동의하는 것으로 간주됩니다. 약관에 동의하지 않는 경우 앱을 사용하지 마세요.",
  },
  {
    title: "Clearspace 소개",
    body: "Clearspace는 기기의 미디어를 분석하고 중복 및 유사 사진, 품질 문제, 스크린샷, 채팅 미디어, 동영상 및 대용량 파일에 대한 정리 제안을 제공하는 Android 도구입니다.",
  },
  {
    title: "탐지 결과",
    body: "Clearspace의 자동 탐지 및 품질 분석은 일부 항목을 놓치거나 미디어를 잘못 식별할 수 있습니다. 모든 제안은 사용자의 검토를 위해 제공되며 확정적인 결과로 간주해서는 안 됩니다.",
  },
  {
    title: "삭제 전 검토",
    body: "삭제를 확정하기 전에 선택한 모든 항목을 검토할 책임은 사용자에게 있습니다. 5초 실행 취소 기능은 모든 상황에서 복구를 보장하지 않습니다. 중요한 사진과 동영상은 백업해 두세요.",
  },
  {
    title: "권한 및 알림",
    body: "사용자는 Clearspace에 사진, 동영상 및 알림 접근 권한을 부여할 수 있습니다. 해당 권한은 개인정보 처리방침에 설명된 앱 기능에만 사용됩니다. 월간 정리 알림은 선택 사항이며 비활성화할 수 있습니다.",
  },
  {
    title: "Clearspace Pro",
    body: "Clearspace는 Google Play를 통해 유료 Pro 기능을 제공할 수 있습니다. 가격과 구매 가능한 옵션은 결제 전에 표시됩니다. 구매, 취소 및 환불은 Google Play를 통해 관리되며 관련 약관이 적용됩니다.",
  },
  {
    title: "라이선스 및 허용되는 사용",
    body: "JonnyLab은 Clearspace를 사용할 수 있는 제한적이고 개인적이며 비독점적이고 양도 불가능하며 철회 가능한 라이선스를 부여합니다. 관련 법률에서 허용하는 경우를 제외하고 앱을 복제, 재배포, 재판매, 리버스 엔지니어링, 방해 또는 오용해서는 안 됩니다.",
  },
  {
    title: "서비스 제공 및 책임 제한",
    body: "관련 법률이 허용하는 범위에서 Clearspace는 현재 상태 및 제공 가능한 상태로 제공됩니다. JonnyLab은 중단 없는 작동이나 삭제된 미디어의 복구를 보장하지 않으며, 앱 사용으로 발생한 우발적 삭제, 데이터 손실 또는 간접적·결과적 손해에 대해 책임을 지지 않습니다.",
  },
  {
    title: "변경 및 문의",
    body: "본 약관은 변경될 수 있습니다. 변경 사항은 갱신된 시행일과 함께 이 페이지에 게시됩니다. 문의는 support@jonnylab.app으로 보내주세요.",
  },
];

export default function ClearspaceTermsKoPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/clearspace"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
      >
        ← Clearspace
      </Link>

      <h1 className="mt-6 mb-2 text-3xl font-bold tracking-tight text-zinc-950">
        Clearspace 이용약관
      </h1>
      <p className="mb-12 text-sm text-zinc-500">시행일: 2026년 6월 15일</p>
      <Link
        href="/clearspace/terms"
        className="mb-10 inline-block text-sm text-teal-700 transition-colors hover:text-teal-600"
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
          className="text-teal-700 transition-colors hover:text-teal-600"
        >
          support@jonnylab.app 문의
        </a>
      </div>
    </main>
  );
}
