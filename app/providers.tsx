"use client";

import { ReactNode } from "react";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import {
  RainbowKitProvider,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

// ✅ Import the custom Monad chain
import { monadTestnet } from "@/lib/chains/monadTestnet";

const { chains, publicClient } = configureChains(
  [monadTestnet],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: "https://testnet-rpc.monad.xyz",
      }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Orbique",
  projectId: "6ac0f09cf5f8d3ca9bf52a135fb94b15", // 👈 use your own WalletConnect project ID
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}