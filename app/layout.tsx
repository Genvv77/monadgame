import './globals.css';
import Providers from './providers';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'ORBIQUE',
  description: 'Win MON by solving riddles!',
  icons: '/og-image.png',
  openGraph: {
    images: ['https://orbique.vercel.app/og-image.png'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://orbique.vercel.app/og-image.png',
    'fc:frame:button:1': 'Play Orbique',
    'fc:frame:button:1:action': 'launch_frame',
    'fc:frame:post_url': 'https://orbique.vercel.app/api/frame',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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


