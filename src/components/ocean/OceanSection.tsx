import React from "react"
import { Link } from "react-router-dom"
import Seaweed from "../ocean/OceanComponents/Seaweed"
import CheckList from "../ocean/OceanComponents/SponsorCheck"
import Interested from "../ocean/OceanComponents/Interested"
import NextSteps from "../ocean/OceanComponents/NextSteps"
import Please from "../ocean/OceanComponents/Please"
import Notes from "../ocean/OceanComponents/Note"
import Package from "../ocean/OceanComponents/Packages"
import Support from "../ocean/OceanComponents/Support"
import ThankYou from "../ocean/OceanComponents/ThankYou"
import Vector from "../ocean/OceanComponents/Vector"
import Contributions from "../ocean/OceanComponents/Contributions"
import WhiteRect from "../ocean/OceanComponents/WhiteRect"
import BlueRect from "../ocean/OceanComponents/BlueRect"
import BrandAwareness from "../ocean/OceanComponents/BrandAwareness"

// Here is the Ocean section for the CruzHacks2025 website, exported as one giant component called OceanSection,
//  with all the subcomponents imported and rendered in order.
const OceanSection = ({ id }: { id?: string }) => {
  return (
    <Vector>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "0" }}>
         <Support/> 
         <Please/>
          <BlueRect>
            <BrandAwareness/>
          </BlueRect>
         <Package />
         <WhiteRect>
          <CheckList/>
         </WhiteRect>
         <Notes />
         <ThankYou />
         <Contributions  />
         <NextSteps />
         <Interested  />
      </div>
      <Seaweed className="bottom-0" />
    </Vector>
  )
}

export default OceanSection
