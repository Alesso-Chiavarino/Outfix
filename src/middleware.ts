import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export function middleware(request: NextRequest) {

  const token = cookies().get('_auth')

  if (token) {
    console.log("request url", request.nextUrl.pathname)

    if (request.nextUrl.pathname !== '/') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  } else {

  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/login', '/signup', '/'],
}