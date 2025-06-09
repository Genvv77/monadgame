// app/head.tsx  (aucune importation !)
export default function Head() {
  return (
    <>
      <link rel="icon" href="/favicon.png" />
      <meta name="description" content="Web3 riddle game powered by MONAD — only one can win." />

      {/* — OpenGraph / Twitter — */}
      <meta property="og:title" content="Orbique" />
      <meta property="og:description" content="Web3 riddle game powered by MONAD — only one can win." />
      <meta property="og:image" content="https://orbique.vercel.app/og-image.png" />
      <meta property="og:url" content="https://orbique.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://orbique.vercel.app/og-image.png" />

      {/* — Farcaster Frame vNext — */}
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://orbique.vercel.app/og-image.png" />
      <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
      <meta property="fc:frame:post_url" content="https://orbique.vercel.app/api/frame" />
      <meta property="fc:frame:button:1" content="Launch Orbique" />
      <meta property="fc:frame:button:1:action" content="link" />
      <meta property="fc:frame:button:1:target" content="https://orbique.vercel.app" />
    </>
  );
}




