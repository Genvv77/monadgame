// app/api/frame/route.ts

// The HTML you return on GET or POST to /api/frame.
// It only needs to include the fc:frame v1 tags for the button.
const FRAME_HTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Tell the client we’re still in vNext frame mode -->
    <meta property="fc:frame" content="vNext" />

    <!-- This is the button users will tap to launch your full app -->
    <meta property="fc:frame:button:1"        content="🚀 Launch Game" />
    <meta property="fc:frame:button:1:action" content="link" />
    <meta property="fc:frame:button:1:target" content="https://orbique.vercel.app" />
  </head>
  <body></body>
</html>`

// Handle POST from the `launch_frame` action
export async function POST(request: Request) {
  return new Response(FRAME_HTML, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}

// Mirror GET so the Embed Tool’s “Open” preview shows the same button
export { POST as GET }
