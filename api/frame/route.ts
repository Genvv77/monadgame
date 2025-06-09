// app/api/frame/route.ts
export async function POST(request: Request) {
  try {
    const body = await request.json()
    // handle the “Play Orbique” click…
    console.log("Frame interaction:", body)

    // respond with the next frame state (or redirect)…
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
  } catch (err) {
    console.error(err)
    // error‐frame…
    return new Response(
      `<html><head>
         <meta property="fc:frame" content="vNext" />
         <meta property="fc:frame:button:1" content="🔄 Try Again" />
         <meta property="fc:frame:button:1:action" content="post" />
         <meta property="fc:frame:post_url" content="https://orbique.vercel.app/api/frame" />
       </head><body></body></html>`,
      { status: 500, headers: { "Content-Type": "text/html" } }
    )
  }
}
