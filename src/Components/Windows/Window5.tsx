import React from 'react';
import WindowComponent from '../WindowStatusBar';




const Window5: React.FC<{ closeWindow: () => void }> = ({ closeWindow }) => {
  return (
    <WindowComponent title="About Me" closeWindow={closeWindow}>
      <div></div>
    </WindowComponent>
  );
};

export default Window5;
