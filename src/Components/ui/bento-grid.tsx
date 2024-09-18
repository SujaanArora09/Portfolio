
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Lottie from 'react-lottie';
import animationData from '../data/confetti.json';
import MagicButton from '../resumeButton';

const BentoGrid: React.FC = () => {
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [Copied, setCopied] = useState(false);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      const images = card.querySelectorAll('img');
      gsap.set(images, { x: 20 }); 

      card.addEventListener('mouseenter', () => {
        gsap.to(images, { x: 0, duration: 1, stagger: 0.1, ease: 'power3.out' }); 
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(images, { x: 20, duration: 1, stagger: 0.1, ease: 'power3.out' }); 
      });
    });
  }, []);

  const handleDownload = () => {
    var link = document.createElement('a');
    link.href = 'Sujan_Resume.pdf'; 
    link.download = 'Sujan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='relative w-full min-h-full rounded-xl overflow-hidden sm:overflow-visible bg-white2'>
      <div className='w-full justify-center my-16'>
        <span className='heading2 text-5xl pt-10 font-bold text-gray-800 w-full text-center' style={{ display: 'flex', justifyContent: 'center' }}>
          Skills Bento Grid
        </span>
      </div>
      <div className='bento-grid mx-auto z-10 grid grid-cols-1 lg:grid-cols-3 gap-4 overflow-hidden'>
        <div className='flex flex-col gap-4'>
          <div ref={el => { cardRefs.current[0] = el!; }} className='bg-radial-red p-5 rounded-xl h-24 overflow-hidden relative' style={{ backgroundImage: 'radial-gradient(circle at bottom left, #FF7A67, #FD614B)', color: '#FFE5E2' }}>
            <h2 className='text-2xl  font-semibold'>User Interface</h2>
            <p className='text-base'>Intuitive designs</p>
            <img className='h-16 absolute right-16 -bottom-4' src="logos/figma.png" alt="" />
            <img className='h-16 absolute -right-2 top-4' src="logos/indesign.png" alt="" />
          </div>
          <div ref={el => { cardRefs.current[1] = el!; }} className='bg-radial-blue p-5 rounded-xl h-24 relative overflow-hidden' style={{ backgroundImage: 'radial-gradient(circle at bottom left, #3BACD8, #17B0EC)', color: '#E8F5FF' }}>
            <h2 className='text-2xl  font-semibold'>User Experience</h2>
            <p className='text-base'>Engaging Interactions</p>
            <img className='h-16 absolute right-16 -bottom-4' src="logos/xd.png" alt="" />
            <img className='h-16 absolute -right-2 top-4' src="logos/sketch.png" alt="" />
          </div>
          <div ref={el => { cardRefs.current[2] = el!; }} className='bg-radial-green p-5 rounded-xl h-24 relative overflow-hidden' style={{ backgroundImage: 'radial-gradient(circle at bottom left, #47C857, #24AE35)', color: '#ECFCDB' }}>
            <h2 className='text-2xl  font-semibold'>Mobile App Dev</h2>
            <p className='text-base'>Cross platform applications</p>
            <img className='h-16 absolute right-16 -bottom-4' src="logos/flutter.png" alt="" />
            <img className='h-16 absolute -right-2 top-4' src="logos/studio.png" alt="" />
          </div>
          <div ref={el => { cardRefs.current[3] = el!; }} className='bg-radial-yellow p-5 rounded-xl h-28 relative z-10' style={{ backgroundImage: 'radial-gradient(circle at bottom left, #F6C84A, #F9AC1E)', color: '#FFF7EA' }}>
            <h2 className='text-2xl  font-semibold'>Digital Illustration</h2>
            <p className='text-base'>Appealing visual arts</p>
            <img className='h-10 absolute right-24 bottom-0' src="logos/ai.png" alt="" />
            <img className='h-14 absolute right-14 -top-2 -rotate-12' src="logos/ps.png" alt="" />
            <img className='h-16 absolute -right-3 bottom-0' src="logos/procreate.png" alt="" />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div ref={el => { cardRefs.current[4] = el!; }} className='bg-radial-yellow p-6 rounded-xl h-56 relative overflow-hidden' style={{ backgroundImage: 'radial-gradient(circle at bottom left, #F6C84A, #F9AC1E)', color: '#FFF7EA' }}>
            <h2 className='text-3xl  font-bold'>Frontend Dev</h2>
            <p className='text-base  mt-1'>Interactive web interfaces</p>
          </div>
          <div ref={el => { cardRefs.current[5] = el!; }} className='bg-radial-green p-6 rounded-xl h-52 relative overflow-hidden' style={{ backgroundImage: 'radial-gradient(circle at bottom left, #47C857, #24AE35)', color: '#ECFCDB' }}>
            <h2 className='text-3xl  font-bold'>Backend Dev</h2>
            <p className='text-base  mt-1'>Scalable server side applications</p>
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
                autoplay: Copied,
                animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }} />
            </div>
            <MagicButton
              title={Copied ? 'CV downloaded' : 'Download CV'}
              handleClick={() => {
                handleDownload();
                setCopied(true);
              }}
            />
            <video autoPlay muted loop playsInline className='w-full h-full object-cover rounded-xl scale-x-[-1]' >
              <source src="emoji.mp4" type="video/webm" ></source>
              <source src="emoji.MOV" type="video/quicktime"></source>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
