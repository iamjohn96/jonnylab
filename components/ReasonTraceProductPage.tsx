import Link from "next/link";
import ReasonTraceLanguageSwitcher from "./ReasonTraceLanguageSwitcher";

const copy = {
  en: {
    eyebrow: "ReasonTrace · iPhone & iPad · JonnyLab", title: "Remember why you decided.",
    intro: "A private decision journal that captures your reasoning, helps you commit with clarity, and brings you back to compare expectations with real outcomes.",
    badge: "Preparing for App Store release", facts: "English & Korean · No account · Local-first",
    privacy: "Privacy Policy", support: "Support",
    loopTitle: "Turn decisions into a learning loop", loop: [
      ["Capture", "Record the situation, options, reasoning, expected outcome, and confidence."],
      ["Commit", "Confirm a durable snapshot of what you knew and why you chose it."],
      ["Review", "Return on a reminder date and compare the actual outcome with your expectation."],
      ["Learn", "Search your timeline and find patterns across reviewed decisions."],
    ],
    echoTitle: "Decision Echo", echoBody: "When typing gets in the way, record a short voice note and create a transcript. Recording and speech permissions are requested only when you use this feature. Apple’s speech service may process audio for transcription; JonnyLab does not upload it to JonnyLab servers.",
    builtTitle: "Built around your control", built: ["Decisions and reviews stored locally", "App Lock and privacy cover", "Review reminders with generic notification text", "JSON and Markdown export", "Delete individual records or all app data", "No ads or advertising tracking"],
    ai: "AI Reflection is not enabled in the current production configuration. The core decision journal works without it.",
    close: "Capture the reasoning. Review the outcome.",
  },
  ko: {
    eyebrow: "ReasonTrace · iPhone 및 iPad · JonnyLab", title: "결정한 이유를 기억하세요.",
    intro: "판단의 근거를 기록하고, 명확하게 결정한 뒤, 기대와 실제 결과를 비교하며 더 나은 판단을 쌓아가는 비공개 의사결정 저널입니다.",
    badge: "App Store 출시 준비 중", facts: "한국어 및 영어 · 계정 없음 · 로컬 우선",
    privacy: "개인정보처리방침", support: "지원",
    loopTitle: "결정을 배움의 순환으로", loop: [
      ["기록", "상황, 선택지, 판단 근거, 기대 결과와 확신 정도를 남깁니다."],
      ["확정", "무엇을 알고 왜 선택했는지 당시의 판단을 스냅샷으로 확정합니다."],
      ["회고", "알림 날짜에 돌아와 실제 결과와 처음의 기대를 비교합니다."],
      ["학습", "타임라인을 검색하고 회고한 결정에서 반복되는 패턴을 살펴봅니다."],
    ],
    echoTitle: "Decision Echo", echoBody: "글로 적기 어려울 때 짧은 음성 메모를 녹음하고 전사문을 만들 수 있습니다. 녹음과 음성 인식 권한은 이 기능을 사용할 때만 요청합니다. 전사를 위해 Apple의 음성 서비스가 오디오를 처리할 수 있으며, JonnyLab 서버로는 업로드하지 않습니다.",
    builtTitle: "사용자가 통제하는 구조", built: ["결정과 회고를 기기에 로컬 저장", "앱 잠금과 프라이버시 커버", "결정 내용을 노출하지 않는 회고 알림", "JSON 및 Markdown 내보내기", "개별 기록 또는 전체 앱 데이터 삭제", "광고 및 광고 추적 없음"],
    ai: "현재 프로덕션 구성에서는 AI Reflection이 비활성화되어 있습니다. 핵심 의사결정 저널 기능은 AI 없이 동작합니다.",
    close: "판단을 기록하고, 결과를 회고하세요.",
  },
} as const;

export default function ReasonTraceProductPage({ locale }: { locale: "en" | "ko" }) {
  const c = copy[locale]; const base = locale === "ko" ? "/reasontrace/ko" : "/reasontrace";
  return <main>
    <section className="border-b border-zinc-200 bg-white"><div className="mx-auto max-w-6xl px-6 pt-8"><div className="flex justify-end"><ReasonTraceLanguageSwitcher current={locale} englishHref="/reasontrace" koreanHref="/reasontrace/ko" autoDetect /></div></div>
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-10 lg:grid-cols-[1fr_420px] lg:items-center lg:pb-20"><div><p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-rose-700">{c.eyebrow}</p><h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-6xl">{c.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">{c.intro}</p><div className="mt-8 flex flex-wrap gap-3"><span className="rounded-lg bg-zinc-950 px-5 py-3 text-sm font-semibold text-white">{c.badge}</span><Link href={`${base}/privacy`} className="rounded-lg border border-zinc-300 px-5 py-3 text-sm font-semibold">{c.privacy}</Link></div><p className="mt-5 text-sm text-zinc-500">{c.facts}</p></div>
      <div aria-label="Abstract decision trace" className="rounded-3xl border border-zinc-200 bg-zinc-950 p-6 text-white shadow-xl"><div className="flex items-center justify-between"><span className="text-sm font-semibold">ReasonTrace</span><span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">Review scheduled</span></div><div className="mt-10 space-y-5"><div><p className="text-xs uppercase tracking-wider text-zinc-500">Decision</p><div className="mt-2 h-4 w-4/5 rounded bg-white/90" /></div><div className="grid grid-cols-2 gap-3"><div className="rounded-xl bg-white/5 p-4"><p className="text-xs text-zinc-400">Confidence</p><p className="mt-2 text-2xl font-semibold">72%</p></div><div className="rounded-xl bg-white/5 p-4"><p className="text-xs text-zinc-400">Review</p><p className="mt-2 text-sm font-semibold">In 30 days</p></div></div><div className="flex items-center gap-3 border-t border-white/10 pt-5"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500">●</span><div><p className="text-sm font-semibold">Decision Echo</p><p className="text-xs text-zinc-400">Voice context, kept with the decision</p></div></div></div></div></div>
    </section>
    <section className="bg-zinc-50"><div className="mx-auto max-w-6xl px-6 py-16"><h2 className="text-3xl font-bold tracking-tight">{c.loopTitle}</h2><div className="mt-8 grid gap-4 md:grid-cols-4">{c.loop.map(([title, body], i) => <article key={title} className="rounded-2xl border border-zinc-200 bg-white p-5"><span className="text-xs font-bold text-rose-700">0{i + 1}</span><h3 className="mt-4 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-600">{body}</p></article>)}</div></div></section>
    <section className="bg-white"><div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2"><div><p className="text-sm font-semibold text-rose-700">Voice context</p><h2 className="mt-2 text-3xl font-bold">{c.echoTitle}</h2><p className="mt-4 leading-7 text-zinc-600">{c.echoBody}</p></div><div><h2 className="text-3xl font-bold">{c.builtTitle}</h2><div className="mt-6 grid gap-3 sm:grid-cols-2">{c.built.map(x => <div key={x} className="rounded-xl bg-zinc-50 p-4 text-sm font-semibold"><span className="mr-2 text-emerald-600">✓</span>{x}</div>)}</div></div></div></section>
    <section className="bg-zinc-950 text-white"><div className="mx-auto max-w-6xl px-6 py-14"><p className="max-w-3xl text-sm leading-6 text-zinc-300">{c.ai}</p><div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-zinc-800 pt-8"><p className="text-xl font-semibold">{c.close}</p><div className="flex gap-5 text-sm font-semibold"><Link href={`${base}/privacy`} className="text-rose-300">{c.privacy} →</Link><Link href={`${base}/support`}>{c.support} →</Link></div></div></div></section>
  </main>;
}
