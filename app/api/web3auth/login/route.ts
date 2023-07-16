import { getServiceSupabase } from '@/supabase/functions/client'
import { NextResponse } from 'next/server'

import { signToken } from '@/lib/utils'
import { ethers } from 'ethers'

export async function POST(req: Request) {
    const supabase = getServiceSupabase()
    const json = await req.json()
    const { address, signedMessage, nonce } = json

    // 1. Verify the signed message matches the requested address
    const message = process.env.NEXT_PUBLIC_WEB3AUTH_MESSAGE + nonce;
    const recoveredAddress = ethers.utils.verifyMessage(message, signedMessage)

    if (recoveredAddress !== address) {
        return NextResponse.json({ error: 'Signature verification failed' }, { status: 401 })
    }

    try {
        // 2. Select * from public.user table to get nonce
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('address', address)
            .single()

        if( user && !userError ) {
            // 3. Verify the nonce included in the request matches what's already in public.users table for that address
            if (user?.auth.genNonce !== nonce) {
                return NextResponse.json({ error: 'Nonce verification failed' }, { status: 401 })
            }

            let finalAuthUser = null
            // 2. Select * from public.auth_users view where address matches
            const { data: authUser, error: authUserError } = await supabase
            .from('auth_users')
            .select('*')
            .eq('raw_user_meta_data->>address', address)
            .single()

            console.log("authUser: ", authUser)
            console.log("authUserError: ", authUserError)

            if ( !authUser || authUserError ) {
                // 4. If there's no auth.users.id for that address
                const { data: newUser, error: newUserError } = await supabase.auth.admin.createUser({
                    email: address + process.env.NEXT_PUBLIC_APP_DOMAN,
                    user_metadata: { address: address },
                    email_confirm: true
                })

                console.log("newUserCreated: ", newUser)

                if (newUserError || !newUser) {
                    return NextResponse.json({ error: 'Failed to create auth user' }, { status: 500 })
                }

                // response object is different from auth.users view
                finalAuthUser = newUser.user
            } else {
                // selection from auth.users view is the user, assign
                finalAuthUser = authUser
            }

            console.log("finalAuthUser: ", finalAuthUser)

            // 5. Update public.users.id with auth.users.id
            const { data: updateUser, error: updateUserError } = await supabase
            .from('users')
            .update([
                { 
                id: finalAuthUser?.id,
                auth: {
                    genNonce: nonce,
                    lastAuth: new Date().toISOString(),
                    lastAuthStatus: "success"
                }
                }
            ])
            .eq('address', address)
            .select()

            console.log("updateUser: ", updateUser)
            console.log("updateUserError: ", updateUserError)
            
            // 6. Lastly, we sign the token and return it to client
            const token = signToken({
                address: address, 
                sub: user.id, 
                aud: 'authenticated'
            })

            console.log("token: ", token)

            return NextResponse.json({user: updateUser, token: token}, { status: 200 })
        }

        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}