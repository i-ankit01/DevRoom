import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  publicRoutes,
  authRoutes,
} from "@/allRoutes";

// Secret used to sign NextAuth JWT cookies
const secret = process.env.NEXTAUTH_SECRET || "secret";

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;

  const pathname = nextUrl.pathname;

  // Skip static files and Next.js internals
  if (pathname.startsWith("/_next") || pathname.includes(".")) {
    return;
  }

  const isApiAuthRoute = pathname.startsWith(apiAuthPrefix)

  // Skip API auth routes
  if (isApiAuthRoute) {
    return null;
  }

  // Check if user is logged in by reading NextAuth JWT token
  const token = await getToken({ req, secret });
  const isLoggedIn = !!token;

  const isPublicRoute = publicRoutes.includes(pathname);
  const isAuthRoute = authRoutes.includes(pathname);

  // If user is logged in and tries to access auth page (e.g., sign-in)
  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url));
  }

  // If user is not logged in and trying to access protected route
  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }

  // Otherwise, allow request to continue
  return NextResponse.next();
}

// Apply middleware to desired paths
export const config = {
  //copied from clerk
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
