import React from "react"
import EmailRegister from "./EmailRegister"
import BeachDivider from "../../../../assets/PageDividers/beachdivider1.svg"
import HandAndComputer from "../../../../assets/illustrations/Hand & Computer.svg"
import { socials } from "../../../../utils/socials"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"
import Starfish1 from "../../../../assets/illustrations/Starfish1.svg"
import Starfish2 from "../../../../assets/illustrations/Starfish2.svg"

const ApplicationBlurb = ({ id }: { id?: string }) => {
  return (
    <div>
      <div className='flex w-full justify-between  bg-beach_yellow '>
        {/* Scroll Anchor*/}
        <div className='absolute -mt-28' id={id}></div>
        
        <div className='justify-between items-center'>
          <div className="flex justify-between align-middle w-screen">
            <div className="w-full pt-10 mx-20 items-center">
              <h1 className='font-heading text-5xl uppercase text-center md:text-center md:text-6xl text-sponsor_dark_orange'>
                Applications Are Open NOW!
              </h1>

              <div className='flex justify-center mt-12 mb-20'>
                <p className=' font-subtext max-w-3xl text-lg items-center text-center lg:text-2xl text-sponsor_light_orange leading-loose'>
                Applications are currently OPEN for CruzHacks 2025! Our hackathon is open to hackers regardless of experience. Submit your application now!                </p>
              </div>

              <div className="flex justify-center w-full gap-12 mb-12 md:mb-0">
                <img src={Starfish1} alt="Starfish1" className="w-2/5 -mt-40 hidden md:flex"/>
                <Link to='/j7hxc5p6ri/apply'>
                  <div className="bg-medium_yellow/65 px-4 rounded-full hover:bg-medium_yellow/85 text-center max-w-3xl">
                    <p className="text-[#FFFFFF] px-8 py-4 text-lg md:text-3xl md:px-16 md:py-8"><b>APPLY HERE</b></p>
                  </div>
                </Link>
                <img src={Starfish2} alt="Starfish2" className="w-2/5 -mt-40 hidden md:flex"/>
              </div>

              <div className='flex justify-center mb-12'>
                <p className=' font-subtext max-w-3xl text-lg items-center text-center lg:text-2xl text-dark_pink leading-loose'>
                  <b>DUE: Applications Close on December 22nd, 2025 at 11:59 PM  </b> </p>
              </div>
              <div className="flex justify-center mb-12">
                <p className="font-subtext max-w-3xl text-lg items-center text-center lg:text-2xl text-sponsor_light_orange leading-loose">
                  if you have any questions about your application, please email <b>contact@cruzhacks.com</b></p>
              </div>
        
            </div>
          </div>
          <img src={BeachDivider} alt='' className="w-screen mb-12"/>
        </div>
      </div>
    </div>
  )
}

export default ApplicationBlurb
