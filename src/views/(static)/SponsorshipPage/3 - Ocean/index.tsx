import React from "react"
import { Link } from "react-router-dom"
import Seaweed from "./OceanComponents/Seaweed"
import CheckList from "./OceanComponents/SponsorCheck"
import Interested from "./OceanComponents/Interested"
import NextSteps from "./OceanComponents/NextSteps"
import Please from "./OceanComponents/Please"
import Notes from "./OceanComponents/Note"
import Package from "./OceanComponents/Packages"
import Support from "./OceanComponents/Support"
import ThankYou from "./OceanComponents/ThankYou"
import Vector from "./OceanComponents/Vector"
import Contributions from "./OceanComponents/Contributions"
import WhiteRect from "./OceanComponents/WhiteRect"
import BlueRect from "./OceanComponents/BlueRect"
import BrandAwareness from "./OceanComponents/BrandAwareness"

// Here is the Ocean section for the CruzHacks2025 website, exported as one giant component called OceanSection,
//  with all the subcomponents imported and rendered in order.
const OceanSection = ({ id }: { id?: string }) => {
  return (
    // <Vector>
      <div className=" flex flex-col items-center bg-ocean-gradient">
         <Support/> 
         <Please/>
         <BrandAwareness/>
         <Package />
         <WhiteRect>
          <CheckList/>
         </WhiteRect>
         <Notes />
         <ThankYou />
         <Contributions  />
         <NextSteps />
         <Interested  />
         <Seaweed className="bottom-0" />
      </div>
  )
}

export default OceanSection
