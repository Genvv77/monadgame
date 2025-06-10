// app/layout.tsx
import './globals.css'
import Providers from './providers'
import { Toaster } from 'react-hot-toast'

const frameEmbed = {
  version: 'next' as const,
  imageUrl: 'https://orbique.vercel.app/og-image.png',     // 3:2 splash
  button: {
    title: '🎮 Play Orbique',                              // button text (≤32 chars)
    action: {
      type: 'launch_frame' as const,                      // must be "launch_frame"
      name: 'Orbique',                                    // your app’s name (≤32 chars)
      url: 'https://orbique.vercel.app',                  // where to open in-frame
      splashImageUrl: 'https://orbique.vercel.app/og-image.png',  
      splashBackgroundColor: '#8b5cf6'
    }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ← v2 Mini-App embed: exactly one meta tag containing full FrameEmbed JSON */}
        <meta
          name="fc:frame"
          content={JSON.stringify(frameEmbed)}
        />
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



















