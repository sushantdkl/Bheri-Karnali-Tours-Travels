import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const cookieName = process.env.ADMIN_COOKIE_NAME || "bheri_karnali_admin_session";

async function hasValidSession(request: NextRequest) {
  const secret = process.env.ADMIN_JWT_SECRET;
  const token = request.cookies.get(cookieName)?.value;
  if (!secret || secret.length < 24 || !token) return false;

  try {
    await jwtVerify(token, new TextEncoder().encode(secret));
    return true;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/admin")) return NextResponse.next();

  const authenticated = await hasValidSession(request);

  if (pathname === "/admin/login") {
    if (authenticated) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
    return NextResponse.next();
  }

  if (!authenticated) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
