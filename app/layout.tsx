// app/layout.tsx
import './globals.css'
import Providers from './providers'
import { Toaster } from 'react-hot-toast'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* — Farcaster Frame Embed — */}
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
        <meta property="fc:frame:image" content="https://orbique.vercel.app/og-image.png" />
        <meta property="fc:frame:button:1" content="🎮 Play Orbique" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:post_url" content="https://orbique.vercel.app/api/frame" />

        {/* — Standard SEO + OpenGraph — */}
        <title>Orbique</title>
        <meta name="description" content="Web3 riddle game powered by MONAD — only one can win." />
        <meta property="og:title" content="Orbique" />
        <meta property="og:description" content="Web3 riddle game powered by MONAD — only one can win." />
        <meta property="og:image" content="https://orbique.vercel.app/og-image.png" />
        <meta property="og:url" content="https://orbique.vercel.app" />

        {/* — Twitter Card (optional) — */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Orbique" />
        <meta name="twitter:description" content="Web3 riddle game powered by MONAD — only one can win." />
        <meta name="twitter:image" content="https://orbique.vercel.app/og-image.png" />
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








