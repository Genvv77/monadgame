// app/head.tsx
export default function Head() {
  return (
    <>
      {/* v1/vNext Frame Embed (interactive pane) */}
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://orbique.vercel.app/og-image.png" />
      <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
      <meta property="fc:frame:button:1" content="🎮 Play Orbique" />
      <meta property="fc:frame:button:1:action" content="link" />
      <meta property="fc:frame:button:1:target" content="https://orbique.vercel.app" />

      {/* v2 JSON embed (card & manifest) */}
      <meta
        name="fc:frame"
        content='{"version":"next","imageUrl":"https://orbique.vercel.app/og-image.png","aspectRatio":"1.91:1","button":{"title":"🎮 Play Orbique","action":{"type":"link","url":"https://orbique.vercel.app"}}}'
      />

      {/* Your SEO / OpenGraph / Twitter tags */}
      <title>Orbique</title>
      <meta name="description" content="Web3 riddle game powered by MONAD — only one can win." />
      <meta property="og:title" content="Orbique" />
      <meta property="og:description" content="Web3 riddle game powered by MONAD — only one can win." />
      <meta property="og:image" content="https://orbique.vercel.app/og-image.png" />
      <meta property="og:url" content="https://orbique.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
