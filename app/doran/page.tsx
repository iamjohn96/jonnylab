import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "도란 — 수상한 문자와 스마트폰 문제의 안전한 다음 행동",
  description:
    "도란은 스마트폰 사용이 어려운 시니어가 수상한 문자와 디지털 문제를 한 단계씩 살펴보고 안전한 다음 행동을 완료하도록 돕는 Android 서비스입니다.",
  path: "/doran",
  locale: "ko_KR",
});

const currentFeatures = [
  "수상한 문자 직접 입력",
  "주의해서 살펴볼 위험 신호 설명",
  "안전한 다음 행동 선택",
  "한 화면에 한 가지씩 제공되는 단계별 안내",
  "행동 완료 확인",
  "비민감 완료 기록의 기기 내 저장",
  "분석 실패 시에도 제공되는 안전한 대체 안내",
];

const unavailableFeatures = [
  "SMS 자동 읽기 또는 OCR",
  "Gemini 등 외부 AI 분석",
  "사용자 계정과 가족용 웹",
  "Supabase 또는 클라우드 동기화",
  "광고, 결제 또는 구독",
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "도란",
  operatingSystem: "Android",
  applicationCategory: "UtilitiesApplication",
  applicationSubCategory: "Digital safety guidance",
  description:
    "수상한 문자와 스마트폰 문제를 살펴보고 안전한 다음 행동을 한 단계씩 안내하는 Android 서비스",
  url: "https://jonnylab.app/doran",
  creator: { "@type": "Organization", name: "JonnyLab" },
};

export default function DoranPage() {
  return (
    <main className="bg-[#fffdf8] text-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="border-b border-amber-100">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-900">
            <span aria-hidden="true">도</span>
            Android MVP · 실험적 제품
          </div>
          <p className="mt-10 text-sm font-bold tracking-[0.2em] text-amber-800">도란</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            수상한 문자와 스마트폰 문제를<br className="hidden sm:block" /> 안전한 다음 행동까지 차근차근 안내합니다.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-700">
            도란은 스마트폰 사용이 어려운 시니어가 수상한 문자나 디지털 문제를 스스로 해결하도록 돕는 디지털 동행 서비스입니다. 단순히 정보를 보여주는 데 그치지 않고, 실제 행동을 완료할 수 있도록 한 화면에 한 단계씩 안내합니다.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/doran/privacy" className="rounded-xl bg-amber-800 px-5 py-3 text-sm font-semibold text-white hover:bg-amber-700">개인정보처리방침</Link>
            <Link href="/doran/terms" className="rounded-xl border border-amber-300 bg-white px-5 py-3 text-sm font-semibold text-amber-950 hover:border-amber-500">이용약관</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold text-amber-800">도란의 안내 방식</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">답변보다 행동 완료를 돕습니다.</h2>
          <p className="mt-5 leading-7 text-zinc-700">문자 내용을 직접 입력하면 주의해서 살펴볼 신호를 설명하고, 삭제·차단·공식 채널 확인·가족에게 문의하기 같은 안전한 행동 중 하나를 선택하도록 돕습니다.</p>
        </div>
        <ol className="grid gap-3 sm:grid-cols-2">
          {["문자 내용을 직접 입력해요", "주의할 신호를 살펴봐요", "안전한 다음 행동을 골라요", "한 단계씩 따라 하고 완료해요"].map((step, index) => (
            <li key={step} className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-900">{index + 1}</span>
              <p className="mt-4 font-semibold">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-amber-100 bg-white">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:grid-cols-2">
          <article>
            <p className="text-sm font-bold text-emerald-700">현재 제공</p>
            <h2 className="mt-2 text-2xl font-bold">Android MVP 기능</h2>
            <ul className="mt-6 space-y-3">
              {currentFeatures.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-6 text-zinc-700"><span className="font-bold text-emerald-700">✓</span>{feature}</li>)}
            </ul>
          </article>
          <article className="rounded-2xl bg-zinc-100 p-7">
            <p className="text-sm font-bold text-zinc-600">현재 미제공</p>
            <h2 className="mt-2 text-2xl font-bold">아직 연결되지 않은 기능</h2>
            <ul className="mt-6 space-y-3">
              {unavailableFeatures.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-6 text-zinc-700"><span aria-hidden="true">—</span>{feature}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl bg-zinc-950 px-7 py-10 text-white sm:px-10">
          <p className="text-sm font-bold text-amber-300">중요한 안전 안내</p>
          <h2 className="mt-3 text-2xl font-bold">문자만으로는 확정하기 어려워요.</h2>
          <div className="mt-5 space-y-4 leading-7 text-zinc-300">
            <p>도란은 문자나 상대방의 안전성을 보장하지 않으며, 사기 여부를 확정하지 않습니다.</p>
            <p>의심스러운 상황에서는 문자에 포함된 링크나 전화번호를 사용하지 말고, 해당 기관의 공식 앱이나 공식 웹사이트 등 믿을 수 있는 경로에서 직접 확인하세요.</p>
            <p>도란은 경찰, 금융기관, 정부기관 또는 전문 상담기관을 대신하지 않습니다.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-amber-100 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-5 px-6 py-10 text-sm text-zinc-700 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-semibold text-zinc-950">운영: JonnyLab</p><p className="mt-1">Android 패키지: com.jonnylab.doran</p></div>
          <div className="flex flex-wrap gap-5"><a href="mailto:support@jonnylab.app" className="font-medium text-amber-900">support@jonnylab.app</a><a href="tel:+821084509620" className="font-medium text-amber-900">+82 10-8450-9620</a></div>
        </div>
      </section>
    </main>
  );
}
