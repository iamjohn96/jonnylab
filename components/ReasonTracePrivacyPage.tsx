import Link from "next/link";
import ReasonTraceLanguageSwitcher from "./ReasonTraceLanguageSwitcher";

// Keep in sync with the ReasonTrace app, Backend/ (Cloudflare Worker) and the OpenAI
// organization settings. The training sentence in "AI Reflection" is only true while
// OpenAI "Share inputs and outputs with OpenAI" is OFF for the ReasonTrace project.
type Section = { title: string; body: string[]; links?: { label: string; href: string }[] };

const links = {
  apple: { label: "Apple Privacy →", href: "https://www.apple.com/legal/privacy/" },
  revenueCat: { label: "RevenueCat Privacy →", href: "https://www.revenuecat.com/privacy" },
  cloudflare: { label: "Cloudflare Privacy →", href: "https://www.cloudflare.com/privacypolicy/" },
  openAIData: { label: "OpenAI API data controls →", href: "https://developers.openai.com/api/docs/guides/your-data" },
  openAI: { label: "OpenAI Privacy →", href: "https://openai.com/policies/privacy-policy/" },
};

const policy: Record<"en" | "ko", { title: string; date: string; back: string; contact: string; sections: Section[] }> = {
  en: {
    title: "ReasonTrace Privacy Policy", date: "Effective and last updated: September 27, 2026", back: "ReasonTrace", contact: "Contact support@jonnylab.app",
    sections: [
      { title: "Service provider and scope", body: ["ReasonTrace is provided by JonnyLab. This policy applies to the ReasonTrace app for iPhone and iPad, bundle identifier com.jonnylab.reasontrace, and to the ReasonTrace AI server that JonnyLab operates on Cloudflare."] },
      { title: "Data you create", body: ["Thoughts you drop, decision titles, situations, options, choices, reasoning, expected outcomes, confidence, categories, dates, reviews, outcome ratings, lessons, resurface dates, and related settings are stored in the app’s local database. Voice recordings, transcripts, and recording metadata are stored in the app’s local container. JonnyLab does not receive this content unless you choose to send specific fields with AI Reflection (section 6)."] },
      { title: "Microphone and speech recognition", body: ["ReasonTrace requests microphone and speech-recognition permission only when you choose to record. Audio is recorded and kept on your device. Starting with version 1.1, transcription runs only on your device; if your language has no on-device speech model, the recording is kept without a transcript. Earlier versions used Apple’s Speech framework, which may send audio to Apple for transcription under Apple’s privacy terms. JonnyLab never uploads recordings or transcripts to its servers, and audio is never sent to an AI provider."] },
      { title: "Notifications", body: ["If you enable review reminders or reminders for thoughts that come back, ReasonTrace asks iOS for notification permission and schedules local notifications on your device. Notification text is intentionally generic and does not include your thought, decision title, or reasoning."] },
      { title: "App Lock and privacy cover", body: ["Optional App Lock uses Apple’s Local Authentication framework. ReasonTrace receives only the success or failure of authentication and does not receive or store biometric data. Privacy cover can hide app content when the app is in the background."] },
      {
        title: "AI Reflection (optional)",
        body: [
          "AI Reflection is off until you turn it on in Settings and accept the consent screen. Nothing is sent until you then tap Generate for a specific reflection.",
          "When you tap Generate, only the fields shown for that request are sent — for example the situation, options, chosen option, reasoning, expected or actual outcome, confidence, lesson, or principle — together with the app language. They travel over HTTPS through JonnyLab’s server on Cloudflare to OpenAI’s API, which generates the reflection. Recordings, transcripts of unrelated thoughts, and other decisions are not sent.",
          "JonnyLab’s server does not save the text you send or the AI response. ReasonTrace calls OpenAI with response storage turned off (store=false). OpenAI may keep API inputs and outputs for up to 30 days to detect abuse, or longer if required by law, and then deletes them. OpenAI does not use data sent through ReasonTrace to train its models; JonnyLab has not opted in to sharing API data with OpenAI.",
          "AI results you save are stored only on your device. Turning AI off stops future requests; it cannot recall requests already sent. AI output can be wrong and is not professional advice.",
        ],
      },
      {
        title: "AI server records, retention, and deletion",
        body: [
          "To prevent abuse and apply usage limits without an account, the AI server uses Apple App Attest to confirm requests come from a genuine copy of ReasonTrace. The first time you use AI, it creates a random installation identifier and a random purchase identifier for RevenueCat, and stores your device’s App Attest key identifier and public key.",
          "For each request it stores the request identifier, time, month and day, result status, token counts, estimated cost, and model name, plus a keyed hash of your IP address that changes daily and is used only for rate limiting. Your IP address itself is not stored by JonnyLab, but Cloudflare processes it to deliver the request.",
          "Request records are deleted automatically after 90 days (records for the current month are kept until the month ends so limits keep working). An AI identity that has not been used for 365 days is deleted with its records. You can ask for your AI server records to be deleted from Settings › Data in the app, or by email; the app shows a request number, and the request is reviewed and completed by JonnyLab. This does not delete records held by Apple, RevenueCat, Cloudflare, or OpenAI under their own policies.",
          "If the app can no longer prove its identity — for example after reinstalling it — version 1.1 and later create a new random identity, automatically or from Settings › AI Reflection › Reconnect AI, and restore your purchases to it. The new identity is linked to the previous one only so that usage limits carry over; the previous identity is no longer used and expires under the 365-day rule.",
        ],
      },
      { title: "Purchases and RevenueCat", body: ["Apple processes in-app purchases. ReasonTrace uses RevenueCat to offer and restore purchases without a ReasonTrace account. Apple and RevenueCat may process a random app user identifier (anonymous, or the random identifier issued by the AI server if you use AI Reflection), product and entitlement status, transaction or receipt information, and limited app or device technical information needed for purchases. The AI server asks RevenueCat whether that identifier has an active subscription. Decision text, reviews, recordings, and transcripts are not sent to RevenueCat."] },
      { title: "Advertising, analytics, sale, and tracking", body: ["ReasonTrace contains no advertising SDK, advertising tracking, or behavior analytics SDK. JonnyLab does not sell your personal information or use it for advertising. The app does not request an advertising identifier."] },
      { title: "Storage, backup, retention, export, and deletion", body: ["Local records remain until you delete them, delete all app data, or remove the app. You can delete individual records, recordings, or all app data and reminders in the app. You can export records as JSON or Markdown using the system file exporter; exported copies are outside ReasonTrace and must be managed separately. Depending on your Apple and device backup settings, local app data may be included in an encrypted device or iCloud backup under Apple’s policies. AI server records follow section 7. Purchase records may be retained by Apple or RevenueCat under their policies and legal obligations."] },
      { title: "Information not collected by JonnyLab", body: ["JonnyLab does not store your journal, thoughts, reviews, recordings, or transcripts on its servers, and does not collect contacts, location, health information, financial account details, or biometric data through ReasonTrace. Text you choose to send with AI Reflection passes through JonnyLab’s server without being saved there."] },
      { title: "Children’s privacy", body: ["ReasonTrace is not directed to children under 13. JonnyLab does not knowingly collect personal information from children through ReasonTrace."] },
      { title: "Security", body: ["ReasonTrace keeps journal content on your device, requires explicit action for recording, AI requests, and export, and offers App Lock and deletion controls. AI requests use HTTPS and App Attest, and the AI server stores identifiers rather than content. No storage or transmission method is completely risk-free; protect access to your device and exported files."] },
      {
        title: "Third-party services",
        body: ["Apple services, including iOS, Speech, notifications, authentication, App Attest, file export, backups, and in-app purchases, are governed by Apple’s policies. RevenueCat purchase processing is governed by RevenueCat’s privacy policy. Cloudflare hosts the AI server. OpenAI processes AI Reflection requests under its API data policy."],
        links: [links.apple, links.revenueCat, links.cloudflare, links.openAIData, links.openAI],
      },
      { title: "Changes and contact", body: ["We will update this policy when features or data handling change. The updated page will show a new effective or last-updated date. Questions and deletion requests may be sent to support@jonnylab.app."] },
    ],
  },
  ko: {
    title: "ReasonTrace 개인정보처리방침", date: "시행일 및 최종 수정일: 2026년 9월 27일", back: "ReasonTrace", contact: "support@jonnylab.app 문의",
    sections: [
      { title: "서비스 제공자 및 적용 범위", body: ["ReasonTrace는 JonnyLab이 제공합니다. 본 방침은 iPhone 및 iPad용 ReasonTrace 앱(번들 식별자 com.jonnylab.reasontrace)과 JonnyLab이 Cloudflare에서 운영하는 ReasonTrace AI 서버에 적용됩니다."] },
      { title: "사용자가 만드는 데이터", body: ["남긴 생각, 결정 제목, 상황, 선택지, 선택 내용, 판단 근거, 기대 결과, 확신 정도, 카테고리, 날짜, 회고, 결과 평가, 교훈, 다시 떠오를 날짜 및 관련 설정은 앱의 로컬 데이터베이스에 저장됩니다. 음성 녹음, 전사문 및 녹음 메타데이터는 앱의 로컬 컨테이너에 저장됩니다. 사용자가 AI 회고(6항)로 특정 항목을 직접 보내지 않는 한 JonnyLab은 이 내용을 받지 않습니다."] },
      { title: "마이크 및 음성 인식", body: ["ReasonTrace는 사용자가 녹음을 선택할 때만 마이크 및 음성 인식 권한을 요청합니다. 오디오는 기기에 녹음되고 기기에 보관됩니다. 1.1 버전부터 전사는 기기 안에서만 처리되며, 사용 언어에 기기 내 음성 모델이 없으면 전사문 없이 녹음만 보관합니다. 이전 버전은 Apple의 Speech 프레임워크를 사용했으며, 이 경우 전사를 위해 오디오가 Apple에 전송될 수 있고 Apple의 개인정보 보호정책이 적용됩니다. JonnyLab은 녹음이나 전사문을 서버에 업로드하지 않으며, 오디오는 AI 제공자에게 전송되지 않습니다."] },
      { title: "알림", body: ["사용자가 회고 알림 또는 다시 떠오르는 생각 알림을 켜면 ReasonTrace는 iOS 알림 권한을 요청하고 기기에서 로컬 알림을 예약합니다. 알림 문구는 의도적으로 일반적인 내용만 표시하며 생각, 결정 제목, 판단 근거를 포함하지 않습니다."] },
      { title: "앱 잠금 및 프라이버시 커버", body: ["선택 기능인 앱 잠금은 Apple의 Local Authentication 프레임워크를 사용합니다. ReasonTrace는 인증 성공 또는 실패 결과만 받으며 생체정보를 받거나 저장하지 않습니다. 프라이버시 커버는 앱이 백그라운드에 있을 때 내용을 가릴 수 있습니다."] },
      {
        title: "AI 회고(선택 기능)",
        body: [
          "AI 회고는 사용자가 설정에서 켜고 동의 화면에 동의하기 전까지 꺼져 있습니다. 켠 뒤에도 특정 회고에서 생성 버튼을 누르기 전에는 아무것도 전송되지 않습니다.",
          "생성 버튼을 누르면 해당 요청에 표시된 항목만 전송됩니다. 예를 들어 상황, 선택지, 선택한 항목, 판단 근거, 기대 또는 실제 결과, 확신 정도, 교훈, 원칙과 앱 언어가 포함될 수 있습니다. 이 내용은 HTTPS로 JonnyLab의 Cloudflare 서버를 거쳐 OpenAI API로 전달되어 회고를 생성합니다. 녹음, 관련 없는 생각의 전사문, 다른 결정은 전송되지 않습니다.",
          "JonnyLab 서버는 전송된 텍스트나 AI 응답을 저장하지 않습니다. ReasonTrace는 응답 저장을 끈 상태(store=false)로 OpenAI를 호출합니다. OpenAI는 오용 탐지를 위해 API 입력과 출력을 최대 30일간 보관할 수 있으며(법적으로 요구되는 경우 더 길게), 이후 삭제합니다. OpenAI는 ReasonTrace를 통해 전송된 데이터를 모델 학습에 사용하지 않으며, JonnyLab은 OpenAI에 API 데이터를 공유하도록 설정하지 않았습니다.",
          "저장한 AI 결과는 기기에만 보관됩니다. AI를 끄면 이후 요청이 중단되지만 이미 보낸 요청은 취소되지 않습니다. AI 결과는 부정확할 수 있으며 전문적인 조언이 아닙니다.",
        ],
      },
      {
        title: "AI 서버 기록, 보관 및 삭제",
        body: [
          "계정 없이 오용을 막고 사용량 한도를 적용하기 위해 AI 서버는 Apple App Attest로 요청이 정품 ReasonTrace 앱에서 왔는지 확인합니다. AI를 처음 사용할 때 임의의 설치 식별자와 RevenueCat용 임의의 구매 식별자를 만들고, 기기의 App Attest 키 식별자와 공개 키를 저장합니다.",
          "요청마다 요청 식별자, 시각, 월·일, 처리 결과, 토큰 수, 예상 비용, 모델 이름과 사용량 제한에만 쓰이는 IP 주소의 키 기반 해시(매일 변경)를 저장합니다. JonnyLab은 IP 주소 자체를 저장하지 않지만, 요청 전달을 위해 Cloudflare가 IP 주소를 처리합니다.",
          "요청 기록은 90일 후 자동 삭제됩니다(사용량 한도를 위해 이번 달 기록은 월말까지 유지). 365일 동안 사용하지 않은 AI 식별자는 관련 기록과 함께 삭제됩니다. 앱의 설정 › 데이터 또는 이메일로 AI 서버 기록 삭제를 요청할 수 있으며, 앱에 요청 번호가 표시되고 JonnyLab이 확인 후 삭제를 완료합니다. Apple, RevenueCat, Cloudflare, OpenAI가 각자의 정책에 따라 보관하는 기록은 이 요청으로 삭제되지 않습니다.",
          "앱을 재설치한 뒤 앱이 식별 정보를 증명할 수 없게 되면, 1.1 버전 이상은 자동으로 또는 설정 › AI 회고 › AI 연결 복구에서 새 임의 식별자를 만들고 구매 내역을 여기에 복원합니다. 새 식별자는 사용량 한도를 이어가기 위한 목적으로만 이전 식별자와 연결되며, 이전 식별자는 더 이상 사용되지 않고 365일 규칙에 따라 삭제됩니다.",
        ],
      },
      { title: "구매 및 RevenueCat", body: ["인앱결제는 Apple이 처리합니다. ReasonTrace는 별도 계정 없이 구매 상품을 제공하고 복원하기 위해 RevenueCat을 사용합니다. Apple과 RevenueCat은 구매 제공에 필요한 임의의 앱 사용자 식별자(익명 식별자 또는 AI 회고 사용 시 AI 서버가 발급한 임의 식별자), 상품 및 이용 권한 상태, 거래 또는 영수증 정보, 제한적인 앱·기기 기술 정보를 처리할 수 있습니다. AI 서버는 해당 식별자에 활성 구독이 있는지 RevenueCat에 확인합니다. 결정 내용, 회고, 녹음 및 전사문은 RevenueCat으로 전송되지 않습니다."] },
      { title: "광고, 분석, 판매 및 추적", body: ["ReasonTrace에는 광고 SDK, 광고 추적 또는 행동 분석 SDK가 없습니다. JonnyLab은 사용자의 개인정보를 판매하거나 광고에 사용하지 않으며 앱은 광고 식별자를 요청하지 않습니다."] },
      { title: "저장, 백업, 보관, 내보내기 및 삭제", body: ["로컬 기록은 사용자가 삭제하거나 전체 앱 데이터를 삭제하거나 앱을 제거할 때까지 남습니다. 앱에서 개별 기록·녹음 또는 전체 앱 데이터와 알림을 삭제할 수 있습니다. 시스템 파일 내보내기를 통해 JSON 또는 Markdown으로 기록을 내보낼 수 있으며, 내보낸 사본은 ReasonTrace 외부에 있으므로 별도로 관리해야 합니다. Apple 및 기기 백업 설정에 따라 로컬 앱 데이터가 Apple 정책에 따른 암호화된 기기 또는 iCloud 백업에 포함될 수 있습니다. AI 서버 기록은 7항을 따릅니다. 구매 기록은 Apple 또는 RevenueCat의 정책과 법적 의무에 따라 보관될 수 있습니다."] },
      { title: "JonnyLab이 수집하지 않는 정보", body: ["JonnyLab은 저널, 생각, 회고, 녹음, 전사문을 서버에 저장하지 않으며, ReasonTrace를 통해 연락처, 위치, 건강 정보, 금융 계정 정보 또는 생체정보를 수집하지 않습니다. AI 회고로 직접 보낸 텍스트는 JonnyLab 서버를 거쳐 전달되지만 저장되지 않습니다."] },
      { title: "아동 개인정보 보호", body: ["ReasonTrace는 만 13세 미만 아동을 대상으로 하지 않습니다. JonnyLab은 ReasonTrace를 통해 아동의 개인정보를 고의로 수집하지 않습니다."] },
      { title: "보안", body: ["ReasonTrace는 저널 내용을 기기에 저장하고 녹음·AI 요청·내보내기에 명시적 사용자 행동을 요구하며 앱 잠금과 삭제 기능을 제공합니다. AI 요청은 HTTPS와 App Attest를 사용하며, AI 서버는 내용이 아닌 식별자만 저장합니다. 어떤 저장 또는 전송 방식도 완전히 위험이 없지는 않으므로 기기와 내보낸 파일에 대한 접근을 보호해야 합니다."] },
      {
        title: "제3자 서비스",
        body: ["iOS, Speech, 알림, 인증, App Attest, 파일 내보내기, 백업 및 인앱결제를 포함한 Apple 서비스에는 Apple 정책이 적용됩니다. RevenueCat의 구매 처리에는 RevenueCat 개인정보 보호정책이 적용됩니다. AI 서버는 Cloudflare에서 운영되며, AI 회고 요청은 OpenAI의 API 데이터 정책에 따라 처리됩니다."],
        links: [links.apple, links.revenueCat, links.cloudflare, links.openAIData, links.openAI],
      },
      { title: "방침 변경 및 문의", body: ["기능 또는 데이터 처리 방식이 변경되면 본 방침을 갱신합니다. 변경된 페이지에는 새로운 시행일 또는 최종 수정일을 표시합니다. 문의와 삭제 요청은 support@jonnylab.app으로 보낼 수 있습니다."] },
    ],
  },
};

