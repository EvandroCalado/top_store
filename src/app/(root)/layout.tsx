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
      <main className='flex-1 wrapper'>{children}</main>
    </div>
  );
};

export default RootLayout;