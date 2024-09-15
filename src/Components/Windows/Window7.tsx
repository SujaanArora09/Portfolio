import React from 'react';
import WindowComponent from '../WindowStatusBar';
import { Gallery } from '../Gallery';



const Window5: React.FC<{ closeWindow: () => void }> = ({ closeWindow }) => {
  return (
    <WindowComponent title="About Me" closeWindow={closeWindow}>
      <Gallery/>
    </WindowComponent>
  );
};

export default Window5;
