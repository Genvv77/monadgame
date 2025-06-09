// app/api/frame/route.ts
import { NextResponse } from 'next/server';

const SHARED_HEAD = `
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://orbique.vercel.app/og-image.png" />
  <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
`;

// GET returns the “splash” HTML you want to show inside the frame initially
export async function GET() {
  const html = `<!DOCTYPE html>
<html><head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Orbique - Web3 Riddle Game</title>
  ${SHARED_HEAD}
  <meta property="fc:frame:button:1" content="🎮 Play Orbique" />
  <meta property="fc:frame:button:1:action" content="post" />
  <meta property="fc:frame:post_url" content="https://orbique.vercel.app/api/frame" />
  <meta property="og:title" content="Orbique - Web3 Riddle Game" />
  <meta property="og:description" content="Web3 riddle game powered by MONAD — only one can win." />
  <meta property="og:image" content="https://orbique.vercel.app/og-image.png" />
  <meta property="og:url" content="https://orbique.vercel.app" />
</head>
<body style="margin:0">
  <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
              height:100vh;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);
              color:white;font-family:sans-serif;text-align:center;">
    <h1 style="font-size:4rem;margin:0 0 1rem">ORB<span style="color:#ffeb3b">IQUE</span></h1>
    <p style="font-size:1.25rem;max-width:600px">
      Web3 riddle game powered by MONAD — only one can win.
    </p>
    <small style="opacity:0.8">Click “Play Orbique” below to launch.</small>
  </div>
</body>
</html>`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
}

// POST is called when the user taps the frame button
export async function POST(request: Request) {
  try {
    const payload = await request.json();
    console.log('Frame clicked payload:', payload);

    // Respond with a second-step frame (or redirect)
    const html = `<!DOCTYPE html>
<html><head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  ${SHARED_HEAD}
  <meta property="fc:frame:button:1" content="🚀 Launch Game" />
  <meta property="fc:frame:button:1:action" content="link" />
  <meta property="fc:frame:button:1:target" content="https://orbique.vercel.app" />
</head>
<body style="margin:0">
  <div style="display:flex;align-items:center;justify-content:center;height:100vh;
              background:#222;color:#fff;font-family:sans-serif;text-align:center;">
    <h2>Ready to dive in? Tap “Launch Game” below!</h2>
  </div>
</body>
</html>`;

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=60',
      },
    });
  } catch (e) {
    console.error('Frame POST error', e);
    const html = `<html><head>
      <meta property="fc:frame" content="vNext"/>
      <meta property="fc:frame:button:1" content="🔄 Try Again"/>
      <meta property="fc:frame:button:1:action" content="post"/>
      <meta property="fc:frame:post_url" content="https://orbique.vercel.app/api/frame"/>
    </head><body><div style="color:red;padding:2rem;text-align:center;">
      <h1>Oops! Something went wrong.</h1>
    </div></body></html>`;

    return new Response(html, {
      status: 500,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  }
}




















