import React, { useState } from "react"
// import BackgroundHeader from "../../components/BackgroundHeader"
import StevensonOutside from "./StevensonOutside"
// import StevensonFloorPlan from "./StevensonFloorplan"

// import DropdownLogo from "../../assets/logo_dropdown-triangle-gray.svg"
import StevensonEastRemoteLot from "./StevensonEastRemoteLot"
// import StevensonJudgingMap from "./StevensonJudgingMap"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import BackgroundHeader from "../BackgroundHeader"

const maps = [
  // {
  //   id: 0,
  //   title: "Judging Map",
  //   map: <StevensonJudgingMap />,
  // },
  {
    id: 0,
    title: "General Area - Stevenson College",
    map: <StevensonOutside />,
  },
  // {
  //   id: 2,
  //   title: "Stevenson Event Center Floorplan",
  //   map: <StevensonFloorPlan />,
  // },
  {
    id: 1,
    title: "East Remote Lot to Stevenson Event Center",
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
    <div className='mx-auto max-w-screen-md p-10'>
      <BackgroundHeader />

      <div className='flex flex-col items-stretch justify-center gap-10'>
        <h1 className='text-center font-title text-4xl text-white md:py-10 lg:text-6xl'>
          Event Maps
        </h1>

        <button
          onClick={() => setRevealSelections(!revealSelections)}
          onKeyDown={() => setRevealSelections(!revealSelections)}
          className='flex flex-col items-stretch justify-center gap-1 rounded-xl bg-blue-imperial p-5 shadow-md'
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
                  className='rounded-lg p-3 text-left hover:bg-blue-royal'
                >
                  {mapData.title}
                </div>
              )
            })}
        </button>
        {maps[selectedMapIdx].map}
      </div>
    </div>
  )
}

export default Map
