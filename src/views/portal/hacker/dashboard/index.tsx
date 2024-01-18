import React from "react"
import Announcements from "../../../../components/Announcements"
import useAuth from "../../../../hooks/useAuth"

const DashbaordHacker = () => {
  const {
    auth: { user },
  } = useAuth()

  const fullName = user?.displayName || user?.email

  return (
    <div className='space-y-10'>
      <div className='space-y-3'>
        <p className='font-subtext capitalize'>Welcome {fullName},</p>
        <h1 className='font-title text-2xl'>Hacker Portal Dashboard</h1>
      </div>
      <Announcements />
    </div>
  )
}

export default DashbaordHacker
