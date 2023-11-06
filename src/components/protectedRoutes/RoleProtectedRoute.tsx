import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserRole } from "../../utils/roles"
import useAuth from "../../hooks/useAuth"

interface RoleProtectedRouteProps {
  allowedRole: UserRole
}

const RoleProtectedRoute = ({ allowedRole }: RoleProtectedRouteProps) => {
  const { auth } = useAuth()

  const role = auth?.role || ""
  const isRole = role === allowedRole

  let destination = "/login"
  if (role === "hacker") {
    destination = "/portal/hacker"
  } else if (role === "admin") {
    destination = "/portal/admin"
  }

  return isRole ? <Outlet /> : <Navigate replace to={destination} />
}

export default RoleProtectedRoute
