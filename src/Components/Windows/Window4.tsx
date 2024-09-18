import React from 'react';
import WindowComponent from '../WindowStatusBar';
const Window4:React.FC<{ closeWindow: () => void }> = ({ closeWindow }) => {
  return (
    <WindowComponent title='UI/UX Projects' closeWindow={closeWindow}>
    <div></div>
    </WindowComponent>
  );
};

export default Window4;
