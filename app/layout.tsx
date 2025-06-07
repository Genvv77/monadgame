import './globals.css';
import Providers from './providers';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Providers>
          {children}
          <Toaster position="top-right" reverseOrder={false} />
        </Providers>
      </body>
    </html>
  );
}

