"use client";

import { ReactNode } from "react";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import {
  RainbowKitProvider,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

// 👉 Add Monad testnet manually
import { Chain } from "wagmi/chains";

const monadTestnet: Chain = {
  id: 10143,
  name: "Monad Testnet",
  network: "monad-testnet",
  nativeCurrency: {
    name: "Monad",
    symbol: "MON",
    decimals: 18,
  },
  rpcUrls: {
  default: {
    http: ["https://testnet-rpc.monad.xyz"],
    webSocket: [], // <- add this empty array to prevent errors
  },
  public: {
    http: ["https://testnet-rpc.monad.xyz"],
    webSocket: [],
  },
},
  testnet: true,
};

// ✅ Configure chains
const { chains, publicClient } = configureChains(
  [monadTestnet],
  [publicProvider()]
);

// ✅ Get default wallets
const { connectors } = getDefaultWallets({
  appName: "Orbique",
  projectId: "6ac0f09cf5f8d3ca9bf52a135fb94b15", // you can use a WalletConnect project ID if needed
  chains,
});

// ✅ Create wagmi config
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
