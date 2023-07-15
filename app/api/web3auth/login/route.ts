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

    console.log("recoveredAddress:", recoveredAddress)
                    
    try {
        // 2. Select * from public.user table where address matches
        const { data: user, error } = await supabase
            .from('users')
            .select('*')
            .eq('address', address)
            .single()

        if( user && !error ) {
            // 3. Verify the nonce included in the request matches what's already in public.users table for that address
            if (user.auth.genNonce !== nonce) {
                return NextResponse.json({ error: 'Nonce verification failed' }, { status: 401 })
            }

            // 4. If there's no auth.users.id for that address
            // (...but there isn't a way to do this supposedly...)
            // then we create the auth user
            // const { data: newUser, error: newUserError } = await supabase.auth.admin.createUser({
            //     email: address + process.env.NEXT_PUBLIC_APP_DOMAN,
            //     user_metadata: { address: address }
            //     // data: {name: "My Name"}
            // })

            // console.log("newUser: ", newUser)
            // console.log("newUserError: ", newUserError)

            // if (newUserError || !newUser) {
            //     return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
            // }

            // // 5. Insert response into public.users table with id
            // const { error: insertError } = await supabase
            // .from('users')
            // .insert([{
            // id: newUser.id,
            // address: address,
            // auth: {
            //     genNonce: nonce,
            //     lastAuth: new Date().toISOString(),
            //     lastAuthStatus: "success"
            // }
            // }])

            // // 5. Update response in public.users table with id
            // const { error: updateError } = await supabase
            // .from('users')
            // .update({
            //     auth: {
            //     genNonce: nonce,
            //     lastAuth: new Date().toISOString(),
            //     lastAuthStatus: "success"
            //     }
            // })
            // .eq('address', address)

            // if (updateError) {
            //     return NextResponse.json({ error: 'Failed to update user' }, { status: 500 })
            // }
        }

        //   // 6. Lastly, we sign the token and return it to client
        //   // Here, I'm assuming that you have a function `signToken` to sign the JWT token.
        //   const token = signToken({ id: user.id })

        return NextResponse.json({ message: "Success!" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}