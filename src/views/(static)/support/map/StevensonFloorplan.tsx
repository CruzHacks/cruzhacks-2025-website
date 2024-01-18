import React from "react"

import StevensonMapImg from "../../../../assets/maps/event_floorplan.png"
import Card from "../../../../components/Card"

const StevensonFloorPlan: React.FC = () => {
  return (
    <Card>
      <img src={StevensonMapImg} alt='UCSC Stevenson College Map' />
    </Card>
  )
}

export default StevensonFloorPlan
