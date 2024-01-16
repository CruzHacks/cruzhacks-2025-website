import React from "react"
import Sidebar from "../Sidebar"
import { HomeIcon } from "@heroicons/react/24/solid"
import { UserGroupIcon } from "@heroicons/react/24/outline"

const nav = [
  {
    name: "Dashboard",
    href: "/portal/hacker",
    icon: HomeIcon,
  },
  // {
  //   name: "Applications",
  //   href: "/portal/admin/applications",
  //   icon: NewspaperIcon,
  // },
  // {
  //   name: "Users",
  //   href: "/portal/admin/users",
  //   icon: UsersIcon,
  // },
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
