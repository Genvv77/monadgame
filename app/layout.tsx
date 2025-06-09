import './globals.css';
import Providers from './providers';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "Orbique",
  description: "Web3 riddle game powered by MONAD — only one can win.",
  openGraph: {
    title: "Orbique",
    description: "Web3 riddle game powered by MONAD — only one can win.",
    images: ["https://orbique.vercel.app/og-image.png"],
    url: "https://orbique.vercel.app",
  },
  other: {
    "of:accepts:farcaster@vNext": "true",
    "of:version": "vNext",
    "of:image": "https://orbique.vercel.app/og-image.png",
    "of:button:1": "Launch Orbique",
    "of:button:1:action": "link",
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




