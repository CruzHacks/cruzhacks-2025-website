import React from "react"
import Navbar from "../../components/Navbar"
import Landing from "./1 - Landing"
import HeroBlurb from "./2 - Hero Blurb"
import Milestones from "./4 - Milestones"
// import Speakers from "./5 - Speakers"
import QA from "./6 - Q&A"
import Sponsors from "./7 - Sponsors"
import Footer from "../../components/Footer"

import Binary from "../../assets/Binary.jpg"
import TreesBackgroundSmall from "../../assets/illustrations/Trees Background - Small.png"
import Lake from "../../assets/illustrations/Lake.svg"
import PrizeTracks from "./3 - Prize Tracks"
import ScrollToTop from "../../components/scrollControl/ScrollToTop"
import Star from "../../components/Star"

const Home = () => {
  return (
    <div className='overflow-x-hidden bg-[#0A1351]' id='landing'>
      {/* Put scroll at top on navigation */}
      <ScrollToTop />

      <div
        className='relative z-0 m-auto flex min-h-screen max-w-7xl flex-col items-center space-y-10 bg-repeat-x px-10'
        style={{
          backgroundImage: `url(${Binary})`,
        }}
      >
        <Navbar />
        <Landing />
        <div className='-z-30 -mx-40 flex h-10 items-center'>
          <img
            src={TreesBackgroundSmall}
            alt=''
            className='mt-[-16rem] w-screen md:mt-[-36rem]'
          />
        </div>
        <HeroBlurb id='about' />
        <PrizeTracks id='prize-tracks' />
        <Milestones id='milestones' />
        {/* <Speakers id='speakers' /> */}
        <QA id='qa' />
        <Sponsors id='sponsors' />
        <div className='relative h-40 w-full'>
          <Star
            i={2}
            className='left-44 -mt-16 h-4 md:left-80 md:h-6 lg:left-[34rem]'
          />
          <Star i={3} className='-left-5 mt-14 h-5 md:left-10 md:h-8' />
          <Star
            i={4}
            className='-right-3 -mt-3 h-7 md:right-28 md:h-12 lg:right-24'
          />
          <Star
            i={5}
            className='left-32 top-8 h-5 md:left-52 md:h-6 lg:left-96'
          />
          <Star
            i={6}
            className='left-28 top-12 h-2 md:left-44 md:h-3 lg:left-80'
          />
          <Star
            i={7}
            className='right-6 top-24 h-5 md:right-0 md:h-10 lg:right-0'
          />
          <Star
            i={8}
            className='right-20 top-16 h-4 md:right-80 md:h-6 lg:right-[32rem]'
          />
          <Star
            i={9}
            className='left-7 top-28 h-3 md:left-32 md:h-5 lg:left-44'
          />
        </div>
      </div>
      <img src={Lake} alt='' className='m-auto w-full' />
      <Footer />
    </div>
  )
}

export default Home
