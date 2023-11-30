import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import Binary from "../../assets/Binary.jpg"
import Lake from "../../assets/illustrations/Lake.svg"
import ScrollToTop from "../../components/scrollControl/ScrollToTop"

const boardOfDirectors = [
  "Doug Erickson",
  "Nathan Westrup",
  "Amanda Rotella",
  "Suz Howells",
  "Mansi Saini",
  "Nada Miljkovic",
]

const advisors = ["Alexi Sevastopoulos", "Dr. Ebonée Williams", "Mark Adams"]

const Team = () => {
  return (
    <div className='overflow-x-hidden bg-[#0A1351]' id='landing'>
      {/* Put scroll at top on navigation */}
      <ScrollToTop />

      <div
        className='relative z-0 m-auto flex max-w-7xl flex-col items-center gap-20 bg-repeat-x px-10'
        style={{
          backgroundImage: `url(${Binary})`,
        }}
      >
        <Navbar />
        <div className='h-10' />
        <div className='flex flex-col items-center gap-6'>
          <h2 className='text-center font-title text-3xl uppercase md:text-5xl'>
            Our History
          </h2>
          <p className='max-w-2xl text-center font-subtext'>
            CruzHacks was founded in 2013 as Hack UCSC by Mark Adams, Brent
            Haddad, and Doug Erickson. In 2018, Hack UCSC was rebranded as
            CruzHacks, and became a student-led non-profit hackathon. Throughout
            the years, CruzHacks/Hack UCSC has sparked innovation and creativity
            from attendees, and has even been the source of a few start-up
            companies.
          </p>
        </div>

        <div className='flex flex-col items-center gap-10 md:flex-row md:items-start'>
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
      <div className='h-10' />
      <img src={Lake} alt='' className='m-auto w-full' />
      <Footer />
    </div>
  )
}

export default Team
