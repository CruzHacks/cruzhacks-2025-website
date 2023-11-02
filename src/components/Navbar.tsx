import React from "react"
import { auth } from "../utils/firebaseapp"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/auth"

const logout = async () => {
  await auth
    .signOut()
    .then(() => {
      console.log("User signed out")
    })
    .catch(error => {
      console.error(error)
    })
}

const Navbar = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div className='flex h-20 w-full items-center justify-between border-2'>
      <Link to='/'>Home</Link>
      <div className='flex grow justify-center gap-10'>
        <Link to='/portal'>Portal</Link>
      </div>
      <div className='flex items-center gap-10'>
        {!isAuthenticated ? (
          <>
            <Link to='/signup'>Signup</Link>
            <Link to='/login'>Login</Link>
          </>
        ) : (
          <button onClick={logout}>Sign Out</button>
        )}
      </div>
    </div>
  )
}

export default Navbar
