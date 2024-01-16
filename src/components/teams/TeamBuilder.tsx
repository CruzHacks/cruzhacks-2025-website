import React, { Dispatch, useState } from "react"
import { createTeam, rsvpInvite } from "../../utils/apis/firebase"
import {
  TeamBuilderProps,
  TeamFormationProps,
  InvitationMode,
  InvitationProps,
} from "../../utils/types"
import useAuth from "../../hooks/useAuth"
import toast from "react-hot-toast"
import { classNames } from "../../utils/string"
import TextInput from "../inputs/TextInput"
import { UserGroupIcon } from "@heroicons/react/24/outline"

export const TeamBuilder = (props: TeamBuilderProps) => {
  return (
    <div className='flex w-full min-w-0 flex-col gap-10'>
      <div className='text-center font-title text-lg'>
        Would you like to create or join a team?
      </div>
      <InvitationTypeChooser
        teamStatus={props.teamStatus}
        setTeamStatus={props.setTeamStatus}
      />
      {props.teamStatus === "JOIN" ? (
        <JoinTeam
          invites={props.teamPage.invites}
          setTeamPage={props.setTeamPage}
        />
      ) : (
        <CreateTeam teamPage={props.teamPage} setTeamPage={props.setTeamPage} />
      )}
    </div>
  )
}

const InvitationTypeChooser = (props: {
  teamStatus: InvitationMode
  setTeamStatus: Dispatch<InvitationMode>
}) => {
  return (
    <div className='flex flex-row flex-wrap place-content-center'>
      <button
        className='p-3'
        onClick={() => {
          props.setTeamStatus(props.teamStatus == "JOIN" ? "CREATE" : "JOIN")
        }}
      >
        <div className='flex flex-row content-center gap-3 rounded-lg bg-white/40 px-2 py-1 text-sm'>
          <div
            className={classNames(
              props.teamStatus === "JOIN"
                ? "bg-blue-chinese"
                : "text-blue-imperial",
              "rounded-md px-3 py-1 font-bold uppercase"
            )}
          >
            Join
          </div>
          <div
            className={classNames(
              props.teamStatus === "CREATE"
                ? "bg-blue-chinese"
                : "text-blue-imperial",
              "rounded-md px-3 py-1 font-bold uppercase"
            )}
          >
            Create
          </div>
        </div>
      </button>
    </div>
  )
}

const JoinTeam = (props: {
  invites: Array<InvitationProps>
  setTeamPage: Dispatch<TeamFormationProps>
}) => {
  return (
    <div className='flex min-w-0 flex-col gap-2'>
      <div className='font-bold'>Pending Invitations</div>
      <div className='flex w-full min-w-0 flex-col gap-3'>
        {props.invites.length === 0 ? (
          <div className='rounded-md bg-blue-imperial px-5 py-2 font-subtext text-sm'>
            No Pending Invitations...
          </div>
        ) : (
          props.invites.map(invite => (
            <Invitation
              key={invite.teamName}
              teamName={invite.teamName}
              setTeamPage={props.setTeamPage}
            />
          ))
        )}
      </div>
    </div>
  )
}

const Invitation = (props: {
  teamName: string
  setTeamPage: Dispatch<TeamFormationProps>
}) => {
  const {
    auth: { user },
  } = useAuth()

  if (!user) throw new Error("User could not be fetched from session")

  return (
    <div className='flex w-full min-w-0 max-w-full flex-row items-center justify-between rounded-md bg-blue-imperial px-5 py-2 font-subtext text-sm'>
      <p className='truncate text-sm'>{props.teamName}</p>
      <div className='flex min-w-0 flex-row gap-3'>
        <button
          className='w-16 rounded-md border-2 border-success px-1.5 py-0.5 text-xs text-success hover:bg-success hover:text-[#FFF] md:w-20 md:text-sm'
          onClick={() => {
            rsvpInvite(user, props.teamName, "ACCEPTED")
              .then(team => {
                props.setTeamPage(team)
                toast.success("Invited Accepted!")
              })
              .catch(error => {
                toast.error(error.message)
              })
          }}
        >
          Accept
        </button>
        <button
          className='w-16 rounded-md border-2 border-error px-1.5 py-0.5 text-xs text-error hover:bg-error hover:text-[#FFF] md:w-20 md:text-sm'
          onClick={() => {
            rsvpInvite(user, props.teamName, "DECLINED")
              .then(team => {
                props.setTeamPage(team)
                toast.success("Invited Declined")
              })
              .catch(error => {
                toast.error(error.message)
              })
          }}
        >
          Decline
        </button>
      </div>
    </div>
  )
}

const CreateTeam = (props: {
  teamPage: TeamFormationProps
  setTeamPage: Dispatch<TeamFormationProps>
}) => {
  const {
    auth: { user },
  } = useAuth()

  if (!user) throw new Error("User could not be fetched from session")

  const [teamNameInput, setTeamNameInput] = useState<string>("")

  return (
    <div className='flex flex-col gap-5'>
      <div>
        <h3 className='font-bold'>Please Input Your Team Name</h3>
        <p className='font-subtext text-xs text-white/70'>
          Please keep names appropriate. Hateful or inappropriate names will
          result in team deletion.
        </p>
      </div>

      <TextInput
        Icon={UserGroupIcon}
        inputProps={{
          placeholder: "Enter Name",
          type: "text",
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setTeamNameInput(e.target.value),
        }}
      />

      <button
        className='-mt-5 flex h-16 w-full items-center justify-center rounded-md bg-white px-3 py-1.5 font-subtext text-2xl leading-6 text-blue-imperial shadow-sm transition-colors hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-royal disabled:bg-white/50'
        onClick={() =>
          createTeam(user, teamNameInput)
            .then(team => {
              props.setTeamPage(team)
              toast.success("Team Created!")
            })
            .catch(error => {
              toast.error(error.message)
            })
        }
      >
        CREATE
      </button>
    </div>
  )
}
