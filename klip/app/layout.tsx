import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import RootProvider from '@/components/RootProvider';

const inter = Inter({ subsets: ['latin'] });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Klip - Convert Videos to Shorts',
  description: 'Convert long-form videos into viral short-form clips with AI-powered scene detection and captions.',
  keywords: ['video editing', 'short-form', 'tiktok', 'reels', 'youtube shorts', 'ai'],
  openGraph: {
    title: 'Klip - Convert Videos to Shorts',
    description: 'Turn podcasts and YouTube videos into viral TikTok clips',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-950`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
