// app/api/frame/route.ts
export async function GET() {
  const html = `<!DOCTYPE html>
  <html><head>
    <meta name="fc:frame" content='{"version":"next",
       "imageUrl":"https://orbique.vercel.app/og-image.png",
       "button":{"title":"🚀 Launch Game","action":{"type":"link","url":"https://orbique.vercel.app"}}}'/>
  </head></html>`;
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

