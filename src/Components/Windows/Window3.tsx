import React from 'react';
import WindowComponent from '../WindowStatusBar';
import { Tabs } from '../tabs';
const tabData = [
    { title: '1', value: 'tab1', content: <div className='w-full h-[92%] rounded-lg bg-white shadow-[0px_-2px_20px_4px_#cbd5e0] p-4 '>Tab 1</div> },
    { title: '2', value: 'tab2', content: <div className='w-full h-[92%] rounded-lg bg-white shadow-[0px_-2px_20px_4px_#cbd5e0] p-4 '>Tab 2</div> },
    { title: '3', value: 'tab3', content: <div className='w-full h-[92%] rounded-lg bg-white shadow-[0px_-2px_20px_4px_#cbd5e0] p-4 '>Tab 3</div> },
  ];
const Window3:React.FC<{ closeWindow: () => void }> = ({ closeWindow }) => {
  return (
    <WindowComponent title='App Projects' closeWindow={closeWindow}>
    <div className='h-[93%]'>
      <Tabs
        tabs={tabData}
        containerClassName="my-container-class"
        activeTabClassName="my-active-tab-class"
        tabClassName="my-tab-class"
        contentClassName="my-content-class"
      />
    </div>
    </WindowComponent>
  );
};

export default Window3;
