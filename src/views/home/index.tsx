import React from "react"
import { Link } from "react-router-dom"
import FAQCard from "./FAQ/FAQCard"
import Rules from "./FAQ/Rules"
import useAuth from "../../hooks/useAuth"
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
  const { isAuthenticated } = useAuth()

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-5 bg-[#040E5D]'>
      {!isAuthenticated && (
        <p className='absolute right-10 top-10 ml-10 font-subtext text-sm'>
          Already submitted an application?{" "}
          <Link to='/login' className='text-blue-button'>
            Login
          </Link>
        </p>
      )}
      {/* <img src={CruzHacksLogo} alt='' className='w-32' /> */}
      <div className='-mb-28 flex min-h-screen flex-col items-center justify-center md:-mb-40 md:items-start'>
        <h1 className='font-title text-6xl uppercase md:text-8xl lg:text-9xl'>
          Cruz
        </h1>
        <h1 className='font-title text-6xl uppercase md:pl-28 md:text-8xl lg:text-9xl'>
          Hacks
        </h1>
        <p className='font-title text-lg uppercase md:self-end md:text-2xl lg:text-3xl'>
          2024 HACKATHON
        </p>
        <p className='w-2/3 self-center text-center font-subtext text-sm uppercase md:w-1/2 md:self-end md:text-right lg:w-full'>
          JAN 19-21 • UC SANTA CRUZ, STEVENSON EVENT CENTER
        </p>
        {!isAuthenticated ? (
          <Link
            to='/apply'
            className='mt-10 flex h-12 w-64 items-center justify-center self-center rounded-full bg-gradient-to-r from-[#02D4BF] via-[#5156E4] to-[#7F37E2] font-title text-xl  leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:ml-20 md:self-start'
          >
            apply
          </Link>
        ) : (
          <Link
            to='/portal'
            className='mt-10 flex h-12 w-64 items-center justify-center self-center rounded-full bg-gradient-to-r from-[#02D4BF] via-[#5156E4] to-[#7F37E2] font-title text-xl  leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:ml-20 md:self-start'
          >
            portal
          </Link>
        )}
      </div>
      <div className='max-w-5xl space-y-20 px-3 pb-10 md:px-20'>
        <FAQCard />
      </div>
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
