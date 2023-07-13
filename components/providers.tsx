'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { TooltipProvider } from '@/components/ui/tooltip'

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  goerli,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

const projectId = process.env.NEXT_PUBLIC_WC2_PROJECT_ID || '';

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit demo',
  projectId,
  chains,
});

const demoAppInfo = {
  appName: 'Rainbowkit Demo',
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children, ...props }: ThemeProviderProps) {
  const [client] = React.useState(new QueryClient());
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>
        <QueryClientProvider client={client}>
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
              {mounted && children}
            </RainbowKitProvider>
          </WagmiConfig>
        </QueryClientProvider>
      </TooltipProvider>
    </NextThemesProvider>
  );
}
