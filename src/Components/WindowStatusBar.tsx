import React, { useRef, useEffect, useState } from 'react';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { ScrollBar } from './ui/scroll-area';
import gsap from 'gsap';

interface WindowComponentProps {
  title: string;
  children: React.ReactNode;
  closeWindow: () => void; 
}

const WindowComponent: React.FC<WindowComponentProps> = ({ title, children, closeWindow }) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isSmall, setIsSmall] = useState(false);

  const handleGreenClick = () => {
    if (windowRef.current && window.innerWidth > 768) {
      setIsSmall(true);
      gsap.to(windowRef.current, {
        width: '60%',
        duration: 1.5,
        ease: 'power4.inOut',
      });
    }
  };

  const handleYellowClick = () => {
    if (windowRef.current && window.innerWidth > 768) {
      setIsSmall(false);
      gsap.to(windowRef.current, {
        width: '100%',
        duration: 1.5,
        ease: 'power4.inOut',
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (windowRef.current && window.innerWidth <= 768) {
        gsap.set(windowRef.current, { width: '100%' });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={windowRef}
      className={`bg-white/90 h-full w-full self-center rounded-md overflow-hidden flex flex-col -z-10 `}
    >
      <div className='flex flex-row min-h-8 h-8 w-full border-b-2 px-2 backdrop-blur-lg'>
        <div className='flex gap-3 w-fit h-full items-center'>
          <button className='h-3.5 w-3.5 bg-red2 rounded-full' onClick={closeWindow}></button>
          <button className='h-3.5 w-3.5 bg-yellow2 rounded-full' onClick={handleYellowClick}></button>
          <button className='h-3.5 w-3.5 bg-green2 rounded-full' onClick={handleGreenClick}></button>
        </div>
        <div className='flex-grow flex justify-center items-center'>
          <h3 className='text-lg font-semibold text-gray-800/85 -translate-x-10'>{title}</h3>
        </div>
      </div>
      <div ref={scrollContainerRef} className='h-full flex-grow bg-white2/50'>
        <ScrollArea className="w-full h-full rounded-md overflow-auto no-scrollbar pl-4 pr-4 pt-4 pb-12">
          {children}
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default WindowComponent;
