"use client";
import React, { useEffect, useRef, forwardRef } from "react";
import gsap from "gsap";

type WindowProps = React.PropsWithChildren<{
  className?: string;
  style?: React.CSSProperties;
  animationConfig?: {
    initialScale?: number;
    initialOpacity?: number;
    duration?: number;
    ease?: string;
  };
}>;

const Window = forwardRef<HTMLDivElement, WindowProps>(
  ({ children, className, style, animationConfig }, ref) => {
    const windowRef = useRef<HTMLDivElement>(null);

    const defaultAnimationConfig = {
      initialScale: 0.8,
      initialOpacity: 0,
      duration: 0.7,
      ease: "power4.out",
    };

    const mergedConfig = { ...defaultAnimationConfig, ...animationConfig };

    useEffect(() => {
      if (windowRef.current) {
        gsap.fromTo(
          windowRef.current,
          {
            y: "100%",
            opacity: mergedConfig.initialOpacity,
            scale: mergedConfig.initialScale,
            rotationX: 45,
            transformOrigin: "bottom center",
          },
          {
            y: "0%",
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: mergedConfig.duration,
            ease: mergedConfig.ease,
          }
        );
      }
    }, [mergedConfig]);

    return (
      <div
        ref={(node) => {
          windowRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLDivElement>).current = node;
          }
        }}
        className={`max-w-screen-xl -z-[1] w-[93%] md:w-4/5 mx-auto my-4 rounded-lg flex flex-col overflow-hidden fixed top-[4%] bottom-[15%] left-[2%] right-[2%] ${className}`}
        style={style}
      >
        {children}
      </div>
    );
  }
);

Window.displayName = "Window";

export default Window;
