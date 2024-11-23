import React from "react"
import { classNames } from "../../../../utils/string"


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

      <h2 className='text-center font-heading text-5xl uppercase md:text-7xl'>
        Milestones
      </h2>

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
