import { NextRequest, NextResponse } from "next/server";
import { decryptPayloadJwt } from "./app/_api/payload";

export async function middleware(req: NextRequest) {
  // const url = req.nextUrl.clone();
  // const token = req.cookies.get("payload-token")?.value;
  // if (!token) {
  //   url.pathname = "/login";
  //   return NextResponse.redirect(url);
  // }
  // try {
  //   const payload = await decryptPayloadJwt(token);
  //   console.log(payload.role);
  //   if (payload.role !== "admin") {
  //     url.pathname = "/login";
  //     return NextResponse.redirect(url);
  //   }
  //   return NextResponse.next();
  // } catch (err) {
  //   console.log(err);
  //   url.pathname = "/kategorie/venues";
  //   return NextResponse.redirect(url);
  // }
  //   const { pathname } = req.nextUrl;
  //   if (
  //     pathname.startsWith("/_next") ||
  //     pathname.startsWith("/api") ||
  //     pathname.startsWith("/favicon")
  //   ) {
  //     return NextResponse.next();
  //   }
  //   if (pathname.startsWith("/stranky/")) {
  //     return NextResponse.next();
  //   }
  //   if (pathname.startsWith("/stranky/")) {
  //     return NextResponse.next();
  //   }
  //   const url = req.nextUrl.clone();
  //   url.pathname = `/stranky/co-je-roo`;
  //   return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/", "/stranky"],
};
