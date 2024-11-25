import React from "react"
import { classNames } from "../../../../utils/string"
import Star from "../../../../components/Star"
import Squid from "../../../../assets/illustrations/Squid.svg"


interface MilestoneProps {
  staisticStyling: string
  statistic: string
  children: string
  childrenTextSize?: string
}

const Milestone = ({
  staisticStyling,
  statistic,
  childrenTextSize = "text-4xl md:text-xl lg:text-3xl",
  children,
}: MilestoneProps) => {
  return (
    <div className='flex h-60 w-full shrink-0 flex-col items-center rounded-xl bg-milestones-gradient px-2 ring-4 ring-inset ring-[#36A77A] hover:animate-twinkle-slow md:h-40 md:w-36 lg:h-52 lg:w-52'>
      <p
        className={classNames(
          "flex h-1/2 grow items-end justify-center pb-3 font-heading text-4xl md:text-xl lg:text-3xl",
          staisticStyling
        )}
      >
        {statistic}
      </p>
      <p
        className={classNames(
          childrenTextSize,
          "h-1/2 grow text-center font-heading"
        )}
      >
        {children}
      </p>
    </div>
  )
}

const Milestones = ({ id }: { id?: string }) => {
  return (
    <div className='z-10 flex w-full flex-col items-center gap-10 mt-16'>
      {/* Scroll Anchor*/}
      <div className='absolute -mt-40' id={id}></div>

      <Star className='left-24 -mt-4 h-7 md:left-52 md:-mt-10 md:h-8 lg:left-72 lg:h-10' />
      <Star
        i={2}
        className='right-10 mt-8 h-4 md:right-12 md:mt-8 md:h-5 lg:h-7'
      />

      <div className="flex">
        <h2 className='text-center font-heading text-5xl text-off_white uppercase md:text-7xl'>
          Milestones
        </h2>
        
        <img src={Squid} alt="" className="lg:h-72 absolute right-40 hidden md:flex" />

      </div>
      <div className='flex w-full flex-wrap justify-evenly gap-8 py-20 text-off_white md:justify-center md:gap-10'>
        <Milestone statistic='400+' staisticStyling='text-gold'>
          hackers
        </Milestone>
        <Milestone statistic='$35k+' staisticStyling='text-gold'>
          in prizes
        </Milestone>
        <Milestone
          statistic='56%'
          staisticStyling='text-gold'
          childrenTextSize='text-3xl md:text-base lg:text-xl'
        >
          first time hackers
        </Milestone>
        <Milestone
          statistic='27%'
          staisticStyling='text-gold'
          childrenTextSize='text-3xl md:text-base lg:text-xl'
        >
          female and non binary hackers
        </Milestone>
      </div>
    </div>
  )
}

export default Milestones
