import './globals.css';
import Providers from './providers';
import { Toaster } from 'react-hot-toast';

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
    // Farcaster embed tags
    "fc:frame": "vNext",
    "fc:frame:image": "https://orbique.vercel.app/og-image.png",
    "fc:frame:image:aspect_ratio": "1.91:1",
    "fc:frame:button:1": "Launch Orbique",
    "fc:frame:button:1:action": "link",
    "fc:frame:button:1:target": "https://orbique.vercel.app",
    
    // Twitter card
    "twitter:card": "summary_large_image",
    "twitter:title": "Orbique",
    "twitter:description": "Web3 riddle game powered by MONAD — only one can win.",
    "twitter:image": "https://orbique.vercel.app/og-image.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Toaster position="top-right" reverseOrder={false} />
        </Providers>
      </body>
    </html>
  );
}



