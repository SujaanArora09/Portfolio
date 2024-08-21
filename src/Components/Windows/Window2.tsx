import React from 'react';
import WindowComponent from '../WindowStatusBar';
import CardOutline from '../cardOutline';
import { Tabs } from '../tabs';
const tabData = [
  { title: '1', value: 'tab1', content: 
    <div className='w-full h-[92%] rounded-lg bg-white shadow-[0px_-2px_20px_4px_#cbd5e0]  '>
      <CardOutline title="Got 'U' Covered" subTitle='Custom iPhone Covers' children color='blue2' bannerImage='demo.jpg' logo='projectImages\projectLogos\gotUCoveredLogo.png'></CardOutline>
    </div>
  },
  { title: '2', value: 'tab2', content: 
    <div className='w-full h-[92%] rounded-lg bg-white shadow-[0px_-2px_20px_4px_#cbd5e0]  '>
      Tab 2
    </div> 
  },
  { title: '3', value: 'tab3', content: 
    <div className='w-full h-[92%] rounded-lg bg-white shadow-[0px_-2px_20px_4px_#cbd5e0]  '>
      Tab 3
    </div> 
  },
];
const Window2:React.FC<{ closeWindow: () => void }> = ({ closeWindow }) => {
  return (
    <WindowComponent title='Web projects' closeWindow={closeWindow}>
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

export default Window2;
