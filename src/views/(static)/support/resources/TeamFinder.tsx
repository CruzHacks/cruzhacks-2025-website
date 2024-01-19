import React from "react"
import Card from "../../../../components/Card"
import Button from "../../../../components/Button"
import { Link } from "react-router-dom"

const TeamFinder: React.FC = () => {
  return (
    <Card
      introTitle="Don't Have a Team Yet?"
      title='Find a Team to Join and Submit'
    >
      <ol className='m-auto flex flex-col gap-5 md:w-5/6'>
        <li>
          1. Join our Discord channel{" "}
          <a
            className='text-blue underline'
            href='https://discord.gg/rGjDTCk3Nx'
          >
            #team-formation
          </a>{" "}
          to find your team of hackers!
        </li>
        <p className='text-center font-bold uppercase text-blue-chinese'>
          Team Formation Guidelines
        </p>
        <li className='flex flex-col gap-2 md:px-5'>
          <ol className='space-y-5'>
            <li className='flex items-center gap-5'>
              <p className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-chinese/20 font-title font-bold text-blue-chinese'>
                1
              </p>
              Must be compromised of 1-4 people
            </li>
            <li className='flex items-center gap-5'>
              <p className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-chinese/20 font-title font-bold text-blue-chinese'>
                2
              </p>
              The project must be completed at the event
            </li>
            <li className='flex items-center gap-5'>
              <p className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-chinese/20 font-title font-bold text-blue-chinese'>
                3
              </p>
              All members must be an accepted applicant to CruzHacks 2024
            </li>
          </ol>
        </li>
        <li>
          2. Found your team? Log in and{" "}
          <Link className='text-blue-button underline' to='/portal/hacker/team'>
            submit your team in the CruzHacks portal
          </Link>{" "}
          and get ready to start hacking!
        </li>
      </ol>
      <div className='flex w-full flex-col items-stretch pt-5'>
        <Button
          text='Submit Team'
          link='/portal/hacker/team'
          type='full'
          override='w-full md:w-1/2 m-auto'
        />
      </div>
    </Card>
  )
}

export default TeamFinder
