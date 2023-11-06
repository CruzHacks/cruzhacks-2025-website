import React from "react"
import { Navigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const PortalRedirectRoute = () => {
  const { auth, isAuthenticated } = useAuth()
  const { role } = auth

  if (role === "applicant") return <Navigate replace to='/portal/applicant' />
  if (role === "admin") return <Navigate replace to='/portal/admin' />
  if (role === "hacker") return <Navigate replace to='/portal/hacker' />
  if (isAuthenticated) return <Navigate replace to='/' />

  return <Navigate replace to='/login' />
}

export default PortalRedirectRoute
