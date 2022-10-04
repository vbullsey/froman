import { FC } from 'react';
export interface MeteorAnimationInterface {}

const MeteorAnimation: FC<MeteorAnimationInterface> = () => {
  return (
    <div>
      <div className='first'>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className='second'>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className='third'>
        <ul>
          <li></li>
          <li></li>
          <li className='floating-1'></li>
          <li className='floating-1'></li>
          <li className='floating-2'></li>
          <li className='floating-2'></li>
        </ul>
      </div>
      <div className='fourth'>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li className='floating'></li>
          <li className='floating'></li>
          <li className='floating'></li>
          <li className='floating'></li>
        </ul>
        <span className='smile'></span>
        <span className='eyes'></span>
        <span className='cheeks'></span>
      </div>

      <div className='random-stars-container'>
        <span className='random-stars'></span>
        <span className='random-stars'></span>
        <span className='random-stars'></span>
        <span className='random-stars'></span>
      </div>
    </div>
  );
};

export default MeteorAnimation;
