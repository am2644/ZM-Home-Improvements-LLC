import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ADMIN_COOKIE } from "@/lib/admin-constants";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const expected = process.env.ADMIN_SESSION_TOKEN;
  const session = request.cookies.get(ADMIN_COOKIE)?.value;
  const authenticated = Boolean(expected && session && session === expected);

  if (pathname === "/admin/login") {
    if (authenticated) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.next();
  }

  if (!authenticated) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
