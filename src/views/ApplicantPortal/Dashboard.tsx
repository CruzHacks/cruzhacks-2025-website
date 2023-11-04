import React from "react"
import { useAuth } from "../../contexts/auth"

const Dashboard = () => {
  const {
    auth: { user },
  } = useAuth()

  const fullName = user?.displayName || "Hacker"

  return (
    <div className='w-full space-y-6 px-10'>
      <h1 className='text-center font-title text-4xl'>
        Application Portal Dashboard
      </h1>
      <p>Welcome {fullName}!</p>
      <p>Application status: TBD</p>
    </div>
  )
}

export default Dashboard
