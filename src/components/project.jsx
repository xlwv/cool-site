import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Project() {
  const [hoverFyde, setHoverFyde] = useState(false);
  const [hoverVise, setHoverVise] = useState(false);

  return (
    <div className='w-full py-20 bg-[#F1F1F1]'>
      <div className='w-full md:px-16 px-8 border-b-[2px] border-grey'>
        <h1 className='font-neue text-5xl mb-10'>Featured projects</h1>
      </div>
      <div className=' md:px-16 px-8 py-12'>
        <div className='relative cards  flex md:flex-row flex-col  gap-3 w-full'>
          <h1 className='absolute  hidden sm:hidden md:flex flex overflow-hidden top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[9] text-8xl font-bold leading-none text-[#CDEA68] font-founder'>
            {"FYDE".split("").map((item, index) => (
              <motion.span

                key={index}
                initial={{ y: "100%" }}
                animate={hoverFyde ? { y: "0" } : { y: "100%" }}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <h1 className='absolute hidden sm:hidden md:flex flex overflow-hidden top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[9] text-8xl font-bold leading-none text-[#CDEA68] font-founder'>
            {"VISE".split("").map((item, index) => (
              <motion.span

                key={index}
                initial={{ y: "100%" }}
                animate={hoverVise ? { y: "0" } : { y: "100%" }}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              >
                {item}
              </motion.span>
            ))}
          </h1>

          <div
            onMouseEnter={() => setHoverFyde(true)}
            onMouseLeave={() => setHoverFyde(false)}
            className='card  bg-[#F1F1F1] flex-col border-none gap-6 md:w-1/2'
            style={{
              transition: '0.5s ease-in-out',
              transform: hoverFyde && 'scale(.95)'
            }}
          >
            <div className='flex w-full gap-2 items-center'>
              <div className='w-2.5 h-2.5 bg-zinc-900 rounded-full'></div>
              <h1 className='uppercase font-neue'>fyde</h1>
            </div>
            <div className='cardcontainer w-full h-[75vh]'>
              <div className='w-full h-full rounded-xl rounded-lg overflow-hidden'>
                <img
                  className='w-full  h-full bg-cover'
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt="Fyde Project"
                  style={{
                    transition: '0.5s all ease-in-out',
                    transform: hoverFyde ? 'scale(1.1)' : 'scale(1)',
                  }}

                />
              </div>
            </div>
            <div className='clickables w-content flex gap-1.5 justify-start'>
              {["AUDIT", "COPYWRITING", "SALES DECK", "SLIDER DESIGN"].map((item, index) => (
                <button
                  key={index}
                  className=' font-neue  md:text-[1.2vw] text-[3vw]  px-[1vw] rounded-full border-[1px] border-zinc-900 items-center flex justify-center'
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div
            onMouseEnter={() => setHoverVise(true)}
            onMouseLeave={() => setHoverVise(false)}
            className='card flex-col bg-[#F1F1F1] border-none gap-6 md:w-1/2'
            style={{
              transition: '0.5s ease-in-out',
              transform: hoverVise && 'scale(.95)'
            }}
          >
            <div className='flex w-full gap-2 items-center'>
              <div className='w-2.5 h-2.5 bg-zinc-900 rounded-full'></div>
              <h1 className='uppercase font-neue'>vise</h1>
            </div>
            <div className='cardcontainer w-full h-[75vh]'>
              <div className='w-full h-full rounded-xl rounded-lg overflow-hidden'>
                <img
                  className='w-full h-full bg-cover'
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  alt="Vise Project"
                  style={{
                    transition: '0.5s all ease-in-out',
                    transform: hoverVise ? 'scale(1.1)' : 'scale(1)',
                  }}
                />
              </div>
            </div>
            <div className='clickables w-content flex gap-1.5 justify-start'>
              {["AGENCY", "COMPANY PRESENTATION"].map((item, index) => (
                <button
                  key={index}
                  className='px-[1vw] font-neue md:text-[1.2vw] text-[3vw]   rounded-full border-[1px] border-zinc-900 items-center flex justify-center'
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;

