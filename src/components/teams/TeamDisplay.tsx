import React, { useEffect, useState } from "react"
import {
  TeamFormationProps,
  TeamMemberProps,
  TeamDisplayProps,
  TeamMemberTagProps,
} from "../../utils/types"
import useAuth from "../../hooks/useAuth"
import {
  deleteTeam,
  lockTeam,
  removeTeamMember,
} from "../../utils/apis/firebase"
import Modal from "../Modal"
import { LockClosedIcon, TrashIcon } from "@heroicons/react/24/solid"
import toast from "react-hot-toast"
import { classNames } from "../../utils/string"

export const TeamDisplay = (props: TeamDisplayProps) => {
  const {
    auth: { user },
  } = useAuth()

  const [openConfirm, setOpenConfirm] = useState<boolean>(false)
  const [openDelete, setOpenDelete] = useState<boolean>(false)

  if (!user) throw new Error("User could not be fetched from session")
  return (
    <>
      <Modal
        open={openConfirm}
        setOpen={setOpenConfirm}
        Icon={LockClosedIcon}
        title={`Lock in ${props.teamPage.teamName}?`}
        actionText='LOCK IN'
        description='Are you sure you want to lock in your team? You will no longer be able to add or remove members.'
        actionFunc={() => {
          lockTeam(user, props.teamPage.teamName)
            .then((newTeamPage: TeamFormationProps) => {
              props.setTeamPage(newTeamPage)
              toast.success("Team Locked In")
            })
            .catch(error => {
              toast.error(error.message)
            })
        }}
      />
      <Modal
        open={openDelete}
        setOpen={setOpenDelete}
        Icon={TrashIcon}
        title={`Delete ${props.teamPage.teamName}?`}
        actionText='DELETE TEAM'
        description='Are you sure you want to delete your team? This action cannot be undone.'
        actionFunc={() => {
          deleteTeam(user, props.teamPage.teamName)
            .then((newTeamPage: TeamFormationProps) => {
              props.setTeamPage(newTeamPage)
              props.setTeamStatus("JOIN")
              toast.success("Team Deleted")
            })
            .catch(error => {
              toast.error(error.message)
            })
        }}
      />
      <div className='space-y-10'>
        <div className='text-center font-title text-lg'>
          {props.teamPage.teamName || "<- No Team ->"}
        </div>
        <div className='space-y-3'>
          <div className='text-left font-title'>Team Members</div>
          <div className='flex flex-col gap-3'>
            {props.teamPage.teamMembers.map((member: TeamMemberProps) => {
              return (
                <TeamMemberTag
                  key={member.memberEmail}
                  email={member.memberEmail}
                  name={member.memberName}
                  type='ACCEPTED'
                  teamLeader={props.teamPage.teamLeader}
                  setTeamPage={props.setTeamPage}
                />
              )
            })}
            {props.teamPage.invitedTeamMembers.map(
              (member: TeamMemberProps) => {
                return (
                  <TeamMemberTag
                    key={member.memberEmail}
                    email={member.memberEmail}
                    name={member.memberName}
                    type='INVITED'
                    teamLeader={props.teamPage.teamLeader}
                    setTeamPage={props.setTeamPage}
                  />
                )
              }
            )}
          </div>
        </div>
        {props.teamPage.teamLeader === user?.email && (
          <div className='flex w-full flex-row flex-wrap place-content-center gap-5'>
            <button
              className='w-full rounded-md bg-error px-5 py-2 text-sm font-bold text-[#FFF] hover:bg-error/70 md:w-fit'
              onClick={() => setOpenDelete(true)}
            >
              DELETE TEAM
            </button>
            {!props.teamPage.lockedIn && (
              <button
                className='w-full rounded-md bg-success px-5 py-2 text-sm font-bold text-[#FFF] hover:bg-success/70 md:w-fit'
                onClick={() => setOpenConfirm(true)}
              >
                LOCK IN TEAM
              </button>
            )}
          </div>
        )}
      </div>
    </>
  )
}

const TeamMemberTag = (props: TeamMemberTagProps) => {
  const {
    auth: { user },
  } = useAuth()

  const [type, setType] = useState<string>("")

  useEffect(() => {
    if (props.teamLeader === props.email) setType("LEADER")
    else if (props.type === "ACCEPTED") setType("MEMBER")
    else if (props.type === "INVITED") setType("INVITED")
  }, [props.setTeamPage])

  return (
    <div className='flex w-full flex-row items-center justify-between rounded-md bg-blue-imperial p-2 md:px-5'>
      <p
        className={classNames(
          user?.email === props.email ? "text-orange" : "text-white",
          "text-md truncate text-center font-subtext"
        )}
      >
        {props.name || "<Empty>"}
      </p>
      <div className='flex flex-row flex-wrap place-content-center gap-1 md:gap-3'>
        {props.teamLeader === user?.email &&
          props.email !== props.teamLeader && (
            <button
              className='rounded-md border-2 border-[#F81A16] px-1.5 py-0.5 text-sm font-bold text-[#F81A16] hover:bg-[#F81A16] hover:text-[#FFF]'
              onClick={() => {
                removeTeamMember(user, props.email)
                  .then((newTeamPage: TeamFormationProps) => {
                    props.setTeamPage(newTeamPage)
                    toast.success("Team Member Removed")
                  })
                  .catch(error => {
                    toast.error(error.message)
                  })
              }}
            >
              Remove
            </button>
          )}
        <TeamMemberBadge type={type}></TeamMemberBadge>
      </div>
    </div>
  )
}

export interface BadgeProps {
  type: string
}

const TeamMemberBadge = (props: BadgeProps) => {
  if (props.type === "LEADER")
    return (
      <div className='w-24 rounded-md border-2 border-pink bg-pink px-1.5 py-0.5 text-center text-sm font-bold text-[#FFF]'>
        LEADER
      </div>
    )
  else if (props.type === "MEMBER")
    return (
      <div className='w-24 rounded-md border-2 border-blue-button bg-blue-button px-1.5 py-0.5 text-center text-sm font-bold text-[#FFF]'>
        MEMBER
      </div>
    )
  else if (props.type === "INVITED")
    return (
      <div className='w-24 rounded-md border-2 border-[#FA4437] bg-[#FA4437] px-1.5 py-0.5 text-center text-sm font-bold text-[#FFF]'>
        INVITED
      </div>
    )
  return <></>
}
