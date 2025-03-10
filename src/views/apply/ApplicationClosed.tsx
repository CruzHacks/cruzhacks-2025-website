import React from "react"
import { Link } from "react-router-dom"

const ApplicationClosed = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='text-center'>
        <h1 className='mt-4 font-heading text-3xl font-bold tracking-tight sm:text-5xl'>
          Applications are closed for CruzHacks2025!
        </h1>
        <p className='text-gray-600 mt-6 text-base leading-7'>
          Thank you for showing interest in CruzHacks. We look forward to seeing you next year!
          Stay updated on our socials.
        </p>

      
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link
            to='/'
            className='rounded-md bg-light_pink px-3.5 py-2.5 font-subtext text-sm font-semibold text-white shadow-sm hover:bg-dark_pink/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink'
          >
            Go back home
          </Link>

          <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdesWqrObNNAgVfymbURV5rNWHLPfF52Uwhgfo3h1BR-I-tTA/viewform?usp=sf_link" 
                className="rounded-md bg-[#8CB176] px-3.5 py-2.5 font-subtext text-sm font-semibold text-white shadow-sm hover:bg-[#658a50] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink">
                
                <p className="text-[#FFFFFF] text-lg"><b>Apply to be a volunteer!</b></p>
            </a>

        </div>
      </div>
    </div>
  )
}

export default ApplicationClosed
