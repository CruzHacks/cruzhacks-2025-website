import React from "react"
import Sidebar from "../../components/Sidebar"
import { HomeIcon, UsersIcon } from "@heroicons/react/24/outline"

const nav = [
  {
    name: "Dashboard",
    href: "/portal/applicant",
    icon: HomeIcon,
  },
  {
    name: "Application",
    href: "/portal/applicant/application",
    icon: UsersIcon,
  },
]

const ApplicantPortal = () => {
  return (
    <div className='min-h-screen'>
      <Sidebar navigation={nav} />
    </div>
  )
}

export default ApplicantPortal