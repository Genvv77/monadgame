// pages/api/frame.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  // Optional: validate payload...
  res
    .status(200)
    .setHeader('Content-Type', 'text/html')
    .send(`
      <html>
        <head>
          <meta property="og:title" content="Orbique" />
          <meta property="og:image" content="https://orbique.vercel.app/og-image.png" />
          <meta property="og:description" content="Web3 riddle game powered by MONAD" />
          <meta property="fc:frame" content="vNext" />
        </head>
        <body>
          Frame Loaded
        </body>
      </html>
    `);
}

















