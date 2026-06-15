import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보 처리방침 — Clearspace",
  description: "Clearspace 개인정보 처리방침",
};

const sections = [
  {
    title: "개요",
    body: [
      "Clearspace는 Android용 비공개 사진 정리 앱입니다. 중복 및 유사 사진, 품질 문제, 스크린샷, 채팅 미디어, 동영상과 대용량 파일을 검토할 수 있도록 돕습니다.",
      "Clearspace는 계정 가입을 요구하지 않으며 사용자 데이터를 수집하거나 공유하지 않습니다.",
    ],
  },
  {
    title: "사진 및 동영상",
    body: [
      "Clearspace는 사용자가 선택한 항목을 스캔, 분석, 표시, 비교, 정리 및 삭제하기 위한 목적으로만 사진 및 동영상 접근 권한을 요청합니다.",
      "모든 사진 및 동영상 분석은 기기에서 로컬로 처리됩니다. 미디어는 JonnyLab 서버에 업로드되거나 제3자와 공유되지 않습니다.",
    ],
  },
  {
    title: "로컬 데이터",
    body: [
      "Clearspace는 스캔 기록과 앱 설정을 기기의 로컬 Room 데이터베이스에 저장합니다. 이 정보는 외부로 전송되지 않습니다.",
      "Android 설정에서 Clearspace의 앱 데이터를 삭제하거나 앱을 제거하여 로컬 데이터를 삭제할 수 있습니다.",
    ],
  },
  {
    title: "수집하지 않는 정보",
    body: [
      "Clearspace는 개인정보, 사진 또는 동영상 콘텐츠, 이용 분석 정보, 진단 정보, 광고 식별자, 위치, 연락처 또는 기타 사용자 데이터를 수집하지 않습니다.",
      "Clearspace는 분석, 광고 또는 추적 SDK를 사용하지 않습니다.",
    ],
  },
  {
    title: "권한",
    body: [
      "사진 및 동영상 권한은 중복 항목, 품질 문제, 스크린샷, 채팅 미디어 및 대용량 파일을 찾는 데 사용됩니다. 알림 권한은 사용자가 언제든지 비활성화할 수 있는 선택적 월간 정리 알림에만 사용됩니다.",
    ],
  },
  {
    title: "네트워크 및 데이터 공유",
    body: [
      "Clearspace는 사진 또는 동영상 데이터를 처리하거나 전송하기 위해 네트워크를 사용하지 않습니다. 사용자 데이터를 제3자에게 판매, 공유 또는 전송하지 않습니다.",
      "Clearspace Pro 구매 시 Google Play가 구매 정보를 처리할 수 있습니다. JonnyLab은 결제 카드 정보를 받거나 저장하지 않습니다.",
    ],
  },
  {
    title: "아동의 개인정보",
    body: [
      "Clearspace는 만 13세 이상 사용자를 대상으로 하며, 아동의 개인정보를 고의로 수집하지 않습니다.",
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

export default function ClearspacePrivacyKoPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/clearspace"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
      >
        ← Clearspace
      </Link>

      <h1 className="mt-6 mb-2 text-3xl font-bold tracking-tight text-zinc-950">
        Clearspace 개인정보 처리방침
      </h1>
      <p className="mb-12 text-sm text-zinc-500">시행일: 2026년 6월 15일</p>
      <Link
        href="/clearspace/privacy"
        className="mb-10 inline-block text-sm text-teal-700 transition-colors hover:text-teal-600"
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
          className="text-teal-700 transition-colors hover:text-teal-600"
        >
          support@jonnylab.app 문의
        </a>
      </div>
    </main>
  );
}
