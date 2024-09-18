"use client";
import { cn } from "../lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import Window from "./Window";
import Window1 from "./Windows/Window1";
import Window2 from "./Windows/Window2";
import Window3 from "./Windows/Window3";
import Window4 from "./Windows/Window4";
import Window5 from "./Windows/Window5";
import Window6 from "./Windows/Window6";
import Window7 from "./Windows/Window7";
import gsap from "gsap";

interface IconData {
  title: string;
  icon: React.ReactNode;
  component: React.FC<{ closeWindow: () => void }>;
}

export const FloatingDock = ({
  desktopClassName,
  mobileClassName,
}: {
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  const [activeWindowComponent, setActiveWindowComponent] = useState<
    React.FC<{ closeWindow: () => void }> | null
  >(null);
  const [isWindowVisible, setIsWindowVisible] = useState<boolean>(false);
  const windowRef = useRef<HTMLDivElement>(null);

  const closeWindow = (): Promise<void> => {
    return new Promise((resolve) => {
      if (windowRef.current) {
        gsap.to(windowRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          ease: "power4.inOut",
          onComplete: () => {
            setIsWindowVisible(false);
            setActiveWindowComponent(null);
            resolve();
          },
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
      gsap.fromTo(
        windowRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "power4.out" }
      );
    }
  }, [isWindowVisible, activeWindowComponent]);

  const icons: IconData[] = [
    { title: "About Me", icon: <img src="icon1.png" alt="Icon 1" />, component: Window1 },
    { title: "Web Projects", icon: <img src="icon8.png" alt="Icon 2" />, component: Window2 },
    { title: "UI/UX Projects", icon: <img src="icon4.png" alt="Icon 4" />, component: Window3 },
    { title: "Gallary", icon: <img src="icon11.png" alt="Icon 4" />, component: Window4 },
    { title: "Calculator", icon: <img src="icon12.png" alt="Icon 5" />, component: Window5 },
    { title: "Wallpapers", icon: <img src="icon9.png" alt="Icon 6" />, component: Window6 },
    { title: "Contact Me", icon: <img src="icon10.png" alt="Icon 7" />, component: Window7 },
  ];

  return (
    <>
    <div className="flex items-center justify-center h-fit w-full z-40 fixed bottom-3">
      <FloatingDockDesktop items={icons} className="hidden md:flex" toggleWindow={toggleWindow} />
      <FloatingDockMobile items={icons} className="flex md:hidden" toggleWindow={toggleWindow} />
      
      {isWindowVisible && activeWindowComponent && (
        <Window ref={windowRef}>
          {React.createElement(activeWindowComponent, { closeWindow })}
        </Window>
      )}
      </div>
    </>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  toggleWindow,
}: {
  items: IconData[];
  className?: string;
  toggleWindow: (component: React.FC<{ closeWindow: () => void }>) => void;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-[80px] pb-8 pr-7 gap-4 items-end rounded-2xl bg-white/25 backdrop-blur-lg dark:bg-neutral-900",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} toggleWindow={toggleWindow} />
      ))}
    </motion.div>
  );
};

const FloatingDockMobile = ({
  items,
  className,
  toggleWindow,
}: {
  items: IconData[];
  className?: string;
  toggleWindow: (component: React.FC<{ closeWindow: () => void }>) => void;
}) => {
  let mouseX = useMotionValue(Infinity);
  const [isDragging, setIsDragging] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={dockRef}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={(e) => {
        if (isDragging && dockRef.current) {
          dockRef.current.scrollLeft -= e.touches[0].clientX - e.touches[0].clientX;
        }
      }}
      className={cn(
        "flex h-[90px] xl:h-[80px] mx-3 pb-[2.2rem] pr-7 gap-4 items-end overflow-x-scroll scroll-smooth rounded-2xl bg-white/25 backdrop-blur-lg dark:bg-neutral-900",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} toggleWindow={toggleWindow} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  component,
  toggleWindow,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  component: React.FC<{ closeWindow: () => void }>;
  toggleWindow: (component: React.FC<{ closeWindow: () => void }>) => void;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 1, 100], [45, 60, 45]);
  let heightTransform = useTransform(distance, [-150, 1, 100], [30, 70, 30]);

  let widthTransformIcon = useTransform(distance, [-150, 1, 100], [70, 80, 70]);
  let heightTransformIcon = useTransform(distance, [-150, 1, 100], [60, 70, 60]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => toggleWindow(component)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="aspect-square flex items-center justify-center relative mx-2"
    >
      <motion.div ref={ref} style={{ width, height }}>
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="rounded-md ml-3 text-neutral-700 absolute left-1/2 -translate-x-1/2 font-semibold -top-8 text-xs bg-white/70 px-2 py-1 text-center backdrop-blur-xl whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </button>
  );
}


