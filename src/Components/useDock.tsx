import React from "react";
import { FloatingDock } from "./doc";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
<img
          src="icon1.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <img
          src="icon1.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <img
          src="icon1.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        <img
          src="icon1.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
<img
          src="icon1.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
<img
          src="icon1.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
<img
          src="icon1.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-fit w-full z-40 fixed bottom-3">
      <FloatingDock/>
    </div>
  );
}
