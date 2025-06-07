import { NextResponse } from 'next/server';

export async function GET() {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="Orbique - Solve the Riddle" />
        <meta property="og:description" content="Try to solve the riddle and win the MON pot." />
        <meta property="og:image" content="https://orbique.vercel.app/og-image.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://orbique.vercel.app/og-image.png" />
        <meta property="fc:frame:button:1" content="Play Now" />
        <meta property="fc:frame:post_url" content="https://orbique.vercel.app" />
      </head>
      <body></body>
    </html>
  `;

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}




