import { FaArrowRight } from "react-icons/fa6";
import React from 'react'

const Hero = () => {
    return (
        <div id='hero' className='flex md:flex-row flex-col h-max md:h-[120vh] min-h-screen justify-between px-[10%] items-center'>
      <div className="flex flex-col pb-10 mb-8 md:mb-0">
    <h1 className="text-[80px] text-white mb-4">Exploring the stars. </h1>

    <p className="text-[30px]  ml-4 md:ml-0 flex justify-start  text-white  mb-4 md:mb-0">
        We are a pioneering aerospace company based in Nepal, dedicated to pushing the boundaries of space exploration.
    </p>

    <div className="ml-auto  mt-12 md:mt-4 md:ml-0">
    <div className='text-[20px]/[120%] text-[#1e1e1e] border-white tracking-tight font-bold w-80 border-b-2 border- pb-4 mb-16 md:mb-0 justify-between hidden md:flex'> 
    <div className="text-white flex justify-between hover:translate-y-[-5px] transition-all duration-300 cursor-pointer group mt-4 md:mt-8">
    Read more about us
    <div className='flex items-center justify-center font-semibold group-hover:rotate-[-45deg] transition-all duration-300 ease-in-out  ml-8'>
        <FaArrowRight />
    </div>
    </div>
</div>

</div>


</div>

        </div>
    
    )
}

export default Hero