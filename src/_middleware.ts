import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    const path = request.nextUrl.pathname;

    // Public pages that don't require authentication
    const isPublic =
      path === "/authentication/login" || path === "/authentication/register";

    const token = request.cookies.get("token")?.value || "";

    // Redirect authenticated users away from login/register pages
    if (isPublic && token) {
      if (
        path === "/authentication/login" ||
        path === "/authentication/register"
      ) {
        return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
      }
      return NextResponse.redirect(
        new URL("/authentication/login", request.nextUrl)
      );
    }

    // Redirect unauthenticated users away from protected pages
    if (!isPublic && !token) {
      return NextResponse.redirect(
        new URL("/authentication/login", request.nextUrl)
      );
    }

    // If the page does not exist, redirect to /404
    if (
      path !== "/authentication/login" &&
      path !== "/authentication/register" &&
      path !== "/dashboard"
    ) {
      return NextResponse.redirect(new URL("/404", request.nextUrl));
    }

    return NextResponse.next();
  } catch (err) {
    console.log(err);
    return NextResponse.redirect(new URL("/404", request.nextUrl));
  }
}

// Apply middleware to all pages
export const config = {
  matcher: "/:path*",
};
