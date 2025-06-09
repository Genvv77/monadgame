// app/api/frame/route.ts
export async function GET() {
  const html = `<!DOCTYPE html>
<html>
  <head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://orbique.vercel.app/og-image.png" />
    <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
    <meta property="fc:frame:button:1" content="🎮 Play Orbique" />
    <meta property="fc:frame:button:1:action" content="link" />
    <meta property="fc:frame:button:1:target" content="https://orbique.vercel.app" />
    
    <!-- Standard OpenGraph fallbacks -->
    <meta property="og:title" content="Orbique" />
    <meta property="og:description" content="Web3 riddle game powered by MONAD — only one can win." />
    <meta property="og:image" content="https://orbique.vercel.app/og-image.png" />
  </head>
  <body>
    <p>Orbique - Web3 riddle game powered by MONAD</p>
  </body>
</html>`
  
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}

export async function POST(request: Request) {
  return await GET()
}






