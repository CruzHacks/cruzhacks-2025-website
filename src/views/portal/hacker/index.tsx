import React from "react"
import Sidebar from "../Sidebar"
import { CameraIcon, HomeIcon , UserGroupIcon } from "@heroicons/react/24/outline"

const nav = [
  {
    name: "Dashboard",
    href: "/portal/hacker",
    icon: HomeIcon,
  },
  {
    name: "Check In",
    href: "/portal/hacker/check-in",
    icon: CameraIcon,
  },
  {
    name: "Teams",
    href: "/portal/hacker/teams",
    icon: UserGroupIcon,
  },
]

const HackerPortal = () => {
  return (
    <div className='min-h-screen'>
      <Sidebar navigation={nav} />
    </div>
  )
}

export default HackerPortal
