import React from "react"
import { auth } from "../utils/firebaseapp"
import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import CruzHacksLogo from "../assets/logos/CruzHacks.svg"
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid"
import { classNames } from "../utils/string"
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline"
import AvatarButton from "./Sidebar/AvatarButton"

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

const authButtonStyle =
  "z-10 flex items-center justify-center gap-2 shadow-lg px-3 md:w-36 py-1 rounded-full"

const Navbar = () => {
  const {
    isAuthenticated,
    auth: { user },
  } = useAuth()

  return (
    <div className='fixed z-[300] flex w-screen justify-center bg-blue-imperial/80 backdrop-blur-md'>
      <div className='flex h-10 w-full max-w-7xl items-center justify-between px-10 py-8 pt-10 font-subtext lowercase md:text-xl'>
        <Link to='/#landing'>
          <img
            className='hidden h-8 w-auto md:block'
            src={CruzHacksLogo}
            alt='Your Company'
          />
        </Link>
        <div className='flex grow items-center justify-evenly uppercase md:grow-0 md:gap-10'>
          <Link to='/#about' className='transition-all hover:text-pink'>
            ABOUT
          </Link>
          <Link to='/#prize-tracks' className='transition-all hover:text-pink'>
            Prize Tracks
          </Link>
          <Link to='/#qa' className='transition-all hover:text-pink'>
            Q&A
          </Link>
        </div>
        {!isAuthenticated ? (
          <Link
            to='/login'
            className={classNames(
              authButtonStyle,
              "font-title text-sm text-gold md:bg-gold md:text-base md:text-blue-imperial"
            )}
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
          // <button
          //   onClick={logout}
          //   className={classNames(
          //     authButtonStyle,
          //     "font-title text-sm lowercase text-pink md:bg-pink md:text-base md:text-white"
          //   )}
          // >
          //   <span className='hidden md:block'>logout</span>
          //   <ArrowLeftOnRectangleIcon className='inline h-5 w-auto' />
          // </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
