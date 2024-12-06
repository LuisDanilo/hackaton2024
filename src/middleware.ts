import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { RootPath } from "@/app/routeNames"

export default function middleware(req: NextRequest) {
  const isAuthenticated = false
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL(RootPath, req.url))
  }
}
  
export const config = {
  matcher: ["/home"],
}
