import React from "react"

import StevensonMapImg from "../../../../assets/maps/east_remote_lot.png"
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

const StevensonEastRemoteLot: React.FC = () => {
  return (
    <Card>
      <div className='flex flex-col gap-5 md:flex-row md:gap-10'>
        <img
          className='md:w-2/3'
          src={StevensonMapImg}
          alt='UCSC Stevenson College Map'
        />
        <div className='h-100 grow-1 flex flex-col justify-evenly gap-2 md:gap-5'>
          <MapKeyItem color='bg-[#4484DB]' label='Stevenson Event Center' />
          <MapKeyItem color='bg-[#DD9F73]' label='East Remote Lot' />
          <MapKeyItem color='bg-[#FBFF33]' label='Enterance to OPERS Path' />
        </div>
      </div>
    </Card>
  )
}

export default StevensonEastRemoteLot
