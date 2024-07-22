import React, { useRef, useEffect, useState } from 'react';

function Ready() {
  const [Rotate, setRotate] = useState(0);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });



  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mousex = e.clientX;
      let mousey = e.clientY;

      let centerX = window.innerWidth / 2;
      let centerY = window.innerHeight / 2;
      let deltaX = (mousex - centerX) / 20; // Divide by 20 to reduce the movement range
      let deltaY = (mousey - centerY) / 20; // Divide by 20 to reduce the movement range
      setTranslate({ x: deltaX, y: deltaY });

      let deltax = mousex - window.innerWidth / 2;
      let deltay = mousey - window.innerHeight / 2;
      var angle = Math.atan2(deltay, deltax) * (180 / Math.PI);
      setRotate(angle - 180);

    })
  })
  return (
    
    <div data-scroll-section data-scroll  data-scroll-speed="-.3"     className='relative rounded-tr-lg rounded-tl-lg mt-[10vh] py-[15vh] flex flex-col  justify-around items-center  w-full bg-[#CDEA68] '>
      <div className=' items-center flex flex-col maskers md:text-[12vw] text-[14vw] leading-[.9] tracking-tighter-custom flex gap-1 font-bold uppercase align-center font-founders'>
        <span >READY</span>
        <span>TO START</span>
        <span>THE PROJECT</span>
      </div>
      <div className=' absolute gap-10 flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>

        <div data-scroll data-scroll-section data-scroll-speed=".4" className='md:w-[200px] md:h-[200px] w-[150px] h-[150px]  flex items-center justify-center rounded-full bg-zinc-100'>
          <div style={{ transform: `translate(${translate.x}px, ${translate.y}px)` }} className='w-2/3 h-2/3 rounded-full bg-black flex items-center justify-center'>
            <div style={{ transform: `rotate(${Rotate}deg)` }} className='line w-full h-5'>
              <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
            </div>

          </div>

        </div>

        <div data-scroll data-scroll-section data-scroll-speed=".4" className='md:w-[200px] md:h-[200px] w-[150px] h-[150px] flex items-center justify-center rounded-full bg-zinc-100'>
          <div style={{ transform: `translate(${translate.x}px, ${translate.y}px)` }} className='w-2/3 h-2/3 rounded-full bg-black flex items-center justify-center'>
            <div style={{ transform: `rotate(${Rotate}deg)` }} className='line w-full h-5'>
              <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
            </div>
          </div>

        </div>




      </div>

      <div className=' mt-[4vh] flex flex-col items-center justify-between gap-1'>
        <button className='  rounded-full text-.1xl text-white px-9 gap-10 flex items-center justify-between font-neue w-content h-[8vh]  bg-black '>
          START THE PROJECT
          <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
        </button>

        <span className='font-neue text-[2xl]'>OR</span>

        <button className='  rounded-full text-.1xl text-black px-6 gap-10 flex items-center justify-between font-neue w-content h-[8vh] border-[1px] border-black bg-transparent '>
          HELLO@OOCHI.DESIGN
          <div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
        </button>

      </div>




    </div>
    
  )
}

export default Ready