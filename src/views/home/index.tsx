import React from "react"
import Navbar from "../../components/Navbar"
import Landing from "./1 - Landing"
import HeroBlurb from "./2 - Hero Blurb"
import Milestones from "./4 - Milestones"
// import Speakers from "./5 - Speakers"
import QA from "./6 - Q&A"
// import Sponsors from "./7 - Sponsors"
import Footer from "../../components/Footer"

import Binary from "../../assets/Binary.jpg"
import TreesBackgroundSmall from "../../assets/illustrations/Trees Background - Small.png"
import Lake from "../../assets/illustrations/Lake.svg"
import PrizeTracks from "./3 - Prize Tracks"
import ScrollToTop from "../../components/scrollControl/ScrollToTop"

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
        <div className='-mx-40 flex h-10 items-center'>
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
        {/* <Sponsors id='sponsors' /> */}
        <div className='h-40' />
      </div>
      <img src={Lake} alt='' className='m-auto w-full' />
      <Footer />
    </div>
  )
}

export default Home
