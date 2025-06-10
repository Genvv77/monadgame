// app/api/frame/route.ts
export async function GET(request: Request) {
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://orbique.vercel.app/og-image.png" />
    <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
    <meta property="fc:frame:button:1" content="🎮 Play Orbique" />
    <meta property="fc:frame:button:1:action" content="link" />
    <meta property="fc:frame:button:1:target" content="https://orbique.vercel.app" />
  </head>
  <body>
    <!-- Fallback content or silent frame -->
  </body>
</html>`

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

// Mirror GET for POST flows
export { GET as POST } from './route'








