import React from "react"
import Sidebar from ".."
import {
  HomeIcon,
  NewspaperIcon,
  UserGroupIcon,
  UsersIcon,
  CameraIcon,
} from "@heroicons/react/24/outline"

const nav = [
  {
    name: "Dashboard",
    href: "/portal/admin",
    icon: HomeIcon,
  },
  {
    name: "QR Check-In",
    href: "/portal/admin/check-in",
    icon: CameraIcon,
  },
  {
    name: "Teams",
    href: "/portal/admin/teams",
    icon: UserGroupIcon,
  },
  {
    name: "Users",
    href: "/portal/admin/users",
    icon: UsersIcon,
  },
  {
    name: "Applications",
    href: "/portal/admin/applications",
    icon: NewspaperIcon,
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
