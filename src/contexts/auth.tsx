import { onAuthStateChanged } from "@firebase/auth"
import React, { createContext, useContext, useEffect, useState } from "react"
import { auth, db } from "../utils/firebaseapp"
import type { User } from "@firebase/auth"
import userRoles, { UserRole } from "../utils/roles"
import {
  DocumentSnapshot,
  Timestamp,
  doc,
  onSnapshot,
} from "firebase/firestore"

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
  const [lastCommitted, setLastCommitted] = useState<Timestamp>()

  /**
   * Refreshes the user's Id token (including custom claims)
   * @param snapshot User account data snapshot
   */
  const onNewClaim = async (snapshot: DocumentSnapshot, u: User) => {
    if (!u || !u.uid) {
      console.error("Auth: onNewClaim: No user to listen to claims for")
      return
    }

    const data = snapshot.data()
    if (data && data._lastCommitted) {
      if (!lastCommitted || !data._lastCommitted.isEqual(lastCommitted)) {
        // Force a refresh of the user's ID token
        const result = await u.getIdTokenResult(true)
        const _role = result.claims.role
        if (userRoles.indexOf(_role as any) === -1) {
          console.error("Auth: onNewClaim: Invalid role", _role)
          return
        }
        setRole(result.claims.role as UserRole)
      }
      setLastCommitted(data._lastCommitted)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      _user => {
        if (_user) {
          setUser(_user)
          onSnapshot(doc(db, "users", _user.uid), snapshot =>
            onNewClaim(snapshot, _user)
          )
        } else {
          setUser(null)
          setRole(null)
        }
      },
      setError
    )
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
