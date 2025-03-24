import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Clone the request headers
  const requestHeaders = new Headers(request.headers)

  // Set the Permissions-Policy header to allow geolocation
  requestHeaders.set("Permissions-Policy", "geolocation=*")

  // Return the response with the modified headers
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
}

