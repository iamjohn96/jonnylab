import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "고객지원 — Hakki",
};

const faqs = [
  {
    q: "시간표가 저장되지 않아요.",
    a: "앱을 완전히 종료 후 재시작해 보세요. 문제가 지속되면 설정 → 데이터 초기화 후 다시 입력해 주세요.",
  },
  {
    q: "포모도로 타이머 알림이 오지 않아요.",
    a: "기기 설정 → Hakki → 알림 허용 여부를 확인해 주세요.",
  },
  {
    q: "AI 학습 플랜이 생성되지 않아요.",
    a: "인터넷 연결을 확인해 주세요. AI 기능은 네트워크가 필요합니다.",
  },
  {
    q: "구독을 복원하려면 어떻게 하나요?",
    a: "설정 → 구독 복원을 탭하세요.",
  },
  {
    q: "구독을 취소하려면 어떻게 하나요?",
    a: "iOS: 설정 → Apple ID → 구독 → Hakki. Android: Play 스토어 → 구독.",
  },
];

export default function HakkiSupportPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <div className="mb-2">
        <Link
          href="/hakki"
          className="text-sm text-zinc-500 hover:text-white transition-colors"
        >
          ← Hakki
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-white mt-6 mb-12 tracking-tight">
        Hakki 고객지원
      </h1>

      <section className="mb-16">
        <h2 className="text-xl font-bold text-white mb-6">
          자주 묻는 질문
        </h2>
        <div className="space-y-6">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="bg-[#111111] border border-white/10 rounded-xl p-5"
            >
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#111111] border border-white/10 rounded-2xl p-8">
        <h2 className="text-lg font-bold text-white mb-2">추가 문의</h2>
        <p className="text-zinc-400 mb-4">
          영업일 기준 24시간 이내에 답변 드립니다.
        </p>
        <a
          href="mailto:support@jonnylab.app"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          support@jonnylab.app
        </a>
      </section>
    </main>
  );
}
