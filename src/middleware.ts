import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get("__token")?.value;

    // Capture the original URL before redirecting to login
    const originalUrl = request.url;
    if (
        currentUser &&
        (request.nextUrl.pathname.startsWith("/signup") ||
            request.nextUrl.pathname.startsWith("/login") ||
            request.nextUrl.pathname.startsWith("/account/forgot-password") ||
            request.nextUrl.pathname.startsWith("/account/reset-password") ||
            request.nextUrl.pathname.startsWith("/account/verify"))
    ) {
        return Response.redirect(new URL("/", request.url));
    }

    if (
        !currentUser &&
        (request.nextUrl.pathname.startsWith("/login") ||
            request.nextUrl.pathname.startsWith("/signup") ||
            request.nextUrl.pathname.startsWith("/account/forgot-password") ||
            request.nextUrl.pathname.startsWith("/account/reset-password") ||
            request.nextUrl.pathname.startsWith("/account/verify"))
    ) {
        return;
    }

    // Check if user is not logged in and redirect to login
    if (
        !currentUser ||
        (!currentUser && !request.nextUrl.pathname.startsWith("/login"))
    ) {
        return Response.redirect(
            new URL("/login?next=" + originalUrl, request.url)
        );
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
