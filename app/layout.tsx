// app/layout.tsx
import './globals.css'
import Providers from './providers'
import { Toaster } from 'react-hot-toast'

const appUrl = process.env.NEXT_PUBLIC_URL || 'https://orbique.vercel.app'

// Build the single-blob v2 FrameEmbed exactly to spec:
const frameEmbed = {
  version: 'next',
  name: 'Orbique',
  imageUrl: `${appUrl}/og-image.png`,
  aspectRatio: '1.91:1',
  button: {
    title: '🎮 Play Orbique',
    action: {
      type: 'launch_frame',
      name: 'Orbique',
      url: `${appUrl}/api/frame`,
      splashImageUrl: `${appUrl}/og-image.png`,
      splashBackgroundColor: '#8b5cf6'
    }
  }
}

export const metadata = {
  title: 'Orbique',
  description: 'Web3 riddle game powered by MONAD — only one can win.',
  openGraph: {
    title: 'Orbique',
    description: 'Web3 riddle game powered by MONAD — only one can win.',
    url: appUrl,
    images: [ `${appUrl}/og-image.png` ]
  },
  other: {
    // This line becomes: <meta name="fc:frame" content="...stringified JSON..." />
    'fc:frame': JSON.stringify(frameEmbed)
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  )
}
























