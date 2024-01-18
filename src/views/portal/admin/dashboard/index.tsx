import React from "react"
import StatisticsDisplay from "./Statistics"
import MakeAnnoucements from "./MakeAnnoucements"
import useAuth from "../../../../hooks/useAuth"

const DashboardAdmin = () => {
  const {
    auth: { user },
  } = useAuth()

  const fullName = user?.displayName || user?.email

  return (
    <div className='space-y-10'>
      <div className='space-y-3'>
        <p className='font-subtext capitalize'>Welcome {fullName},</p>
        <h1 className='font-title text-2xl md:text-3xl lg:text-4xl'>
          Admin Portal Dashboard
        </h1>
      </div>
      <MakeAnnoucements />

      <div className='h-5' />

      <StatisticsDisplay />
    </div>
  )
}
export default DashboardAdmin
