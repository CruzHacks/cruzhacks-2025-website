import React from "react"
import Card from "../../../../components/Card"
import Button from "../../../../components/Button"

const Hackerpack: React.FC = () => {
  return (
    <Card>
      <div className='mb-5'>
        <h2 className='text-center font-title text-2xl font-bold uppercase text-off_white md:text-3xl'>
          Hacker Pack + Starter Pack
        </h2>
        {/* <h3 className='text-center text-off_white font-subtext'>{scheduleInfo[day].date}</h3> */}
      </div>
      <div className='flex flex-col items-center gap-3'>
        <p className='font-subtext mb-10 text-center md:w-5/6 text-off_white'>
          You can find everything you need to know in our Hacker Packet PDF. It
          covers what you need to bring, travel info, workshop info, and more.
          Our starter pack will have code that can help you jumpstart your
          projects!
        </p>
        
        <a
          className='bg-off_white/25 text-center font-subtext text-off_white p-4 rounded-lg border-off_white/70 border-2 w-full md:w-1/2'
          href='https://docs.google.com/document/d/e/2PACX-1vQMV0TiHt3CiEraUKBhTJ3a0lDoyawcQzLgqOhvDgAzS42WUX1AfDmFlYwgDySs9TmEkh1Cm0110qLx/pub'
        >
          View Hacker Packet
        </a>
        <a
          className='bg-off_white/25 text-center font-subtext text-off_white p-4 rounded-lg border-off_white/70 border-2 w-full md:w-1/2'
          href='https://github.com/CruzHacks/Cruzhacks-Hacker-Packs'
        >
          Starter Pack
        </a>
      </div>
    </Card>
  )
}

export default Hackerpack
