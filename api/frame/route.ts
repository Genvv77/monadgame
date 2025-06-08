// /app/api/frame/route.tsx (for App Router)
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return new NextResponse(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Orbique Riddle</title>
        <meta property="og:title" content="Play Orbique" />
        <meta property="og:image" content="https://orbique.vercel.app/og-image.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://orbique.vercel.app/og-image.png" />
        <meta property="fc:frame:button:1" content="Play Now" />
        <meta property="fc:frame:post_url" content="https://orbique.vercel.app/api/frame" />
      </head>
      <body>
        Orbique Frame
      </body>
    </html>
    `,
    {
      headers: {
        'Content-Type': 'text/html',
      },
    }
  );
}








