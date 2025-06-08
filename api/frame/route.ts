// pages/api/frame.ts

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const siteUrl = "https://orbique.vercel.app"; // Your live domain
  const imageUrl = `${siteUrl}/og-image.png`;   // Make sure this image exists in /public

  res.setHeader("Content-Type", "text/html");

  res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="Orbique Frame" />
        <meta property="og:image" content="${imageUrl}" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="${imageUrl}" />
        <meta name="fc:frame:button:1" content="Play Orbique" />
        <meta name="fc:frame:post_url" content="${siteUrl}" />
      </head>
      <body>
        Orbique Frame
      </body>
    </html>
  `);
}












