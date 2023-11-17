import React, { useEffect, useState } from "react"
import useAuth from "../../../hooks/useAuth"
import { checkApplicationSubmitted } from "../../../utils/apis/firebase"

const DashboardApplicant = () => {
  const {
    auth: { user },
  } = useAuth()

  const fullName = user?.displayName || user?.email || "Hacker"

  const [loading, setLoading] = useState(true)
  const [isApplicationSubmitted, setIsApplicationSubmitted] = useState(false)

  useEffect(() => {
    const checkAppSub = async () => {
      try {
        if (!user) throw new Error("No user provided")
        const _isApplicationSubmitted = await checkApplicationSubmitted(user)
        setIsApplicationSubmitted(_isApplicationSubmitted)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    checkAppSub()
  }, [])

  return (
    <div className='space-y-10 px-10'>
      <div className='space-y-3'>
        <p className='font-subtext'>Welcome {fullName},</p>
        <h1 className='font-title text-4xl'>Application Portal Dashboard</h1>
      </div>
      <div className='flex h-full w-full max-w-4xl grow flex-col rounded-3xl bg-[#4659FF]/10 px-10 py-5 md:p-10 lg:mb-16'>
        <h2 className='pb-5 font-title text-lg'>Application status:</h2>
        <p className='font-subtext'>
          {loading ? (
            <span className='italic'>loading...</span>
          ) : isApplicationSubmitted ? (
            "SUBMITTED"
          ) : (
            "NOT SUBMITTED"
          )}
        </p>
      </div>
    </div>
  )
}

export default DashboardApplicant
