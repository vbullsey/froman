import { FC } from 'react';
import Image from 'next/image';

export interface AboutMeInterface {}

const technologies = [
  {
    name: 'html',
    icon: '/icons/html5.png',
  },
  {
    name: 'css',
    icon: '/icons/css3.png',
  },
  {
    name: 'javascript',
    icon: '/icons/javascript.png',
  },
  {
    name: 'typescript',
    icon: '/icons/typescript.png',
  },
  {
    name: 'node',
    icon: '/icons/node-js.png',
  },
  {
    name: 'python',
    icon: '/icons/python.png',
  },
  {
    name: 'tailwind',
    icon: '/icons/tailwind.svg',
  },
];

const AboutMe: FC<AboutMeInterface> = () => {
  return (
    <section className='flex flex-col md:flex-row justify-between gap-y-8 md:gap-0 md:items-start pt-44'>
      <div className='flex flex-col items-center'>
        <div className='text-justify'>
          <h1 className='subTitle'>Me, Myself and I</h1>
          <p className='mt-4'>
            Hello! My name is Felipe and I enjoy creating things that live on the internet. My
            interest in web development started back in 2017 when I decided to try to create my
            first website to the world of the gaming
          </p>
          <p className='mt-4'>Here are a few technologies I've been working with recently:</p>
        </div>

        {/* <ul className='grid grid-cols-2 w-full mt-8 '>
          {technologies.map((technologies, i) => (
            <li className='text-sm text-ui-blue flex items-center ' key={i}>
              <div className='flex items-center gap-2'>
                <span className='uppercase'>{`> ${technologies.name}`}</span>
                <div className='relative w-10 h-10'>
                  <Image src={technologies.icon} layout='fill' alt='logos' />
                </div>
              </div>
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  );
};

export default AboutMe;
