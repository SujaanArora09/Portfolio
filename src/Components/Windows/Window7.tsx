import React from 'react';
import WindowComponent from '../WindowStatusBar';

const Window7: React.FC<{ closeWindow: () => void }> = ({ closeWindow }) => {
  return (
    <WindowComponent title='About Me'closeWindow={closeWindow} >
    <div >
      hello
    </div>
    </WindowComponent>
  );
};

export default Window7;
