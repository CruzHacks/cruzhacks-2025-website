import React from "react"
// import BackgroundHeader from "../../components/BackgroundHeader"
import EventInfo from "./EventInfo"
import Hackerpack from "./Hackerpack"
import SubmitProject from "./SubmitProject"
import TeamFinder from "./TeamFinder"
import BackgroundHeader from "../BackgroundHeader"
import cloud2 from "../../../../assets/PageDividers/cloud2.svg"
import cloud3 from "../../../../assets/PageDividers/cloud3.svg"

const Resources = () => {
  return (
    <div className='w-screen bg-sunset-gradient bg-fixed relative'>
      <div className="absolute right-7 top-12 w-3/5 z-0">
        <img src= {cloud2} alt="cloud"></img>
      </div>

      <div className = "absolute left-2 bottom-32 md:bottom-32 w-1/3 z-0">
        <img src= {cloud3} alt="cloud"></img>
      </div>

      <div className='mx-auto max-w-screen-md'>

        <div className='mb-20 flex flex-col items-stretch justify-center gap-10 text-black'>
          <h1 className=' self-center font-title text-3xl text-white md:py-10 md:text-4xl lg:text-6xl'>
            Essential Resources
          </h1>

          <Hackerpack />
          {/* <TeamFinder />
          <SubmitProject /> */}
          <EventInfo />
        </div>
      </div>
    </div>
  )
}

export default Resources
