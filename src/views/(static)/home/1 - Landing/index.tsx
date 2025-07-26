import React from "react"
import { Link } from "react-router-dom"
import useAuth from "../../../../hooks/useAuth"


import Star from "../../../../components/Star"
import { Transition } from "@headlessui/react"
import CruzHacksLogo from "../../../../assets/PageDividers/CruzHacksLogo.svg"
import Sandcastle from "../../../../assets/PageDividers/sandcastle-divider.svg"
import cloud2 from "../../../../assets/PageDividers/cloud2.svg"
import cloud3 from "../../../../assets/PageDividers/cloud3.svg"
import { classNames } from "../../../../utils/string"

const Landing = ({ id }: { id?: string }) => {
  const { isAuthenticated } = useAuth()

  return (
    // wrapper
    <div className='relative flex w-full flex-col items-center bg-sunset-gradient'> 

      <div className="absolute right-7 top-12 w-3/5">
        <img src= {cloud2} alt="cloud"></img>
      </div>

      <div className = "absolute left-2 bottom-32 md:bottom-80 w-1/3">
        <img src= {cloud3} alt="cloud"></img>
      </div>

      <Star
        i={2}
        className='right-10 top-28 h-5 md:right-16 md:top-32 md:h-10 lg:right-96'
      />
      <Star className='left-5 top-48 h-5 md:left-10 md:top-56 md:h-10 lg:left-28' /> 
      <Star
        i={3}
        className='left-10 top-52 h-2 md:left-20 md:top-72 md:h-3 lg:left-40'
      />


      <Star i={3} className='right-40 top-96 h-6 md:right-32 md:top-80 md:h-7' />
      <Star
        i={6}
        className='right-10 top-[23rem] h-3 md:right-28 md:top-[19.5rem] md:h-3'
      />
      {/* center text area */}
      <Transition
          appear={true}
          show={true}
          enter='transition-all duration-1000 east-out'
          enterFrom='opacity-0 scale-[90%]'
          enterTo='opacity-100 scale-100'
        >
      <div className = 'flex gap-8'>
        <div className='-mb-24 flex h-[35.5rem] w-fit flex-col items-center justify-center pb-20 md:h-[59.5rem] md:items-start lg:h-[56.5rem] '>
          <div className = 'flex items-end -mt-10 lg:-mt-20'>
            <h1 className='z-10 font-heading text-[50px] uppercase md:text-8xl lg:text-[150px] text-off_white'>
              Cruz
            </h1>
            <h1 className='z-10 font-heading text-[20px] uppercase pb-3 md:text-4xl lg:text-[75px] text-off_white lg:pb-7'>
              2026
            </h1>
            
          </div>

          <h1 className='z-10 font-heading text-[50px] uppercase md:pl-20 md:text-8xl -mt-8 md:mt-0 lg:-mt-6 lg:text-[150px] text-off_white'>
            Hacks
          </h1>
          <p className='z-10 font-subtext font-bold text-[10px] uppercase md:self-end md:text-2xl lg:text-3xl text-off_white'>
            UCSC PREMIERE HACKATHON
          </p>
          <p className='z-10 w-2/3 self-center text-center font-subtext text-[10px] uppercase md:w-1/2 md:self-end md:text-right lg:w-full lg:text-xl text-off_white'>
            COMING SOON!
          </p>
        </div>

        <div className='flex justify-center lg:-mt-20'>
          <img src= {CruzHacksLogo} width="350" className="hidden md:flex" alt="logo"></img>
        </div>
        
      </div>
      </Transition>
      <div className="-mt-36 w-screen">
        <img src= {Sandcastle} alt= "sandcastle" className="w-screen"></img>
      </div>
    </div>
  )
}

export default Landing
