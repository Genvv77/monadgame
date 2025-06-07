import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="Orbique - Solve the Riddle" />
        <meta property="og:image" content="https://orbique.vercel.app/og-image.png" />

        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://orbique.vercel.app/og-image.png" />
        <meta property="fc:frame:button:1" content="Enter Game" />
        <meta property="fc:frame:post_url" content="https://orbique.vercel.app" />
      </head>
      <body>
        Orbique Frame
      </body>
    </html>
  `,
    {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'no-cache',
      },
    }
  );
}






