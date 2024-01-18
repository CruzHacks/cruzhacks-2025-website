import React from "react"

import HeaderCurve from "../../../assets/Header Curve.png"

const BackgroundHeader = () => {
  return (
    <div className='transition-top fixed left-0 top-10 -z-10 w-screen overflow-hidden'>
      <img
        className='transition-top aspect-auto h-80 w-[150vw] max-w-[150vw] overflow-hidden md:h-[40rem] md:w-screen'
        alt=''
        src={HeaderCurve}
      />
    </div>
  )
}

export default BackgroundHeader
