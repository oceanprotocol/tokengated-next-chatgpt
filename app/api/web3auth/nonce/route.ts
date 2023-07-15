import { getServiceSupabase } from '@/supabase/functions/client'
import { NextResponse } from 'next/server'
import { auth } from '@/auth'

export async function POST(req: Request) {
  const supabase = getServiceSupabase()
  const json = await req.json()
  const { address } = json
  const userId = (await auth())?.user.id

  if (userId) {
    return new Response('Unauthorized', {status: 401})
  }

  try {
    const nonce = Math.floor(Math.random() * 1000000);
    console.log("::::::::: nonce check")
    console.log("::::::::: address:", address)

    let { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('address', address)
    .single()

    console.log("::::::::: existing user:", data)

    if (!data || error) {
      const { data: user, error: upsertError } = await supabase
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
      console.log("::::::::: new user:", user)
      console.log("::::::::: new upsertError:", upsertError)

      if (data || !upsertError) {
        return NextResponse.json({ user }, { status: 200 })
      }
      throw new Error("Failed to create user")
    } else {
      const { data: user, error: updateError } = await supabase
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
      console.log("::::::::: updated user:", user)
      console.log("::::::::: updated updateError:", updateError)
      if (data || !updateError) {
        return NextResponse.json({ user }, { status: 200 })
      }
      throw new Error("Failed to update user")
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}