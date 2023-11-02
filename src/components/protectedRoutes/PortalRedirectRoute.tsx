import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../../contexts/auth"

const PortalRedirectRoute = () => {
  const { auth } = useAuth()
  const { role } = auth

  if (role === "applicant") return <Navigate replace to='/portal/applicant' />
  if (role === "admin") return <Navigate replace to='/portal/admin' />
  if (role === "hacker") return <Navigate replace to='/portal/hacker' />

  return <Navigate replace to='/login' />
}

export default PortalRedirectRoute
