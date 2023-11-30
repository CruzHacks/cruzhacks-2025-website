import React from "react"
import { CategoryTracks, PrizeTrack, TechCaresTracks } from "./data"
import Star from "../../../components/Star"
import { CloudTrack1, CloudTrack2 } from "../../../components/Cloud"

const PrizeTrackCard = ({ icon, title, blurb }: PrizeTrack) => {
  return (
    <div className='group z-10 flex h-80 w-80 flex-col items-center overflow-hidden rounded-xl bg-milestones-gradient p-5 ring-2 ring-inset ring-white/20 transition-all hover:items-start md:w-64'>
      <img
        src={icon}
        alt={`${title} icon`}
        className='grow drop-shadow-2xl transition-all group-hover:w-10 group-hover:grow-0 group-hover:self-end'
      />
      <h3 className='pt-5 font-title text-shadow'>{title}</h3>
      <p className='max-h-0 font-subtext opacity-0 transition-all text-shadow group-hover:max-h-[500rem] group-hover:opacity-100'>
        {blurb}
      </p>
    </div>
  )
}

const PrizeTracks = ({ id }: { id?: string }) => {
  return (
    <div className='relative flex flex-col items-center justify-center py-16'>
      {/* Scroll Anchor*/}
      <div className='absolute -top-20' id={id}></div>

      <Star
        i={4}
        className='-right-3 top-10 h-7 md:right-28 md:top-8 md:h-12 lg:right-24'
      />
      <Star className='left-0 top-24 h-5 md:left-24 md:top-20 md:h-10 lg:left-28' />
      <Star
        i={2}
        className='left-7 top-28 h-3 md:left-32 md:top-28 md:h-5 lg:left-44'
      />

      <h2 className='inline-block bg-gradient-to-r from-[#02D4BF] via-[#5156E4] to-[#7F37E2] bg-clip-text text-center font-title text-3xl uppercase text-transparent md:max-w-2xl md:text-5xl lg:max-w-none'>
        Tech Cares Tracks
      </h2>
      <div className='flex flex-wrap justify-center gap-10 py-10 md:gap-5'>
        {TechCaresTracks.map(track => (
          <PrizeTrackCard key={track.title} {...track} />
        ))}
      </div>

      <div className='h-10 md:h-52'>
        <CloudTrack1 className='left-7 -mt-8 md:-left-40 md:mt-5' />
        <CloudTrack2 className='-right-8 mt-3 md:-right-52 md:mt-32' />
      </div>

      <h2 className='z-10 inline-block bg-gradient-to-r from-[#C48841] via-[#DC6E3F] to-[#690EDD] bg-clip-text pt-10 text-center font-title text-2xl uppercase text-transparent md:text-4xl'>
        Category Prizes
      </h2>

      <Star i={3} className='-right-5 mt-52 h-5 md:right-10 md:h-8' />
      <Star i={5} className='right-2 mt-60 h-3 md:right-20 md:h-5' />

      <div className='flex flex-wrap justify-center gap-10 py-10 md:gap-5'>
        {CategoryTracks.map(track => (
          <PrizeTrackCard key={track.title} {...track} />
        ))}
      </div>
    </div>
  )
}

export default PrizeTracks
