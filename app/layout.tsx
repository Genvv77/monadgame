// app/layout.tsx
import './globals.css'
import Providers from './providers'
import { Toaster } from 'react-hot-toast'

// v2 JSON embed with direct link action (no splash/frame overlay)
const frameEmbed = {
  version: 'next' as const,
  imageUrl: 'https://orbique.vercel.app/og-image.png', // preview image in card
  aspectRatio: '1.91:1',
  button: {
    title: '🎮 Play Orbique',
    action: {
      type: 'link' as const,         // direct link action
      url: 'https://orbique.vercel.app'  // opens the app immediately
    }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Single v2 JSON embed meta tag with link action */}
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
      </head>
      <body>
        <Providers>
          {children}
          <Toaster position="top-right" reverseOrder={false} />
        </Providers>
      </body>
    </html>
  )
}


















