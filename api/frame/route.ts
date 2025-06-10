// app/api/frame/route.ts
// This endpoint is called when Farcaster clients fire the `launch_frame` action.
// It returns a minimal HTML snippet with the next button (e.g. “Launch Game”).

const FRAME_HTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Frame Step 2: provide a direct link button -->
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:button:1" content="🚀 Launch Game" />
    <meta property="fc:frame:button:1:action" content="link" />
    <meta property="fc:frame:button:1:target" content="https://orbique.vercel.app" />
  </head>
  <body></body>
</html>`

// For launch_frame flows
export async function POST(request: Request) {
  return new Response(FRAME_HTML, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  })
}

// Optional: respond to GET the same, if you want to allow the Embed Tool to demo via GET
export async function GET() {
  return new Response(FRAME_HTML, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  })
}