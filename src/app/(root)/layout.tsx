import { Footer, Header } from '@/components/shared';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'home',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='flex h-screen flex-col'>
      <Header />
      <main className='flex-1 wrapper'>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
