import type { Metadata } from "next";
import PrivuneSupportPage from "@/components/PrivuneSupportPage";

const url = "https://jonnylab.app/privune/support/ko";
const enUrl = "https://jonnylab.app/privune/support";

export const metadata: Metadata = {
  title: "Privune 지원 | JonnyLab",
  description: "Privune 사진 권한, 가림 편집, 안전한 사본, 구매 및 메타데이터 제거 관련 도움말입니다.",
  alternates: { canonical: url, languages: { en: enUrl, ko: url, "x-default": enUrl } },
  openGraph: { title: "Privune 지원 | JonnyLab", description: "Privune, 안전한 사본 및 구매 관련 도움말입니다.", url, siteName: "JonnyLab", type: "website", locale: "ko_KR", alternateLocale: ["en_US"] },
  robots: { index: true, follow: true },
};

export default function PrivuneSupportKoRoute() {
  return <PrivuneSupportPage lang="ko" />;
}