export default function ReasonTracePrivacyPage({ locale }: { locale: "en" | "ko" }) {
  const c = policy[locale]; const home = locale === "ko" ? "/reasontrace/ko" : "/reasontrace";
  return <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20"><div className="flex flex-wrap items-center justify-between gap-4"><Link href={home} className="text-sm text-zinc-500 hover:text-zinc-950">← {c.back}</Link><ReasonTraceLanguageSwitcher current={locale} englishHref="/reasontrace/privacy" koreanHref="/reasontrace/ko/privacy" autoDetect /></div><header className="mt-10 border-b border-zinc-200 pb-10"><p className="text-sm font-semibold text-rose-700">JonnyLab · com.jonnylab.reasontrace</p><h1 className="mt-3 text-4xl font-bold tracking-tight">{c.title}</h1><p className="mt-4 text-sm text-zinc-500">{c.date}</p></header><div className="space-y-10 py-10">{c.sections.map((s, i) => <section key={s.title}><h2 className="mb-3 text-lg font-semibold">{i + 1}. {s.title}</h2><div className="space-y-3">{s.body.map((p) => <p key={p} className="leading-7 text-zinc-600">{p}</p>)}</div>{s.links ? <p className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">{s.links.map((l) => <a key={l.href} className="font-semibold text-rose-700" href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>)}</p> : null}</section>)}</div><div className="border-t border-zinc-200 pt-8 text-sm"><a href="mailto:support@jonnylab.app" className="font-semibold text-rose-700">{c.contact}</a></div></main>;
}
