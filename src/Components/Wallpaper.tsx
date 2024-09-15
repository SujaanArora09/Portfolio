import React from 'react';

function Wallpaper() {
  return (
    <div className='absolute top-0 left-0 w-screen h-screen bg-cover bg-center bg-fixed overflow-hidden -z-50' style={{backgroundImage: 'url("")', backgroundRepeat: 'no-repeat' }}>
    </div>
  );
}

export default Wallpaper;
