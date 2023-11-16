import React, { useEffect, useState } from "react"
import Submitted from "./Submitted"
import { checkApplicationSubmitted } from "../../../../utils/apis/firebase"
import useAuth from "../../../../hooks/useAuth"

const ApplicationApplicant = () => {
  const {
    auth: { user },
  } = useAuth()

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

  if (loading) {
    return (
      <div>
        <h1 className='font-title text-xl'>My Application</h1>
        <div className='sr-only'>loading</div>
      </div>
    )
  }

  return (
    <div className='space-y-10'>
      <h1 className='font-title text-xl'>My Application</h1>
      {isApplicationSubmitted && <Submitted />}
    </div>
  )
}

export default ApplicationApplicant
