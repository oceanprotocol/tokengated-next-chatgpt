'use client'

import * as React from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from '@/components/ui/button'
import { IconMetamask, IconSpinner } from '@/components/ui/icons'

import { useRouter } from 'next/navigation';
import { auth } from '@/auth'

import { 
  useAccount, 
  useNetwork
} from "wagmi";

import { signMessage } from '@wagmi/core'

interface LoginButtonProps extends ButtonProps {
  showIcon?: boolean
  text?: string
}

export function LoginButtonMetamask({
  text = 'Login with Metamask',
  showIcon = true,
  className,
  ...props
}: LoginButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false)

  const supabase = createClientComponentClient()
  const { address, isConnected } = useAccount();
  // const { chains } = useNetwork();
  
  return (
    <Button
      variant="outline"
      onClick={async () => {
        setIsLoading(true)
        const userAddress = address ? address : '';

        try {
          // 1. Get a nonce from the server
          const nonceResponse = await fetch(`/api/web3auth/nonce`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              address: userAddress,
            }),
          });

          const { user: [user] } = await nonceResponse.json();
          console.log('User/Nonce retrieval successful:', user);

          // 2. Ask the user to sign a message
          const message = process.env.NEXT_PUBLIC_WEB3AUTH_MESSAGE + user.auth.genNonce;
          const signedMessage = await signMessage({
            message: message,
          })

          console.log('message message:', signedMessage);
          console.log('Signed message:', signedMessage);
      
          // // 3. Send the signed message to our API
          const response = await fetch(`/api/web3auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              address: userAddress,
              signedMessage: signedMessage,
              nonce: user.auth.genNonce
            })
          })
      
          // Handle the response from the API
          if (response.ok) {
            // The verification was successful
            const data = await response.json()
            console.log('Verification successful!', data)
            
            // TODO - Do not do this. This is a security risk.
            // Auth needs to work w/ supabase & jwt
            // setAuth does not work anymore => https://medium.com/@gracew/using-supabase-rls-with-a-custom-auth-provider-b31564172d5d
            const password = data.token.slice(0, 12)
            console.log('password:', password)
            console.log('email:', userAddress + process.env.NEXT_PUBLIC_APP_DOMAN)
            const session = await supabase.auth.signInWithPassword({
              email: userAddress + process.env.NEXT_PUBLIC_APP_DOMAN,
              password: password
            })

            console.log('session:', session)

          } else {
            // The verification failed
            console.error('Verification failed!');
          }
        } catch (err) {
          console.error('An error occurred:', err);
        } finally {
          setIsLoading(false);
        }
      }}      
      disabled={isLoading}
      className={cn(className)}
      {...props}
    >
      {isLoading ? (
        <IconSpinner className="mr-2 animate-spin" />
      ) : showIcon ? (
        <IconMetamask className="mr-2" />
      ) : null}
      {text}
    </Button>
  )
}
