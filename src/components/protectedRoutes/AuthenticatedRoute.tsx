import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const AuthenticatedRoute = () => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <Outlet /> : <Navigate replace to='/login' />
}

export default AuthenticatedRoute
