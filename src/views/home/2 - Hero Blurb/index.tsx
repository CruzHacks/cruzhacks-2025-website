import React from "react"
import EmailRegister from "./EmailRegister"

import HandAndComputer from "../../../assets/illustrations/Hand & Computer.svg"
import { socials } from "../../../utils/socials"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"

const HeroBlurb = ({ id }: { id?: string }) => {
  return (
    <div className='flex w-full justify-between gap-10'>
      {/* Scroll Anchor*/}
      <div className='absolute -mt-28' id={id}></div>

      <div className='w-full space-y-6 pt-10'>
        <div className='mb-10 w-20 border-2 text-white'></div>
        <h2 className='font-title text-3xl uppercase md:text-5xl'>
          Social Good
        </h2>
        <div className=''>
          <p className='max-w-2xl text-lg lg:text-2xl'>
            CruzHacks is the largest hackathon in Santa Cruz. Each year, we
            invite hundreds of students to develop solutions to real-world
            problems, pursue inclusion in tech, and kindle the spirit of
            innovation.
          </p>
          <Link
            to='/team'
            className='mt-2 flex items-center gap-2 text-blue-button'
          >
            Meet the CruzHacks team
            <ArrowRightIcon className='h-4' />
          </Link>
        </div>
        <div className='max-w-md'>
          <EmailRegister />
        </div>
        <div className='flex flex-wrap justify-between gap-5 pb-5 md:justify-start md:gap-5 lg:gap-8'>
          {socials.map(({ name, url, icon }) => (
            <a key={name} target='_blank' rel='noopener noreferrer' href={url}>
              <img
                src={icon}
                alt={`${name} Icon`}
                className='h-7 w-auto md:h-8 lg:h-10'
              />
            </a>
          ))}
        </div>
      </div>
      <img src={HandAndComputer} alt='' className='hidden w-1/2 md:flex' />
    </div>
  )
}

export default HeroBlurb
