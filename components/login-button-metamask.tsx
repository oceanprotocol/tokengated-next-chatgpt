'use client'

import * as React from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from '@/components/ui/button'
import { IconMetamask, IconSpinner } from '@/components/ui/icons'

import { ethers } from "ethers";
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
  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient()

  const { address, isConnected } = useAccount();
  // const { chains } = useNetwork();
  
  return (
    <Button
      variant="outline"
      onClick={async () => {
        setIsLoading(true)
      
        try {
          // 1. Get a nonce from the server
          const nonceResponse = await fetch(`/api/web3auth/nonce`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              address: address,
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
              address: address,
              signedMessage: signedMessage,
              nonce: user.auth.genNonce
            })
          })
      
          const data = await response.json()

          console.log('web3auth login data:', data)
      
          // // Handle the response from the API
          // if (response.ok) {
          //   // The verification was successful
          //   console.log('Verification successful:', data);
          // } else {
          //   // The verification failed
          //   console.error('Verification failed:', data);
          // }
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
