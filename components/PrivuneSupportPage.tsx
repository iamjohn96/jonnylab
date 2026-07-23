import Link from "next/link";

type Props = { lang: "en" | "ko" };

const englishTopics = [
  "Photo permission",
  "OCR or detection issues",
  "Editing redaction regions",
  "Saving or sharing a Safe Copy",
  "Free usage limits",
  "Purchasing Pro or restoring purchases",
  "Subscription management",
  "Metadata removal questions",
  "Bug reports",
];

const koreanTopics = [
  "사진 접근 권한",
  "OCR 또는 탐지 문제",
  "가림 영역 편집",
  "안전한 사본 저장 또는 공유",
  "무료 사용 한도",
  "Pro 구매 또는 구매 복원",
  "구독 관리",
  "메타데이터 제거 관련 질문",
  "버그 신고",
];

export default function PrivuneSupportPage({ lang }: Props) {
  const ko = lang === "ko";
  const topics = ko ? koreanTopics : englishTopics;

  return (
    <main lang={lang} className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link href="/privune" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950">
          ← Privune
        </Link>
        <Link href={ko ? "/privune/support" : "/privune/support/ko"} hrefLang={ko ? "en" : "ko"} className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700">
          {ko ? "View in English" : "한국어로 보기"}
        </Link>
      </div>

      <header className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Privune · iOS 17+</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          {ko ? "Privune 지원" : "Privune Support"}
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
          {ko
            ? "사진 선택부터 안전한 사본 저장, 구매 복원까지 Privune 사용에 관한 도움을 받을 수 있습니다."
            : "Get help with Privune, from selecting a photo and editing redactions to saving a Safe Copy and restoring a purchase."}
        </p>
      </header>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-zinc-950">{ko ? "지원 항목" : "Help topics"}</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {topics.map((topic) => (
            <div key={topic} className="rounded-xl border border-zinc-200 bg-white px-5 py-4 text-sm text-zinc-700 shadow-sm">
              {topic}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-zinc-950">{ko ? "문제 해결" : "Troubleshooting"}</h2>
        <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-6 text-zinc-700">
          <li>{ko ? "iPhone 설정에서 Privune의 사진 접근 권한이 허용되어 있는지 확인하세요." : "Make sure Photos permission is granted to Privune in iPhone Settings."}</li>
          <li>{ko ? "OCR에서 텍스트를 찾지 못하면 글자가 더 선명한 다른 이미지를 시도하세요." : "If OCR finds no text, try another image with clearer, more legible text."}</li>
          <li>{ko ? "안전한 사본을 만들기 전에 선택된 영역을 확대해서 최종 확인하세요." : "Review every selected area, using zoom and pan if needed, before creating the Safe Copy."}</li>
          <li>{ko ? "구매 문제가 있으면 원래 구매에 사용한 Apple ID를 확인하고 앱에서 구매 복원을 사용하세요." : "For purchase issues, verify the Apple ID used for the original purchase and select Restore Purchases in the app."}</li>
          <li>{ko ? "구독은 iPhone 설정의 Apple ID 구독 메뉴에서 관리하세요." : "Manage subscriptions through the Apple ID subscription settings on your iPhone."}</li>
          <li>{ko ? "버그 신고 시 iOS 버전, 기기 모델, Privune 앱 버전과 재현 단계를 포함하세요." : "For bug reports, include your iOS version, device model, Privune app version, and clear reproduction steps."}</li>
        </ol>
      </section>

      <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
        <h2 className="text-lg font-bold text-zinc-950">{ko ? "개인정보를 먼저 보호하세요" : "Protect your privacy when contacting us"}</h2>
        <p className="mt-3 text-sm leading-6 text-zinc-700">
          {ko
            ? "지원 이메일에 민감한 원본 사진을 첨부하지 마세요. 꼭 이미지가 필요하다면 먼저 민감정보를 제거하거나 가린 스크린샷 또는 정리된 예시를 보내세요."
            : "Do not email private original photos. If an image is necessary, remove or mask sensitive information first and send a sanitized screenshot or example."}
        </p>
        <p className="mt-4 text-sm font-semibold text-zinc-900">
          {ko ? "JonnyLab은 다음 정보를 요청하지 않습니다:" : "JonnyLab will never ask for:"}
        </p>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
          <li>{ko ? "Apple ID 비밀번호" : "Your Apple ID password"}</li>
          <li>{ko ? "전체 결제 카드 정보" : "Full payment card details"}</li>
          <li>{ko ? "주민등록번호" : "A resident registration number"}</li>
          <li>{ko ? "사용자가 스스로 정리된 예시를 공유하기로 선택한 경우를 제외한 민감한 원본 사진" : "An original sensitive photo, unless you independently choose to share a sanitized example"}</li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-lg font-bold text-zinc-950">{ko ? "문의하기" : "Contact support"}</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          {ko ? "위 정보를 포함해 이메일을 보내주세요." : "Email us with the relevant details above."}
        </p>
        <a href="mailto:support@jonnylab.app?subject=Privune%20Support" className="mt-5 inline-flex rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          support@jonnylab.app
        </a>
      </section>

      <nav aria-label={ko ? "Privune 문서" : "Privune documents"} className="mt-10 flex flex-wrap gap-4 text-sm">
        <Link href={ko ? "/privune/privacy/ko" : "/privune/privacy"} className="font-medium text-indigo-700 hover:underline">
          {ko ? "개인정보 처리방침" : "Privacy Policy"}
        </Link>
        <Link href={ko ? "/privune/terms/ko" : "/privune/terms"} className="font-medium text-indigo-700 hover:underline">
          {ko ? "이용약관" : "Terms of Use"}
        </Link>
      </nav>
    </main>
  );
}
