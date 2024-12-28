import { Logo } from '../logo';
import { Menu } from '../menu';

export const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex-between'>
        <Logo />
        <Menu />
      </div>
    </header>
  );
};
