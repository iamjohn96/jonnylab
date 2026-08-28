"use client";

import { useEffect } from "react";

type Props = {
  current: "en" | "ko";
  englishHref: string;
  koreanHref: string;
  autoDetect?: boolean;
};

const preferenceCookie = "deadline-lens-language";

export default function DeadlineLensLanguageSwitcher({
  current,
  englishHref,
  koreanHref,
  autoDetect = false,
}: Props) {
  useEffect(() => {
    if (!autoDetect || current !== "en") return;

    const hasPreference = document.cookie
      .split("; ")
      .some((cookie) => cookie.startsWith(`${preferenceCookie}=`));

    if (!hasPreference && navigator.language.toLowerCase().startsWith("ko")) {
      window.location.replace(koreanHref);
    }
  }, [autoDetect, current, koreanHref]);

  function chooseLanguage(language: "en" | "ko") {
    document.cookie = `${preferenceCookie}=${language}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }

  return (
    <nav aria-label="Language selection" className="inline-flex rounded-full border border-zinc-200 bg-white p-1 text-sm shadow-sm">
      <a
        href={englishHref}
        hrefLang="en"
        onClick={() => chooseLanguage("en")}
        aria-current={current === "en" ? "page" : undefined}
        className={`rounded-full px-3 py-1.5 font-medium transition-colors ${current === "en" ? "bg-zinc-950 text-white" : "text-zinc-600 hover:text-zinc-950"}`}
      >
        English
      </a>
      <a
        href={koreanHref}
        hrefLang="ko"
        onClick={() => chooseLanguage("ko")}
        aria-current={current === "ko" ? "page" : undefined}
        className={`rounded-full px-3 py-1.5 font-medium transition-colors ${current === "ko" ? "bg-zinc-950 text-white" : "text-zinc-600 hover:text-zinc-950"}`}
      >
        한국어
      </a>
    </nav>
  );
}
