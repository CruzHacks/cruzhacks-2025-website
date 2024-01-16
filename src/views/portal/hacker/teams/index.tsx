import React, { useEffect, useReducer, useState } from "react"
import { InvitationMode, TeamFormationProps } from "../../../../utils/types"
import { getTeamProfile } from "../../../../utils/apis/firebase"
import { TeamDisplay } from "../../../../components/teams/TeamDisplay"
import useAuth from "../../../../hooks/useAuth"
import { TeamBuilder } from "../../../../components/teams/TeamBuilder"
import { TeamInvite } from "../../../../components/teams/TeamInvite"
import { classNames } from "../../../../utils/string"

const TeamHacker = () => {
  const {
    auth: { user },
  } = useAuth()

  const initialTeamPage: TeamFormationProps = {
    teamName: "",
    teamMembers: [],
    invitedTeamMembers: [],
    teamLeader: "",
    lockedIn: false,
    invites: [],
  }

  // reducer for teamPage to set all non-set fields in teamPage to initial fields
  const teamPageReducer = (
    state: TeamFormationProps,
    action: Partial<TeamFormationProps>
  ) => {
    return { ...state, ...action }
  }

  const [loading, setLoading] = useState<boolean>(true)
  const [teamPage, setTeamPage] = useReducer(teamPageReducer, initialTeamPage)
  const [teamStatus, setTeamStatus] = useState<InvitationMode>("JOIN")

  useEffect(() => {
    if (!user) throw new Error("User could not be fetched from session")
    getTeamProfile(user).then(team => {
      setTeamPage(team)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    console.log("fromt useEffect", teamPage)
    teamPage.teamName !== "" ? setTeamStatus("INTEAM") : setTeamStatus("JOIN")
  }, [teamPage])

  if (loading) {
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

  return (
    <div className='space-y-10 px-4 sm:px-6 lg:px-8'>
      <div className='space-y-5'>
        <h1 className='font-title text-2xl font-semibold uppercase leading-6'>
          Team Formation
        </h1>

        <div>
          <h2 className='text-l py-3 font-semibold'>Team Guidelines</h2>
          <ul className='list-disc ps-10'>
            <li>Must be comprised of 1-4 hackers</li>
            <li>The project must completed at the event</li>
            <li>All members must be a confirmed attendee</li>
            <li>
              Please keep names appropriate or all members will be disqualified
            </li>
          </ul>
        </div>
      </div>

      <div className='flex min-w-0 items-center justify-center'>
        {teamStatus == "INTEAM" ? (
          <div
            className={classNames(
              teamPage.teamLeader !== user?.email ? "max-w-2xl" : "",
              "flex w-full min-w-0 flex-col gap-10 xl:flex-row"
            )}
          >
            <div className='w-full min-w-0 rounded-3xl bg-[#4659FF]/10 p-5 md:p-10'>
              <TeamDisplay
                teamPage={teamPage}
                setTeamPage={setTeamPage}
                setTeamStatus={setTeamStatus}
              />
            </div>
            {teamPage.teamLeader === user?.email && (
              <div className='w-full min-w-fit rounded-3xl bg-[#4659FF]/10 p-5 md:p-10 xl:flex-1'>
                <TeamInvite teamPage={teamPage} setTeamPage={setTeamPage} />
              </div>
            )}
          </div>
        ) : (
          <div className='flex w-full min-w-0 max-w-2xl flex-row rounded-xl bg-[#4659FF]/10 p-5 drop-shadow-lg md:p-10'>
            <TeamBuilder
              teamPage={teamPage}
              teamStatus={teamStatus}
              setTeamPage={setTeamPage}
              setTeamStatus={setTeamStatus}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default TeamHacker
