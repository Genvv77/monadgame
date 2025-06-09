// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Orbique",
  description: "Web3 riddle game powered by MONAD — only one can win.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Farcaster Frame Embed */}
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
        <meta property="fc:frame:image" content="https://orbique.vercel.app/og-image.png" />
        <meta property="fc:frame:button:1" content="🎮 Play Orbique" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:post_url" content="https://orbique.vercel.app/api/frame" />

        {/* Your normal SEO + OG tags */}
        <title>Orbique</title>
        <meta name="description" content="Web3 riddle game powered by MONAD — only one can win." />
        <meta property="og:image" content="https://orbique.vercel.app/og-image.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}








