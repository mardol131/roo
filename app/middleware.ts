import { NextRequest, NextResponse } from "next/server";
import { decryptPayloadJwt } from "./app/_api/payload";

export async function middleware(req: NextRequest) {
  const { pathname, host } = req.nextUrl;

  if (host.startsWith("localhost")) {
    return NextResponse.next();
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/stranky/")) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = `/stranky/co-je-roo`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/", "/stranky"],
};
