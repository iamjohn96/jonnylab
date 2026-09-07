export type SignalAnswer = {
  id: string;
  title: string;
  keywords: string[];
  summary: string;
  confirmed: string;
  uncertain: string;
  nextStep: string;
  reviewedAt: string;
  source: {
    label: string;
    href: string;
  };
};

export const signalAnswers: SignalAnswer[] = [
  {
    id: "agent-permissions",
    title: "What can an AI agent permission allow?",
    keywords: ["ai agent", "agent permission", "mcp", "tool permission", "ai 권한", "에이전트 권한", "권한 허용", "agent"],
    summary: "An AI agent’s permission level can control how autonomously it uses tools, commands, URLs, and files during a session.",
    confirmed: "Some agent environments offer per-tool approval and sandboxing controls, while broader permission modes can auto-approve actions.",
    uncertain: "A permission label alone does not show every effect of a particular tool call or external service.",
    nextStep: "Review the tool name and its parameters before approval. Keep confirmation on for actions that modify files, run commands, or access external resources.",
    reviewedAt: "2026-09-07",
    source: {
      label: "Visual Studio Code: manage approvals and permissions",
      href: "https://code.visualstudio.com/docs/agents/run/approvals",
    },
  },
  {
    id: "service-or-device",
    title: "Is it a service outage or my device?",
    keywords: ["openai", "chatgpt", "not working", "service down", "outage", "error", "안 돼", "오류", "서비스 장애", "챗지피티"],
    summary: "Check the service status first, then compare a clean browser or another network before changing device settings.",
    confirmed: "A public incident can explain broad failures. Extensions, cached site data, VPNs, proxies, and a single network can also cause local problems.",
    uncertain: "One failed request does not prove an outage or a device fault on its own.",
    nextStep: "Check the official status page, retry in a private window with extensions disabled, then try a different network or device if the issue continues.",
    reviewedAt: "2026-09-07",
    source: {
      label: "OpenAI Help: troubleshooting ChatGPT errors",
      href: "https://help.openai.com/en/articles/7996703",
    },
  },
  {
    id: "subscription-renewal",
    title: "How do I check a renewal or payment text?",
    keywords: ["subscription", "renewal", "payment text", "invoice", "charged", "결제 문자", "구독 갱신", "자동 결제", "청구", "문자 사기"],
    summary: "Do not use the link or phone number in an unexpected renewal message; verify through the company’s known official channel.",
    confirmed: "Scammers send fake renewal notices to obtain credit card or other personal information.",
    uncertain: "A familiar brand name or logo does not confirm that a message is genuine.",
    nextStep: "Open the company’s official app or type its website yourself. Check your account or card activity there before responding to the message.",
    reviewedAt: "2026-09-07",
    source: {
      label: "FTC: auto-renewals and fake renewal notices",
      href: "https://consumer.ftc.gov/articles/getting-and-out-free-trials-auto-renewals-and-negative-option-subscriptions",
    },
  },
  {
    id: "browser-virus-warning",
    title: "What should I do when a browser says my device is infected?",
    keywords: ["virus", "infected", "browser popup", "malware", "device infected", "바이러스", "감염", "브라우저 경고", "팝업"],
    summary: "An urgent browser pop-up is not proof that your device is infected. Do not click, call, or install anything from it.",
    confirmed: "Misleading sites can display virus alerts and pressure visitors to download software or contact a number.",
    uncertain: "The pop-up alone cannot determine whether unwanted software is actually installed.",
    nextStep: "Close the tab or browser. Reopen it, review recent extensions and downloads, and use your device’s trusted security tools or official support path.",
    reviewedAt: "2026-09-07",
    source: {
      label: "Google Chrome Help: unwanted ads, pop-ups, and malware",
      href: "https://support.google.com/chrome/answer/2765944",
    },
  },
  {
    id: "photo-sharing-privacy",
    title: "What can a photo reveal before I share it?",
    keywords: ["photo privacy", "share photo", "metadata", "location photo", "사진 공유", "사진 개인정보", "메타데이터", "위치 정보", "사진 위치"],
    summary: "A photo can carry more than its visible image, including location, date, time, device, and captions depending on how it was captured and shared.",
    confirmed: "On iPhone, sharing can include associated metadata, and the share options can exclude location data.",
    uncertain: "Removing location metadata does not remove visible clues in the image, such as an address, face, badge, or landmark.",
    nextStep: "Review the image itself and its share options. Remove or hide location information when appropriate, then check for visible personal details before sending.",
    reviewedAt: "2026-09-07",
    source: {
      label: "Apple Support: share photos and videos",
      href: "https://support.apple.com/guide/iphone/share-photos-and-videos-iphf28f17237/ios",
    },
  },
  {
    id: "iphone-storage",
    title: "Why is my iPhone storage full?",
    keywords: ["iphone storage", "storage full", "iphone full", "아이폰 저장공간", "용량 부족", "저장 공간 꽉"],
    summary: "Check the storage breakdown before deleting anything; apps, photos, downloads, messages, and local files can each be responsible.",
    confirmed: "iPhone Storage shows recommendations and a list of apps with their storage use. Offloading an app can retain its documents and data.",
    uncertain: "A large category does not tell you which individual items are safe to remove until you review it.",
    nextStep: "Go to Settings → General → iPhone Storage, review the largest categories, and use the recommendation or app detail view before deleting content.",
    reviewedAt: "2026-09-07",
    source: {
      label: "Apple Support: check iPhone and iPad storage",
      href: "https://support.apple.com/en-us/108429",
    },
  },
];
