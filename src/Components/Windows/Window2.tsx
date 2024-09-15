import React from 'react';
import WindowComponent from '../WindowStatusBar';

const Window2:React.FC<{ closeWindow: () => void }> = ({ closeWindow }) => {
  return (
    <WindowComponent title='Web projects' closeWindow={closeWindow}>
    <div className='h-full'>
     
    </div>
    </WindowComponent>
  );
};

export default Window2;
