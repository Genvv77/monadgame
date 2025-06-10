// app/page.tsx
// NO 'use client' at the top—this file must be a Server Component
import ClientComponent from './ClientComponent'

const appUrl = process.env.NEXT_PUBLIC_URL || 'https://orbique.vercel.app'

const frameEmbed = {
  version: 'next',
  name: 'Orbique',
  imageUrl: `${appUrl}/og-image.png`,
  aspect_ratio: '1.91:1',
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
    images: [ `${appUrl}/og-image.png` ],
  },
  other: {
    'fc:frame': JSON.stringify(frameEmbed)
  }
}

export default function Page() {
  return <ClientComponent />
}



















