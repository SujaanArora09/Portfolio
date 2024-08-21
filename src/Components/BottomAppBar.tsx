"use client";

import React, { useState, useEffect, useRef } from 'react';
import Icon from './Icons';
import Window from './Window';
import Window1 from './Windows/Window1';
import Window2 from './Windows/Window2';
import Window3 from './Windows/Window3';
import Window4 from './Windows/Window4';
import Window5 from './Windows/Window5';
import Window6 from './Windows/Window6';
import Window7 from './Windows/Window7';
import gsap from 'gsap';

interface IconData {
  src: string;
  label: string;
  component: React.FC<{ closeWindow: () => void }>;
}

const BottomDrawer: React.FC = () => {
  const [activeWindowComponent, setActiveWindowComponent] = useState<React.FC<{ closeWindow: () => void }> | null>(null);
  const [isWindowVisible, setIsWindowVisible] = useState<boolean>(false);
  const windowRef = useRef<HTMLDivElement>(null);

  const closeWindow = (): Promise<void> => {
    return new Promise((resolve) => {
      if (windowRef.current) {
        gsap.to(windowRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          ease: 'power4.inOut',
          onComplete: () => {
            setIsWindowVisible(false);
            setActiveWindowComponent(null);
            resolve();
          }
        });
      } else {
        resolve();
      }
    });
  };

  const toggleWindow = async (component: React.FC<{ closeWindow: () => void }>) => {
    if (isWindowVisible && activeWindowComponent === component) {
      await closeWindow();
    } else {
      if (isWindowVisible) {
        await closeWindow();
      }
      setIsWindowVisible(true);
      setActiveWindowComponent(() => component);
    }
  };

  useEffect(() => {
    if (isWindowVisible && windowRef.current) {
      gsap.fromTo(windowRef.current, 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.6, ease: 'power4.out' }
      );
    }
  }, [isWindowVisible, activeWindowComponent]);

  const icons: IconData[] = [
    { src: 'icon1.png', label: 'Icon 1', component: Window1 },
    { src: 'icon2.png', label: 'Icon 2', component: Window2 },
    { src: 'icon3.png', label: 'Icon 3', component: Window3 },
    { src: 'icon4.png', label: 'Icon 4', component: Window4 },
    { src: 'icon5.png', label: 'Icon 5', component: Window5 },
    { src: 'icon6.png', label: 'Icon 6', component: Window6 },
    { src: 'icon7.png', label: 'Icon 7', component: Window7 },
  ];

  useEffect(() => {
    const tray = document.querySelector('.tray');
    const e1 = tray?.querySelector('.icons-tray');

    if (e1) {
      gsap.to(e1, {
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <div className="tray flex fixed bottom-0 w-screen justify-center overflow-hidden">
      <div className="icons-tray max-w-screen-sm flex bg-white bg-opacity-25 backdrop-blur-lg rounded-3xl h-24 py-2 px-2 m-3.5 translate-y-32 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {icons.map((icon, index) => (
          <Icon key={index} src={icon.src} onClick={() => toggleWindow(icon.component)} />
        ))}
      </div>
      {isWindowVisible && activeWindowComponent && (
        <Window ref={windowRef}>
          {React.createElement(activeWindowComponent, { closeWindow })}
        </Window>
      )}
    </div>
  );
};

export default BottomDrawer;
