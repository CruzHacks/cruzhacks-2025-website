import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { Outlet, useLocation } from "react-router-dom"
import ScrollToTop from "../../components/scrollControl/ScrollToTop"
import cloud1 from "../../assets/PageDividers/cloud1.svg"

import Binary from "../../assets/Binary.jpg"
import Lake from "../../assets/illustrations/Lake.svg"

const StaticWrapper = () => {
  const { pathname } = useLocation()

  const isHomeOrTeam = pathname === "/team" || pathname === "/"

  return (
    <div className='overflow-x-hidden' id='landing'>
      {/* Put scroll at top on navigation */}
      <ScrollToTop />
      <div className="absolute left-0 top-0 w-60 z-[350]">
        <img src= {cloud1} className="hidden md:flex" alt="cloud"></img>
      </div>
      <div
        className='relative z-0 m-auto flex min-h-screen flex-col items-center'
        style={
          isHomeOrTeam
            ? {
                backgroundImage: `url(${Binary})`,
              }
            : {}
        }
      >
        <Navbar />
        {/* <div className='h-10' /> */}
        <Outlet />
      </div>
      {/* {isHomeOrTeam && <img src={Lake} alt='' className='m-auto w-full' />} */}
      <Footer />
    </div>
  )
}

export default StaticWrapper
