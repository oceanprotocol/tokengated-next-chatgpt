import { createClient } from '@supabase/supabase-js'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { verifyToken, jsonResponse } from '@/lib/utils'

export const auth = async () => {
  const address = cookies().get('address')?.value || ''
  const web3jwt = cookies().get('web3jwt')?.value || ''
  
  if (web3jwt && verifyToken(web3jwt, address)) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    const headers = { global: { headers: { Authorization: `Bearer ${web3jwt}` }}}
    const supabase = createClient(url, anonKey, headers)

    const {
      data: { user },
    } = await supabase.auth.getUser()
    console.log("user: ", user)

    if (user) {
      return user
    }
  }

  cookies().delete('address')
  cookies().delete('web3jwt')
  throw new Error('An unexpected error occurred')
  // return jsonResponse(401, { error: { message: 'Your token has expired.' } })

  // // Create a Supabase client configured to use cookies
  // let supabase = createMiddlewareClient({ req, res })

  // // Refresh session if expired - required for Server Components
  // const {
  //   data: { session }
  // } = await supabase.auth.getSession()

  // // TODO - sign in via user w/ jwt to provide a session
  // // Official Implementation: https://github.com/orgs/supabase/discussions/1849
  // // 1. get jwt
  // // 2. check if jwt is valid
  // // 3. if !session but jwt is valid, create session
  // console.log("req.cookies: ", req.cookies.getAll())

  // const address = req.cookies.get('address')
  // const web3jwt = req.cookies.get('web3jwt')
  // if (!session && web3jwt && address) {
  //   console.log("address cookie:", address)
  //   console.log("web3jwt cookie:", web3jwt)
    
  //   const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  //   const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  //   const headers = { global: { headers: { Authorization: `Bearer ${web3jwt}` }}}
  //   console.log("create new supabase client...")
    
  //   supabase = createClient(url, anonKey, headers)

  //   console.log("supabase client:", supabase)
  //   console.log("supabase.auth:", supabase.auth)
  //   console.log("supabase.auth.getSession:", await supabase.auth.getSession())
  // }

  // // OPTIONAL: this forces users to be logged in to use the chatbot.
  // // If you want to allow anonymous users, simply remove the check below.
  // if (!session && !req.url.includes('/sign-in')) {
  //   const redirectUrl = req.nextUrl.clone()
  //   redirectUrl.pathname = '/sign-in'
  //   redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname)
  //   return NextResponse.redirect(redirectUrl)
  // }



  // Create a Supabase client configured to use cookies
  // const supabase = createServerActionClient({ cookies })
  // const { data, error } = await supabase.auth.getSession()
  // if (error) throw error
  // return data.session

  // throw new Error('An unexpected error occurred')
}
