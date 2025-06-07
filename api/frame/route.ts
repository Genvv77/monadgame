// /app/api/frame/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="Can you solve this?" />
        <meta property="og:image" content="https://orbique.vercel.app/og-image.png" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:button:1" content="Play Now" />
        <meta name="fc:frame:post_url" content="https://orbique.vercel.app/api/frame/submit" />
      </head>
      <body></body>
    </html>
  `;

  return new NextResponse(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'max-age=0, no-cache, no-store, must-revalidate',
    },
  });
}



