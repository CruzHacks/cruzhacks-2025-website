import React from "react"
import { Link } from "react-router-dom"
import useAuth from "../../../hooks/useAuth"

import { Cloud1, Cloud2, Cloud3 } from "../../../components/Cloud"
import HackersOnLog from "../../../assets/illustrations/Hackers on Log.svg"
import Fire from "../../../assets/illustrations/Fire.svg"
import Star from "../../../components/Star"
import { Transition } from "@headlessui/react"

const Landing = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div className='flex w-full flex-col items-center'>
      <Cloud1 className='left-0 top-28' />
      <Star className='left-5 top-48 h-5 md:left-28 md:top-56 md:h-10' />
      <Star
        i={2}
        className='right-10 top-28 h-5 md:right-16 md:top-32 md:h-10'
      />
      <Star i={3} className='left-10 top-52 h-2 md:left-40 md:top-72 md:h-3' />
      <Cloud2 className='right-0 top-40' />
      <Star i={3} className='right-4 top-96 h-6 md:right-32 md:top-80 md:h-7' />
      <Star
        i={6}
        className='right-10 top-[23rem] h-3 md:right-28 md:top-[19.5rem] md:h-3'
      />
      <Cloud3 className='-right-20 top-60' />
      <Transition
        appear={true}
        show={true}
        enter='transition-all duration-1000 east-out'
        enterFrom='opacity-0 scale-[90%]'
        enterTo='opacity-100 scale-100'
      >
        <div className='z-10 -mb-24 flex h-[40rem] w-fit flex-col items-center justify-center pb-20 md:h-[60rem] md:items-start'>
          <h1 className='z-10 font-title text-6xl uppercase md:text-8xl lg:text-9xl'>
            Cruz
          </h1>
          <h1 className='z-10 font-title text-6xl uppercase md:pl-28 md:text-8xl lg:text-9xl'>
            Hacks
          </h1>
          <p className='z-10 font-title text-lg uppercase md:self-end md:text-2xl lg:text-3xl'>
            2024 HACKATHON
          </p>
          <p className='z-10 w-2/3 self-center text-center font-subtext text-sm uppercase md:w-1/2 md:self-end md:text-right lg:w-full'>
            JAN 19-21 • UC SANTA CRUZ, STEVENSON EVENT CENTER
          </p>
          {!isAuthenticated ? (
            <Link
              to='/apply'
              className='z-10 mt-6 flex h-12 w-64 items-center justify-center self-center rounded-full bg-gradient-to-r from-[#02D4BF] via-[#5156E4] to-[#7F37E2]  font-title text-xl leading-6 text-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:ml-20 md:self-start'
            >
              apply
            </Link>
          ) : (
            <Link
              to='/portal'
              className='z-10 mt-6 flex h-12 w-64 items-center justify-center self-center rounded-full bg-gradient-to-r from-[#02D4BF] via-[#5156E4] to-[#7F37E2]  font-title text-xl leading-6 text-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:ml-20 md:self-start'
            >
              portal
            </Link>
          )}
        </div>
      </Transition>

      <div className='flex h-10 w-full justify-between'>
        <img
          src={HackersOnLog}
          alt='Hackers on Log'
          className='z-0 -ml-16 -mt-40 w-40 md:-ml-32 md:-mt-96 md:w-96'
        />
        <img
          src={Fire}
          alt='Fire'
          className='z-0 -mr-8 -mt-36 w-20 md:-mt-80 md:mr-0 md:w-48'
        />
      </div>
    </div>
  )
}

export default Landing
