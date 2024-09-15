import React, { StrictMode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menubar from "../Components/Menubar";
import Window from "../Components/Window";
import { FloatingDock } from "../Components/doc";
import Wallpaper from "../Components/Wallpaper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sujaan Portfolio",
  description: "Mac-Os style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StrictMode>
    <html lang="en">
      <body className={inter.className}>
        <Wallpaper/>
        <Menubar />
        <Window/>
          {children}  
        <FloatingDock/>
      </body>
    </html>
    </StrictMode>
  );
}
