// app/api/frame/route.ts
const FRAME_HTML = `<!DOCTYPE html>
<html>
  <head>
    <!-- tell Farcaster this is a vNext frame -->
    <meta property="fc:frame" content="vNext" />

    <!-- keep your splash image so it doesn’t go blank -->
    <meta property="fc:frame:image"          content="https://orbique.vercel.app/og-image.png" />
    <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />

    <!-- here’s the Play Orbique button -->
    <meta property="fc:frame:button:1"        content="🎮 Play Orbique" />
    <meta property="fc:frame:button:1:action" content="link" />
    <meta property="fc:frame:button:1:target" content="https://orbique.vercel.app" />
  </head>
  <body></body>
</html>`;

export async function GET() {
  return new Response(FRAME_HTML, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

export async function POST(request: Request) {
  // optional: inspect request.json() to see any payload from launch_frame
  return new Response(FRAME_HTML, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}





