import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const UnauthenticatedRoute = () => {
  const { isAuthenticated, auth } = useAuth()
  const { role } = auth

  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate replace to={`/portal/${role}`} />
  )
}

export default UnauthenticatedRoute
