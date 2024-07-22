import React from 'react'

function About() {
    return (
        <div  data-scroll  data-scroll-speed="-.20"    className='w-full  rounded-tr-lg rounded-tl-lg bg-[#CDEA68] px-6 md:px-20 py-20 text-black'>
            <p className='font-neue  md:w-[70vw] w-[85vw] md:text-5xl text-3xl leading tracking-light '>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</p>
            <div className='border-t-[2px] border-[#a1b562] pt-2 mt-20  sm:flex justify-between'>
                <div className='text-1xl font-neue'>What you can expect:</div>
                <div className='text-1xl w-[89vw] md:w-[30vw] font-neue'>
                    <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                    <p className='mt-3 '>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                </div>
            </div>
            <div className=' w-full border-t-[2px] border-[#a1b562]  pt-20 mt-20 flex flex-col md:flex-row gap-5'>
                <div className=' w-full md:w-1/2 flex-col '>
                    <h1 className='text-5xl font-neue'>Our Approach :</h1>
                    <button className=' mt-10 rounded-full text-.1xl text-white px-4 gap-10 flex items-center justify-between font-neue w-content h-[7vh]  bg-black '>
                        READ MORE
                        <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                    </button>
                </div>
                <div className='text-1xl bg-cover bg-[url("https://e1.pxfuel.com/desktop-wallpaper/16/704/desktop-wallpaper-16-male-models-to-follow-on-instagram-during-fashion-week-season-alton-mason.jpg")] h-[70vh] rounded-3xl bg-[#b0c859]  w-full md:w-1/2'>

                </div>
            </div>










        </div>
    )
}

export default About;