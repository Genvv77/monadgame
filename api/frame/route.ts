const FRAME_HTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://orbique.vercel.app/og-image.png" />
    <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />

    <meta property="fc:frame:button:1" content="🎮 Play Orbique" />
    <meta property="fc:frame:button:1:action" content="link" />
    <meta property="fc:frame:button:1:target" content="https://orbique.vercel.app" />
  </head>
  <body></body>
</html>`

export async function GET() {
  return new Response(FRAME_HTML, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  })
}

export async function POST(request: Request) {
  return new Response(FRAME_HTML, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  })
}









