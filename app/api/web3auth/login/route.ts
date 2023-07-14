import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/lib/db_types'

import { NextResponse } from 'next/server'
import { auth } from '@/auth'

import { ethers } from 'ethers'


export async function POST(req: Request) {
    const supabase = createRouteHandlerClient<Database>({ cookies })
    const json = await req.json()
    const { address, signedMessage, nonce } = json

    console.log(">>> ")
    console.log("address: ", address)
    console.log("signedMessage: ", signedMessage)
    console.log("nonce: ", nonce)

    // 1. Verify the signed message matches the requested address
    const message = process.env.NEXT_PUBLIC_WEB3AUTH_MESSAGE + nonce;
    const recoveredAddress = ethers.utils.verifyMessage(message, signedMessage)

    if (recoveredAddress !== address) {
        return NextResponse.json({ error: 'Signature verification failed' }, { status: 401 })
    }

    try {
        // 2. Select * from public.user table where address matches
        const { data: user, error } = await supabase
            .from('users')
            .select('*')
            .eq('address', address)
            .single()

        console.log("user: ", user)
        console.log("error: ", error)

        if (error || !user) {
            // 4. If there's no public.users.id for that address, then you need to create a user in the auth.users table
            const { data: newUser, error: newUserError } = await supabase.auth.admin.createUser({
            email: address + process.env.NEXT_PUBLIC_APP_DOMAN,
            user_metadata: { address: address }
            })

            console.log("newUser: ", newUser)
            console.log("newUserError: ", newUserError)

            if (newUserError || !newUser) {
            return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
            }

            // 5. Insert response into public.users table with id
            const { error: insertError } = await supabase
            .from('users')
            .insert([{
                id: newUser?.id,
                address: address,
                auth: {
                genNonce: nonce,
                lastAuth: new Date().toISOString(),
                lastAuthStatus: "success"
                }
            }])

            console.log("insertError: ", insertError)
            
            if (insertError) {
            return NextResponse.json({ error: 'Failed to insert user' }, { status: 500 })
            }
        } else {
            // 3. Verify the nonce included in the request matches what's already in public.users table for that address
            if (user.auth.genNonce !== nonce) {
            return NextResponse.json({ error: 'Nonce verification failed' }, { status: 401 })
            }

            // 5. Update response in public.users table with id
            const { error: updateError } = await supabase
            .from('users')
            .update({
                auth: {
                genNonce: nonce,
                lastAuth: new Date().toISOString(),
                lastAuthStatus: "success"
                }
            })
            .eq('address', address)

            if (updateError) {
            return NextResponse.json({ error: 'Failed to update user' }, { status: 500 })
            }
        }

        //   // 6. Lastly, we sign the token, then return it to client
        //   // Here, I'm assuming that you have a function `signToken` to sign the JWT token.
        //   const token = signToken({ id: user.id })
        return NextResponse.json({ message: "Success!" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}


/*
1. Here is an example of route.ts next POST endpoint
```
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
```

2. Here is an example of how to verify the signer via ethers
```
const messageSigner = signMessage.then((value) => {
    // Because Ethers signMessage function returns a promise we use .then() to await the fulfilled promise
        const verifySigner = ethers.utils.recoverAddress(hashMessage(message),value);
        return verifySigner;
        // Now we verify the signature by calling the recoverAddress function which takes a message hash and signature hash and returns the signer address
      });
```

3. Based on (1) and (2) use this outline to create a next endpoint
```
// api/login (only run this code on server)

//  1. verify the signed message matches the requested address
//  2. select * from public.user table where address matches
//  3. verify the nonce included in the request matches what's 
//  already in public.users table for that address
//  4. if there's no public.users.id for that address, then you
//  need to create a user in the auth.users table

    const { data: user, error } = await supabase.auth.admin.createUser({
        email: `user@email.com`,
        user_metadata: { address: address }
      })
    
      // 5. insert response into public.users table with id
    
      await supabase
        .from(SUPABASE_TABLE_USERS)
        .update({ auth: {
            genNonce: newNonce, // update the nonce, so it can't be reused
            lastAuth: new Date().toISOString(),
            lastAuthStatus: "success"
          },
         id: user.id, // same uuid as auth.users table
        })
        .eq('address', address) // primary key
    
      // 6. lastly, we sign the token, then return it to client
```
*/