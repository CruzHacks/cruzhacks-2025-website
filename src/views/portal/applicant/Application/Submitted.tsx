import React from "react"
import useAuth from "../../../../hooks/useAuth"
import useApplication from "../../../../hooks/useApplication"

const Submitted = () => {
  const {
    auth: { user },
  } = useAuth()
  const { data: application } = useApplication(user?.email || "")

  return (
    <pre className='rounded-xl bg-white/10 p-5 text-sm'>
      {JSON.stringify(application, null, 2)}
    </pre>
  )
}

export default Submitted
