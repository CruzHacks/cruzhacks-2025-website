import React from "react"
import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import CruzHacksLogo from "../assets/logos/CruzHacks - Blue.svg"
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid"
import AvatarButton from "./AvatarButton"

const Navbar = () => {
  const {
    isAuthenticated,
    auth: { user },
  } = useAuth()

  return (
    <div className='fixed z-[300] flex w-screen justify-center bg-blue-imperial/80 backdrop-blur-md'>
      <div className='relative flex h-10 w-full max-w-7xl items-center justify-between px-10 py-8 pt-10 font-subtext lowercase md:text-xl lg:justify-center'>
        <Link to='/#landing' className='left-10 lg:absolute'>
          <img
            className='hidden h-8 w-auto md:block'
            src={CruzHacksLogo}
            alt='CruzHacks logo'
          />
        </Link>
        <div className='flex grow items-center justify-evenly font-light uppercase md:grow-0 md:gap-10'>
          <Link
            to='/#about'
            className='transition-all hover:font-bold hover:text-pink'
          >
            ABOUT
          </Link>
          <Link
            to='/#prize-tracks'
            className='transition-all hover:font-bold hover:text-pink'
          >
            Prize Tracks
          </Link>
          <Link
            to='/team'
            className='transition-all hover:font-bold hover:text-pink '
          >
            The Team
          </Link>
        </div>
        <div className='right-10 lg:absolute'>
          {!isAuthenticated ? (
            <Link
              to='/login'
              className='md:text-blue-white z-10 flex items-center justify-center gap-2 rounded-full px-3 py-1 font-title text-sm text-white shadow-lg md:w-36 md:bg-[#3d30cb] md:text-gold'
            >
              <span className='hidden md:block'>Login</span>
              <ArrowRightOnRectangleIcon className='inline h-5 w-auto' />
            </Link>
          ) : (
            <AvatarButton
              nav={[{ name: "Portal", href: "/portal" }]}
              email={user?.email || ""}
              direction='down'
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
