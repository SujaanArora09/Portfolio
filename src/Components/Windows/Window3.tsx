import React from 'react';
import WindowComponent from '../WindowStatusBar';

const Window3:React.FC<{ closeWindow: () => void }> = ({ closeWindow }) => {
  return (
    <WindowComponent title='App Projects' closeWindow={closeWindow}>
    <div className='h-[93%]'>
    </div>
    </WindowComponent>
  );
};

export default Window3;
