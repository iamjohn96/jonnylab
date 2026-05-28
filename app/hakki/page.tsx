import Link from "next/link";

const features = [
  {
    icon: "📅",
    title: "스마트 시간표",
    description: "교시별 수업을 한눈에 관리하세요",
  },
  {
    icon: "✅",
    title: "과제 & 시험 관리",
    description: "마감일을 놓치지 않도록 D-day 알림을 설정하세요",
  },
  {
    icon: "🍅",
    title: "포모도로 타이머",
    description: "집중 학습과 휴식을 균형 있게 관리하는 AI 학습 플랜",
  },
];

export default function HakkiPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <section className="text-center mb-16">
        <div className="mx-auto mb-6 w-24 h-24 bg-amber-500 rounded-3xl flex items-center justify-center text-4xl select-none">
          📚
        </div>
        <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
          Hakki
        </h1>
        <p className="text-xl text-zinc-400 mb-6">
          학생 플래너 for iOS &amp; Android
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["시간표", "과제", "포모도로 타이머"].map((badge) => (
            <span
              key={badge}
              className="text-xs font-medium bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 px-3 py-1 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
        <button
          disabled
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium opacity-50 cursor-not-allowed"
        >
          Coming to App Store Soon
        </button>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#111111] border border-white/10 rounded-2xl p-5"
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-zinc-400">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex gap-6 text-sm">
        <Link
          href="/hakki/privacy"
          className="text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          href="/hakki/support"
          className="text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Support
        </Link>
      </div>
    </main>
  );
}
