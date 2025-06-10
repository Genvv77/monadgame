// app/head.tsx
export default function Head() {
  const appUrl = process.env.NEXT_PUBLIC_URL || 'https://orbique.vercel.app'

  // This object must match FIP-205 exactly—snake_case keys where required:
  const frameEmbed = {
    version: "next",
    name: "Orbique",
    imageUrl: `${appUrl}/og-image.png`,
    aspect_ratio: "1.91:1",
    button: {
      title: "🎮 Play Orbique",
      action: {
        type: "launch_frame",
        name: "Orbique",
        url: `${appUrl}/api/frame`,
        splashImageUrl: `${appUrl}/og-image.png`,
        splashBackgroundColor: "#8b5cf6"
      }
    }
  }

  return (
    <>
      {/* v2 embed JSON as a single meta tag */}
      <meta name="fc:frame" content={JSON.stringify(frameEmbed)} />

      {/* Your normal SEO/OpenGraph/Twitter tags */}
      <title>Orbique</title>
      <meta name="description" content="Web3 riddle game powered by MONAD — only one can win." />
      <meta property="og:image" content={`${appUrl}/og-image.png`} />
      <meta property="og:url" content={appUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}


