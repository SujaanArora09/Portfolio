import React from 'react';

interface CardOutlineProps {
  title: string;
  subTitle: string;
  children: React.ReactNode;
  color : string,
  bannerImage : string
  logo:string
}

const CardOutline: React.FC<CardOutlineProps> = ({ title,subTitle, children , color , bannerImage ,logo }) => {

  return (
    <>
    
    <div className={` flex flex-col  border-[7px] border-${color} rounded-lg h-full`}>
        <img className="object-cover h-5/6 flex-grow" src={bannerImage} alt=""/>
        <div className= {` bg-${color} flex flex-row items-center h-1/6 `}>
          <div className='h-full flex flex-row items-center '>
            <img src={logo} className='h-5/6 xl:h-3/4 ms-1 xl:ms-3  mt-1  ' />
            <div className={`flex flex-col p-4 mt-1  `}>
              <h5 className="text-2xl font-bold text-white w-1/2 md:w-full">{title}</h5>
              <p className="font-semibold text-gray-100 hidden md:block">{subTitle}</p>
            </div>
          </div >
          <div className='mt-1 absolute right-10 hidden md:block'>
            <a href="#" className="mx-2 inline-flex items-center px-4 py-1.5 text-base font-semibold text-black bg-white2 rounded-full ">
              Github <img className='w-5 ml-1' src="projectImages\projectLogos\linkArrow.svg" alt="" />
            </a>
            <a href="#" className="mx-2 inline-flex items-center px-4 py-1.5 text-base font-semibold text-black bg-white2 rounded-full ">
              Figma <img className='w-5 ml-1' src="projectImages\projectLogos\linkArrow.svg" alt="" />
            </a>
            <a href="#" className="mx-2 inline-flex items-center px-4 py-1.5 text-base font-semibold text-black bg-white2 rounded-full ">
              Live <img className='w-5 ml-1' src="projectImages\projectLogos\linkArrow.svg" alt="" />
            </a>
          </div>
          <div className='mt-1 absolute right-6 black md:hidden'>
            <a href="#" className="mx-1 inline-flex items-center font-semibold text-black bg-white2 rounded-full ">
              <img className='w-8 ml-1' src="projectImages\projectLogos\github.svg" alt="" />
            </a>
            <a href="#" className="mx-1 inline-flex items-center font-semibold text-black bg-white2 rounded-full ">
              <img className='w-8 ml-1' src="projectImages\projectLogos\github.svg" alt="" />
            </a>
            <a href="#" className="mx-1 inline-flex items-center font-semibold text-black bg-white2 rounded-full ">
              <img className='w-8 ml-1' src="projectImages\projectLogos\github.svg" alt="" />
            </a>
          </div>
          
          
            
        </div>
    </div>
  
    </>
  );
};

export default CardOutline;
