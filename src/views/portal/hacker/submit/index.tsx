import React from "react"
import useTeam from "../../../../hooks/useTeam"
import useAuth from "../../../../hooks/useAuth"
import { Link } from "react-router-dom"
import { TeamSubmit } from "../../../../components/teams/TeamSubmit"
import { classNames } from "../../../../utils/string"
import type { User } from "firebase/auth"
import { TeamFormationProps } from "../../../../utils/types"
import { XCircleIcon } from "@heroicons/react/24/outline"

/**
 * Check if team has submitted a devpost link
 * @param team Team object
 * @returns true if team has submitted a devpost link
 */
const isTeamSubmitted = (team: any): team is TeamFormationProps => {
  if (!team) return false

  return team.devPostLink !== undefined
}

/**
 * Check if user is team leader
 * @param team Team object
 * @param user User object
 * @returns boolean
 */
const isTeamLeader = (team: any, user: User | null) => {
  if (!team || !user) return false

  return team.teamLeader === user.email
}

/**
 * Check if team is locked in
 * @param team Team object
 * @returns boolean
 */
const isLockedIn = (team: any) => {
  if (!team) return false

  return team.lockedIn === true
}

// TODO: Update team type to include devPostLink and prizeTrack
// TODO: Mutate on submit
const SubmitHacker = () => {
  const {
    auth: { user },
  } = useAuth()

  const { isLoading, isError, data: team, error } = useTeam(user)

  const NotQualifiedDisplay = () => {
    if (!isTeamLeader(team, user)) {
      return (
        <div className='w-full max-w-xl space-y-5 rounded-3xl bg-[#4659FF]/10 px-10 py-5 md:p-10'>
          <div className='flex flex-col items-center gap-5 md:flex-row'>
            <XCircleIcon className='h-auto w-10 text-error md:w-20' />
            <h1 className='font-title text-xl'>
              Sorry! Seems like you are not a team leader
            </h1>
          </div>
          <p className='font-subtext'>
            Only team leaders are allowed to submit projects. If you are alone
            please create a team of one.
          </p>
        </div>
      )
    } else if (!isLockedIn(team)) {
      return (
        <div className='w-full max-w-xl space-y-5 rounded-3xl bg-[#4659FF]/10 px-10 py-5 md:p-10'>
          <div className='flex flex-col items-center gap-5 md:flex-row'>
            <XCircleIcon className='h-auto w-10 text-error md:w-20' />
            <h1 className='font-title text-xl'>
              Sorry! Your team is not locked in
            </h1>
          </div>
          <p className='font-subtext'>
            Please lock in your team to submit your project.
          </p>
        </div>
      )
    }

    return (
      <div className='h-full w-full space-y-5 rounded-3xl bg-[#4659FF]/10 px-10 py-5 md:p-10'>
        <h1 className='font-title text-xl'>Sorry! Something is wrong...</h1>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='flex h-60 justify-center'>
        <div role='status' className='flex w-full items-center justify-center'>
          <svg
            aria-hidden='true'
            className='h-20 w-20 animate-spin fill-white text-blue-imperial/30'
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
              fill='currentColor'
            />
            <path
              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
              fill='currentFill'
            />
          </svg>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className='flex min-h-full w-full flex-col items-center justify-center p-10'>
        <p className='font-subtext leading-8 text-error'>
          Error while loading team:
        </p>
        <p className='break-all font-subtext leading-8 text-error'>
          {error.message}
        </p>
      </div>
    )
  }

  return (
    <div className='space-y-10 overflow-x-clip px-4 sm:px-6 lg:px-8'>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='font-title text-2xl font-semibold leading-6'>
            Project Submission
          </h1>
          <p className='text-gray-700 mt-2 text-sm'>
            When you are ready to submit your project, please fill out this
            form.
          </p>
        </div>
      </div>

      {isTeamLeader(team, user) && isLockedIn(team) ? (
        <div className='flex min-w-0 flex-col items-start gap-10 xl:flex-row'>
          <div className='max-w-2xl space-y-10'>
            <div className='h-full w-full space-y-5 rounded-3xl bg-[#4659FF]/10 px-10 py-5 md:p-10'>
              <h3 className='font-title text-lg'>
                1. Log In to DevPost account
              </h3>
              <p className='font-subtext'>
                Log into DevPost and go to{" "}
                <Link
                  to='https://cruzhacks-2024.devpost.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-button underline'
                >
                  CruzHacks 2024&apos;s DevPost page
                </Link>
                . If you do not have an account, please create an account with
                your UCSC or affiliated school account
              </p>
            </div>

            <div className='h-full w-full rounded-3xl bg-[#4659FF]/10'>
              <div className='max-w-xs space-y-10 px-10 py-5 sm:max-w-none md:p-10'>
                <div className='space-y-5'>
                  <h3 className='font-title text-lg'>2. Submit Project</h3>
                  <p className='font-subtext'>
                    <span className='font-bold text-pink'>
                      Click on submit project
                    </span>{" "}
                    and follow steps to complete project submission process on
                    DevPost. Once you have finished,{" "}
                    <span className='font-bold text-pink'>
                      please copy your project link and paste here.
                    </span>
                  </p>
                </div>
                <TeamSubmit />
              </div>
            </div>

            <div className='h-full w-full space-y-5 rounded-3xl bg-[#4659FF]/10 px-10 py-5 md:p-10'>
              <h3 className='font-title text-lg'>
                3. Get ready to deliever your live pitch!
              </h3>
              <p className='font-subtext'>
                Need some tips on how to make a killer pitch? Check out some of
                these resources!
              </p>
              <ul className='list-disc ps-10'>
                <li>
                  UX Design{" "}
                  <Link
                    to='https://uxdesign.cc/a-quick-checklist-for-hackathon-idea-presentation-2053b781ee24'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-button underline'
                  >
                    Beginners Hackathon Presentation
                  </Link>
                </li>
                <li>
                  Checklist David Beckett&apos;s{" "}
                  <Link
                    to='https://www.linkedin.com/pulse/how-win-hackathon-pitch-david-beckett/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-button underline'
                  >
                    How to Win a Hackathon Pitch
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='h-full w-full max-w-2xl grow space-y-5 rounded-3xl bg-[#4659FF]/10 px-10 py-5 md:p-10'>
            <h3 className='font-title text-lg'>Submission Status</h3>
            <h2
              className={classNames(
                isTeamSubmitted(team) && team.prizeTrack
                  ? "text-success"
                  : "text-error",
                "font-subtext text-xl font-bold"
              )}
            >
              {isTeamSubmitted(team) ? "SUBMITTED" : "NO SUBMISSION"}
            </h2>
            {isTeamSubmitted(team) && (
              <div className='space-y-2'>
                <p>
                  DevPost Link:{" "}
                  {isTeamSubmitted(team) ? (
                    <a
                      href={team.devPostLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-button underline'
                    >
                      {team?.devPostLink}
                    </a>
                  ) : (
                    <span className='text-pink'>Not Submitted</span>
                  )}
                </p>
                <p>
                  Main Prize Track:{" "}
                  <span
                    className={classNames(
                      isTeamSubmitted(team) && team.prizeTrack
                        ? "text-orange"
                        : "text-pink"
                    )}
                  >
                    {(isTeamSubmitted(team) && team.prizeTrack) ||
                      "Not Submitted"}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <NotQualifiedDisplay />
      )}
    </div>
  )
}

export default SubmitHacker
