import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const PROTECTED = ["/web/dashboard"];

export default async function middleware(req: NextRequest) {
  // Get the pathname of the request (e.g. /, /protected)
  const path = req.nextUrl.pathname;

  // If it's the root path, just render it
  if (path === "/") {
    return NextResponse.next();
  }

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (!session && PROTECTED.find((route) => path.includes(route))) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}
