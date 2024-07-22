import React, { useRef, useEffect, useState } from 'react';


function Eyes() {
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
        <div className=' w-full bg-[#F1F1F1] flex justify-center align-center  '>
            <div className='eyes h-screen  md:w-full  w-[100vw]  overflow-hidden'>
                <div data-scroll data-scroll-section data-scroll-speed="-.7" className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>

                    <div className='absolute gap-10 flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>

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

                </div>
            </div>
        </div>
    )
}

export default Eyes;