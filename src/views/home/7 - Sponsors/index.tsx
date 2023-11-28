import React from "react"

import EigthWall from "../../../assets/sponsors/8thWall.svg"
import Backbone from "../../../assets/sponsors/Backbone.svg"
import Balsamiq from "../../../assets/sponsors/Balsamiq.svg"

// NOTE: these are last years sponsors, please update with this years sponsors
const sponsors = [
  // Tier 1
  [
    {
      name: "8th Wall",
      icon: EigthWall,
      url: "",
    },
    { name: "Backbone1", icon: Backbone, url: "" },
    { name: "Balsamiq1", icon: Balsamiq, url: "" },
  ],

  // Tier 2
  [
    {
      name: "8th Wall",
      icon: EigthWall,
      url: "",
    },
    { name: "Balsamiq2", icon: Balsamiq, url: "" },
    { name: "Backbone3", icon: Backbone, url: "" },
    { name: "Backbone4", icon: Backbone, url: "" },
    { name: "Balsamiq5", icon: Balsamiq, url: "" },
    { name: "Balsamiq6", icon: Balsamiq, url: "" },
  ],
]

const Sponsors = ({ id }: { id?: string }) => {
  return (
    <div className='flex flex-col items-center gap-10 py-10'>
      {/* Scroll Anchor*/}
      <div className='absolute -mt-40' id={id}></div>

      <h2 className='text-center font-title text-2xl uppercase md:text-4xl'>
        thanks to our sponsors!
      </h2>
      <div className='flex max-w-4xl flex-col items-center justify-between gap-10 rounded-xl bg-blue-royal/50 p-10 ring-2 ring-inset ring-white/10'>
        {sponsors.map((tier, i) => {
          return (
            <div
              key={"tier" + i}
              className='flex flex-row items-center justify-between gap-3 md:gap-10'
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
