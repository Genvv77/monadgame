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
      name: 'Orbique',
      url: 'https://orbique.vercel.app/api/frame',
      splashImageUrl: 'https://orbique.vercel.app/og-image.png',
      splashBackgroundColor: '#8b5cf6'
    }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* v2 JSON embed for card & manifest */}
        <meta name="fc:frame" content={JSON.stringify(frameEmbed)} />

        {/* v1/vNext tags for interactive preview */}
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://orbique.vercel.app/og-image.png" />
        <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
        <meta property="fc:frame:button:1" content="🎮 Play Orbique" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="https://orbique.vercel.app" />

        {/* SEO / OpenGraph / Twitter */}
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
















