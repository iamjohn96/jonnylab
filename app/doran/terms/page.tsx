import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "도란 이용약관 | JonnyLab",
  description: "도란 서비스의 목적, 한계, 사용자 책임과 이용 조건을 설명합니다.",
  path: "/doran/terms",
  locale: "ko_KR",
});

const sections = [
  { title: "1. 약관의 적용", body: ["본 이용약관은 JonnyLab이 제공하는 Android용 도란 앱(패키지명 com.jonnylab.doran)의 이용에 적용됩니다. 도란을 다운로드하거나 사용하면 본 약관에 동의하는 것으로 간주합니다. 동의하지 않는 경우 사용을 중단할 수 있습니다."] },
  { title: "2. 서비스 목적", body: ["도란은 수상한 문자와 스마트폰 문제를 이해하고 안전한 다음 행동을 선택하도록 돕는 보조 서비스입니다. 사용자가 직접 입력한 내용을 바탕으로 주의해서 살펴볼 신호와 단계별 행동 안내를 제공합니다."] },
  { title: "3. 보장하지 않는 사항", body: ["도란은 문자나 발신자의 진위, 사기 여부에 대한 확정 판정, 금융 손실이나 보안 사고의 방지, 안내 결과의 완전성 또는 정확성, 특정 기관이나 연락처의 신뢰성을 보장하지 않습니다.", "도란은 경찰, 금융기관, 정부기관, 법률·금융·보안 전문가 또는 전문 상담기관을 대신하지 않습니다."] },
  { title: "4. 사용자의 책임", body: ["중요한 결정을 내리기 전에 금융기관, 통신사, 정부기관 또는 기타 관련 기관의 공식 앱, 공식 웹사이트나 대표 전화 등 공식 채널을 통해 직접 확인해야 합니다.", "비밀번호, 인증번호, 계좌번호 또는 신분증 정보를 도란에 입력해서는 안 됩니다.", "긴급하거나 이미 피해가 발생한 상황에서는 경찰, 금융기관 또는 관계 기관에 직접 연락해야 합니다."] },
  { title: "5. 금지되는 사용", body: ["도란을 불법적인 목적, 다른 사람의 개인정보를 침해하는 행위, 서비스의 보안이나 정상 운영을 방해하는 행위, 또는 도란의 안내를 전문 금융·법률·보안 자문으로 오인하게 만드는 방식으로 사용해서는 안 됩니다."] },
  { title: "6. 서비스 변경 및 중단", body: ["JonnyLab은 안전성, 품질 개선 또는 운영상의 필요에 따라 서비스 일부를 변경하거나 중단할 수 있습니다. 중요한 변경 사항은 웹사이트 또는 앱을 통해 안내합니다."] },
  { title: "7. 지식재산권", body: ["도란의 이름, 디자인, 앱, 문서 및 관련 콘텐츠에 대한 권리는 JonnyLab 또는 정당한 권리자에게 있습니다. 관련 법률이 허용하는 범위를 벗어나 복제, 배포 또는 상업적으로 이용해서는 안 됩니다."] },
  { title: "8. 책임 제한", body: ["관련 법률이 허용하는 범위에서 JonnyLab은 사용자가 도란의 안내만을 근거로 내린 결정이나 제3자의 사기·기만 행위로 발생한 간접적, 부수적 또는 결과적 손해를 보장하지 않습니다.", "본 조항은 적용되는 소비자보호법 등 관련 법률에 따라 제한될 수 있습니다. 운영 지역에 맞는 법률 검토를 권장합니다."] },
  { title: "9. 약관 변경", body: ["서비스, 운영 또는 관련 요건이 변경되면 본 약관을 갱신할 수 있습니다. 변경된 약관은 이 페이지에 게시하고 시행일을 수정하며, 필요한 경우 앱 또는 웹사이트를 통해 추가로 안내합니다."] },
  { title: "10. 문의", body: ["서비스 및 약관 관련 문의는 support@jonnylab.app 또는 +82 10-8450-9620으로 연락해 주세요. 운영 주체는 JonnyLab입니다."] },
];

export default function DoranTermsPage() {
  return <main className="mx-auto max-w-2xl px-6 py-20"><Link href="/doran" className="text-sm text-zinc-500 hover:text-zinc-950">← 도란</Link><h1 className="mt-6 text-3xl font-bold tracking-tight">도란 이용약관</h1><p className="mt-2 text-sm text-zinc-500">시행일 및 최종 수정일: 2026년 8월 26일</p><div className="mt-12 space-y-10">{sections.map(section => <section key={section.title}><h2 className="text-lg font-bold">{section.title}</h2><div className="mt-3 space-y-3">{section.body.map(p => <p key={p} className="leading-7 text-zinc-700">{p}</p>)}</div></section>)}</div><nav className="mt-12 flex flex-wrap gap-5 border-t border-zinc-200 pt-6 text-sm"><Link href="/doran/privacy" className="font-semibold text-amber-800">개인정보처리방침</Link><a href="mailto:support@jonnylab.app" className="font-semibold text-amber-800">문의하기</a></nav></main>;
}
