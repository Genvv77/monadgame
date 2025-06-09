// app/api/frame/route.ts
export async function POST(request: Request) {
  const body = await request.json()
  console.log("Frame interaction:", body)

  // respond with the “next state”:
  const responseHTML = `<!DOCTYPE html>
  <html><head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:button:1" content="🚀 Launch Game" />
    <meta property="fc:frame:button:1:action" content="link" />
    <meta property="fc:frame:button:1:target" content="https://orbique.vercel.app" />
  </head><body></body></html>`

  return new Response(responseHTML, {
    headers: { "Content-Type": "text/html" },
    status: 200,
  })
}

