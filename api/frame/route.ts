// app/api/frame/route.ts
export async function POST(request: Request) {
  // You can inspect request.json() here if you want to read the launch_frame payload
  const html = `<!DOCTYPE html>
<html>
  <head>
    <!-- tell Farcaster this is still a vNext frame -->
    <meta property="fc:frame" content="vNext" />

    <!-- keep your splash so it doesn't go blank -->
    <meta property="fc:frame:image" content="https://orbique.vercel.app/og-image.png" />
    <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />

    <!-- here’s the Play Orbique button -->
    <meta property="fc:frame:button:1" content="🎮 Play Orbique" />
    <meta property="fc:frame:button:1:action" content="link" />
    <meta property="fc:frame:button:1:target" content="https://orbique.vercel.app" />
  </head>
  <body></body>
</html>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}




