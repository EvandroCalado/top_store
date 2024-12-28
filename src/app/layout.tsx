import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-primary',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Top Store',
  description: 'Modern e-commerce for you!',
  icons: {
    icon: [
      {
        rel: 'icon',
        media: '(prefers-color-scheme: dark)',
        url: './logo-white.ico',
      },
      {
        rel: 'icon',
        media: '(prefers-color-scheme: light)',
        url: './logo.ico',
      },
    ],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='pt-BR'>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
