import React from "react"

import Mushrroms from "../../../../assets/illustrations/Mushrooms.png"
import TreesBackgroundBig from "../../../../assets/illustrations/Trees Background - Big.png"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/Carousel"
import Star from "../../../../components/Star"

import LinkedIn from "../../../../assets/icons/LinkedIn.svg"

import AlexanderWolf from "../../../../assets/speakers/Alexander Wolf.jpg"
import DougErickson from "../../../../assets/speakers/Doug Erickson.jpg"
import MarkAdams from "../../../../assets/speakers/Mark Adams.jpg"
import JohnathonChu from "../../../../assets/speakers/Johnathon Chu.jpg"
import LilaTretikov from "../../../../assets/speakers/Lila Tretikov.jpg"
import CooperNewby from "../../../../assets/speakers/Cooper Newby.jpg"
import GuyKawasaki from "../../../../assets/speakers/Guy Kawasaki.jpg"
import KarenMiga from "../../../../assets/speakers/Karen Miga.jpg"
import { Link } from "react-router-dom"

type Speaker = {
  image: string
  name: string
  blurb: string
  linkedIn: string
}

const speakerData: Speaker[] = [
  {
    image: LilaTretikov,
    name: "Lila Tretikov",
    blurb:
      "Deputy Chief Technology Officer @ Microsoft, Founder of GrokDigital ",
    linkedIn: "https://www.linkedin.com/in/lilatretikov",
  },
  {
    image: GuyKawasaki,
    name: "Guy Kawasaki",
    blurb:
      "Chief Evangelist of Canva, Creator of Remarkable People Podcast, Adjunct Professor of University of New South Wales, Chief Evangelist of Apple ",
    linkedIn: "https://www.linkedin.com/in/guykawasaki",
  },
  {
    image: CooperNewby,
    name: "Cooper Newby",
    blurb: "Co-Founder of Classet, Co-founder of BlueCrew",
    linkedIn: "https://www.linkedin.com/in/coopernewby/",
  },
  {
    image: DougErickson,
    name: "Doug Erickson",
    blurb: "Executive Director @ Santa Cruz Works",
    linkedIn: "https://www.linkedin.com/in/ericksondoug/",
  },
  {
    image: MarkAdams,
    name: "Mark Adams",
    blurb: "E-Commerce P&L Management",
    linkedIn: "https://www.linkedin.com/in/adamsmarkrichard/",
  },
  {
    image: JohnathonChu,
    name: "Johnathon Chu",
    blurb: "Director of Engineering  @ Rapid Robotics, Inc",
    linkedIn: "https://www.linkedin.com/in/jmchuster/",
  },
  {
    image: KarenMiga,
    name: "Karen Miga",
    blurb:
      "Assistant Professor Biomolecular Engineering Department, Principal Investigator @ Miga Lab",
    linkedIn: "https://www.linkedin.com/in/karen-miga-77335625",
  },
  {
    image: AlexanderWolf,
    name: "Alexander Wolf",
    blurb: "Dean of the Baskin School of Engineering at UC Santa Cruz",
    linkedIn: "https://www.linkedin.com/in/alexanderlwolf/",
  },
]

const SpeakerCard = ({ image, name, blurb, linkedIn }: Speaker) => {
  return (
    <div className='flex w-80 flex-col items-center justify-center gap-3 rounded-xl bg-blue-royal p-5 ring-2 ring-inset ring-white/20'>
      <img
        src={image}
        alt={`${name} Headshot`}
        className='h-[15rem] w-[15rem] border border-turquoise object-cover'
      />
      <p className='text-center font-title text-2xl'>{name}</p>
      <p className='text-center font-subtext'>{blurb}</p>
      <Link
        to={linkedIn}
        target='_blank'
        className='flex items-center gap-2 rounded-full bg-blue-imperial p-3'
      >
        <img src={LinkedIn} alt='LinkedIn' className='h-6 w-6' />
      </Link>
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
          className='w-30 invisible absolute -right-5 z-[200] overflow-hidden md:visible'
        />
        <div className='h-10' />
        <div className='flex w-full items-center justify-center'>
          <Carousel className='w-[21rem] md:w-[45rem] xl:w-[65rem]'>
            <CarouselContent className='md:-ml-1'>
              {speakerData.map(speaker => (
                <CarouselItem
                  key={speaker.name}
                  className='pl-5 md:basis-1/2 xl:basis-1/3'
                >
                  <SpeakerCard {...speaker} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='text-pink' />
            <CarouselNext className='text-pink' />
          </Carousel>
        </div>
      </div>
      <div className='-mx-40 flex h-full items-center'>
        <img
          src={TreesBackgroundBig}
          alt=''
          className='mt-[-40rem] h-auto max-h-[50rem] w-screen md:mt-[-60rem] lg:mt-[-50rem]'
        />
      </div>
    </>
  )
}

export default Speakers
