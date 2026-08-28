import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "FilingCue 개인정보처리방침 | JonnyLab",
  description:
    "JonnyLab의 Android 앱 FilingCue가 개인정보와 기기 내 데이터를 처리하는 방법을 설명합니다.",
  path: "/filingcue/privacy",
  locale: "ko_KR",
});

type PolicySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  after?: string[];
};

const sections: PolicySection[] = [
  {
    title: "FilingCue 소개",
    paragraphs: [
      "FilingCue는 사용자가 기업 공시와 Corporate Event를 빠르고 정확하게 이해하도록 돕는 모바일 애플리케이션입니다.",
      "FilingCue는 공시에서 확인된 사실, 이벤트의 일반적인 의미, 현재 공시만으로 알 수 없는 사항, 후속 확인 일정 및 공식 출처를 구분하여 제공합니다.",
      "FilingCue는 다음 기능을 제공하지 않습니다.",
    ],
    bullets: ["매수 또는 매도 추천", "목표주가", "주가 예측", "종목 추천", "자동매매", "포트폴리오 최적화", "개인화된 투자 자문"],
    after: ["FilingCue가 제공하는 내용은 기업 공시를 이해하기 위한 정보이며, 투자 자문이나 투자 성과에 대한 보장이 아닙니다."],
  },
  {
    title: "개인정보 처리 기본 원칙",
    paragraphs: ["현재 배포되는 FilingCue는 다음 원칙으로 운영됩니다."],
    bullets: ["사용자 계정을 만들지 않습니다.", "로그인을 요구하지 않습니다.", "광고를 표시하지 않습니다.", "사용자 행동 분석이나 추적 도구를 사용하지 않습니다.", "사용자의 개인정보를 JonnyLab 서버로 전송하지 않습니다.", "사용자별 관심기업과 읽음 상태는 기기 내부에만 저장합니다.", "사용자의 개인정보를 판매하지 않습니다."],
  },
  {
    title: "수집하지 않는 개인정보",
    paragraphs: ["현재 FilingCue는 다음 정보를 수집하거나 JonnyLab 서버로 전송하지 않습니다."],
    bullets: ["이름", "이메일 주소", "전화번호", "생년월일", "성별", "주소", "정확한 위치 또는 대략적인 위치", "연락처", "사진 및 동영상", "음성 또는 오디오", "문자 메시지 및 통화 기록", "금융계좌 정보", "신용카드 또는 결제 정보", "투자계좌 및 보유 종목", "개인 포트폴리오 정보", "광고 식별자", "기기 고유 식별자", "웹 검색 및 방문 기록", "다른 앱의 사용 기록", "건강 및 의료 정보", "생체정보"],
    after: ["FilingCue는 사용자별 투자 성향, 위험 선호도 또는 재산 상태를 분석하지 않습니다."],
  },
  {
    title: "기기 내부에 저장되는 정보",
    paragraphs: ["FilingCue는 앱 기능을 제공하기 위해 다음 정보를 사용자 기기 내부에 저장할 수 있습니다."],
    bullets: ["관심기업 목록", "읽은 공시 또는 Event Card의 식별자", "알림 환경설정", "앱 환경설정", "화면 표시 및 사용 편의 설정"],
    after: ["이 정보는 앱 전용 로컬 저장공간에 보관됩니다.", "JonnyLab은 현재 해당 정보를 외부 서버로 전송하거나 사용자 계정과 동기화하지 않습니다."],
  },
  {
    title: "로컬 데이터의 삭제",
    paragraphs: ["사용자는 다음 방법으로 기기 내부에 저장된 FilingCue 데이터를 삭제할 수 있습니다."],
    bullets: ["FilingCue 앱 삭제", "Android 설정에서 FilingCue의 앱 데이터 삭제", "앱에서 제공되는 개별 삭제 기능 사용"],
    after: ["앱을 삭제하거나 앱 데이터를 초기화하면 관심기업, 읽음 상태 및 환경설정이 복구되지 않을 수 있습니다.", "JonnyLab 서버에 사용자 계정이나 사용자별 앱 데이터가 저장되지 않으므로, 현재 버전에는 별도의 서버 계정 삭제 절차가 없습니다."],
  },
  {
    title: "공개 기업 공시 정보",
    paragraphs: ["FilingCue가 다루는 기업 공시와 Corporate Event 정보는 공식적으로 공개된 기업 공시를 기반으로 합니다.", "이러한 기업 공시 정보는 일반 사용자의 개인정보가 아니라 공개된 기업 정보입니다.", "FilingCue는 공시에서 직접 확인된 내용과 일반적인 설명을 구분하고, 가능한 경우 공식 문서 출처를 표시합니다."],
  },
  {
    title: "현재 내부 테스트 버전",
    paragraphs: ["현재 내부 테스트 버전은 제품 기능과 사용자 경험을 검증하기 위해 합성 테스트 데이터를 사용할 수 있습니다.", "합성 테스트 데이터는 실제 사용자의 개인정보를 기반으로 생성되지 않습니다.", "실제 OpenDART 공시 연동이나 서버 기반 데이터 제공이 활성화되기 전에 관련 데이터 흐름과 개인정보처리방침을 다시 검토하고 필요한 경우 본 방침을 갱신합니다."],
  },
  {
    title: "개인정보 이용 목적",
    paragraphs: ["현재 FilingCue는 사용자 개인정보를 수집하지 않습니다.", "기기 내부에 저장되는 관심기업, 읽음 상태 및 환경설정은 다음 목적으로만 사용됩니다."],
    bullets: ["사용자가 선택한 관심기업 표시", "읽은 공시와 읽지 않은 공시 구분", "앱 환경설정 유지", "사용자 기기에서 앱 이용 경험 제공"],
    after: ["이 정보는 광고, 사용자 프로파일링, 신용평가, 투자 성향 분석 또는 제3자 마케팅에 사용되지 않습니다."],
  },
  {
    title: "개인정보의 제3자 제공 및 판매",
    paragraphs: ["JonnyLab은 FilingCue 사용자의 개인정보를 판매하지 않습니다.", "현재 FilingCue는 사용자 개인정보를 광고 사업자, 데이터 중개업체, 금융회사 또는 기타 제3자에게 제공하지 않습니다.", "향후 외부 서비스가 실제 Release에 추가되는 경우, 적용 전에 데이터 처리 범위를 검토하고 필요한 고지와 동의를 제공하며 본 개인정보처리방침과 Google Play Data safety 정보를 갱신합니다."],
  },
  {
    title: "광고 및 사용자 추적",
    paragraphs: ["현재 FilingCue는 다음 기능을 사용하지 않습니다."],
    bullets: ["광고 네트워크", "맞춤형 광고", "광고 식별자", "사용자 행동 분석 SDK", "제3자 사용자 추적 SDK", "위치 기반 추적", "앱 간 추적", "마케팅 프로파일링"],
    after: ["JonnyLab은 FilingCue 이용 기록을 이용해 사용자를 식별하거나 광고 대상을 구성하지 않습니다."],
  },
  {
    title: "결제 및 구독",
    paragraphs: ["현재 배포 버전은 실제 결제, 유료 구독 또는 인앱 구매를 제공하지 않습니다.", "향후 Google Play Billing, RevenueCat 또는 다른 결제 관리 서비스가 실제 Release에 추가될 경우, 결제 과정에서 처리되는 정보, 익명 사용자 식별자, 구독 상태 및 관련 제3자 처리 내용을 기능 활성화 전에 본 개인정보처리방침에 반영합니다.", "Google Play를 통한 결제정보는 Google의 정책과 결제 시스템에 따라 처리되며, JonnyLab이 사용자의 전체 결제수단 정보를 직접 보관하지 않는 구조를 우선합니다."],
  },
  {
    title: "외부 서비스와 링크",
    paragraphs: ["FilingCue는 공식 공시 원문이나 관련 정보를 제공하기 위해 외부 웹사이트 링크를 표시할 수 있습니다.", "외부 서비스에는 다음이 포함될 수 있습니다."],
    bullets: ["금융감독원 OpenDART", "Google Play", "기타 공식 공시 원문 서비스"],
    after: ["사용자가 외부 링크를 열면 해당 서비스의 개인정보처리방침과 이용약관이 적용됩니다.", "JonnyLab은 외부 서비스의 개인정보 처리 방식이나 콘텐츠를 통제하지 않습니다."],
  },
  {
    title: "Google Play에서 처리되는 정보",
    paragraphs: ["FilingCue는 Google Play를 통해 배포됩니다.", "Google은 앱 설치, 업데이트, 기기 호환성, 결제 또는 Play 서비스 운영 과정에서 일부 정보를 독립적으로 처리할 수 있습니다. 이러한 처리는 Google의 개인정보처리방침과 Google Play 정책에 따릅니다.", "JonnyLab은 현재 FilingCue 앱에 자체 광고 또는 사용자 분석 SDK를 포함하지 않습니다."],
  },
  {
    title: "데이터 보유 기간",
    paragraphs: ["기기 내부에 저장되는 관심기업, 읽음 상태 및 환경설정은 다음 시점까지 보관될 수 있습니다."],
    bullets: ["사용자가 해당 정보를 삭제할 때", "앱 데이터를 초기화할 때", "FilingCue 앱을 삭제할 때"],
    after: ["JonnyLab은 현재 사용자 계정이나 사용자별 앱 이용 데이터를 서버에 보관하지 않습니다."],
  },
  {
    title: "데이터 보안",
    paragraphs: ["JonnyLab은 개인정보 수집을 최소화하고 사용자 상태를 가능한 한 기기 내부에 보관하는 방식으로 개인정보 위험을 줄입니다.", "현재 FilingCue는 다음 원칙을 적용합니다."],
    bullets: ["불필요한 개인정보를 요청하지 않습니다.", "사용자 계정을 만들지 않습니다.", "앱 백업을 기본적으로 비활성화합니다.", "앱 전용 로컬 저장공간을 사용합니다.", "비밀키나 인증정보를 앱 로그에 기록하지 않습니다.", "사용자의 전체 AI 입력이나 응답을 무제한으로 저장하지 않습니다."],
    after: ["다만 어떠한 전자적 저장 방식도 절대적인 보안을 보장할 수는 없습니다."],
  },
  {
    title: "아동의 개인정보",
    paragraphs: ["FilingCue는 기업 공시와 투자 관련 정보를 이해하려는 성인을 대상으로 합니다.", "FilingCue는 만 18세 미만의 아동을 대상으로 설계되거나 제공되지 않습니다.", "JonnyLab은 FilingCue를 통해 아동의 개인정보를 의도적으로 수집하지 않습니다.", "아동의 개인정보가 처리된 사실을 확인한 경우 아래 문의처로 알려주시기 바랍니다."],
  },
  {
    title: "이용자의 권리",
    paragraphs: ["현재 FilingCue는 사용자 계정이나 서버 기반 사용자 프로필을 생성하지 않습니다.", "사용자는 기기 설정 또는 앱 기능을 통해 로컬 데이터를 확인하거나 삭제할 수 있습니다.", "개인정보 처리와 관련한 문의, 확인 또는 요청이 있는 경우 아래 이메일로 연락할 수 있습니다.", "JonnyLab은 적용되는 법령과 현재 보유한 정보의 범위 안에서 요청을 검토합니다."],
  },
  {
    title: "개인정보의 국외 이전",
    paragraphs: ["현재 FilingCue는 사용자 개인정보를 JonnyLab 서버 또는 해외 서버로 전송하지 않습니다.", "향후 해외에 위치한 외부 서비스가 사용자 데이터를 실제로 처리하게 되는 경우, 해당 기능을 활성화하기 전에 처리 국가, 이전 항목, 목적, 보유 기간 및 거부 방법을 검토하고 필요한 내용을 본 방침에 반영합니다."],
  },
  {
    title: "개인정보처리방침의 변경",
    paragraphs: ["FilingCue의 기능 또는 데이터 처리 방식이 변경되면 본 개인정보처리방침도 변경될 수 있습니다.", "다음과 같은 기능이 실제 Release에 추가되기 전 개인정보처리방침과 Google Play Data safety 선언을 검토하고 필요한 내용을 갱신합니다."],
    bullets: ["사용자 계정", "서버 동기화", "알림 서버", "사용자 분석", "광고", "결제 및 구독", "RevenueCat 연동", "실제 사용자 행동 데이터 수집", "새로운 외부 데이터 처리 서비스"],
    after: ["중요한 변경이 있는 경우 시행일과 최종 수정일을 갱신하고 앱, 웹사이트 또는 적절한 방법으로 안내합니다."],
  },
  {
    title: "문의처",
    paragraphs: ["운영자: JonnyLab", "서비스: FilingCue", "이메일: support@jonnylab.app", "개인정보 처리와 관련한 문의는 위 이메일로 보내주시기 바랍니다."],
  },
];

