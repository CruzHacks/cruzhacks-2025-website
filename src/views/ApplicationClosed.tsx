import React from "react"
import { Link } from "react-router-dom"

const ApplicationClosed = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='text-center'>
        <h1 className='mt-4 font-title text-3xl font-bold tracking-tight sm:text-5xl'>
          Applications closed
        </h1>
        <p className='text-gray-600 mt-6 text-base leading-7'>
          2024 CruzHacks applications are now closed, lookout for applications
          next year!
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link
            to='/'
            className='rounded-md bg-pink px-3.5 py-2.5 font-subtext text-sm font-semibold text-white shadow-sm hover:bg-pink/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink'
          >
            Go back home
          </Link>
          <a
            href='https://discord.gg/tBHmBbBX7C'
            className='font-subtext text-sm font-semibold'
          >
            Join CruzHacks Discord <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ApplicationClosed
