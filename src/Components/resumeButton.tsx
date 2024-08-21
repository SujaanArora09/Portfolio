import React, { useState } from 'react';

interface MagicButtonProps {
  title: string;
  handleClick: () => void;
}

const MagicButton: React.FC<MagicButtonProps> = ({ title, handleClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
    handleClick();
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <div className='flex w-full items-center justify-center absolute z-10 bottom-10'>
      <button 
    
        onClick={handleButtonClick} 
        className={`group relative h-12 w-fit overflow-hidden rounded-full px-4 bg-white text-lg shadow transition-transform duration-200 ease-in-out ${clicked ? 'transform scale-110' : ''}`}
      >
        <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-&lsqb;250ms&rsqb; ease-out group-hover:w-full"></div>
        <span className="relative text-base xl:text-lg font-semibold text-black group-hover:text-white">{title}</span>
      </button>
    </div>
  );
};

export default MagicButton;
