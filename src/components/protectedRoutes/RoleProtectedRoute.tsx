import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../contexts/auth"
import { UserRole } from "../../utils/roles"

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
