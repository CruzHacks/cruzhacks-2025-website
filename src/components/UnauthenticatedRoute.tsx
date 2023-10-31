import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../contexts/auth"

const UnauthenticatedRoute = () => {
  const { isAuthenticated } = useAuth()

  return !isAuthenticated ? <Outlet /> : <Navigate replace to='/' />
}

export default UnauthenticatedRoute
