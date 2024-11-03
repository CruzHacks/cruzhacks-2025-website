import React from "react"

import Star from "../../../../components/Star"
import { Transition } from "@headlessui/react"

const Sunset = () => {

  return (
    <div className='relative flex w-full flex-col items-center bg-sunset-gradient'>
        <div className='-mb-24 flex h-[45.5rem] w-fit flex-col items-center justify-center pb-20 md:h-[59.5rem] md:items-start lg:h-[52.5rem] '>
          <div className = 'flex items-end'>
            <h1 className='z-10 font-heading text-6xl uppercase md:text-8xl lg:text-[150px]'>
              Cruz
            </h1>
            <h1 className='z-10 font-heading text-3xl uppercase md:text-4xl lg:text-[75px]'>
              2025
            </h1>
            
          </div>
          <h1 className='z-10 font-heading text-6xl uppercase md:pl-16 md:text-8xl lg:text-[150px]'>
            Hacks
          </h1>
          <p className='z-10 font-subtext font-bold text-lg uppercase md:self-end md:text-2xl lg:text-3xl'>
            UCSC PREMIERE HACKATHON
          </p>
          <p className='z-10 w-2/3 self-center text-center font-subtext text-sm uppercase md:w-1/2 md:self-end md:text-right lg:w-full'>
            1156 High St, Santa Cruz, CA 95064
          </p>
          {/* {!isAuthenticated ? (
            <Link
              to='/login'
              className='z-30 mt-6 flex h-12 w-64 items-center justify-center self-center rounded-full bg-gradient-to-r from-[#02D4BF] via-[#5156E4] to-[#7F37E2]  font-title text-xl leading-6 text-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:ml-20 md:self-start'
            >
              login
            </Link>
          ) : (
            <Link
              to='/portal'
              className='z-30 mt-6 flex h-12 w-64 items-center justify-center self-center rounded-full bg-gradient-to-r from-[#02D4BF] via-[#5156E4] to-[#7F37E2]  font-title text-xl leading-6 text-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:ml-20 md:self-start'
            >
              portal
            </Link>
          )} */}
        </div>
    </div>
  )
}

export default Sunset
