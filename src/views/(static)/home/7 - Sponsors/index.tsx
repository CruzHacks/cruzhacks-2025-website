import React from "react"
import { specialThanks, sponsors } from "./data"
import Star from "../../../../components/Star"
import {Link} from "react-router-dom"
import ScrollToTop from "../../../../components/scrollControl/ScrollToTop"
const maxTierHeight = 10
const minTierHeight = 8

const calcTierMaxHeight = (tier: number) => {
  const numSponsors = sponsors.length
  const step = (numSponsors - 1 - tier) / (numSponsors - 1)

  const h = (maxTierHeight - minTierHeight) * step + minTierHeight
  return h
}

const Sponsors = ({ id }: { id?: string }) => {
  return (
    <div className='relative flex flex-col items-center gap-32 py-20'>
      
      {/* Scroll Anchor*/}
      <div className='absolute -mt-40' id={id}></div>

      <div className='relative space-y-10'>
        <h2 className='text-center font-heading text-2xl uppercase md:text-6xl'>
          thanks to our sponsors!
        </h2>
        <h2 className="text-center font-subtext text:xl md:text-2xl">
          Interested in sponsoring us this year? &nbsp;
          <Link to="/sponsorship">
            <b>Click Here!</b>
          </Link>
        </h2>
        <div className='flex max-w-4xl flex-col items-center justify-between gap-4 rounded-xl bg-[#A488DA] p-10 ring-2 ring-inset ring-dark_pink/80'>
          {sponsors.map((tier, i) => {
            return (
              <div
                key={"tier" + i}
                className='flex w-full flex-col items-center justify-between gap-5 md:flex-row'
              >
                {tier.map(({ name, url, icon }) => (
                  <a
                    key={name}
                    target='_blank'
                    rel='noopener noreferrer'
                    href={url}
                    className='flex-1'
                  >
                    <img
                      src={icon}
                      alt={`${name} Icon`}
                      className='h-auto w-full'
                      style={{ maxHeight: `${calcTierMaxHeight(i)}rem` }} // bit of a magic resize, may need to adjust based on tier logos
                    />
                  </a>
                ))}
              </div>
            )
          })}
        </div>
      </div>

      <div className='relative space-y-10'>
        <Star i={3} className='-top-20 right-0 h-2 md:right-0 md:h-4' />
        <Star i={1} className='-top-20 right-10 h-4 md:right-20 md:h-6' />
        <Star i={2} className='-right-16 top-10 h-5 md:-right-20 md:h-7' />

        <h2 className='text-center font-heading text-3xl uppercase md:text-6xl'>
          Special Thanks
        </h2>

        <Star
          i={3}
          className='-left-6 top-24 h-2 md:-left-12 md:h-3 lg:-left-32'
        />

        <div className='flex flex-col items-center justify-center gap-10 md:flex-row md:gap-20'>
          {specialThanks.map(({ name, url, icon }) => (
            <a
              key={name}
              target='_blank'
              rel='noopener noreferrer'
              href={url}
              className='flex-1'
            >
              <img src={icon} alt={`${name} Icon`} className='h-auto w-52' />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sponsors
