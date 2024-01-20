import React from "react"
import Sidebar from ".."
import { CameraIcon, HomeIcon } from "@heroicons/react/24/outline"

const nav = [
  {
    name: "Dashboard",
    href: "/portal/applicant",
    icon: HomeIcon,
  },
  {
    name: "Check-in",
    href: "/portal/applicant/check-in",
    icon: CameraIcon,
  },
]

const PortalApplicant = () => {
  return (
    <div className='min-h-screen'>
      <Sidebar navigation={nav} />
    </div>
  )
}

export default PortalApplicant
