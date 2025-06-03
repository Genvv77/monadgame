import './globals.css';
import Providers from './providers';
import { Toaster } from 'react-hot-toast'; // 👈 Import here

export const metadata = {
  title: 'ORBIQUE',
  description: 'Win MON by solving riddles!',
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
          <Toaster position="top-right" reverseOrder={false} /> {/* 👈 Add this */}
        </Providers>
      </body>
    </html>
  );
}
