import { getServiceRoleServerSupabaseClient } from '@/supabase/functions/client'
import { NextResponse } from 'next/server'
import { auth } from '@/auth'

export async function POST(req: Request) {
  const srSupabase = getServiceRoleServerSupabaseClient()
  const json = await req.json()
  const { address } = json
  const userId = (await auth())?.id

  if (userId) {
    return new Response('Unauthorized', {status: 401})
  }

  try {
    const nonce = Math.floor(Math.random() * 1000000);
    let { data, error } = await srSupabase
    .from('users')
    .select('*')
    .eq('address', address)
    .single()

    if (!data || error) {
      const { data: user, error: upsertError } = await srSupabase
      .from('users')
      .upsert([
        { 
          address: address,
          auth: {
            genNonce: nonce,
            lastAuth: new Date().toISOString(),
            lastAuthStatus: "pending"
          },
        }
      ])
      .select()   

      if (data || !upsertError) {
        return NextResponse.json({ user }, { status: 200 })
      }
      throw new Error("Failed to create user")
    } else {
      const { data: user, error: updateError } = await srSupabase
      .from('users')
      .update([
        { 
          auth: {
            genNonce: nonce,
            lastAuth: new Date().toISOString(),
            lastAuthStatus: "pending"
          },
        }
      ])
      .eq('address', address)
      .select()

      if (data || !updateError) {
        return NextResponse.json({ user }, { status: 200 })
      }
      throw new Error("Failed to update user")
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}