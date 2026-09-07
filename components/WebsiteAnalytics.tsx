"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function WebsiteAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isInitialPageView = useRef(true);

  useEffect(() => {
    if (isInitialPageView.current) {
      isInitialPageView.current = false;
      return;
    }

    window.gtag?.("event", "page_view", {
      page_location: window.location.href,
      page_path: `${pathname}${searchParams.size ? `?${searchParams}` : ""}`,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}
