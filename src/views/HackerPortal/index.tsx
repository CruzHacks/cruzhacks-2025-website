import React, { useEffect } from "react"
import { useAuth } from "../../contexts/auth"

const HackerPortal = () => {
  const { auth } = useAuth()

  useEffect(() => {
    if (!auth.user) return
    const loadRole = async () => {
      const tokenId = await auth.user?.getIdTokenResult(false)
      console.log(
        `User with email "${auth.user?.email}" has role "${tokenId?.claims.role}"`
      )
    }
    loadRole()
  }, [auth.user])

  return <div>HackerPortal</div>
}

export default HackerPortal
