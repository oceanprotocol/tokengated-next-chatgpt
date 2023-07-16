import { createClient } from '@supabase/supabase-js'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Create a Supabase client configured to use cookies
  let supabase = createMiddlewareClient({ req, res })

  // Refresh session if expired - required for Server Components
  const {
    data: { session }
  } = await supabase.auth.getSession()

  // TODO - sign in via user w/ jwt to provide a session
  // Official Implementation: https://github.com/orgs/supabase/discussions/1849
  // 1. get jwt
  // 2. check if jwt is valid
  // 3. if !session but jwt is valid, create session
  console.log("req.cookies: ", req.cookies.getAll())

  const web3jwt = req.cookies.get('web3jwt')
  if (!session && web3jwt) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    const headers = { global: { headers: { Authorization: `Bearer ${web3jwt}` }}}
    console.log("create new supabase client...")
    
    supabase = createClient(url, anonKey, headers)
    console.log("supabase client:", supabase)

    const {
      data: { session }
    } = await supabase.auth.getSession()

    console.log("jwt session: ", session)
  }

  // OPTIONAL: this forces users to be logged in to use the chatbot.
  // If you want to allow anonymous users, simply remove the check below.
  if (!session && !req.url.includes('/sign-in')) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/sign-in'
    redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
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