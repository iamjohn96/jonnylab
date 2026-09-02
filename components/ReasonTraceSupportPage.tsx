import Link from "next/link";
import ReasonTraceLanguageSwitcher from "./ReasonTraceLanguageSwitcher";

const data = {
  en: { title: "ReasonTrace Support", intro: "Help with decisions, Decision Echo, reminders, purchases, privacy controls, export, and deletion.", back: "ReasonTrace", contact: "Need more help?", email: "Email support@jonnylab.app", note: "Please do not attach private decision records or voice recordings unless they are necessary to resolve your request.", items: [
    ["Getting started", "Create a decision, describe the situation and options, record why you chose, then confirm the decision snapshot. Add a review date so ReasonTrace can bring you back to compare the actual outcome."],
    ["Decision Echo and permissions", "Tap Decision Echo to record voice context. iOS asks for microphone and speech-recognition access only when needed. If transcription fails, check both permissions in iOS Settings. Apple’s speech service may process audio for transcription."],
    ["Timeline, search, and filters", "Use Timeline to find decisions by text, status, category, or review state. Open a confirmed decision to add the real outcome and lessons at review time."],
    ["Review reminders", "Enable notifications when prompted and choose a review date. If reminders do not arrive, check ReasonTrace under iOS Settings → Notifications and confirm notifications are allowed."],
    ["Purchases and Restore Purchases", "Open the Pro or purchase screen and choose Restore Purchases while signed in with the same Apple ID used to buy. ReasonTrace does not require an app account. Your local decision records are not deleted if a subscription or entitlement ends."],
    ["App Lock and privacy cover", "Turn on App Lock in Settings to use the device’s authentication. Privacy cover hides content in the app switcher. ReasonTrace never receives your Face ID or Touch ID biometric data."],
    ["Export and delete", "In Settings, export your records as JSON or Markdown with the system file exporter. Exported files are separate copies. Delete individual decisions or recordings from their screens, or use the full-data deletion control to remove local records, recordings, preferences, and scheduled reminders."],
    ["AI Reflection", "AI Reflection is not enabled in the current production configuration. The decision journal, timeline, reviews, reminders, export, and privacy controls work without it."],
  ]},
  ko: { title: "ReasonTrace 지원", intro: "결정 기록, Decision Echo, 알림, 구매, 개인정보 보호 기능, 내보내기 및 삭제에 관한 도움말입니다.", back: "ReasonTrace", contact: "추가 도움이 필요한가요?", email: "support@jonnylab.app으로 이메일 보내기", note: "문의 해결에 꼭 필요하지 않다면 비공개 결정 기록이나 음성 녹음을 첨부하지 마세요.", items: [
    ["시작하기", "새 결정을 만들고 상황과 선택지를 적은 뒤 선택 이유를 기록하고 결정 스냅샷을 확정하세요. 회고 날짜를 추가하면 실제 결과와 처음의 기대를 비교할 시점에 다시 확인할 수 있습니다."],
    ["Decision Echo 및 권한", "음성 맥락을 남기려면 Decision Echo를 누르세요. iOS는 필요한 시점에만 마이크와 음성 인식 권한을 요청합니다. 전사가 되지 않으면 iOS 설정에서 두 권한을 모두 확인하세요. 전사를 위해 Apple의 음성 서비스가 오디오를 처리할 수 있습니다."],
    ["타임라인, 검색 및 필터", "타임라인에서 텍스트, 상태, 카테고리 또는 회고 상태로 결정을 찾을 수 있습니다. 확정한 결정을 열어 회고 시점에 실제 결과와 배운 점을 추가하세요."],
    ["회고 알림", "요청 시 알림을 허용하고 회고 날짜를 선택하세요. 알림이 오지 않으면 iOS 설정 → 알림에서 ReasonTrace 알림이 허용되어 있는지 확인하세요."],
    ["구매 및 구매 복원", "Pro 또는 구매 화면에서 구매할 때 사용한 것과 같은 Apple ID로 로그인한 상태에서 구매 복원을 선택하세요. ReasonTrace 계정은 필요하지 않습니다. 구독이나 이용 권한이 끝나도 기기의 결정 기록은 삭제되지 않습니다."],
    ["앱 잠금 및 프라이버시 커버", "설정에서 앱 잠금을 켜 기기 인증을 사용하세요. 프라이버시 커버는 앱 전환 화면에서 내용을 가립니다. ReasonTrace는 Face ID 또는 Touch ID 생체정보를 받지 않습니다."],
    ["내보내기 및 삭제", "설정에서 시스템 파일 내보내기를 사용해 기록을 JSON 또는 Markdown으로 내보낼 수 있습니다. 내보낸 파일은 별도 사본입니다. 각 화면에서 결정이나 녹음을 개별 삭제하거나 전체 데이터 삭제 기능으로 로컬 기록, 녹음, 환경설정 및 예약 알림을 제거할 수 있습니다."],
    ["AI Reflection", "현재 프로덕션 구성에서 AI Reflection은 활성화되어 있지 않습니다. 의사결정 저널, 타임라인, 회고, 알림, 내보내기와 개인정보 보호 기능은 AI 없이 동작합니다."],
  ]},
} as const;

export default function ReasonTraceSupportPage({ locale }: { locale: "en" | "ko" }) { const c = data[locale]; const home = locale === "ko" ? "/reasontrace/ko" : "/reasontrace"; return <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20"><div className="flex flex-wrap items-center justify-between gap-4"><Link href={home} className="text-sm text-zinc-500">← {c.back}</Link><ReasonTraceLanguageSwitcher current={locale} englishHref="/reasontrace/support" koreanHref="/reasontrace/ko/support" autoDetect /></div><header className="mt-10 max-w-2xl"><p className="text-sm font-semibold text-rose-700">JonnyLab Support</p><h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{c.title}</h1><p className="mt-4 text-lg leading-8 text-zinc-600">{c.intro}</p></header><div className="mt-12 grid gap-5 md:grid-cols-2">{c.items.map(([title, body]) => <section key={title} className="rounded-2xl border border-zinc-200 bg-white p-6"><h2 className="font-semibold">{title}</h2><p className="mt-3 text-sm leading-6 text-zinc-600">{body}</p></section>)}</div><section className="mt-12 rounded-2xl bg-zinc-950 p-7 text-white"><h2 className="text-xl font-semibold">{c.contact}</h2><a href="mailto:support@jonnylab.app" className="mt-4 inline-block rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950">{c.email}</a><p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">{c.note}</p></section></main>; }
