import Link from "next/link";
import { createPageMetadata } from "@/lib/siteMetadata";

export const metadata = createPageMetadata({
  title: "이용약관 — ClearSpace",
  description: "JonnyLab Android 사진 및 동영상 정리 앱 ClearSpace 이용약관",
  path: "/clearspace/terms/ko",
  locale: "ko_KR",
});

const sections = [
  {
    title: "약관 동의",
    body: "ClearSpace를 다운로드, 접근, 구매 또는 사용하면 본 이용약관에 동의하는 것으로 간주됩니다. 약관에 동의하지 않는 경우 앱을 사용하지 마세요.",
  },
  {
    title: "ClearSpace 소개",
    body: "ClearSpace는 Android용 사진 및 동영상 미디어 정리 앱이자 사진 클리너, 중복 찾기, 사진 및 동영상 저장공간 관리 도우미입니다. Android 미디어 권한으로 접근 가능한 미디어를 분석하고 중복 사진, 유사 사진, 연속 촬영 형태의 그룹, 품질 문제, 스크린샷, 표시 가능한 채팅 미디어, 대용량 또는 오래된 동영상에 대한 정리 제안을 제공합니다.",
  },
  {
    title: "미디어 범위",
    body: "ClearSpace는 전체 파일 저장공간 정리 앱이 아닙니다. Android 전체 파일 접근 권한을 요청하지 않으며, 임의의 문서, APK, 캐시 파일, 앱 전용 폴더 또는 기기의 모든 폴더를 스캔한다고 주장하지 않습니다. 결과는 사용자가 부여한 권한과 Android 미디어 접근 규칙에 따라 접근 가능한 미디어로 제한됩니다.",
  },
  {
    title: "탐지 결과",
    body: "ClearSpace의 중복 탐지, 유사도 그룹화, 스크린샷 탐지, 채팅 미디어 탐지, 동영상 분류 및 품질 분석은 일부 항목을 놓치거나 미디어를 잘못 식별할 수 있습니다. 모든 제안은 사용자의 검토를 위해 제공되며 확정적인 결과로 간주해서는 안 됩니다.",
  },
  {
    title: "미디어 제거 전 검토",
    body: "제거를 확정하기 전에 선택한 모든 항목을 검토할 책임은 사용자에게 있습니다. ClearSpace는 제거 절차를 시작하기 전에 5초 실행 취소 시간을 제공합니다. Android 11 이상에서는 선택한 미디어가 MediaStore.createTrashRequest를 사용하는 Android 시스템 휴지통 확인 절차를 통해 이동됩니다. Android 10 이하에서는 Android 미디어 API를 통한 직접 삭제가 사용될 수 있습니다. 앱 내 휴지통 화면은 완전한 복원 관리 도구가 아니므로 중요한 사진과 동영상은 백업해 두세요.",
  },
  {
    title: "권한 및 알림",
    body: "사용자는 ClearSpace에 사진, 동영상 및 알림 접근 권한을 부여할 수 있습니다. 해당 권한은 개인정보 처리방침에 설명된 앱 기능에만 사용됩니다. 월간 정리 알림은 선택 사항이며 비활성화할 수 있습니다.",
  },
  {
    title: "ClearSpace Pro",
    body: "ClearSpace는 Google Play를 통해 유료 Pro 기능을 제공할 수 있습니다. 주간, 월간, 연간 및 평생 플랜이 구매 옵션으로 제공될 수 있으며, 구매 전에 앱 또는 Google Play에 표시되는 가격과 옵션이 우선합니다. 구매, 취소, 복원, 환불 및 권한 제공 여부는 Google Play, RevenueCat 및 관련 결제 서비스를 통해 관리되며 해당 약관이 적용됩니다.",
  },
  {
    title: "라이선스 및 허용되는 사용",
    body: "JonnyLab은 ClearSpace를 사용할 수 있는 제한적이고 개인적이며 비독점적이고 양도 불가능하며 철회 가능한 라이선스를 부여합니다. 관련 법률에서 허용하는 경우를 제외하고 앱을 복제, 재배포, 재판매, 리버스 엔지니어링, 방해 또는 오용해서는 안 됩니다.",
  },
  {
    title: "서비스 제공 및 책임 제한",
    body: "관련 법률이 허용하는 범위에서 ClearSpace는 현재 상태 및 제공 가능한 상태로 제공됩니다. JonnyLab은 중단 없는 작동, 탐지 정확도, 구매 가능 여부 또는 제거된 미디어의 복구를 보장하지 않으며, 앱 사용으로 발생한 우발적 삭제, 데이터 손실 또는 간접적·결과적 손해에 대해 책임을 지지 않습니다.",
  },
  {
    title: "변경 및 문의",
    body: "본 약관은 변경될 수 있습니다. 변경 사항은 갱신된 시행일과 함께 이 페이지에 게시됩니다. 문의는 support@jonnylab.app으로 보내주세요.",
  },
];

export default function ClearspaceTermsKoPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/clearspace"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
      >
        ← ClearSpace
      </Link>

      <h1 className="mt-6 mb-2 text-3xl font-bold tracking-tight text-zinc-950">
        ClearSpace 이용약관
      </h1>
      <p className="mb-12 text-sm text-zinc-500">시행일: 2026년 6월 22일</p>
      <Link
        href="/clearspace/terms"
        className="mb-10 inline-block text-sm text-teal-700 transition-colors hover:text-teal-600"
      >
        View in English
      </Link>

      <div className="space-y-10">
        {sections.map((section, index) => (
          <section key={section.title}>
            <h2 className="mb-2 text-base font-semibold text-zinc-950">
              {index + 1}. {section.title}
            </h2>
            <p className="leading-relaxed text-zinc-600">{section.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-6 text-sm">
        <a
          href="mailto:support@jonnylab.app"
          className="text-teal-700 transition-colors hover:text-teal-600"
        >
          support@jonnylab.app 문의
        </a>
      </div>
    </main>
  );
}
