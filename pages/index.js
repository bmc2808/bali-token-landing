
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
        {/* HERO */}
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          🌴 Welcome to BALI Meme Coin 🌊
        </h1>
        <p style={{ textAlign: 'center', maxWidth: '40rem', marginBottom: '2rem' }}>
          A community-driven meme token on Solana, blending Bali’s vibrant culture with the
          excitement of decentralized finance. Ride the waves of Barong & crypto spirit!
        </p>

        {/* ABOUT */}
        <section style={{ textAlign: 'center', maxWidth: '40rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            About BALI Token
          </h2>
          <p>
            Inspired by the beauty and spirit of Bali, <strong>BALI Token</strong> aims to
            bring Balinese culture into the world of Web3, utilizing memes, NFTs, and
            decentralized applications to foster a global community.
          </p>
        </section>

        {/* TOKENOMICS */}
        <section style={{ textAlign: 'center', maxWidth: '40rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            Tokenomics
          </h2>
          <p>
            <strong>Total Supply:</strong> 1,000,000,000 BALI<br/>
            <br/>
            <strong>Allocation:</strong><br/>
            • Liquidity Pool (DEX): 50% (500,000,000 BALI)<br/>
            • Community & Airdrops: 10% (100,000,000 BALI)<br/>
            • Marketing & Partnerships: 10% (100,000,000 BALI)<br/>
            • Ecosystem Development: 10% (100,000,000 BALI)<br/>
            • Charity & Bali Initiatives: 10% (100,000,000 BALI)<br/>
            • Team & Advisors: 10% (100,000,000 BALI)
          </p>
        </section>

        {/* ROADMAP */}
        <section style={{ textAlign: 'center', maxWidth: '40rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            Roadmap
          </h2>
          <p>
            <strong>2025</strong><br/>
            - Token deployment on Solana<br/>
            - Official website & white paper launch<br/>
            - Initial airdrop & DEX listings (Raydium, Orca, Meteora)<br/>
            - NFT marketplace integration<br/>
            - Meme contest & community events<br/>
            <br/>
            <strong>2026</strong><br/>
            - Global marketing campaign<br/>
            - Bali tourism partnership program<br/>
            - Exclusive NFT series launch<br/>
            - Real-world merchant adoption<br/>
            - First CEX listing initiative<br/>
            <br/>
            <strong>2027 - 2030</strong><br/>
            - Governance DAO activation<br/>
            - NFT metaverse & cross-chain bridge<br/>
            - Eco-tourism programs & social impact foundation<br/>
            - Continue expansion as a global cultural ambassador
          </p>
        </section>

        {/* COMMUNITY & UTILITIES */}
        <section style={{ textAlign: 'center', maxWidth: '40rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            Community & Utilities
          </h2>
          <p>
            Join our Bali-themed crypto community! Participate in staking, NFT drops,
            and governance decisions that shape the future of BALI Token.
          </p>
        </section>
      </div>
    </main>
  );
}
