import ReasonTraceSupportPage from "@/components/ReasonTraceSupportPage";
import { createPageMetadata } from "@/lib/siteMetadata";
export const metadata = createPageMetadata({ title: "ReasonTrace 지원 | JonnyLab", description: "ReasonTrace의 결정 기록, Decision Echo, 알림, 구매, 내보내기 및 삭제 도움말입니다.", path: "/reasontrace/ko/support", locale: "ko_KR" });
export default function Page() { return <ReasonTraceSupportPage locale="ko" />; }
