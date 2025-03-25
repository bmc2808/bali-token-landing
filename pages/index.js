
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
        {/* Existing sections... */}

        <footer style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.875rem' }}>
          <p style={{ marginBottom: '0.5rem' }}>Follow us on:</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="https://twitter.com/balimemecoins" target="_blank" style={{ color: '#60a5fa' }}>Twitter</a>
            <a href="https://t.me/balimemecoins" target="_blank" style={{ color: '#60a5fa' }}>Telegram</a>
          </div>
          <p style={{ marginTop: '0.5rem', color: '#d1d5db' }}>© 2025 BALI Meme Coin</p>
        </footer>
      </div>
    </main>
  );
}
