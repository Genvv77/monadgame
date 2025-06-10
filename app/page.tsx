// app/page.tsx
// ← remove any 'use client' here so this is a Server Component

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
    // v2 JSON‐blob for card & feed
    'fc:frame': JSON.stringify(frameEmbed),
    // v1/vNext tags for the interactive pane
    'property:fc:frame':               'vNext',
    'property:fc:frame:image':         frameEmbed.imageUrl,
    'property:fc:frame:image:aspect_ratio': frameEmbed.aspect_ratio,
    'property:fc:frame:button:1':      frameEmbed.button.title,
    'property:fc:frame:button:1:action':'link',
    'property:fc:frame:button:1:target':frameEmbed.button.action.url,
  }
}

export default function Page() {
  return <ClientComponent />
}




















