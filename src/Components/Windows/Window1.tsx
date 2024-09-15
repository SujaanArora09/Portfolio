import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import WindowComponent from '../WindowStatusBar';
import BentoGrid from '../ui/bento-grid';
import { useScroll, useTransform, motion } from 'framer-motion';

export const Window1: React.FC<{ closeWindow: () => void; isSmall: boolean; }> = ({ closeWindow, isSmall }) => {
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const maindiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef1.current && textRef2.current && imageRef.current) {
      const text1Letters = textRef1.current.querySelectorAll('.letter');
      const textFrontend = textRef2.current.querySelector('.frontend');
      const textDeveloper = textRef2.current.querySelector('.developer');

      gsap.fromTo(
        imageRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
      );

      gsap.fromTo(
        maindiv.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
      );

      gsap.fromTo(
        text1Letters,
        { x: -50, opacity: 0.2 }, 
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.03, delay: 0.2 } 
      );

      gsap.fromTo(
        textDeveloper,
        { x: -50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.8 } 
      );

      gsap.fromTo(
        textFrontend,
        { x: -50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 2.5, ease: 'power3.out', delay: 0.8 } 
      );
    }
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="letter">
        {char}
      </span>
    ));
  };


  return (
    <WindowComponent title='About Me' closeWindow={closeWindow}>
      <div ref={maindiv} className='sticky top-0 w-full h-full bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500 rounded-xl justify-end overflow-hidden border-2 border-white2'>
        <div ref={textRef1} className='flex flex-col top-14 lg:flex-row lg:gap-4 absolute self-center w-full justify-center'>
          <span className='text-2xl tracking-wide font-bold text-white2 text-center'>
            {splitText("Hello I'm")}
          </span>
          <span className='text-2xl tracking-wide font-bold text-gray-800/85 text-center'>
            {splitText("Sujan Arora")}
          </span>
        </div>
        <div ref={textRef2} className='flex flex-col absolute inset-0 justify-center items-center z-[1]'>
          <span className='text-7xl xl:text-8xl tracking-wide font-bold text-white2/25 text-center frontend'>
            FRONTEND
          </span>
          <span className='text-7xl xl:text-8xl tracking-wide font-bold text-white2/25 text-center developer'>
            DEVELOPER
          </span>
        </div>
        <img ref={imageRef} className='absolute h-fit sm:h-3/4 w-full object-scale-down bottom-0 inset-x-0 self-center object-center overflow-hidden z-[1]' src="potrait.png" alt="" />
      </div>
      <BentoGrid />
    </WindowComponent>
  );
};

export default Window1;
