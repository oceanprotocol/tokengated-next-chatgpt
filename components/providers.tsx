'use client'

import * as React from 'react'

import {
  RainbowKitProvider,
  connectorsForWallets,
  getDefaultWallets
} from '@rainbow-me/rainbowkit'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import {
  argentWallet,
  ledgerWallet,
  trustWallet
} from '@rainbow-me/rainbowkit/wallets'
import { goerli, mainnet, polygon } from 'wagmi/chains'

import { ApolloProvider } from '@apollo/client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { TooltipProvider } from '@/components/ui/tooltip'
import { client } from '@/graphql/client'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : [])
  ],
  [publicProvider()]
)

const projectId = process.env.NEXT_PUBLIC_WC2_PROJECT_ID || ''

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit demo',
  projectId,
  chains
})

const demoAppInfo = {
  appName: 'Rainbowkit Demo'
}

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains })
    ]
  }
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient
})

export function Providers({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  return (
    <ApolloProvider client={client}>
      <NextThemesProvider {...props}>
        <TooltipProvider>
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
              {mounted && children}
            </RainbowKitProvider>
          </WagmiConfig>
        </TooltipProvider>
      </NextThemesProvider>
    </ApolloProvider>
  )
}
