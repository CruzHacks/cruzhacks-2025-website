import React from "react"
import { AsyncImage } from "loadable-image"
import Star from "../../../components/Star"

import LinkedIn from "../../../assets/icons/LinkedIn.svg"
import CruzHacksLogo from "../../../assets/logos/CruzHacks.svg"

import { Organizer, advisors, boardOfDirectors, organizers } from "./data"

const TeamMember = ({ name, role, image, linkedIn }: Organizer) => {
  if (!image || image == "") {
    image = CruzHacksLogo
  }

  return (
    <div className='flex flex-col items-center gap-3'>
      <AsyncImage
        src={image}
        alt={name + " profile picture"}
        style={{
          height: "10rem",
          width: "10rem",
          borderRadius: "9999px",
          objectFit: "cover",
          border: "4px solid rgb(211 218 244 / 0.2)",
        }}
        loader={<div className='h-8 w-8 bg-blue-imperial/50' />}
      />
      <h3 className='text-center font-title text-lg uppercase md:text-lg'>
        {name}
      </h3>
      <p className='text-center font-subtext'>{role}</p>
      {linkedIn && linkedIn != "" && (
        <a
          href={linkedIn}
          target='_blank'
          rel='noopener noreferrer'
          className='text-center font-subtext'
        >
          <img src={LinkedIn} alt='' className='h-8 w-8' />
        </a>
      )}
    </div>
  )
}

const Team = () => {
  return (
    <div>
      <div className='h-10' />

      <Star
        i={2}
        className='absolute left-20 mt-36 h-4 md:left-40 md:mt-40 md:h-5 lg:left-80 lg:h-7'
      />

      <Star
        i={3}
        className='absolute left-12 mt-44 h-6 md:left-20 md:mt-52 md:h-7 lg:left-60 lg:h-10'
      />

      <div className='flex flex-col items-center gap-6 py-10 md:py-20'>
        <h2 className='text-center font-title text-3xl uppercase md:text-5xl'>
          Our History
        </h2>
        <p className='max-w-2xl text-center font-subtext text-lg'>
          CruzHacks was founded in 2013 as Hack UCSC by Mark Adams, Brent
          Haddad, and Doug Erickson. In 2018, Hack UCSC was rebranded as
          CruzHacks, and became a student-led non-profit hackathon. Throughout
          the years, CruzHacks/Hack UCSC has sparked innovation and creativity
          from attendees, and has even been the source of a few start-up
          companies.
        </p>
      </div>

      <div className='relative'>
        <Star
          i={4}
          className='absolute right-12 -mt-20 h-3 md:right-20 md:h-5'
        />

        <h2 className='pb-20 text-center font-title text-3xl uppercase md:text-5xl'>
          2024 Organizing Team
        </h2>

        <div className='grid grid-cols-1 gap-5 gap-y-20 md:grid-cols-3'>
          {organizers.map(organizer => {
            return <TeamMember key={organizer.name} {...organizer} />
          })}
        </div>
      </div>

      <div className='flex flex-col items-center gap-10 py-10 md:flex-row md:items-start md:py-20'>
        <div className='flex max-w-sm flex-1 flex-col items-center gap-6'>
          <h3 className='text-center font-title text-2xl uppercase md:text-4xl'>
            Board of directors
          </h3>
          <ul className='space-y-1 text-center font-subtext'>
            {boardOfDirectors.map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>

        <div className='flex max-w-sm flex-1 flex-col items-center gap-6'>
          <h3 className='text-center font-title text-2xl uppercase md:text-4xl'>
            Advisers
          </h3>
          <ul className='space-y-1 text-center font-subtext'>
            {advisors.map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Team
