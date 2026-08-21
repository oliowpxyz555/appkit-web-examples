import { arbitrum, base, bsc, mainnet } from '@reown/appkit/networks'
import { createAppKit } from '@reown/appkit'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { injected, walletConnect } from 'wagmi/connectors'

const projectId = import.meta.env.VITE_PROJECT_ID || "b56e18d47c72ab683b10814fe9495694" // this is a public projectId only to use on localhost
if (!projectId) {
  throw new Error('VITE_PROJECT_ID is not set')
}

export const networks = [mainnet, arbitrum, base, bsc]

const trustWalletProvider = () => {
  if (typeof window === 'undefined') return undefined

  return window.trustwallet ?? window.ethereum
}

export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks,
  connectors: [
    injected({
      shimDisconnect: true,
      target: () => {
        const provider = trustWalletProvider()
        return provider
          ? { id: 'trust-wallet', name: 'Trust Wallet', provider }
          : undefined
      }
    }),
    walletConnect({ projectId, showQrModal: false })
  ]
})

export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  themeMode: 'light',
  themeVariables: {
    '--w3m-accent': '#3375bb',
  },
  features: {
    analytics: true
  }
})
