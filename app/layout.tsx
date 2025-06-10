// app/layout.tsx
import './globals.css'
import Providers from './providers'
import { Toaster } from 'react-hot-toast'
import Head from 'next/head'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // define your base URL once
  const appUrl = process.env.NEXT_PUBLIC_URL || 'https://orbique.vercel.app'

  const frameEmbed = {
    version: 'next' as const,
    imageUrl: `${appUrl}/og-image.png`,
    aspectRatio: '1.91:1',
    button: {
      title: '🎮 Play Orbique',
      action: {
        type: 'launch_frame' as const,
        url: `${appUrl}/api/frame`
      }
    }
  }

  return (
    <html lang="en">
      <Head>
        {/* v2 JSON-blob embed */}
        <meta name="fc:frame" content={JSON.stringify(frameEmbed)} />

        {/* Standard SEO/OpenGraph */}
        <title>Orbique</title>
        <meta name="description" content="Web3 riddle game powered by MONAD — only one can win." />
        <meta property="og:image" content={`${appUrl}/og-image.png`} />
        <meta property="og:url"   content={appUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Providers>
          {children}
          <Toaster position="top-right" reverseOrder={false} />
        </Providers>
      </body>
    </html>
  )
}





















