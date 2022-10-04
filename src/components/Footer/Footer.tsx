import { FC } from 'react';
export interface FooterInterface {}

const Footer: FC<FooterInterface> = () => {
  return (
    <footer className='padding-layout py-12'>
      <div className='flex items-center justify-center'>
        <h1>Designed & Built by Felipe Román</h1>
      </div>
    </footer>
  );
};

export default Footer;
