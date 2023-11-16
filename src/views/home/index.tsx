import React from "react"
import CruzHacksLogo from "../../assets/logos/CruzHacks.svg"
import { Link } from "react-router-dom"
// import { auth } from "../../utils/firebaseapp"
// import useAuth from "../../hooks/useAuth"

// const logout = async () => {
//   await auth
//     .signOut()
//     .then(() => {
//       console.log("User signed out")
//     })
//     .catch(error => {
//       console.error(error)
//     })
// }

const Home = () => {
  // const { isAuthenticated } = useAuth()

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-5'>
      <img src={CruzHacksLogo} alt='' className='w-32' />
      <div>
        <h1 className='font-title text-6xl uppercase'>Cruz</h1>
        <h1 className='font-title text-5xl uppercase'>Hacks</h1>
      </div>
      <Link
        to='/apply'
        className='flex h-12 w-64 items-center justify-center rounded-md bg-pink font-subtext text-xl leading-6 text-blue-imperial shadow-sm hover:bg-pink/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:bg-pink/50'
      >
        Apply
      </Link>
      {/* <div className='space-y-5'>
        {isAuthenticated ? (
          <>
            <Link
              to='/portal'
              className='flex h-12 w-64 items-center justify-center rounded-md bg-pink font-subtext text-xl leading-6 text-blue-imperial shadow-sm hover:bg-pink/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:bg-pink/50'
            >
              Portal
            </Link>
            <button
              onClick={logout}
              className='flex h-12 w-64 items-center justify-center rounded-md border-2 border-white font-subtext text-xl leading-6 text-white shadow-sm hover:border-white/80 hover:text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-royal disabled:bg-white/50'
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to='/login'
              className='flex h-12 w-64 items-center justify-center rounded-md bg-white font-subtext text-xl leading-6 text-blue-imperial shadow-sm transition-colors hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-royal disabled:bg-white/50'
            >
              Login
            </Link>
            <Link
              to='/signup'
              className='flex h-12 w-64 items-center justify-center rounded-md border-2 border-white font-subtext text-xl leading-6 text-white shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-royal disabled:bg-white/50'
            >
              Sign Up
            </Link>
          </>
        )}
      </div> */}
    </div>
  )
}

export default Home
