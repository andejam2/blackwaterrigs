import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Flip this to false when you're ready to go live with the real site.
  const PLACEHOLDER_MODE = true;

  const { pathname } = req.nextUrl;

  // Allow the placeholder page and Next internals through.
  // Allow the placeholder page, Next internals, and any public/static files through.
  if (
    pathname === "/placeholder" ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.includes(".") // <-- allows /logo.svg, /images/foo.png, etc.
  ) {
    return NextResponse.next();
  }


  if (PLACEHOLDER_MODE) {
    const url = req.nextUrl.clone();
    url.pathname = "/placeholder";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
