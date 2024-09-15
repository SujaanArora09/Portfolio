import React from 'react';
import WindowComponent from '../WindowStatusBar';
import { Tabs } from '../tabs';
import CardOutline from '../cardOutline';
const tabData = [
  { title: '1', value: 'tab1', content: 
    <div className='w-full h-[92%] rounded-lg bg-white shadow-[0px_-2px_20px_4px_#cbd5e0]  '>
      <CardOutline title="Got 'U' Covered" subTitle='Custom iPhone Covers' children color='blue2' bannerImage='projectImages\bannerImages\GotUCovered.png' logo='projectImages\projectLogos\gotUCoveredLogo.png'
      githubLink='https://github.com/SujaanArora09/Got-U-Covered'
      figmaLink = 'https://github.com/SujaanArora09/Got-U-Covered'
      liveLink='https://gotucovered.vercel.app/'
      ></CardOutline>
    </div>
  },
  { title: '2', value: 'tab2', content: 
    <div className='w-full h-[92%] rounded-lg bg-white shadow-[0px_-2px_20px_4px_#cbd5e0]  '>
      <CardOutline title="Got 'U' Covered" subTitle='Custom iPhone Covers' children color='blue-600' bannerImage='projectImages\bannerImages\FigmaClone.png' logo='projectImages\projectLogos\gotUCoveredLogo.png'
      githubLink='https://github.com/SujaanArora09/Got-U-Covered'
      figmaLink = 'https://github.com/SujaanArora09/Got-U-Covered'
      liveLink='https://gotucovered.vercel.app/'
      ></CardOutline>
    </div> 
  },
  { title: '3', value: 'tab3', content: 
    <div className='w-full h-[92%] rounded-lg bg-white shadow-[0px_-2px_20px_4px_#cbd5e0]  '>
      <CardOutline title="Got 'U' Covered" subTitle='Custom iPhone Covers' children color='green-600' bannerImage='projectImages\bannerImages\OnlineChess.png' logo='projectImages\projectLogos\gotUCoveredLogo.png'
      githubLink='https://github.com/SujaanArora09/Got-U-Covered'
      figmaLink = 'https://github.com/SujaanArora09/Got-U-Covered'
      liveLink='https://gotucovered.vercel.app/'
      ></CardOutline>
    </div> 
  },
];
const Window4:React.FC<{ closeWindow: () => void }> = ({ closeWindow }) => {
  return (
    <WindowComponent title='UI/UX Projects' closeWindow={closeWindow}>
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

export default Window4;
