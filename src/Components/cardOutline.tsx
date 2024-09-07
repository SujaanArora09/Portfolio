import React from 'react';

interface CardOutlineProps {
  title: string,
  subTitle: string,
  children: React.ReactNode,
  color : string,
  bannerImage : string,
  logo:string,
  githubLink: string,
  figmaLink : string,
  liveLink: string
}

const CardOutline: React.FC<CardOutlineProps> = ({ title,subTitle, children , color , bannerImage ,logo,githubLink,figmaLink,liveLink }) => {

  return (
    <>
    
    <div className={` flex flex-col  border-[7px] border-${color} rounded-lg h-full overflow-hidden`}>
        <img className="object-cover h-4/6 md:h-5/6 flex-grow" src={bannerImage} alt=""/>
        <div className= {` bg-${color} flex flex-col md:flex-row items-start md:items-center h-2/6 md:h-1/6 `}>
          <div className='h-full flex flex-row items-center '>
            <img src={logo} className='h-16 md:h-12 xl:h-3/4 ms-1 xl:ms-3  md:mt-1 ml-2 ' />
            <div className="flex flex-col p-4 md:mt-1 ">
              <h5 className="text-xl font-bold text-white">{title}</h5>
              <p className="text-base font-semibold text-white/70 ">{subTitle}</p>
            </div>
          </div >
          <div className='mb-2 md:mb-0 md:mt-1 flex flex-grow justify-end '>
            <a href={githubLink} target="_blank" className="mx-2 inline-flex items-center px-4 py-1.5 text-base font-semibold text-black bg-white2 rounded-full ">
              Github <img className='w-5 ml-1' src="projectImages\projectLogos\linkArrow.svg" alt="" />
            </a>
            <a href={figmaLink} target="_blank" className="mx-2 inline-flex items-center px-4 py-1.5 text-base font-semibold text-black bg-white2 rounded-full ">
              Figma <img className='w-5 ml-1' src="projectImages\projectLogos\linkArrow.svg" alt="" />
            </a>
            <a href={liveLink} target="_blank" className="mx-2 inline-flex items-center px-4 py-1.5 text-base font-semibold text-black bg-white2 rounded-full ">
              Live <img className='w-5 ml-1' src="projectImages\projectLogos\linkArrow.svg" alt="" />
            </a>
          </div>
          
          
          
            
        </div>
    </div>
  
    </>
  );
};

export default CardOutline;
