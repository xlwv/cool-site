import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
function Marquee() {

  const locomotiveScroll = new LocomotiveScroll();

  const marqueeRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const text1 = textRef1.current;
    const text2 = textRef2.current;

    const textWidth = text1.offsetWidth;
    const containerWidth = marquee.offsetWidth;

    const duration = (textWidth + containerWidth) / 100;

    const tl = gsap.timeline({ repeat: -1 })
      .fromTo(text1, { x: 0 }, { x: -textWidth, duration: duration, ease: 'none' })
      .fromTo(text2, { x: 0 }, { x: -textWidth, duration: duration, ease: 'none' }, 0);

    // Cleanup function to prevent memory leaks
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div data-scroll-section data-scroll  data-scroll-speed=".1"   className="w-full py-10 rounded-tr-lg rounded-tl-lg bg-[#004D43]">
      <div  ref={marqueeRef} className="moving-text flex border-t-[1px] gap-10 overflow-hidden whitespace-nowrap border-b-[1px] border-zinc-300">
        <span ref={textRef1} className="text-[20vw] text-[#FFFFFF] leading-none font-founders font-bold uppercase">
          we are ochi
        </span>
        <span ref={textRef2} className="text-[20vw] text-[#FFFFFF] leading-none font-founders font-bold uppercase">
          we are ochi
        </span>
      </div>
    </div>
  );
}

export default Marquee;





