// app/api/frame/route.ts
const FRAME_HTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- v1/vNext tags so the simulator’s “Open” shows a button -->
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:button:1" content="🚀 Launch Game" />
    <meta property="fc:frame:button:1:action" content="link" />
    <meta property="fc:frame:button:1:target" content="https://orbique.vercel.app" />
  </head>
  <body></body>
</html>`;

export async function POST(request: Request) {
  return new Response(FRAME_HTML, {
    headers: { "Content-Type": "text/html; charset=utf-8" }
  });
}

// Mirror for GET as well (Embed Tool’s “Open” pane uses GET)
export { POST as GET };
