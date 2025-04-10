import React, { useState } from "react"
// import BackgroundHeader from "../../components/BackgroundHeader"
import StevensonOutside from "./StevensonOutside"
// import StevensonFloorPlan from "./StevensonFloorplan"

// import DropdownLogo from "../../assets/logo_dropdown-triangle-gray.svg"
import StevensonEastRemoteLot from "./StevensonEastRemoteLot"
// import StevensonJudgingMap from "./StevensonJudgingMap"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import BackgroundHeader from "../BackgroundHeader"
import cloud2 from "../../../../assets/PageDividers/cloud2.svg"
import cloud3 from "../../../../assets/PageDividers/cloud3.svg"

const maps = [
  // {
  //   id: 0,
  //   title: "Judging Map",
  //   map: <StevensonJudgingMap />,
  // },
  {
    id: 0,
    title: "General Area - Civic Audorium Center",
    map: <StevensonOutside />,
  },

  {
    id: 1,
    title: "Downtown Santa Cruz Parking",
    map: <StevensonEastRemoteLot />,
  },
]

const Map: React.FC = () => {
  const [selectedMapIdx, setSelectedMapIdx] = useState(0)
  const [revealSelections, setRevealSelections] = useState(false)

  const select = (i: number) => {
    setSelectedMapIdx(i)
    setRevealSelections(false)
  }

  return (
    <div className='w-screen bg-sunset-gradient bg-fixed relative'>
      <div className="absolute right-7 top-12 w-3/5 z-0">
        <img src= {cloud2} alt="cloud"></img>
      </div>

      <div className = "absolute left-2 bottom-32 md:bottom-32 w-1/3 z-0">
        <img src= {cloud3} alt="cloud"></img>
      </div>

      <div className='relative z-10 mx-auto max-w-screen-md p-10'>

        <div className='flex flex-col items-stretch justify-center gap-10'>
          <h1 className='text-center font-title text-4xl text-white md:py-10 lg:text-6xl'>
            Event Maps
          </h1>

          <button
            onClick={() => setRevealSelections(!revealSelections)}
            onKeyDown={() => setRevealSelections(!revealSelections)}
            className='flex flex-col items-stretch justify-center gap-1 rounded-xl bg-[#5D5F93]/50 border-2 border-[#5D5F93]/70 p-5 shadow-md'
          >
            <div className='flex justify-between rounded-lg p-3 text-left'>
              <p>{maps[selectedMapIdx].title}</p>
              <ChevronDownIcon className='h-8 w-8' />
            </div>
            {revealSelections &&
              maps.map((mapData, i) => {
                if (selectedMapIdx == i) return <></>
                return (
                  <div
                    key={i}
                    role='button'
                    tabIndex={i}
                    onClick={() => select(mapData.id)}
                    onKeyDown={() => select(mapData.id)}
                    className='rounded-lg p-3 text-left hover:bg-off_white/30'
                  >
                    {mapData.title}
                  </div>
                )
              })}
          </button>
          {maps[selectedMapIdx].map}
        </div>
      </div>
    </div>
  )
}

export default Map
