import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보 처리방침 — ClearSpace",
  description: "JonnyLab Android 사진 및 동영상 정리 앱 ClearSpace 개인정보 처리방침",
};

const sections = [
  {
    title: "개요",
    body: [
      "ClearSpace는 Android용 사진 및 동영상 정리 앱입니다. 중복 사진, 유사 사진, 연속 촬영 형태의 그룹, 품질 문제, 스크린샷, 표시 가능한 채팅 미디어, 대용량 또는 오래된 동영상을 검토할 수 있도록 돕습니다.",
      "ClearSpace는 계정 가입을 요구하지 않습니다. 현재 Android 네이티브 앱은 사용자 데이터를 수집하거나 공유하지 않으며, 사진 또는 동영상을 업로드하지 않고, 클라우드 처리를 사용하지 않으며, 광고나 분석/추적 SDK를 포함하지 않습니다.",
    ],
  },
  {
    title: "사진 및 동영상",
    body: [
      "ClearSpace는 사용자가 선택한 항목을 스캔, 분석, 표시, 비교, 정리하고 휴지통으로 이동하기 위한 목적으로만 사진 및 동영상 접근 권한을 요청합니다.",
      "현재 스캔 범위에는 MediaStore의 이미지, MediaStore의 동영상, 미디어 라이브러리에 표시되는 스크린샷, 미디어 접근 권한으로 표시 가능한 일반적인 채팅 미디어 폴더, 대용량 동영상 및 오래된 동영상이 포함됩니다.",
      "모든 사진 및 동영상 분석은 기기에서 로컬로 처리됩니다. 미디어는 JonnyLab 서버에 업로드되거나 제3자와 공유되지 않습니다.",
      "ClearSpace는 사진 및 동영상 미디어 정리 앱입니다. Android 전체 파일 접근 권한을 요청하지 않으며, 임의의 문서, APK, 캐시 파일, 앱 전용 폴더 또는 기기의 모든 파일을 스캔하지 않습니다.",
    ],
  },
  {
    title: "로컬 데이터",
    body: [
      "ClearSpace는 스캔 기록, 확보한 용량, 휴지통 메타데이터, 앱 설정 및 알림 상태를 Room 및 DataStore와 같은 Android 로컬 저장소에 저장합니다. 현재 Android 네이티브 앱에서 이 정보는 외부로 전송되지 않습니다.",
      "Android 설정에서 ClearSpace의 앱 데이터를 삭제하거나 앱을 제거하여 로컬 데이터를 삭제할 수 있습니다.",
    ],
  },
  {
    title: "수집하지 않는 정보",
    body: [
      "현재 Android 네이티브 빌드에서 ClearSpace는 개인정보, 사진 또는 동영상 콘텐츠, 이용 분석 정보, 진단 정보, 광고 식별자, 위치, 연락처 또는 기타 사용자 데이터를 수집하지 않습니다.",
      "ClearSpace는 분석, 광고 또는 추적 SDK를 사용하지 않습니다.",
    ],
  },
  {
    title: "권한",
    body: [
      "READ_MEDIA_IMAGES는 이미지 접근에 사용되며 중복 사진, 유사 사진, 스크린샷, 표시 가능한 채팅 미디어 및 품질 문제를 찾기 위해 사용됩니다.",
      "READ_MEDIA_VIDEO는 동영상 접근에 사용되며 대용량 및 오래된 동영상 정리를 위해 사용됩니다.",
      "READ_EXTERNAL_STORAGE는 Android 12 이하 호환성을 위해서만 사용될 수 있으며 maxSdkVersion은 32입니다. ClearSpace는 MANAGE_EXTERNAL_STORAGE 권한을 요청하지 않습니다.",
      "POST_NOTIFICATIONS는 사용자가 언제든지 비활성화할 수 있는 선택적 월간 정리 알림에만 사용됩니다.",
    ],
  },
  {
    title: "삭제 및 휴지통",
    body: [
      "ClearSpace는 미디어를 자동으로 조용히 삭제하지 않습니다. 사용자가 제거할 항목을 선택하면 앱은 제거 절차를 시작하기 전에 5초 실행 취소 시간을 제공합니다.",
      "Android 11 이상에서는 MediaStore.createTrashRequest를 통한 Android 시스템 휴지통 확인 절차를 사용합니다. Android 10 이하에서는 Android 동작에 따라 ContentResolver를 통한 직접 삭제가 사용될 수 있습니다.",
      "Android 시스템 확인 창을 취소하면 선택된 항목은 ClearSpace UI에 복원됩니다. 앱 내 휴지통 화면은 완전한 복원 및 영구 삭제 관리 도구가 아니므로, 복원 동작은 Android 또는 기기 갤러리의 휴지통 시스템에 따라 달라집니다.",
    ],
  },
  {
    title: "네트워크, 구매 및 데이터 공유",
    body: [
      "ClearSpace는 사진 또는 동영상 데이터를 처리하거나 전송하기 위해 네트워크를 사용하지 않습니다. 미디어를 제3자에게 판매, 공유 또는 전송하지 않습니다.",
      "ClearSpace Pro 구매가 제공되는 경우 Google Play 및 RevenueCat이 결제, 복원, 고객 정보 새로고침 및 권한 상태 관리를 위해 구매 정보를 처리할 수 있습니다. JonnyLab은 결제 카드 정보를 받거나 저장하지 않습니다.",
    ],
  },
  {
    title: "아동의 개인정보",
    body: [
      "ClearSpace는 만 13세 이상 사용자를 대상으로 하며, 아동의 개인정보를 고의로 수집하지 않습니다.",
    ],
  },
  {
    title: "처리방침 변경",
    body: [
      "본 개인정보 처리방침은 변경될 수 있습니다. 변경 사항은 갱신된 시행일과 함께 이 페이지에 게시됩니다.",
    ],
  },
  {
    title: "문의",
    body: [
      "본 개인정보 처리방침에 관한 문의는 support@jonnylab.app으로 보내주세요.",
    ],
  },
];

export default function ClearspacePrivacyKoPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/clearspace"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
      >
        ← ClearSpace
      </Link>

      <h1 className="mt-6 mb-2 text-3xl font-bold tracking-tight text-zinc-950">
        ClearSpace 개인정보 처리방침
      </h1>
      <p className="mb-12 text-sm text-zinc-500">시행일: 2026년 6월 22일</p>
      <Link
        href="/clearspace/privacy"
        className="mb-10 inline-block text-sm text-teal-700 transition-colors hover:text-teal-600"
      >
        View in English
      </Link>

      <div className="space-y-10">
        {sections.map((section, index) => (
          <section key={section.title}>
            <h2 className="mb-3 text-base font-semibold text-zinc-950">
              {index + 1}. {section.title}
            </h2>
            <div className="space-y-3">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-zinc-600">
                  {paragraph}
                </p>
              ))}
            </div>
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
