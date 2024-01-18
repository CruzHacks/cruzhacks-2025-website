import React from "react"

import Mushrroms from "../../../../assets/illustrations/Mushrooms.png"
import TreesBackgroundBig from "../../../../assets/illustrations/Trees Background - Big.png"

import MichaelLopp from "../../../../assets/speakers/MichaelLopp.jpg"
import RaghavJandhyala from "../../../../assets/speakers/RaghavJandhyala.jpg"
import MarkAdams from "../../../../assets/speakers/MarkAdams.jpg"
import BrentHaddad from "../../../../assets/speakers/BrentHaddad.jpg"
import NadaMiljkovic from "../../../../assets/speakers/NadaMilkovic.jpg"
import GregorVebleMikic from "../../../../assets/speakers/GregorVebleMikie.jpg"
import AlexanderWolf from "../../../../assets/speakers/AlexanderWolf.jpg"
import Star from "../../../../components/Star"

type Speaker = {
  image: string
  name: string
  blurb: string
}

const speakerData: Speaker[] = [
  {
    image: MichaelLopp,
    name: "Micheal Lopp",
    blurb: "Senior Director of Engineering @ Apple; UCSC Alumni",
  },
  {
    image: RaghavJandhyala,
    name: "Raghav Jandhyala",
    blurb: "Chief Product Officer, Microsoft Dynamics 365",
  },
  {
    image: MarkAdams,
    name: "Mark Adams",
    blurb: `Co-founder of CruzHacks / OnePlus Amazon Account Manager`,
  },
  {
    image: BrentHaddad,
    name: "Brent Haddad",
    blurb: `Brent Haddad, MBA, Ph.D.
    Professor of Environmental Studies, UCSC
    Co-founder, HackUCSC`,
  },
  {
    image: NadaMiljkovic,
    name: "Nada Miljkovic",
    blurb: `Co-Founder @ GetVirtual; Project Manager for UCSC’s 
    Center for Innovation and Entrepreneurial Development`,
  },
  {
    image: GregorVebleMikic,
    name: "Gregor Veble Mikić",
    blurb: "Chief Aerodynamicist at Joby Aviation",
  },
  {
    image: AlexanderWolf,
    name: "Alexander Wolf",
    blurb: "Dean of the Baskin School of Engineering at UC Santa Cruz",
  },
]

const SpeakerCard = ({ image, name, blurb }: Speaker) => {
  return (
    <div className='flex w-80 flex-col items-center justify-center gap-3 rounded-xl bg-blue-royal p-5 ring-2 ring-inset ring-white/20'>
      <img
        src={image}
        alt=''
        className='h-[15rem] w-[15rem] border border-turquoise object-cover'
      />
      <p className='text-center font-title text-2xl'>{name}</p>
      <p className='text-center font-subtext'>{blurb}</p>
    </div>
  )
}

const Speakers = ({ id }: { id?: string }) => {
  return (
    <>
      <div className='z-10 w-full'>
        {/* Scroll Anchor*/}
        <div className='absolute -mt-40' id={id}></div>

        <p className='pb-5 uppercase text-white/50'>Hear from the best</p>
        <h2 className='font-title text-3xl uppercase md:text-5xl'>Speakers</h2>
        <Star className='right-14 -mt-6 h-5 md:right-20 md:-mt-10 md:h-8 lg:h-10' />
        <Star
          i={3}
          className='right-20 h-3 md:right-32 md:mt-0 md:h-4 lg:h-5'
        />
        <img
          src={Mushrroms}
          alt=''
          className='w-30 invisible absolute -right-5 overflow-hidden md:visible'
        />
        <div className='flex flex-wrap items-stretch justify-center gap-10 py-20'>
          {speakerData.map(speaker => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
        </div>
      </div>
      <div className='-mx-40 flex h-full items-center'>
        <img
          src={TreesBackgroundBig}
          alt=''
          className='mt-[-20rem] h-auto w-screen md:mt-[-80rem]'
        />
      </div>
    </>
  )
}

export default Speakers
