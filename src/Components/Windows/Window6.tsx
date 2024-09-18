import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/legacy/image";
import WindowComponent from '../WindowStatusBar';
import { wallpapers } from "../data/Wallpapers.json";

const Window6: React.FC<{ closeWindow: () => void }> = ({ closeWindow }) => {

  const tabs = [
    { id: 'light', label: 'Light' },
    { id: 'dark', label: 'Dark' },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const [appliedWallpaper, setAppliedWallpaper] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Filter wallpapers based on selected category
  const filteredWallpapers = wallpapers.filter(wallpaper => wallpaper.category === selectedTab);

  // Apply wallpaper by clicking
  const applyWallpaper = (url: string) => {
    setLoading(true);
    const img = new window.Image(); // Use the native Image constructor
    img.src = url;
    img.onload = () => {
      setAppliedWallpaper(url);
      document.body.style.backgroundImage = `url(${url})`; // Applying wallpaper to the body background
      
      setLoading(false);
    };
  };

  return (
    <WindowComponent title="Wallpaper Selector" closeWindow={closeWindow}>
      {/* Animated Tabs for Light and Dark */}
      <div className="fixed left-1/2 -translate-x-1/2 mr-10 justify-center items-center space-x-1 mb-8 bg-black/15 p-1.5 w-fit rounded-full z-10 backdrop-blur-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`${selectedTab === tab.id ? "" : "hover:text-black/90"} relative rounded-full px-4 py-1.5 text-sm font-medium text-black/90 transition outline-sky-400 focus-visible:outline-2`}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {selectedTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 bg-blue-300 shadow-lg mix-blend-color-burn px-2"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Responsive Wallpapers Grid */}
      <div className="p-4 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-4">
          {filteredWallpapers.map(wallpaper => (
            <div
              key={wallpaper.url}
              className={`relative cursor-pointer rounded-md ${appliedWallpaper === wallpaper.url ? 'ring-4 ring-blue-500' : ''}`}
              onClick={() => applyWallpaper(wallpaper.url)}
            >
              <div className="h-32 w-auto relative">
                <Image
                  className="rounded-md"
                  src={wallpaper.url}
                  alt={wallpaper.title}
                  layout="fill"
                  objectFit="cover"
                  quality={10}
                  sizes=""
                />
              </div>
              <div className="text-center text-black/70 font-semibold text-sm absolute -bottom-8">
                {wallpaper.title}
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </WindowComponent>
  );
};

export default Window6;
