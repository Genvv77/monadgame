// app/layout.tsx
import './globals.css'
import Providers from './providers'
import { Toaster } from 'react-hot-toast'

const frameEmbed = {
  version: "1", // Use "1" instead of "next" for current stable version
  imageUrl: 'https://orbique.vercel.app/og-image.png',     // Must be 3:2 aspect ratio
  button: {
    title: '🎮 Play Orbique',                              // button text (≤32 chars)
    action: {
      type: 'launch_frame' as const,                      // must be "launch_frame"
      name: 'Orbique',                                    // your app's name (≤32 chars)
      url: 'https://orbique.vercel.app',                  // where to open in-frame
      splashImageUrl: 'https://orbique.vercel.app/logo.png', // Must be 200x200px
      splashBackgroundColor: '#8b5cf6'
    }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Farcaster v2 Mini-App embed: Use 'name' not 'property' */}
        <meta
          name="fc:frame"
          content={JSON.stringify(frameEmbed)}
        />

        {/* Standard SEO/OpenGraph/Twitter tags */}
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
          <Toaster position="top-right" reverseOrder={false}/>
        </Providers>
      </body>
    </html>
  )
}
















