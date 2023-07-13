'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

import { TooltipProvider } from '@/components/ui/tooltip'
import { metamaskWallet, ThirdwebProvider } from "@thirdweb-dev/react";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>
      <QueryClientProvider client={queryClient}>
          <ThirdwebProvider 
            supportedWallets={[
              metamaskWallet()
            ]}
            activeChain="ethereum">
            {children}
          </ThirdwebProvider>
        </QueryClientProvider>
      </TooltipProvider>
    </NextThemesProvider>
  )
}
