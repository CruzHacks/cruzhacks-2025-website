import React from "react"

import StevensonMapImg from "../../../../assets/maps/event_outside.png"
import CivicAudoriumInside from "../../../../assets/maps/civic_auditorium_floorplan.png"
import Card from "../../../../components/Card"

interface MapKeyItemInterface {
  color: string
  label: string
}

const MapKeyItem: React.FC<MapKeyItemInterface> = ({ color, label }) => {
  return (
    <div className='flex items-center gap-5'>
      <div className={`mt-1 h-2 w-6 shrink-0 rounded-md md:h-6 ${color}`}></div>
      <p className='font-subtext text-off_white'>{label}</p>
    </div>
  )
}

const StevensonOutside: React.FC = () => {
  return (
    <Card>
      <div className='flex flex-col gap-5 md:gap-10'>
        <div className='grow-1 flex justify-evenly gap-2 md:gap-5'>
          <MapKeyItem color='bg-[#AD1E1E]' label='ABC Room (workshops)' />
          <MapKeyItem color='bg-[#25287B]' label='Restrooms' />
        </div>
        <img
          className=' '
          src={CivicAudoriumInside}
          alt='Civic Auditorium Map'
        />
      </div>
    </Card>
  )
}

export default StevensonOutside
