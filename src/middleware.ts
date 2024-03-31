import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { routesForAdmin } from './constants/route.constant'
import { AuthUtils } from './utils/auth.utils'
import { UserRole, UserToken } from './models/IUser'

export function middleware(request: NextRequest) {

  const token = cookies().get('_auth')

  if (token) {

    const decodedToken: UserToken = AuthUtils.decodeToken(token.value)

    // if user is logged in and tries to access admin routes, redirect to home
    if (routesForAdmin.includes(request.nextUrl.pathname) && decodedToken.role !== UserRole.admin) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  } else {

    // if user is not logged in and tries to access admin routes, redirect to login
    if (routesForAdmin.includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/login', '/signup', '/', ...routesForAdmin],
}