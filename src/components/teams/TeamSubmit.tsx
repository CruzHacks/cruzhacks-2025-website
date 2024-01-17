import React, { useState } from "react"
import { submitLink } from "../../utils/apis/firebase"
import useAuth from "../../hooks/useAuth"
import toast from "react-hot-toast"
import TextInput from "../inputs/TextInput"
import { LinkIcon } from "@heroicons/react/24/outline"
import { TeamSubmitProps } from "../../utils/types"

export const TeamSubmit = (props: TeamSubmitProps) => {
  const {
    auth: { user },
  } = useAuth()

  const [linkInput, setLinkInput] = useState(props.teamPage.devPostLink)

  if (!user) throw new Error("User could not be fetched from session")

  return (
    <div className='flex flex-col gap-5'>
      <div>
        <h3 className='font-bold'>
          Input the DevPost project page Link for your team
        </h3>
        <p>
          Input link as{" "}
          <span className='font-subtext'>
            https://devpost.com/&lt;yourprojectlink&gt;
          </span>
        </p>
      </div>

      <TextInput
        Icon={LinkIcon}
        inputProps={{
          placeholder: "Enter DevPost Link",
          type: "text",
          value: linkInput,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setLinkInput(e.target.value),
        }}
      />

      <button
        className='-mt-5 flex h-16 w-full items-center justify-center rounded-md bg-white px-3 py-1.5 font-subtext text-2xl leading-6 text-blue-imperial shadow-sm transition-colors hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-royal disabled:bg-white/50'
        onClick={() => {
          let tempLink = linkInput
          if (linkInput && linkInput.substring(0, 4) !== "http") {
            tempLink = "http://" + tempLink
            setLinkInput(tempLink)
          }
          submitLink(user, tempLink)
            .then(team => {
              props.setTeamPage(team)
              toast.success("Link Submitted!")
            })
            .catch(error => {
              toast.error(error.message)
            })
        }}
      >
        SUBMIT
      </button>
    </div>
  )
}
