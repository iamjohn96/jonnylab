import Link from "next/link";
import ReasonTraceLanguageSwitcher from "./ReasonTraceLanguageSwitcher";

const policy = {
  en: {
    title: "ReasonTrace Privacy Policy", date: "Effective and last updated: September 2, 2026", back: "ReasonTrace", contact: "Contact support@jonnylab.app",
    sections: [
      ["Service provider and scope", "ReasonTrace is provided by JonnyLab. This policy applies to the ReasonTrace app for iPhone and iPad, bundle identifier com.jonnylab.reasontrace."],
      ["Data you create", "Decision titles, situations, options, choices, reasoning, expected outcomes, confidence, categories, dates, reviews, outcome ratings, lessons, and related settings are stored in the app’s local database. Decision Echo recordings, transcripts, and recording metadata are stored in the app’s local container."],
      ["Microphone and speech recognition", "ReasonTrace requests microphone and speech-recognition permission only when you choose to use Decision Echo. Audio is recorded locally. Apple’s Speech framework may send audio to Apple for transcription and Apple’s privacy terms apply to that processing. JonnyLab does not upload Decision Echo audio or transcripts to JonnyLab servers."],
      ["Notifications", "If you enable or schedule review reminders, ReasonTrace asks iOS for notification permission and schedules local notifications. Notification text is intentionally generic and does not include your decision title or reasoning."],
      ["App Lock and privacy cover", "Optional App Lock uses Apple’s Local Authentication framework. ReasonTrace receives only the success or failure of authentication and does not receive or store biometric data. Privacy cover can hide app content when the app is in the background."],
      ["Purchases and RevenueCat", "Apple processes in-app purchases. ReasonTrace uses RevenueCat to offer and restore purchases without a ReasonTrace account. Apple and RevenueCat may process an anonymous app user identifier, product and entitlement status, transaction or receipt information, and limited app or device technical information needed for purchases. Decision text, reviews, recordings, and transcripts are not sent to RevenueCat."],
      ["AI Reflection", "AI Reflection is disabled in the current production configuration. ReasonTrace does not send decision data to an AI provider through this feature. If the feature is enabled in a future release, this policy will be updated before launch to explain the provider, data, purpose, retention, and controls."],
      ["Advertising, analytics, sale, and tracking", "ReasonTrace contains no advertising SDK, advertising tracking, or behavior analytics SDK. JonnyLab does not sell your personal information. The app does not request an advertising identifier."],
      ["Storage, backup, retention, export, and deletion", "Local records remain until you delete them, delete all app data, or remove the app. You can delete individual records, recordings, or all app data and reminders in the app. You can export records as JSON or Markdown using the system file exporter; exported copies are outside ReasonTrace and must be managed separately. Depending on your Apple and device backup settings, local app data may be included in an encrypted device or iCloud backup under Apple’s policies. Purchase records may be retained by Apple or RevenueCat under their policies and legal obligations."],
      ["Information not collected by JonnyLab", "JonnyLab does not receive your decision journal, reviews, Decision Echo recordings or transcripts, contacts, location, health information, financial account details, or biometric data through ReasonTrace."],
      ["Children’s privacy", "ReasonTrace is not directed to children under 13. JonnyLab does not knowingly collect personal information from children through ReasonTrace."],
      ["Security", "ReasonTrace limits exposure by using local storage for journal content, requiring explicit action for recording and export, and offering App Lock and deletion controls. No storage or transmission method is completely risk-free; protect access to your device and exported files."],
      ["Third-party services", "Apple services, including iOS, Speech, notifications, authentication, file export, backups, and in-app purchases, are governed by Apple’s policies. RevenueCat purchase processing is governed by RevenueCat’s privacy policy."],
      ["Changes and contact", "We may update this policy when features or data handling change. The updated page will show a new effective or last-updated date. Questions may be sent to support@jonnylab.app."],
    ],
  },
  ko: {
    title: "ReasonTrace 개인정보처리방침", date: "시행일 및 최종 수정일: 2026년 9월 2일", back: "ReasonTrace", contact: "support@jonnylab.app 문의",
    sections: [
      ["서비스 제공자 및 적용 범위", "ReasonTrace는 JonnyLab이 제공합니다. 본 방침은 iPhone 및 iPad용 ReasonTrace 앱(번들 식별자 com.jonnylab.reasontrace)에 적용됩니다."],
      ["사용자가 만드는 데이터", "결정 제목, 상황, 선택지, 선택 내용, 판단 근거, 기대 결과, 확신 정도, 카테고리, 날짜, 회고, 결과 평가, 교훈 및 관련 설정은 앱의 로컬 데이터베이스에 저장됩니다. Decision Echo 녹음, 전사문 및 녹음 메타데이터는 앱의 로컬 컨테이너에 저장됩니다."],
      ["마이크 및 음성 인식", "ReasonTrace는 사용자가 Decision Echo를 선택해 사용할 때만 마이크 및 음성 인식 권한을 요청합니다. 오디오는 로컬에 녹음됩니다. Apple의 Speech 프레임워크는 전사를 위해 오디오를 Apple에 전송할 수 있으며 해당 처리에는 Apple의 개인정보 보호정책이 적용됩니다. JonnyLab은 Decision Echo 오디오나 전사문을 JonnyLab 서버에 업로드하지 않습니다."],
      ["알림", "사용자가 회고 알림을 활성화하거나 예약하면 ReasonTrace는 iOS 알림 권한을 요청하고 로컬 알림을 예약합니다. 알림 문구는 의도적으로 일반적인 내용만 표시하며 결정 제목이나 판단 근거를 포함하지 않습니다."],
      ["앱 잠금 및 프라이버시 커버", "선택 기능인 앱 잠금은 Apple의 Local Authentication 프레임워크를 사용합니다. ReasonTrace는 인증 성공 또는 실패 결과만 받으며 생체정보를 받거나 저장하지 않습니다. 프라이버시 커버는 앱이 백그라운드에 있을 때 내용을 가릴 수 있습니다."],
      ["구매 및 RevenueCat", "인앱결제는 Apple이 처리합니다. ReasonTrace는 별도 계정 없이 구매 상품을 제공하고 복원하기 위해 RevenueCat을 사용합니다. Apple과 RevenueCat은 구매 제공에 필요한 익명 앱 사용자 식별자, 상품 및 이용 권한 상태, 거래 또는 영수증 정보, 제한적인 앱·기기 기술 정보를 처리할 수 있습니다. 결정 내용, 회고, 녹음 및 전사문은 RevenueCat으로 전송되지 않습니다."],
      ["AI Reflection", "현재 프로덕션 구성에서 AI Reflection은 비활성화되어 있습니다. ReasonTrace는 이 기능을 통해 결정 데이터를 AI 제공자에게 전송하지 않습니다. 향후 기능을 활성화한다면 출시 전에 제공자, 데이터, 목적, 보관, 사용자 통제를 설명하도록 본 방침을 갱신합니다."],
      ["광고, 분석, 판매 및 추적", "ReasonTrace에는 광고 SDK, 광고 추적 또는 행동 분석 SDK가 없습니다. JonnyLab은 사용자의 개인정보를 판매하지 않으며 앱은 광고 식별자를 요청하지 않습니다."],
      ["저장, 백업, 보관, 내보내기 및 삭제", "로컬 기록은 사용자가 삭제하거나 전체 앱 데이터를 삭제하거나 앱을 제거할 때까지 남습니다. 앱에서 개별 기록·녹음 또는 전체 앱 데이터와 알림을 삭제할 수 있습니다. 시스템 파일 내보내기를 통해 JSON 또는 Markdown으로 기록을 내보낼 수 있으며, 내보낸 사본은 ReasonTrace 외부에 있으므로 별도로 관리해야 합니다. Apple 및 기기 백업 설정에 따라 로컬 앱 데이터가 Apple 정책에 따른 암호화된 기기 또는 iCloud 백업에 포함될 수 있습니다. 구매 기록은 Apple 또는 RevenueCat의 정책과 법적 의무에 따라 보관될 수 있습니다."],
      ["JonnyLab이 수집하지 않는 정보", "JonnyLab은 ReasonTrace를 통해 사용자의 의사결정 저널, 회고, Decision Echo 녹음·전사문, 연락처, 위치, 건강 정보, 금융 계정 정보 또는 생체정보를 받지 않습니다."],
      ["아동 개인정보 보호", "ReasonTrace는 만 13세 미만 아동을 대상으로 하지 않습니다. JonnyLab은 ReasonTrace를 통해 아동의 개인정보를 고의로 수집하지 않습니다."],
      ["보안", "ReasonTrace는 저널 내용을 로컬에 저장하고 녹음·내보내기에 명시적 사용자 행동을 요구하며 앱 잠금과 삭제 기능을 제공해 노출을 줄입니다. 어떤 저장 또는 전송 방식도 완전히 위험이 없지는 않으므로 기기와 내보낸 파일에 대한 접근을 보호해야 합니다."],
      ["제3자 서비스", "iOS, Speech, 알림, 인증, 파일 내보내기, 백업 및 인앱결제를 포함한 Apple 서비스에는 Apple 정책이 적용됩니다. RevenueCat의 구매 처리에는 RevenueCat 개인정보 보호정책이 적용됩니다."],
      ["방침 변경 및 문의", "기능 또는 데이터 처리 방식이 변경되면 본 방침을 갱신할 수 있습니다. 변경된 페이지에는 새로운 시행일 또는 최종 수정일을 표시합니다. 문의는 support@jonnylab.app으로 보낼 수 있습니다."],
    ],
  },
} as const;

