import { FC } from 'react';
import Image from 'next/image';

export interface HeroInterface {}

const Hero: FC<HeroInterface> = () => {
  return (
    <section className='flex flex-col md:flex-row justify-center items-center md:justify-between md:text-start text-center gap-y-8 md:gap-0 md:items-start pt-44'>
      <div className='flex flex-col gap-y-4'>
        <div>
          <h1 className='text-5xl'>Hi,</h1>
          <h1 className='text-5xl'>Im Felipe,</h1>
          <h1 className='text-5xl'>Web Developer</h1>
        </div>
        <div>
          <span className='text-ui-blue'>Front End / UI Developer</span>
        </div>
        <div className=''>
          <button className='button-neon'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Contact me!
          </button>
        </div>
      </div>
      <div className='flex justify-center mt-4'>
        <div className='relative w-44 h-64 hover:scale-105 transition duration-200 ease-out '>
          <Image src='/avatar.png' layout='fill' alt='avatar' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
