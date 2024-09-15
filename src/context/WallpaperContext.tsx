"use client"
import { createContext, useState, ReactNode } from 'react';

// Define the context and type
interface WallpaperContextType {
  wallpaperUrl: string;
  setWallpaperUrl: (url: string) => void;
}

// Create the context with default values
export const WallpaperContext = createContext<WallpaperContextType>({
  wallpaperUrl: '',
  setWallpaperUrl: () => {},
});

// Create a provider component to wrap the app
export const WallpaperProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wallpaperUrl, setWallpaperUrl] = useState('');

  return (
    <WallpaperContext.Provider value={{ wallpaperUrl, setWallpaperUrl }}>
      {children}
    </WallpaperContext.Provider>
  );
};
