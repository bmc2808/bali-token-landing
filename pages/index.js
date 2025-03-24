
export default function Home() {
  return (
    <main
      style={{
        backgroundImage: "url('/assets/bali-background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          🌴 Welcome to BALI Meme Coin 🌊
        </h1>
        <p style={{ textAlign: 'center', maxWidth: '40rem', marginBottom: '2rem' }}>
          Official landing page is now LIVE on Solana blockchain 🚀
        </p>

        <section style={{ textAlign: 'center', maxWidth: '40rem' }}>
          {/* About BALI Token */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              About BALI Token
            </h2>
            <p>
              BALI Token is a meme coin created on the Solana blockchain. It aims to blend
              the vibrant culture of Bali with the excitement of decentralized finance,
              building a fun and rewarding experience for its global community.
            </p>
          </div>

          {/* Tokenomics */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Tokenomics
            </h2>
            <p>
              Total Supply: 1 Billion BALI Tokens<br />
              - 50% Liquidity Pool<br />
              - 20% Community Airdrop<br />
              - 15% Team & Development<br />
              - 10% Staking Rewards<br />
              - 5% Marketing & Partnerships
            </p>
          </div>

          {/* Roadmap */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Roadmap
            </h2>
            <p>
              Q1 2025: Token Launch & Website Live<br />
              Q2 2025: DEX Listings (Raydium, Orca), Airdrop Campaigns<br />
              Q3 2025: NFT Collection Launch & Staking Features<br />
              Q4 2025: Governance DAO Launch & Global Partnerships
            </p>
          </div>

          {/* Community & Utilities */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Community & Utilities
            </h2>
            <p>
              Join our Bali-themed crypto community! Participate in events, staking,
              NFT drops, and governance decisions that shape the future of BALI Token on Solana.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
