import React from "react"
import Sidebar from ".."
import { CameraIcon, HomeIcon } from "@heroicons/react/24/outline"

const nav = [
  {
    name: "Dashboard",
    href: "/portal/applicant",
    icon: HomeIcon,
  },
]

const PortalApplicant = () => {
  return (
    <div className='min-h-screen bg-portal-gradient'>
      <Sidebar navigation={nav} />
    </div>
  )
}

export default PortalApplicant
