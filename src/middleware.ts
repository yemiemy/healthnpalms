import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get("__token")?.value;

    const is_medical_professional = request.cookies.get("user_type")?.value;

    // Capture the original URL before redirecting to login
    const originalUrl = request.url;
    if (
        currentUser &&
        (request.nextUrl.pathname.startsWith("/account/signup") ||
            request.nextUrl.pathname.startsWith("/account/login") ||
            request.nextUrl.pathname.startsWith("/account/forgot-password") ||
            request.nextUrl.pathname.startsWith("/account/reset-password") ||
            request.nextUrl.pathname.startsWith("/account/verify"))
    ) {
        if (is_medical_professional) {
            return Response.redirect(new URL("/staff/", request.url));
        } else {
            return Response.redirect(new URL("/", request.url));
        }
    }

    if (
        !currentUser &&
        (request.nextUrl.pathname.startsWith("/account/login") ||
            request.nextUrl.pathname.startsWith("/account/signup") ||
            request.nextUrl.pathname.startsWith("/account/forgot-password") ||
            request.nextUrl.pathname.startsWith("/account/reset-password") ||
            request.nextUrl.pathname.startsWith("/account/verify"))
    ) {
        return;
    }

    // Check if user is not logged in and redirect to login
    if (
        !currentUser ||
        (!currentUser && !request.nextUrl.pathname.startsWith("/account/login"))
    ) {
        return Response.redirect(
            new URL("/account/login?next=" + originalUrl, request.url)
        );
    }

    if (currentUser && request.nextUrl.pathname.startsWith("/staff")) {
        if (is_medical_professional) {
            return;
        } else {
            // return user to non admin section
            return Response.redirect(new URL("/", request.url));
        }
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
