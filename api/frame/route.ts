// app/api/frame/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://orbique.vercel.app/public/og-image.png" />
        <meta property="fc:frame:post_url" content="https://orbique.vercel.app/api/frame" />
        <meta property="fc:frame:button:1" content="Start Playing" />
        <meta property="fc:frame:button:2" content="Pot Status" />
        <meta property="fc:frame:button:3" content="Last Winner" />
        <meta property="fc:frame:button:4" content="Try a Guess" />
        <meta property="og:title" content="Orbique - Riddle Game" />
        <meta property="og:description" content="A mysterious riddle awaits. Solve it to win the pot." />
        <meta property="og:image" content="https://orbique.vercel.app/public/og-image.png" />
      </head>
      <body>
        <h1>Orbique</h1>
        <p>A mysterious riddle awaits. Solve it to win the pot.</p>
      </body>
    </html>
  `;

  return new NextResponse(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}


