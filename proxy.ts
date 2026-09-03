import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function isKoreanPage(pathname: string) {
  return (
    pathname.endsWith("/ko") ||
    pathname.startsWith("/reasontrace/ko") ||
    pathname === "/filingcue/privacy" ||
    pathname === "/doran" ||
    pathname.startsWith("/doran/")
  );
}

export function proxy(request: NextRequest) {
  // Preserve previously shared links once the legacy subdomain moves to this project.
  if (request.nextUrl.hostname === "automation.jonnylab.app") {
    const destination = new URL("https://jonnylab.app/automation");
    destination.search = request.nextUrl.search;
    return NextResponse.redirect(destination, 308);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(
    "x-document-language",
    isKoreanPage(request.nextUrl.pathname) ? "ko" : "en",
  );

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png).*)"],
};
