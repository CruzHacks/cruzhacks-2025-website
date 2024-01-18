import React from "react"

import StevensonMapImg from "../../../../assets/maps/event_outside.png"
import Card from "../../../../components/Card"

interface MapKeyItemInterface {
  color: string
  label: string
}

const MapKeyItem: React.FC<MapKeyItemInterface> = ({ color, label }) => {
  return (
    <div className='flex items-center gap-5'>
      <div className={`mt-1 h-2 w-6 shrink-0 rounded-md md:h-6 ${color}`}></div>
      <p className='font-subtext text-black'>{label}</p>
    </div>
  )
}

const StevensonOutside: React.FC = () => {
  return (
    <Card>
      <div className='flex flex-col gap-5 md:flex-row md:gap-10'>
        <img
          className='md:w-2/3'
          src={StevensonMapImg}
          alt='UCSC Stevenson College Map'
        />
        <div className='h-100 grow-1 flex flex-col justify-evenly gap-2 md:gap-5'>
          <MapKeyItem color='bg-[#FF1f22]' label='Stevenson Event Center' />
          <MapKeyItem color='bg-[#FF33EB]' label='Senior Commons Room' />
          <MapKeyItem color='bg-[#FFB800]' label='Wagstaff Fireside Lounge' />
          <MapKeyItem color='bg-[#14FFB9]' label='Classroom 175' />
          <MapKeyItem color='bg-[#4314FF]' label='Classrooms 150, 151, & 152' />
          <MapKeyItem color='bg-[#FBFF33]' label='Silverman Conference Room' />
        </div>
      </div>
    </Card>
  )
}

export default StevensonOutside
