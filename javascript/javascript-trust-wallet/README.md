# Reown AppKit Trust Wallet Example (Vite + JavaScript)

This isolated [Vite](https://vitejs.dev) example is optimized for Trust Wallet. It supports Trust Wallet's injected browser provider and WalletConnect browser flow on Ethereum, Arbitrum, Base, and BNB Smart Chain.

## Usage

1. Go to [Reown Dashboard](https://dashboard.reown.com) and create a new project.
2. Copy your `Project ID`
3. Rename `.env.example` to `.env` and paste your `Project ID` as the value for `VITE_PROJECT_ID`
4. Run `pnpm install` to install dependencies
5. Run `pnpm run dev` to start the development server
6. Test it at the local Vite URL

Trust Wallet's browser extension is detected through `window.trustwallet` (with `window.ethereum` as a compatibility fallback). The injected connector is explicitly named Trust Wallet so it remains identifiable when other browser wallets are installed.

## Resources

- [Reown — Docs](https://docs.reown.com)
- [Vite — GitHub](https://github.com/vitejs/vite)
- [Vite — Docs](https://vitejs.dev/guide/)
