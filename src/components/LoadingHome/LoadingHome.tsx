import { FC } from 'react';
export interface LoadingHomeInterface {}

const LoadingHome: FC<LoadingHomeInterface> = () => {
  return (
    <div>
      <ul className='loading'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default LoadingHome;
