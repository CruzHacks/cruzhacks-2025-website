import React from "react"
import { useAuth } from "../../contexts/auth"
import Application from "./Application"

const ApplicantPortal = () => {
  const {
    auth: { user },
  } = useAuth()

  const fullName = user?.displayName || "Hacker"

  return (
    <div className='flex flex-col gap-5 px-20 py-10'>
      <h1 className='text-center'>Application Portal</h1>

      <p>Welcome {fullName}!</p>

      <p>Application status: TBD</p>

      <Application />
    </div>
  )
}

export default ApplicantPortal
