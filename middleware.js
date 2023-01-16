import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { TOKENJWT } from "./pages/constants";
const SECRET = process.env.SECRET

export async function middleware(request) {
  const jwt = request.cookies.get(TOKENJWT)
  if (jwt === undefined) return NextResponse.redirect(new URL("/", request.url))
  try {
    await jwtVerify(jwt.value, new TextEncoder().encode(SECRET))
    return NextResponse.next()
  } catch (err) {
    return NextResponse.redirect(new URL("/", request.url))
  }
}

export const config = {
  matcher: ["/estudiante/:path*","/administrativo/:path*"],
};