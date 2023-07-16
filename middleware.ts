import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Create a Supabase client configured to use cookies
  let supabase = createMiddlewareClient({ req, res })

  // TODO - sign in via user w/ jwt to provide a session
  // Official Implementation: https://github.com/orgs/supabase/discussions/1849
  // 1. get jwt
  // 2. check if jwt is valid
  // 3. if !session but jwt is valid, create session
  // const web3jwt = req.cookies.get('web3jwt')
  // if (!session && web3jwt) {
  //  // TODO - this is not working
  //  const headers = { Authorization: `Bearer ${web3jwt}` }
  //  supabase = createMiddlewareClient({ req, res }, "KEY", { headers })
  //   supabase = createMiddlewareClient({ req, res }, 
  //     options: { headers: { name: "Authorization", : `Bearer ${web3jwt}` } 
  //   })
  // update session
  // }

  // Refresh session if expired - required for Server Components
  const {
    data: { session }
  } = await supabase.auth.getSession()

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


// from vercel/jwt-auth
// export async function middleware(req: NextRequest) {
//   const url = req.nextUrl

//   if (url.searchParams.has('edge')) {
//     const resOrPayload = await verifyAuth(req)

//     return resOrPayload instanceof Response
//       ? resOrPayload
//       : jsonResponse(200, { nanoid: nanoid(), jwtID: resOrPayload.jti })
//   }
// }