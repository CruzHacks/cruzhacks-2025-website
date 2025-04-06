import React from "react"
import Landing from "./1 - Landing"
// import HeroBlurb from "./2 - Hero Blurb"
import Milestones from "./4 - Milestones"
import PrizeTracks from "./3 - Prize Tracks"
import Speakers from "./5 - Speakers"
import QA from "./6 - Q&A"
import Sponsors from "./7 - Sponsors"
import HeroBlurb from "./8 - OurMission"
import Corals from "../../../assets/ocean/Seaweeded.svg"
import ApplicationBlurb from "./2 - Applications"
import MentorJudgeVolunteerBlurb from "./9 - MentorJudgingVolunteer"


const Home = () => {
  return (
    <>
      <Landing id='landing' />
 
      <ApplicationBlurb id='about' />
      <PrizeTracks id='prize-tracks' />
      <MentorJudgeVolunteerBlurb id='about' />
      <HeroBlurb id='about' />

      <div className="flex flex-col  bg-ocean-gradient">
        <div className="px-24">
          <Milestones id='milestones' />
          {/* <Speakers id='speakers' /> */}
          <QA id='qa' />
          <Sponsors id='sponsors' />
        </div>
        <img src={Corals} alt="corals" className="-mb-1 -mt-48" />
      </div>
    </>
  )
}

export default Home
