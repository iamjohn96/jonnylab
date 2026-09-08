import ReasonTracePrivacyPage from "@/components/ReasonTracePrivacyPage";
import { createPageMetadata } from "@/lib/siteMetadata";
export const metadata = createPageMetadata({ title: "ReasonTrace 개인정보처리방침 | JonnyLab", description: "iPhone 및 iPad용 비공개 의사결정 저널 ReasonTrace의 개인정보처리방침입니다.", path: "/reasontrace/ko/privacy", locale: "ko_KR" });
export default function Page() { return <ReasonTracePrivacyPage locale="ko" />; }
