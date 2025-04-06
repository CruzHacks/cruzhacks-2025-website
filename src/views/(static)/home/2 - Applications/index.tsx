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

              {/* Announcement */}
              



              <h1 className='font-heading text-5xl uppercase text-center md:text-center md:text-6xl text-sponsor_dark_orange'>
                CruzHacks2025 Decisons are Out!
              </h1>

              <div className='flex justify-center mt-12 mb-20'>
                <p className=' font-subtext max-w-3xl text-lg items-center text-center lg:text-2xl text-sponsor_light_orange leading-loose'>
                Thank you for applying to CruzHacks 2025! Please check your decision in your portal. <strong>RSVP as soon as possible if you want to keep your spot at our event!</strong>
                 </p>
              </div>

              <div className="flex justify-center w-full gap-12 mb-12 md:mb-0">
                <img src={Starfish1} alt="Starfish1" className="w-1/5 -mt-20 hidden md:flex"/>
                <Link to='/portal/applicant'>
                  <div className="bg-medium_yellow/65 px-4 rounded-full hover:bg-medium_yellow/85 text-center max-w-2xl">
                    <p className="text-[#FFFFFF] px-8 py-4 text-lg md:text-xl md:px-8 md:py-6"><b>Log In to My Portal</b></p>
                  </div>
                </Link>
                <img src={Starfish2} alt="Starfish2" className="w-1/5 -mt-20 hidden md:flex"/>
              </div>

              <div className="flex justify-center mb-12">
                <p className="font-subtext max-w-3xl text-lg items-center text-center lg:text-xl text-sponsor_light_orange leading-loose">
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
