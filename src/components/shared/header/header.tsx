import { Button } from '@/components/ui/button';
import { ShoppingCart, UserIcon } from 'lucide-react';
import Link from 'next/link';

import { Logo } from '../logo';
import { ThemeToggle } from '../theme-toggle';

export const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex-between'>
        <Logo />

        <div className='space-x-2'>
          <ThemeToggle />
          <Button asChild variant='ghost'>
            <Link href='/cart'>
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href='/sign-in'>
              <UserIcon /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};