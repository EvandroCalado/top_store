import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon, ShoppingCart, UserIcon } from 'lucide-react';
import Link from 'next/link';

import { ThemeToggle } from '../theme-toggle';

export const Menu = () => {
  return (
    <div className='flex items-center justify-end gap-3'>
      <nav className='hidden md:flex w-full max-w-xs gap-1'>
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
      </nav>

      <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger className='align-middle'>
            <MenuIcon />
          </SheetTrigger>

          <SheetContent className='flex flex-col items-center'>
            <SheetTitle>Menu</SheetTitle>
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
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};
