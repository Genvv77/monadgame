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
    // FRAME MÉTADONNÉES - VERSION CORRECTE POUR EMBED
    "fc:frame": "vNext",
    "fc:frame:image": "https://orbique.vercel.app/og-image.png",
    "fc:frame:image:aspect_ratio": "1.91:1",
    "fc:frame:button:1": "🎮 Play Orbique",
    "fc:frame:button:1:action": "post",
    "fc:frame:post_url": "https://orbique.vercel.app/api/frame",
    
    // Twitter Card
    "twitter:card": "summary_large_image",
    "twitter:title": "Orbique",
    "twitter:description": "Web3 riddle game powered by MONAD — only one can win.",
    "twitter:image": "https://orbique.vercel.app/og-image.png",
  },
};

import ClientComponent from "./ClientComponent";

export default function Page() {
  return <ClientComponent />;
}

















