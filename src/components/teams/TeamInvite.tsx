import React, { useState } from "react"
import useAuth from "../../hooks/useAuth"
import { inviteTeamMember } from "../../utils/apis/firebase"
import { TeamInviteProps } from "../../utils/types"
import toast from "react-hot-toast"
import TextInput from "../inputs/TextInput"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

export const TeamInvite = (props: TeamInviteProps) => {
  const {
    auth: { user },
  } = useAuth()

  if (!user) throw new Error("User could not be fetched from session")

  const [invitedMemberEmail, setInvitedMemberEmail] = useState<string>("")

  return (
    <div className='flex w-full flex-col flex-wrap place-content-center gap-4 p-10'>
      <div className='text-center font-title text-lg'>Invite Members</div>
      <TextInput
        Icon={EnvelopeIcon}
        inputProps={{
          type: "text",
          placeholder: "Enter Email",
          value: invitedMemberEmail,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setInvitedMemberEmail(e.target.value),
        }}
      />
      <button
        className='-mt-5 flex h-16 w-full items-center justify-center rounded-md bg-white px-3 py-1.5 font-subtext text-2xl leading-6 text-blue-imperial shadow-sm transition-colors hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-royal disabled:bg-white/50'
        onClick={() => {
          inviteTeamMember(user, invitedMemberEmail)
            .then(team => {
              props.setTeamPage(team)
              setInvitedMemberEmail("")
              toast.success("Team Member Invited!")
            })
            .catch(error => {
              toast.error(error.message)
            })
        }}
      >
        INVITE MEMBER
      </button>
    </div>
  )
}
