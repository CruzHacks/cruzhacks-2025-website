import React from "react"
import { classNames } from "../../../utils/string"
import { Cloud4, Cloud5 } from "../../../components/Cloud"
import Star from "../../../components/Star"

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
    <div className='flex h-60 w-full shrink-0 flex-col items-center rounded-xl bg-milestones-gradient px-2 ring-2 ring-inset ring-white/20 hover:animate-twinkle-slow md:h-40 md:w-36 lg:h-52 lg:w-52'>
      <p
        className={classNames(
          "flex h-1/2 grow items-end justify-center pb-3 font-title text-4xl md:text-xl lg:text-3xl",
          staisticStyling
        )}
      >
        {statistic}
      </p>
      <p
        className={classNames(
          childrenTextSize,
          "h-1/2 grow text-center font-subtext"
        )}
      >
        {children}
      </p>
    </div>
  )
}

const Milestones = ({ id }: { id?: string }) => {
  return (
    <div className='z-10 flex w-full flex-col items-end gap-10'>
      {/* Scroll Anchor*/}
      <div className='absolute -mt-40' id={id}></div>

      <Star className='absolute left-6 -mt-16 h-5 md:left-32 md:-mt-10 md:h-8 lg:h-10' />

      <Cloud4 className='absolute left-0 -mt-24 md:-left-32 md:-mt-8' />

      <Star
        i={2}
        className='absolute left-16 -mt-8 h-4 md:left-64 md:mt-20 md:h-5 lg:left-80 lg:h-7'
      />
      <Star
        i={7}
        className='absolute left-14 -mt-6 h-2 md:left-60 md:mt-16 md:h-2 lg:left-72 lg:h-4'
      />

      <h2 className='text-right font-title text-3xl uppercase md:text-5xl'>
        Milestones
      </h2>

      <Cloud5 className='absolute -right-16 mt-3 md:mt-16' />

      <div className='flex w-full flex-wrap justify-evenly gap-8 py-20 md:justify-center md:gap-10'>
        <Milestone statistic='400+' staisticStyling='text-gold'>
          hackers
        </Milestone>
        <Milestone statistic='$35k+' staisticStyling='text-turquoise'>
          in prizes
        </Milestone>
        <Milestone
          statistic='56%'
          staisticStyling='text-pink'
          childrenTextSize='text-3xl md:text-base lg:text-xl'
        >
          first time hackers
        </Milestone>
        <Milestone
          statistic='27%'
          staisticStyling='text-purple'
          childrenTextSize='text-3xl md:text-base lg:text-xl'
        >
          female and non binary hackers
        </Milestone>
      </div>
    </div>
  )
}

export default Milestones
