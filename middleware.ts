import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from '@/lib/utils'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  const address = req.cookies.get('address')?.value || ''
  const web3jwt = req.cookies.get('web3jwt')?.value || ''
  const validToken = verifyToken(web3jwt, address)

  // would be good to maybe verify web3jwt here, but error w/ edge functions
  if( !web3jwt || !validToken ) {
    if( !req.url.includes('/sign-in') ) {
      const redirectUrl = req.nextUrl.clone()
      redirectUrl.pathname = '/sign-in'
      redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname)
      return NextResponse.redirect(redirectUrl)
    }
  }

  return res
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - share (publicly shared chats)
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!share|api|_next/static|_next/image|favicon.ico).*)'
  ]
}