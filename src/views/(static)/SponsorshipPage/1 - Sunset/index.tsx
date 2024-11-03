import React from "react"

import Star from "../../../../components/Star"
import { Transition } from "@headlessui/react"

const Sunset = () => {

  return (
    <div className='relative flex w-full flex-col items-center bg-sunset-gradient'>
        <div className='-mb-24 flex h-[45.5rem] w-fit flex-col items-center justify-center pb-20 md:h-[59.5rem] md:items-start lg:h-[56.5rem] '>
          <div className = 'flex items-end -mt-20'>
            <h1 className='z-10 font-heading text-6xl uppercase md:text-8xl lg:text-[150px] text-off_white'>
              Cruz
            </h1>
            <h1 className='z-10 font-heading text-3xl uppercase md:text-4xl lg:text-[75px] text-off_white pb-7'>
              2025
            </h1>
            
          </div>
          <h1 className='z-10 font-heading text-6xl uppercase md:pl-20 md:text-8xl -mt-8 lg:text-[150px] text-off_white'>
            Hacks
          </h1>
          <p className='z-10 font-subtext font-bold text-lg uppercase md:self-end md:text-2xl lg:text-3xl text-off_white'>
            UCSC PREMIERE HACKATHON
          </p>
          <p className='z-10 w-2/3 self-center text-center font-subtext text-sm uppercase md:w-1/2 md:self-end md:text-right lg:w-full text-off_white'>
            1156 High St, Santa Cruz, CA 95064
          </p>
        </div>
    </div>
  )
}

export default Sunset
