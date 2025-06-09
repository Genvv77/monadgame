export const metadata = {
  title: "Orbique",
  description: "Web3 riddle game powered by MONAD — only one can win.",
  icons: "/og-image.png",
  openGraph: {
    title: "Orbique",
    description: "Web3 riddle game powered by MONAD — only one can win.",
    images: ["https://orbique.vercel.app/og-image.png"],
    url: "https://orbique.vercel.app",
  },
  other: {
    // Mini App Frame Embed - FORMAT CORRECT
    "fc:frame": JSON.stringify({
      version: "1.0.0",
      imageUrl: "https://orbique.vercel.app/og-image.png",
      button: {
        title: "🎮 Play Orbique",
        action: {
          type: "launch_frame",
          url: "https://orbique.vercel.app"
        }
      }
    }),
    
    // Twitter Card
    "twitter:card": "summary_large_image",
    "twitter:title": "Orbique",
    "twitter:description": "Web3 riddle game powered by MONAD — only one can win.",
    "twitter:image": "https://orbique.vercel.app/og-image.png",
  },
};

import ClientComponent from './ClientComponent';

export default function Page() {
  return <ClientComponent />;
}

















