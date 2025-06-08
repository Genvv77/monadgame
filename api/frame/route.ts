// pages/api/frame.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const origin = process.env.NEXT_PUBLIC_URL || 'https://orbique.vercel.app'
  const frameUrl = `${origin}` // The page URL embedding Orbique
  const imageUrl = `${origin}/og-image.png`

  const metadata = {
    "fc:frame": frameUrl,
    "fc:frame:height": 600,
    "fc:frame:image": imageUrl,
    "og:title": "ORB IQUE",
    "og:image": imageUrl,
    "og:description": "A riddle game with a pot prize",
    "og:type": "website",
    "fc:frame:button:1": ":type post",
    "fc:frame:button:1:title": "Play Orbique",
    "fc:frame:button:1:post_url": frameUrl,
  }

  res.setHeader("Content-Type", "application/json")
  res.setHeader("Cache-Control", "public, immutable, no-transform, max-age=60")
  res.status(200).json(metadata)
}











