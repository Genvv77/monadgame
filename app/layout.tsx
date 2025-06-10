// app/layout.tsx
import './globals.css'
import Providers from './providers'
import { Toaster } from 'react-hot-toast'
import Head from 'next/head'

// Next.js App Router: use layout to inject global head tags
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const appUrl = process.env.NEXT_PUBLIC_URL || 'https://orbique.vercel.app'
  const frame = {
    version: 'next' as const,
    imageUrl: `${appUrl}/og-image.png`,         // 3:2 embed preview image
    aspectRatio: '1.91:1',                      // required v2 field
    button: {
      title: '🎮 Play Orbique',                 // Button text
      action: {
        type: 'launch_frame' as const,          // launch in-frame
        name: 'Orbique',                        // app name
        url: appUrl,                            // initial app URL when button tapped
        splashImageUrl: `${appUrl}/og-image.png`,  // splash icon
        splashBackgroundColor: '#8b5cf6'
      }
    }
  }

  return (
    <html lang="en">
      <Head>
        {/* Farcaster Mini-App Embed (v2 JSON) */}
        <meta name="fc:frame" content={JSON.stringify(frame)} />

        {/* Standard SEO / OpenGraph / Twitter */}
        <title>Orbique</title>
        <meta name="description" content="Web3 riddle game powered by MONAD — only one can win." />
        <meta property="og:title" content="Orbique" />
        <meta property="og:description" content="Web3 riddle game powered by MONAD — only one can win." />
        <meta property="og:image" content={`${appUrl}/og-image.png`} />
        <meta property="og:url" content={appUrl} />
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



