export default function ReasonTracePrivacyPage({ locale }: { locale: "en" | "ko" }) {
  const c = policy[locale]; const home = locale === "ko" ? "/reasontrace/ko" : "/reasontrace";
  return <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20"><div className="flex flex-wrap items-center justify-between gap-4"><Link href={home} className="text-sm text-zinc-500 hover:text-zinc-950">← {c.back}</Link><ReasonTraceLanguageSwitcher current={locale} englishHref="/reasontrace/privacy" koreanHref="/reasontrace/ko/privacy" autoDetect /></div><header className="mt-10 border-b border-zinc-200 pb-10"><p className="text-sm font-semibold text-rose-700">JonnyLab · com.jonnylab.reasontrace</p><h1 className="mt-3 text-4xl font-bold tracking-tight">{c.title}</h1><p className="mt-4 text-sm text-zinc-500">{c.date}</p></header><div className="space-y-10 py-10">{c.sections.map(([title, body], i) => <section key={title}><h2 className="mb-3 text-lg font-semibold">{i + 1}. {title}</h2><p className="leading-7 text-zinc-600">{body}</p>{title.includes("Third-party") || title.includes("제3자") ? <p className="mt-3 text-sm"><a className="font-semibold text-rose-700" href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple Privacy →</a><span className="mx-3 text-zinc-300">|</span><a className="font-semibold text-rose-700" href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat Privacy →</a></p> : null}</section>)}</div><div className="border-t border-zinc-200 pt-8 text-sm"><a href="mailto:support@jonnylab.app" className="font-semibold text-rose-700">{c.contact}</a></div></main>;
}
