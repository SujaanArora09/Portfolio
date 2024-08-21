// components/DateTimeline.tsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DateTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const dateListItemsRef = useRef<NodeListOf<HTMLSpanElement>>(null);
  const dotsListItemsRef = useRef<NodeListOf<HTMLSpanElement>>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const circle = circleRef.current;
    const dateListItems = section?.querySelectorAll('.date-list') as NodeListOf<HTMLSpanElement>;
    const dotsListItems = section?.querySelectorAll('.dots') as NodeListOf<HTMLSpanElement>;

    dateListItemsRef.current = dateListItems;
    dotsListItemsRef.current = dotsListItems;

    dateListItems.forEach((item) => {
      const dateListItemsSpan = item.querySelector('.inner-text') as HTMLSpanElement;
      const angle = parseInt(item.getAttribute('data-angle') || '0');
      item.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-340px)`;
      dateListItemsSpan.style.transform = `rotate(${-angle}deg)`;
    });

    dotsListItems.forEach((dotsItem) => {
      const angle = parseInt(dotsItem.getAttribute('data-angle') || '0');
      dotsItem.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-299px)`;
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        scrub: 1,
        pin: true,
        markers: true,
        snap: {
          snapTo: 1 / 6,
        },
        
        onUpdate: updateActiveDate,
      },
    });

    tl.to(circle, {
      rotation: '+=360', // Rotate by 360 degrees
      ease: 'none',
    });

    tl.to(
      '.date-list .date, .date-list .text',
      {
        rotation: -360, // Rotate -360 degrees
        ease: 'none',
      },
      '<'
    );

    function updateActiveDate() {
      const circleRect = circle?.getBoundingClientRect();
      const circleCenterX = (circleRect?.left || 0) + (circleRect?.width || 0) / 2;
      const circleCenterY = (circleRect?.top || 0) + (circleRect?.height || 0) / 2;

      const tolerance = Math.PI / 6; // 30 degrees in radians

      dateListItems.forEach((date, index) => {
        const dateRect = date.getBoundingClientRect();
        const dateCenterX = dateRect.left + date.offsetWidth / 2;
        const dateCenterY = dateRect.top + date.offsetHeight / 2;

        const angle = Math.atan2(dateCenterY - circleCenterY, dateCenterX - circleCenterX);
        const angleDifference = Math.abs(angle);

        if (angleDifference <= tolerance) {
          date.classList.add('active');
          const textList = section?.querySelectorAll('.text-list .out-text') as NodeListOf<HTMLDivElement>;
          textList.forEach((text, textIndex) => {
            if (index === textIndex) {
              text.classList.add('active');
            } else {
              text.classList.remove('active');
            }
          });

          dotsListItems.forEach((dot, dotIndex) => {
            if (index === dotIndex) {
              dot.classList.add('active');
            } else {
              dot.classList.remove('active');
            }
          });
        } else {
          date.classList.remove('active');
        }
      });
    }
  }, []);

  return (
    <div className='h-full w-full bg-blue-400 mt-4 rounded-md'>
      <section ref={sectionRef} className='date-timeline-section'>
        <div className='rows'>
          <div ref={circleRef} className='circle'>
            <div className='dots-list-row'>
              <span className='dots' data-angle='90'></span>
              <span className='dots active' data-angle='150'></span>
              <span className='dots' data-angle='210'></span>
              <span className='dots' data-angle='270'></span>
              <span className='dots' data-angle='330'></span>
              <span className='dots' data-angle='30'></span>
            </div>
            <div className='date-list-row'>
              <span className='date-list active' data-angle='90'>
                <span className='inner-text'>
                  <span className='date'>2016</span>
                  <span className='text'>Link Moved to a new facility</span>
                </span>
              </span>
              <span className='date-list' data-angle='150'>
                <span className='inner-text'>
                  <span className='date'>2018</span>
                  <span className='text'>Link Moved to a new facility</span>
                </span>
              </span>
              <span className='date-list' data-angle='210'>
                <span className='inner-text'>
                  <span className='date'>2020</span>
                  <span className='text'>Link Moved to a new facility</span>
                </span>
              </span>
              <span className='date-list' data-angle='270'>
                <span className='inner-text'>
                  <span className='date'>2022</span>
                  <span className='text'>Link Moved to a new facility</span>
                </span>
              </span>
              <span className='date-list' data-angle='330'>
                <span className='inner-text'>
                  <span className='date'>2024</span>
                  <span className='text'>Link Moved to a new facility</span>
                </span>
              </span>
              <span className='date-list' data-angle='30'>
                <span className='inner-text'>
                  <span className='date'>2026</span>
                  <span className='text'>Link Moved to a new facility</span>
                </span>
              </span>
            </div>
          </div>
          <div className='text-list'>
            <div className='out-text active'>LINK Moved to a<br /> new facility 2016</div>
            <div className='out-text'>Move to <br /> year 2018</div>
            <div className='out-text'>Establish the Empire on 2020</div>
            <div className='out-text'>Falls of springs 2022</div>
            <div className='out-text'>Loved the weather of <br /> fluctuation</div>
            <div className='out-text'>Road to a<br /> League 2026</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DateTimeline;
