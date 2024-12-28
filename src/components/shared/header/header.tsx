import { Button } from '@/components/ui/button';
import { ShoppingCart, UserIcon } from 'lucide-react';
import Link from 'next/link';

import { Logo } from '../logo';

export const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex-between'>
        <div className='flex-start'>
          <Logo />
        </div>

        <div className='space-x-2'>
          <Button asChild variant='ghost'>
            <Link href='/cart'>
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild variant='ghost'>
            <Link href='/sign-in'>
              <UserIcon /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
