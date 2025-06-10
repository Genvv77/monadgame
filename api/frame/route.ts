// app/api/frame/route.ts

// This HTML is returned when Farcaster does GET or POST to /api/frame.
// It must include the v1/vNext meta tags for the button.
const FRAME_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Tell the client we’re still in Frame mode -->
  <meta property="fc:frame" content="vNext" />

  <!-- Here’s the in-frame button -->
  <meta property="fc:frame:button:1"        content="🎮 Play Orbique" />
  <meta property="fc:frame:button:1:action" content="link" />
  <meta property="fc:frame:button:1:target" content="https://orbique.vercel.app" />
</head>
<body></body>
</html>`

// Handle POST from the launch_frame action
export async function POST() {
  return new Response(FRAME_HTML, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}

// Mirror GET so the Embed Tool’s “Open” pane also shows the button
export { POST as GET }
