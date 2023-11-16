import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ISLOGIN } from "./app/contants";

function getUserStatus(token) {
  if (token === "admin") {
    return "admin";
  } else if (token === "user") {
    return "user";
  } else {
    return "guest";
  }
}

function getRequiredStatus(pathname: string) {
  if (pathname.startsWith("/admin")) {
    return "admin";
  } else if (pathname === "/profile") {
    return "user";
  } else {
    return "guest";
  }
}

export default function middleware(req) {
  const token = cookies().get(ISLOGIN)?.value;
  const userStatus = getUserStatus(token);
  const requiredStatus = getRequiredStatus(req.nextUrl.pathname);

  if (req.nextUrl.pathname.startsWith("/login")) {
    if (token) return NextResponse.redirect(new URL("/", req.url));
  }

  if (userStatus !== requiredStatus) {
    if (userStatus === "guest") {
      return NextResponse.redirect(new URL("/login", req.url));
    } else {
      return NextResponse.redirect(new URL("/error", req.url));
    }
  }
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
