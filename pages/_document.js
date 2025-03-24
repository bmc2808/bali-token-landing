
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="BALI Meme Coin - The spirit of Bali on Solana blockchain. Community-driven token inspired by Balinese culture and Web3 innovation." />
        <meta property="og:title" content="BALI Meme Coin" />
        <meta property="og:description" content="A Solana-based meme coin blending Balinese culture with Web3." />
        <meta property="og:image" content="/assets/bali-background.jpg" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: \`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          \`}} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
