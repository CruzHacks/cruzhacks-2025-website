import React from "react"

import { Link } from "react-router-dom"

import MouseAndStars from "../../../../assets/illustrations/Mouse and Stars.svg"
import Maps from "../../../../assets/illustrations/Maps.svg"
import Clipboard from "../../../../assets/illustrations/Clipboard.svg"
import Schedule from "./Schedule"
import WorkshopsFood from "./WorkshopsFood"
import QuestionResources from "./QuestionResources"
import BackgroundHeader from "../BackgroundHeader"
import cloud2 from "../../../../assets/PageDividers/cloud2.svg"
import cloud3 from "../../../../assets/PageDividers/cloud3.svg"

const supportLinks = [
  {
    illustration: MouseAndStars,
    title: "resources",
    link: "resources",
  },
  {
    illustration: Maps,
    title: "maps",
    link: "maps",
  },
  {
    illustration: Clipboard,
    title: "faqs",
    link: "faq-and-rules",
  },
]

const Support = () => {
  return (
    <div className='w-screen bg-sunset-gradient bg-fixed relative'>
      <div className="fixed right-7 top-12 w-3/5 z-0">
        <img src= {cloud2} alt="cloud"></img>
      </div>

      <div className = "fixed left-2 bottom-32 md:bottom-24 w-1/3 z-0">
        <img src= {cloud3} alt="cloud"></img>
      </div>

      <div className='relative z-10 mx-auto w-full max-w-screen-md pt-10 md:pt-0'>
        <div className='mb-20 flex flex-col items-stretch justify-center gap-10 text-black'>
          <h1 className='font-title text-3xl self-center text-white md:py-10 md:text-4xl lg:text-6xl'>
            Support
          </h1>

          <div className='flex flex-col items-center gap-10 md:h-60 md:flex-row md:items-stretch'>
            {supportLinks.map(link => (
              <SupportLink key={link.title} {...link} />
            ))}
          </div>

          <Schedule />
          {/* <WorkshopsFood /> */}
          <QuestionResources />
        </div>
      </div>
     </div>
  )
}

const SupportLink = ({
  illustration,
  title,
  link,
}: {
  illustration: string
  title: string
  link: string
}) => {
  return (
    <div className='relative group flex h-60 w-full min-w-0 grow items-center justify-center md:h-full'>
      <Link
        to={link}
        className='flex h-full w-full flex-col items-center justify-center gap-5 rounded-3xl px-20 py-5 ring-4 ring-inset ring-white/10 transition-all '
      >
        <div className="absolute bg-support-gradient opacity-50 w-full h-full z-0 rounded-3xl"></div>
        <img src={illustration} alt='' className='h-2/3 w-full opacity-100 z-10' />
        <p className='z-10 font-title text-lg uppercase text-off_white transition-all group-hover:text-sm group-hover:text-off_white/70 opacity-100'>
          {title}
        </p>
      </Link>
    </div>
  )
}

export default Support
