import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/lib/db_types'

import { NextResponse } from 'next/server'
import { auth } from '@/auth'

export async function POST(req: Request) {
  const supabase = createRouteHandlerClient<Database>({ cookies })
  const json = await req.json()
  const { address } = json
  const userId = (await auth())?.user.id

  if (userId) {
    return new Response('Unauthorized', {status: 401})
  }

  try {
    const nonce = Math.floor(Math.random() * 1000000);
    
    const { data, error } = await supabase
    .from('users')
    .select('address')
    .eq('address', address)
    .single()

    if (error) {  
      await supabase
      .from('users')
      .insert([
        { 
          address: address,
          auth: {
            genNonce: nonce,
            lastAuth: new Date().toISOString(),
            lastAuthStatus: "pending"
          }
        }
      ])
    }

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

    return NextResponse.json({ nonce }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}