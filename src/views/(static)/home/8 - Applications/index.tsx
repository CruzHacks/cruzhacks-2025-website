import React from "react"
import EmailRegister from "./EmailRegister"
import BeachDivider from "../../../../assets/PageDividers/beachdivider1.svg"
import HandAndComputer from "../../../../assets/illustrations/Hand & Computer.svg"
import { socials } from "../../../../utils/socials"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"
import Crab from "../../../../assets/illustrations/Crab.svg"

const ApplicationBlurb = ({ id }: { id?: string }) => {
  return (
    <div className='flex w-full justify-between  bg-beach_yellow '>
      {/* Scroll Anchor*/}
      <div className='absolute -mt-28' id={id}></div>
      
      <div className='justify-betweenitems-center'>
        <div className="flex justify-between align-middle w-screen">
          <div className="w-full space-y-6 pt-10 mx-20 lg:ml-32 items-center md:items-start">
            <h1 className='font-heading text-5xl uppercase text-center md:text-start md:text-7xl text-sponsor_dark_orange'>
              Our Mission
            </h1>
            <div className='space-y-5'>
              <p className=' font-subtext max-w-2xl text-lg lg:text-3xl text-sponsor_light_orange'>
              CruzHacks is the largest hackathon in Santa Cruz. Each year, we invite  hundreds of students to develop solutions to real-world problems, pursue inclusion in tech, and kindle the spirit of innovation.
              </p>
              {/* <Link
                to='/team'
                className='mt-2 flex w-fit items-center gap-2 rounded-lg border-4 border-blue-button px-5 py-2 font-bold text-blue-button hover:bg-blue-button/10 hover:underline'
              >
                Meet the CruzHacks team
                <ChevronRightIcon className='h-5' />
              </Link> */}
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
                    className='h-7 w-auto md:h-8 lg:h-10 text-deep_orange'
                  />
                </a>
              ))}
            </div>
          </div>
          <img src={Crab} alt="Crab" className="mr-32 scale-75 hidden md:flex md:-mt-10"/>
        </div>
      </div>
    </div>
    
  )
}

export default ApplicationBlurb
