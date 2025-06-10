// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    const frameEmbed = {
      version: 'next',
      name: 'Orbique',
      imageUrl: 'https://orbique.vercel.app/og-image.png',
      aspect_ratio: '1.91:1',
      button: {
        title: '🎮 Play Orbique',
        action: {
          type: 'launch_frame',
          name: 'Orbique',
          url: 'https://orbique.vercel.app/api/frame',
          splashImageUrl: 'https://orbique.vercel.app/og-image.png',
          splashBackgroundColor: '#8b5cf6'
        }
      }
    }

    return (
      <Html lang="en">
        <Head>
          {/* v2 FrameEmbed JSON – this now _always_ ends up in the raw HTML */}
          <meta
            name="fc:frame"
            content={JSON.stringify(frameEmbed)}
          />

          {/* Standard SEO / OpenGraph / Twitter */}
          <title>Orbique</title>
          <meta name="description" content="Web3 riddle game powered by MONAD — only one can win." />
          <meta property="og:title" content="Orbique" />
          <meta property="og:description" content="Web3 riddle game powered by MONAD — only one can win." />
          <meta property="og:image" content="https://orbique.vercel.app/og-image.png" />
          <meta property="og:url" content="https://orbique.vercel.app" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
