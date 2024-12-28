'use client';

import { Logo } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Logo />

      <div className='p-6 text-center'>
        <h1 className='text-3xl text-yellow-400 font-bold mb-4'>Not Found</h1>

        <p className='text-muted-foreground'>Could not find requested page</p>

        <Button className='mt-4 ml-2' onClick={() => router.push('/')}>
          Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
