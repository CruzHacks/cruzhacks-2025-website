import { onAuthStateChanged } from "@firebase/auth"
import React, { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../utils/firebaseapp"
import type { User } from "@firebase/auth"
import userRoles, { UserRole } from "../utils/roles"

// This is a hacky fix to get around the fact that when a user token is first
// created on signup it does not contain the custom claim role (the
// cruzhacks-2024-backend trigger is creating and setting it on the server after
// the token is already created and sent to client). This is a problem for
// routing that requires the hacker role to be known. This is a temporary fix to
// get around that.
//
// TODO: Refetch the token after signup to get the role from custom claims
const DEFAULT_ROLE = "applicant"

// Auth Context
export const AuthContext = createContext<{
  user: User | null
  role: string | null
  error: Error | null
}>({
  user: null,
  role: null,
  error: null,
})

export const AuthContextProvider = (props: any) => {
  const [user, setUser] = useState<User | null>(null)
  const [role, setRole] = useState<UserRole | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    // When authentication state changes, set the user and role
    const unsubscribe = onAuthStateChanged(
      auth,
      _user => {
        if (_user) {
          _user
            .getIdTokenResult(true)
            .then(tokenId => {
              const role = tokenId.claims.role as UserRole

              if (!role) {
                console.log("User has no role, defaulting to", DEFAULT_ROLE)
                setRole(DEFAULT_ROLE)
                return
              }

              if (!userRoles.includes(role)) {
                setError(new Error("User has invalid role"))
                console.error("User has invalid role!")
                return
              }

              setRole(role)
            })
            .finally(() => {
              setUser(_user)
            })
        } else {
          setUser(null)
          setRole(null)
        }
      },
      setError
    )
    // On component unmount, unsubscribe to the auth listener
    return () => unsubscribe()
  }, [])

  return <AuthContext.Provider value={{ user, role, error }} {...props} />
}

// Auth Hook
export const useAuth = () => {
  const authentication = useContext(AuthContext)

  return {
    auth: { ...authentication },
    isAuthenticated: authentication.user != null,
  }
}
