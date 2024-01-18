import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { Outlet, useLocation } from "react-router-dom"
import ScrollToTop from "../../components/scrollControl/ScrollToTop"

import Binary from "../../assets/Binary.jpg"
import Lake from "../../assets/illustrations/Lake.svg"

const StaticWrapper = () => {
  const { pathname } = useLocation()

  const isHomeOrTeam = pathname === "/team" || pathname === "/"

  return (
    <div className='overflow-x-hidden bg-[#0A1351]' id='landing'>
      {/* Put scroll at top on navigation */}
      <ScrollToTop />

      <div
        className='relative z-0 m-auto flex min-h-screen max-w-7xl flex-col items-center space-y-10 bg-repeat-x px-10'
        style={
          isHomeOrTeam
            ? {
                backgroundImage: `url(${Binary})`,
              }
            : {}
        }
      >
        <Navbar />
        <div className='h-10' />
        <Outlet />
      </div>

      {isHomeOrTeam && <img src={Lake} alt='' className='m-auto w-full' />}
      <Footer />
    </div>
  )
}

export default StaticWrapper
