// app/api/frame/route.ts
const FRAME_HTML = `<!DOCTYPE html>
<html><head>
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:button:1" content="🚀 Launch Game" />
  <meta property="fc:frame:button:1:action" content="link" />
  <meta property="fc:frame:button:1:target" content="https://orbique.vercel.app" />
</head><body></body></html>`

export async function POST() {
  return new Response(FRAME_HTML, { headers: { 'Content-Type': 'text/html' } })
}
export { POST as GET }

