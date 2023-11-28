import React from "react"
import Sidebar from "../Sidebar"
import {
  HomeIcon,
  NewspaperIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/outline"

const nav = [
  {
    name: "Dashboard",
    href: "/portal/admin",
    icon: HomeIcon,
  },
  {
    name: "Applications",
    href: "/portal/admin/applications",
    icon: NewspaperIcon,
  },
  {
    name: "Users",
    href: "/portal/admin/users",
    icon: UsersIcon,
  },
  {
    name: "Teams",
    href: "/portal/admin/teams",
    icon: UserGroupIcon,
  },
]

const PortalAdmin = () => {
  return (
    <div className='min-h-screen'>
      <Sidebar navigation={nav} />
    </div>
  )
}

export default PortalAdmin
