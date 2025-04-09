import React from "react"
import Announcements from "../../../../components/Announcements"
import useAuth from "../../../../hooks/useAuth"
import { Link } from "react-router-dom"

const DashbaordHacker = () => {
  const {
    auth: { user },
  } = useAuth()

  const fullName = user?.displayName || user?.email

  return (
    <div className='space-y-10 px-4 sm:px-6 lg:px-8'>
      <div className='space-y-3'>
        <p className='font-subtext capitalize'>Welcome {fullName},</p>
        <h1 className='font-title text-2xl'>Hacker Portal Dashboard</h1>
      </div>

      <div className='flex min-w-0 flex-col items-center justify-center gap-10 xl:flex-row xl:items-stretch'>
        <Announcements />

        <div className='w-full max-w-2xl grow space-y-10 rounded-3xl bg-text_white/10 px-10 py-5 md:p-10 xl:max-w-none'>
          <h3 className='font-title text-xl md:text-2xl'>
            Admitted Hackers Only Discord Server
          </h3>
          <p className='font-subtext'>
            In addition to our general server, we have a 2025 specific server to
            help addmitted hackers team up and get help from mentors.
          </p>
          <a
            href='https://discord.gg/XgJGBTT82R' //2025 discord server link
            target='_blank'
            rel='noreferrer'
            className='flex h-16 w-full items-center justify-center rounded-md bg-white px-3 py-1.5 text-center font-subtext text-lg leading-6 text-dark_orange shadow-sm transition-colors hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark_orange disabled:bg-white/50 md:text-2xl'
          >
            Join 2025 Discord server
          </a>

        
          <Link
            to = '/support'
            className="flex h-16 w-full items-center justify-center rounded-md bg-white px-3 py-1.5 text-center font-subtext text-lg leading-6 text-dark_orange shadow-sm transition-colors hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark_orange disabled:bg-white/50 md:text-xl"
          >
            CruzHacks2025 Workshops + Schedule
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashbaordHacker
