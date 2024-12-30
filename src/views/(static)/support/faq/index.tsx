import React from "react"
import FAQCard from "./FAQCard"
import Rules from "./Rules"
import BackgroundHeader from "../BackgroundHeader"
import cloud2 from "../../../../assets/PageDividers/cloud2.svg"
import cloud3 from "../../../../assets/PageDividers/cloud3.svg"

const FAQ = () => {
  return (
    <div className='w-screen bg-sunset-gradient bg-fixed relative'>
      <div className="fixed right-7 top-12 w-3/5 z-0">
        <img src= {cloud2} alt="cloud"></img>
      </div>

      <div className = "fixed left-2 bottom-32 md:bottom-32 w-1/3 z-0">
        <img src= {cloud3} alt="cloud"></img>
      </div>

      <div className='relative z-10 mx-auto max-w-screen-md p-10'>
        <div className='flex flex-col items-stretch justify-center gap-10 text-black'>
          <h1 className='self-center font-title text-4xl text-white md:pb-10 lg:text-6xl'>
            FAQ & Rules
          </h1>

          <FAQCard />
          <Rules />
        </div>
      </div>
    </div>
  )
}

export default FAQ
