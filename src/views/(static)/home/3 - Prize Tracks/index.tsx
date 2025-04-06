import React from "react"
import { CategoryTracks, PrizeTrack, TechCaresTracks } from "./data"
import Star from "../../../../components/Star"
import BeachDivider from "../../../../assets/PageDividers/beachdivider1.svg"


const PrizeTrackCard = ({ icon, title, blurb }: PrizeTrack) => {
  return (
    <div className='group z-10 flex h-80 w-80 flex-col items-center overflow-hidden rounded-xl bg-prizetracks-gradient p-5 ring-2 ring-inset ring-white/20 transition-all hover:items-start md:w-64'>
      <img
        src={icon}
        alt={`${title} icon`}
        className='grow drop-shadow-2xl transition-all group-hover:w-10 group-hover:grow-0 group-hover:self-end'
      />
      <h3 className='pt-5 font-subtext font-bold text-xl'>{title}</h3>
      <p className='max-h-0 font-subtext opacity-0 transition-all group-hover:max-h-[500rem] group-hover:opacity-100'>
        {blurb}
      </p>
    </div>
  )
}

const PrizeTracks = ({ id }: { id?: string }) => {
  return (
    // <div className='relative flex flex-col items-center justify-center py-16 '>
    <div className='flex w-full flex-col justify-between  bg-beach_yellow '>
      {/* Scroll Anchor*/}
      <div className='absolute -top-20' id={id}></div>

      <h2 className='inline-block bg-deep_orange bg-clip-text text-center font-title text-3xl uppercase text-transparent md:max-w-2xl md:text-5xl lg:max-w-none'>
        Tech Cares Tracks
      </h2>
      <div className='flex flex-wrap justify-center gap-10 py-10 md:gap-5'>
        {TechCaresTracks.map(track => (
          <PrizeTrackCard key={track.title} {...track} />
        ))}
      </div>

      <h2 className='z-10 inline-block bg-deep_orange bg-clip-text pt-10 text-center font-title text-2xl uppercase text-transparent md:text-4xl'>
        Category Prizes
      </h2>

      <Star i={3} className='-right-5 mt-52 h-5 md:right-10 md:h-8' />
      <Star i={5} className='right-2 mt-60 h-3 md:right-20 md:h-5' />

      <div className='flex flex-wrap justify-center gap-10 py-10 md:gap-5 '>
        {CategoryTracks.map(track => (
          <PrizeTrackCard key={track.title} {...track} />
        ))}
      </div>

      <div className="font-subtext text-md justify-center flex text-medium_orange md:text-2xl px-24">
        ... and many more! Including Sponsorship Prizes and Hidden Categories!
      </div>

      <div>
        <img src={BeachDivider} alt='' className="w-screen mb-12"/>
      </div>
    </div>
  )
}

export default PrizeTracks
