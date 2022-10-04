import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
export interface HeaderInterface {}

const Header: FC<HeaderInterface> = () => {
  return (
    <nav className='flex items-center justify-between padding-layout sticky top-0 bg-ui-dark z-50'>
      <div className='relative h-14 w-14 cursor-pointer'>
        <Link href='/'>
          <Image src='/logo.png' layout='fill' alt='logo' />
        </Link>
      </div>
      <div>
        <Link href='https://github.com/vbullsey'>
          <button className='border border-white px-4 py-1 rounded-sm'>Github</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
