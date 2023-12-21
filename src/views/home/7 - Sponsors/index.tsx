import React from "react"
import { sponsors } from "./data"

const maxTierHeight = 10
const minTierHeight = 8

const Sponsors = ({ id }: { id?: string }) => {
  const calcTierMaxHeight = (tier: number) => {
    const numSponsors = sponsors.length
    const step = (numSponsors - 1 - tier) / (numSponsors - 1)

    const h = (maxTierHeight - minTierHeight) * step + minTierHeight
    return h
  }

  return (
    <div className='flex flex-col items-center gap-10 py-20'>
      {/* Scroll Anchor*/}
      <div className='absolute -mt-40' id={id}></div>

      <h2 className='text-center font-title text-2xl uppercase md:text-4xl'>
        thanks to our sponsors!
      </h2>
      <div className='flex max-w-4xl flex-col items-center justify-between gap-4 rounded-xl bg-blue-royal/50 p-10 ring-2 ring-inset ring-white/10'>
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
  )
}

export default Sponsors
