import React from 'react';
import WindowComponent from '../WindowStatusBar';
import { Gallery } from '../Gallery';

const Window6: React.FC<{ closeWindow: () => void }> = ({ closeWindow })=> {
  return (
   <WindowComponent title='About Me' closeWindow={closeWindow} >
    <div className='absolute h-full '>
      <Gallery/>
    </div>
    </WindowComponent>
  );
};

export default Window6;
