import ReasonTraceProductPage from "@/components/ReasonTraceProductPage";
import { createPageMetadata } from "@/lib/siteMetadata";
export const metadata = createPageMetadata({ title: "ReasonTrace — 결정한 이유를 기억하세요 | JonnyLab", description: "판단의 근거를 기록하고 실제 결과를 회고하며 더 나은 결정을 쌓아가는 iPhone 및 iPad용 비공개 의사결정 저널입니다.", path: "/reasontrace/ko", locale: "ko_KR" });
export default function Page() { return <ReasonTraceProductPage locale="ko" />; }
