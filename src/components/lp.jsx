import { motion } from 'framer-motion';
import React from 'react';

function LP() {

  
  return (
  
      <div  data-scroll-section data-scroll  data-scroll-speed="-.3"   className="w-full  h-screen pt-1 bg-customGray">

        <div className=' text mt-20  px-6 md:px-20'>
          {["WE CREATE ", "EYE-OPENING", "PRESENTATIONS"].map((item, index) =>
            <h1  className='maskers md:text-[6.5vw] text-[11vw] leading-[.9] tracking-tighter-custom flex gap-1 font-bold uppercase align-center font-founders'>
              {index === 1 && (<motion.div initial={{ width: 0 }} animate={{ width: "7vw" }} transition={{ ease: [0.5, 0, 0.75, 0] }}
                className='w-[7vw] rounded-md bg-green-900 md:h-[4.6vw] relative md:top-[.5vw]'
style={
  {
    backgroundImage:'url("https://i.pinimg.com/564x/69/60/42/6960425a8662452bd7aa10a86d0a9145.jpg")',
    backgroundPosition:"center",
    backgroundSize:"cover"
  }
}
              >

              </motion.div>)}
              {item}
            </h1>
          )}




        </div>

        <div className='border-t-[1px]  border-zinc-400 mt-32 md:flex lg:flex  justify-between items-top  px-6 py-3 '>
          {["For public and private companies", "From the first pitch to IPO", "START THE PROJECT"].map((item, index) =>

            <p key={index} className={`text-md w-fit mb-8 text-md  font-neue font-light tracer-tight leading-none ${index === 2 && "border-[1px] rounded-full px-2 py-1  border-zinc-950"}`}>{item}</p>
          )}
        </div>



      </div>

    
  )
}

export default LP;