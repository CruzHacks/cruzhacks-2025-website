import React from "react"
import {
  CameraIcon,
  HomeIcon,
  InboxArrowDownIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline"
import Sidebar from ".."

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
    name: "Team",
    href: "/portal/hacker/team",
    icon: UserGroupIcon,
  },
  {
    name: "Submit",
    href: "/portal/hacker/submit",
    icon: InboxArrowDownIcon,
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
