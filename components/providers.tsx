'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

import { TooltipProvider } from '@/components/ui/tooltip'
import { metamaskWallet, ThirdwebProvider } from "@thirdweb-dev/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export function Providers({ children, ...props }: ThemeProviderProps) {
  const [client] = useState(new QueryClient());

  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>
        <QueryClientProvider client={client}>
          <ThirdwebProvider 
            supportedWallets={[
              metamaskWallet()
            ]}
            activeChain="ethereum">
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </ThirdwebProvider>
        </QueryClientProvider>
      </TooltipProvider>
    </NextThemesProvider>
  )
}
