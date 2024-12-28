import { BagIcon } from '@/icons/bag-icon';
import { LogoIcon } from '@/icons/logo-icon';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href='/'>
      <LogoIcon className='dark:text-white w-36 h-max max-lg:hidden' />
      <BagIcon className='dark:text-white w-6 h-10 lg:hidden' />
    </Link>
  );
};
