// app/page.tsx
// ← remove any 'use client' here so this is a Server Component

import ClientComponent from './ClientComponent'

export const metadata = {
  title: "Orbique",
  description: "Web3 riddle game powered by MONAD — only one can win.",
  openGraph: {
    title: "Orbique",
    description: "Web3 riddle game powered by MONAD — only one can win.",
    images: [ "https://orbique.vercel.app/og-image.png" ],
    url: "https://orbique.vercel.app",
  },
  other: {
    "fc:frame": JSON.stringify({
      version: "next",
      imageUrl: "https://orbique.vercel.app/og-image.png",
      button: {
        title: "🎮 Play Orbique",
        action: {
          type: "launch_frame",
          name: "Orbique",
          url: "https://orbique.vercel.app",
          splashImageUrl: "https://orbique.vercel.app/og-image.png",
          splashBackgroundColor: "#8b5cf6",
        }
      }
    })
  }
}

export default function Page() {
  return <ClientComponent />
}




















