// app/layout.tsx
import './globals.css'
import Providers from './providers'
import { Toaster } from 'react-hot-toast'

const frameEmbed = {
  version: 'next' as const,
  imageUrl: 'https://orbique.vercel.app/og-image.png',
  button: {
    title: '🎮 Play Orbique',
    action: {
      type: 'launch_frame' as const,
      url: 'https://orbique.vercel.app/api/frame',
    }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* v2 Frame Embed as one JSON blob */}
        <meta
          name="fc:frame"
          content={JSON.stringify(frameEmbed)}
        />
        
        {/* Your normal SEO/OpenGraph/Twitter */}
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










