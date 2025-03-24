
export default function Home() {
  return (
    <main className="min-h-screen bg-[url('/assets/bali-background.jpg')] bg-cover bg-center text-white">
      <div className="flex flex-col items-center justify-center min-h-screen backdrop-blur-sm bg-black/50 p-8">
        <h1 className="text-4xl font-bold mb-4">🌴 Welcome to BALI Meme Coin 🌊</h1>
        <p className="text-center max-w-xl mb-8">Official landing page is now LIVE on Solana blockchain 🚀</p>

        <section className="text-center max-w-2xl space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">About BALI Token</h2>
            <p>BALI Token is a meme coin created on the Solana blockchain. It aims to blend the vibrant culture of Bali with the excitement of decentralized finance, building a fun and rewarding experience for its global community.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Tokenomics</h2>
            <p>Total Supply: 1 Billion BALI Tokens<br/>- 50% Liquidity Pool<br/>- 20% Community Airdrop<br/>- 15% Team & Development<br/>- 10% Staking Rewards<br/>- 5% Marketing & Partnerships</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Roadmap</h2>
            <p>Q1 2025: Token Launch & Website Live<br/>Q2 2025: DEX Listings (Raydium, Orca), Airdrop Campaigns<br/>Q3 2025: NFT Collection Launch & Staking Features<br/>Q4 2025: Governance DAO Launch & Global Partnerships</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Community & Utilities</h2>
            <p>Join our Bali-themed crypto community! Participate in events, staking, NFT drops, and governance decisions that shape the future of BALI Token on Solana.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
