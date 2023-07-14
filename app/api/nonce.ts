import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/lib/db_types'

// import { NextResponse } from 'next/server'
import { auth } from '@/auth'

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST",
  "Access-Control-Allow-Headers": "*",
};

export async function POST(req: Request) {
  const supabase = createRouteHandlerClient<Database>({ cookies })
  const json = await req.json()
  const { address } = json
  const userId = (await auth())?.user.id

  if (!userId) {
    return new Response('Unauthorized', {
      status: 401,
      headers: corsHeaders
    })
  }

  try {
    const nonce = Math.floor(Math.random() * 1000000);
    await supabase
      .from('users')
      .update({ 
        auth: {
          genNonce: nonce,
          lastAuth: new Date().toISOString(),
          lastAuthStatus: "pending"
        }
      }) 
      .eq('address', address)

      return new Response('Success', {
        status: 200,
        headers: corsHeaders
      })
      // return NextResponse.json({ nonce }, { headers: corsHeaders }, { status: 200 })
  } catch (error) {
    return new Response('Success', {
      status: 500,
      headers: corsHeaders
    })
    // return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}