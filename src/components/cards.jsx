import React from 'react'

function Cards() {
  return (
    <div data-scroll-section data-scroll  data-scroll-speed="-.1"  className='w-full bg-[#F1F1F1] h-screen flex flex-col md:flex-row mb-[30vh]  px-4 md:px-16 gap-4  '>

      <div className='md:w-1/2  flex items-center justify-center relative w-full  h-[50vh] rounded-xl bg-[#004D43] bg'>
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
        <button className='absolute left-10 bottom-10  rounded-full flex items-center justify-center md:text-[1vw] text-[3vw]   border-[1px] border-[#CDEA68] font-neue  text-[#CDEA68] px-[1vw]   z-[9]  '>2019-2022</button>
      </div>
      <div className='md:w-1/2 w-full md:h-[50vh]  flex md:flex-row flex-col gap-4 '>
        <div className='md:w-1/2  md:h-full h-[50vh] flex items-center justify-center relative rounded-xl bg-[#192826]'>
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"></img>
          <button className='absolute left-10 bottom-10  rounded-full flex items-center justify-center md:text-[1vw] text-[3vw]     border-[1px] border-zinc-100 font-neue  text-zinc-100 px-1 px-2  z-[9]  '>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='md:w-1/2 md:h-full h-[50vh] flex items-center justify-center relative rounded-xl bg-[#192826]'>
          <img className='md:h-[104px] w-[102px]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" ></img>
          <button className='absolute left-10 bottom-10 rounded-full flex items-center justify-center md:text-[1vw] text-[3vw]    border-[1px] border-zinc-100 font-neue   text-zinc-100 px-1 px-2  z-[9]  '>BUSINESS BOOYCAMP ALUMNI</button>
        </div>
      </div>
    </div>
  )
}

export default Cards