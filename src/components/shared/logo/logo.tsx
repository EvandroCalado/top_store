import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <div>
      <Link href='/'>
        <Image
          src='./Logo.svg'
          alt={`${APP_NAME}`}
          width={120}
          height={48}
          priority
          className='hidden lg:block'
        />

        <Image
          src='/logo.ico'
          alt={`${APP_NAME}`}
          width={24}
          height={24}
          priority
          className='lg:hidden'
        />
      </Link>
    </div>
  );
};
