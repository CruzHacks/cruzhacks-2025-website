import React from "react"

import StevensonMapImg from "../../../../assets/maps/judging_map.png"
import Card from "../../../../components/Card"

const StevensonJudgingMap: React.FC = () => {
  return (
    <Card>
      <img src={StevensonMapImg} alt='UCSC Stevenson College Map' />
    </Card>
  )
}

export default StevensonJudgingMap
