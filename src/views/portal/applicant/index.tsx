import React from "react"
import Sidebar from "../Sidebar"
import { HomeIcon } from "@heroicons/react/24/outline"

const nav = [
  {
    name: "Dashboard",
    href: "/portal/applicant",
    icon: HomeIcon,
  },
  // {
  //   name: "Application",
  //   href: "/portal/applicant/application",
  //   icon: UsersIcon,
  // },
]

const PortalApplicant = () => {
  return (
    <div className='min-h-screen'>
      <Sidebar navigation={nav} />
    </div>
  )
}

export default PortalApplicant
