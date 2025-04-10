import React from "react"

import StevensonMapImg from "../../../../assets/maps/east_remote_lot.png"
import DowntownSCParking from "../../../../assets/maps/DowntownSCParking.png"
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

const StevensonEastRemoteLot: React.FC = () => {
  return (
    <Card>
      <div className='flex flex-col gap-5 md:flex-row md:gap-10'>
        <img
          className=''
          src={DowntownSCParking}
          alt='UCSC Stevenson College Map'
        />
      </div>
    </Card>
  )
}

export default StevensonEastRemoteLot
