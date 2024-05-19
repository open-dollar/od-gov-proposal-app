'use client'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

// Your WalletConnect Cloud project ID
export const projectId = process.env.NEXT_PUBLIC_WEB_MODAL_PROJECT_ID

// 2. Set chains
const mainnet = {
    chainId: 42161,
    name: 'Arbitrum',
    currency: 'ETH',
    explorerUrl: 'https://arbiscan.io',
    rpcUrl: 'https://arb1.arbitrum.io/rpc'
  };
  const fork = {
      chainId: 31337,
      name: 'Arbitrum Fork',
      currency: 'ETH',
      explorerUrl: '',
      rpcUrl: 'http://localhost:8545'
    };

// 3. Create a metadata object
const metadata = {
    name: 'od-governance-app',
    description: 'Governance App for Open Dollar',
  //   url: 'https://mywebsite.com', // origin must match your domain & subdomain
    icons: ['https://avatars.mywebsite.com/']
  };

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,
})

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [fork, mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})

export function Web3Modal({ children }) {
  return children
}
