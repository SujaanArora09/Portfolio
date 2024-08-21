import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import WindowComponent from '../WindowStatusBar';
import MagicButton from '../resumeButton';
import Lottie from 'react-lottie';
import animationData from '../data/confetti.json'

export const Window1: React.FC<{ closeWindow: () => void; isSmall: boolean; }> = ({ closeWindow, isSmall }) => {
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const maindiv = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (textRef1.current && textRef2.current && imageRef.current) {
      const text1Letters = textRef1.current.querySelectorAll('.letter');
      const textFrontend = textRef2.current.querySelector('.frontend');
      const textDeveloper = textRef2.current.querySelector('.developer');

      gsap.fromTo(
        imageRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
      );

      gsap.fromTo(
        maindiv.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
      );

      gsap.fromTo(
        text1Letters,
        { x: -50, opacity: 0.2 }, 
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.03, delay: 0.2 } 
      );

      gsap.fromTo(
        textDeveloper,
        { x: -50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.8 } 
      );

      gsap.fromTo(
        textFrontend,
        { x: -50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 2.5, ease: 'power3.out', delay: 0.8 } 
      );
    }

    cardRefs.current.forEach((card, index) => {
      const images = card.querySelectorAll('img');
      gsap.set(images, { scale : 0.8 ,opacity: 0, x: 20 }); 

      card.addEventListener('mouseenter', () => {
        gsap.to(images, { scale : 1 , opacity: 1, x: 0, duration: 1, stagger: 0.1, ease: 'power3.out' }); 
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(images, { scale : 0.8 ,opacity: 0, x: 20, duration: 1, stagger: 0.1, ease: 'power3.out' }); 
      });
    });
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="letter">
        {char}
      </span>
    ));
  };

  const [Copied,setCopied] = useState(false);
  
  const handleDownload = () => {
  // var link = document.createElement('a');
  // link.href = 'Sujan_Resume.pdf'; 
  // link.download = 'Sujan_Resume.pdf';
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);
};

  return (
    <WindowComponent title='About Me' closeWindow={closeWindow}>
      <div ref={maindiv} className='relative w-full h-full bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500 rounded-xl overflow-hidden justify-end'>
        <div ref={textRef1} className='flex flex-col top-14 lg:flex-row lg:gap-4 absolute self-center w-full justify-center'>
          <span className='text-4xl tracking-wide font-bold text-white2 text-center'>
            {splitText("Hello I'm")}
          </span>
          <span className='text-4xl tracking-wide font-bold text-gray-800/85 text-center'>
            {splitText("Sujan Arora")}
          </span>
        </div>
        <div ref={textRef2} className='flex flex-col absolute inset-0 justify-center items-center z-[1]'>
          <span className='text-7xl xl:text-9xl tracking-wide font-bold text-white2/25 text-center frontend'>
            FRONTEND
          </span>
          <span className='text-7xl xl:text-9xl tracking-wide font-bold text-white2/25 text-center developer'>
            DEVELOPER
          </span>
        </div>
        <img ref={imageRef} className='absolute h-fit sm:h-3/4 w-full object-scale-down bottom-0 inset-x-0 self-center object-center overflow-hidden z-[1]' src="potrait.png" alt="" />
      </div>
      <div className='relative w-full overflow-hidden'>
        <div className='w-full justify-center my-16'>
          <span className='heading2 text-5xl xl:text-8xl font-bold text-gray-800 w-full text-center' style={{ display: 'flex', justifyContent: 'center' }}>
            STUFF THAT I CAN DO
          </span>
        </div>
        <div className={`bento-grid mx-auto z-10 grid grid-cols-1 lg:grid-cols-3 gap-4`}>
          <div className='flex flex-col gap-4'>
            <div ref={el => { cardRefs.current[0] = el!; }} className='bg-radial-red p-5 rounded-xl h-28 overflow-hidden relative' style={{ backgroundImage: 'radial-gradient(circle at bottom left, #FF7A67, #FD614B)', color: '#FFE5E2' }}>
              <h2 className='text-2xl xl:text-3xl font-semibold'>User Interface</h2>
              <p className='text-base'>Intuitive designs</p>
              <img className='h-20 absolute right-20 -bottom-4' src="logos/figma.png" alt="" />
              <img className='h-20 absolute -right-3 top-4' src="logos/indesign.png" alt="" />
            </div>
            <div ref={el => { cardRefs.current[1] = el!; }} className='bg-radial-blue p-5 rounded-xl h-28 relative overflow-hidden' style={{ backgroundImage: 'radial-gradient(circle at bottom left, #3BACD8, #17B0EC)', color: '#E8F5FF' }}>
              <h2 className='text-2xl xl:text-3xl font-semibold'>User Experience</h2>
              <p className='text-base'>Engaging Interactions</p>
              <img className='h-20 absolute right-20 -bottom-4' src="logos/xd.png" alt="" />
              <img className='h-20 absolute -right-3 top-4' src="logos/sketch.png" alt="" />
            </div>
            <div ref={el => { cardRefs.current[2] = el!; }} className='bg-radial-green p-5 rounded-xl h-28 relative overflow-hidden' style={{ backgroundImage: 'radial-gradient(circle at bottom left, #47C857, #24AE35)', color: '#ECFCDB' }}>
              <h2 className='text-2xl xl:text-3xl font-semibold'>Mobile App Dev</h2>
              <p className='text-base'>Cross platform applications</p>
              <img className='h-20 absolute right-20 -bottom-4' src="logos/flutter.png" alt="" />
              <img className='h-20 absolute -right-3 top-4' src="logos/studio.png" alt="" />
            </div>
            <div ref={el => { cardRefs.current[3] = el!; }} className='bg-radial-yellow p-5 rounded-xl h-32 relative' style={{ backgroundImage: 'radial-gradient(circle at bottom left, #F6C84A, #F9AC1E)', color: '#FFF7EA' }}>
              <h2 className='text-2xl xl:text-3xl font-semibold'>Digital Illustration</h2>
              <p className='text-base'>Appealing visual arts</p>
              <img className='w-[70px] absolute right-32 bottom-0' src="logos/ai.png" alt="" />
              <img className='h-[70px] absolute right-16 -top-2 -rotate-12' src="logos/ps.png" alt="" />
              <img className='h-20 absolute -right-3 -bottom-3' src="logos/procreate.png" alt="" />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div ref={el => { cardRefs.current[4] = el!; }} className='bg-radial-yellow p-6 rounded-xl h-64 relative overflow-hidden' style={{ backgroundImage: 'radial-gradient(circle at bottom left, #F6C84A, #F9AC1E)', color: '#FFF7EA' }}>
              <h2 className='text-3xl xl:text-4xl font-bold'>Frontend Dev</h2>
              <p className='text-base xl:text-lg mt-1'>Interactive web interfaces</p>
              <img className='h-28 left-1/5 min-w-96 absolute -bottom-9' src="logos/front_end_tech.png" alt="" />
            </div>
            <div ref={el => { cardRefs.current[5] = el!; }} className='bg-radial-green p-6 rounded-xl h-60 relative overflow-hidden' style={{ backgroundImage: 'radial-gradient(circle at bottom left, #47C857, #24AE35)', color: '#ECFCDB' }}>
              <h2 className='text-3xl xl:text-4xl font-bold'>Backend Dev</h2>
              <p className='text-base xl:text-lg mt-1'>Scalable server side applications</p>
              <img className='h-28 left-3 min-w-96 absolute bottom-3' src="logos/back_end_tech.png" alt="" />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-4 h-16'>
              <div className='bg-blue-200 p-4 rounded-xl w-1/2' style={{ backgroundImage: 'radial-gradient(circle at bottom left, #3BACD8, #17B0EC)', color: '#E8F5FF' }}>
                <a href='https://linkedin.com' className='block text-center font-bold'>LinkedIn</a>
              </div>
              <div className='bg-blue-200 p-4 rounded-xl w-1/2' style={{ backgroundImage: 'radial-gradient(circle at bottom left, #3BACD8, #17B0EC)', color: '#E8F5FF' }}>
                <a href='https://github.com' className='block text-center font-bold'>GitHub</a>
              </div>
            </div>
            
            <div className='bg-gray-200 rounded-xl h-full relative ' style={{ backgroundImage: 'radial-gradient(circle at bottom left, #FF7A67, #FD614B)', color: '#FFE5E2' }} >
              <div className='absolute w-[400px] left-1/2 -translate-x-1/2 z-10 -bottom-20'>
              <Lottie options={{
                loop: Copied,
                autoplay : Copied,
                animationData,
                rendererSettings : {
                  preserveAspectRatio : 'xMidYMid slice'
                }
              }}/>
            </div>
            <MagicButton
              title= {Copied ? 'CV downloaded' :'Download CV'}
              handleClick={()=>{
                handleDownload();
                setCopied(true);
              }}
            />
              <video autoPlay muted loop playsInline className='w-full h-full object-cover rounded-xl scale-x-[-1]' >
                <source  src="emoji.mp4" type="video/webm" ></source>
                <source src="emoji.MOV" type="video/quicktime"></source>
              </video> 
            </div>
          </div>
        </div>
      </div>
    </WindowComponent>
  );
};

export default Window1;
