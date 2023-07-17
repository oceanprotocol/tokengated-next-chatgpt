'use client'

import { useState, useEffect } from 'react'

import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from '@/components/ui/button'
import { IconMetamask, IconSpinner } from '@/components/ui/icons'

import { useRouter } from 'next/navigation';

import { 
  useAccount
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
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  
  const { address, isConnected } = useAccount();
  // const { chains } = useNetwork();
  
  useEffect(() => {
    if( isAuthenticated ) {
      router.push('/');
    }
  }, [isAuthenticated])

  return (
    <Button
      variant="outline"
      onClick={async () => {
        setIsLoading(true)
        const userAddress = address ? address : '';

        if(userAddress && isConnected) {
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
            
            // 2. Ask the user to sign a message
            const message = process.env.NEXT_PUBLIC_WEB3AUTH_MESSAGE + user.auth.genNonce;
            const signedMessage = await signMessage({
              message: message,
            })

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
              console.log('Verification successful!')
              setIsAuthenticated(true)
            } else {
              // The verification failed
              console.error('Verification failed!');
              setIsAuthenticated(false)
            }
          } catch (err) {
            console.error('An error occurred:', err);
          } finally {
            setIsLoading(false);
          }
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
