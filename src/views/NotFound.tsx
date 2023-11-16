import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <main className='grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-indigo-600 font-subtext font-semibold'>404</p>
        <h1 className='mt-4 font-title text-3xl font-bold tracking-tight sm:text-5xl'>
          Page not found
        </h1>
        <p className='text-gray-600 mt-6 text-base leading-7'>
          Sorry, we couldn’t find the page you’re looking for.
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
            Ask the CruzHacks Discord <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  )
}

export default NotFound