export default function FilingCuePrivacyPage() {
  return (
    <main lang="ko" className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link href="/" className="text-sm text-zinc-500 transition-colors hover:text-zinc-950">
        ← JonnyLab
      </Link>

      <header className="mt-8 border-b border-zinc-200 pb-10">
        <p className="text-sm font-semibold text-indigo-700">JonnyLab · Android</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950">
          FilingCue 개인정보처리방침
        </h1>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-zinc-500">
          <span>시행일: 2026년 8월 28일</span>
          <span>최종 수정일: 2026년 8월 28일</span>
        </div>
        <p className="mt-6 leading-7 text-zinc-600">
          JonnyLab은 FilingCue 이용자의 개인정보를 중요하게 생각합니다. 본 개인정보처리방침은 JonnyLab이 제공하는 Android 앱 FilingCue에 적용되며, 앱이 어떤 정보를 처리하고 저장하는지 설명합니다.
        </p>
      </header>

      <div className="space-y-10 py-10">
        {sections.map((section, index) => (
          <section key={section.title} aria-labelledby={`section-${index + 1}`}>
            <h2 id={`section-${index + 1}`} className="mb-4 text-lg font-semibold text-zinc-950">
              {index + 1}. {section.title}
            </h2>
            <div className="space-y-3 text-zinc-600">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-7">{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul className="space-y-2 pl-5 leading-7 marker:text-indigo-500">
                  {section.bullets.map((bullet) => <li key={bullet} className="list-disc pl-1">{bullet}</li>)}
                </ul>
              ) : null}
              {section.after?.map((paragraph) => (
                <p key={paragraph} className="leading-7">{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="border-t border-zinc-200 pt-8 text-sm text-zinc-600">
        <p>본 개인정보처리방침은 FilingCue Android 앱에 적용됩니다.</p>
        <a href="mailto:support@jonnylab.app" className="mt-3 inline-block font-semibold text-indigo-700 hover:text-indigo-600">
          support@jonnylab.app 문의
        </a>
        <p className="mt-5 text-zinc-500">© 2026 JonnyLab. All rights reserved.</p>
      </footer>
    </main>
  );
}
