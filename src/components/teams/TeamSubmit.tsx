import React, { useState } from "react"
import useAuth from "../../hooks/useAuth"
import TextInput from "../inputs/TextInput"
import { LinkIcon } from "@heroicons/react/24/outline"
import ComboboxInput from "../inputs/ComboboxInput"
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import useTeamSubmitMutation from "../../hooks/useTeamSubmitMutation"
import ConfettiExplosion from "react-confetti-explosion"

const submissionSchema = z.object({
  devPostLink: z.string().url(),
  prizeTrack: z.enum(["Justice", "Sustainability", "Health", "Education"], {
    errorMap: (iss, ctx) => {
      console.log(iss)
      if (iss.code === z.ZodIssueCode.invalid_enum_value) {
        return { message: "Please select a track" }
      }

      return { message: ctx.defaultError }
    },
  }),
})
type SubmissionSchemaType = z.infer<typeof submissionSchema>

export const TeamSubmit = () => {
  const [comboboxQuery, setComboboxQuery] = useState("")
  const [isExploding, setIsExploding] = useState(false)

  const {
    auth: { user },
  } = useAuth()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SubmissionSchemaType>({ resolver: zodResolver(submissionSchema) })

  const { mutate: submitLink, isPending } = useTeamSubmitMutation()

  const handleDevpostSubmit: SubmitHandler<
    SubmissionSchemaType
  > = async data => {
    if (!user) {
      console.error("User could not be fetched from session")
      return
    }

    const { devPostLink, prizeTrack } = data
    submitLink(
      { user, devPostLink, prizeTrack },
      { onSuccess: () => setIsExploding(true) }
    )
  }

  if (!user) throw new Error("User could not be fetched from session")

  return (
    <form
      onSubmit={handleSubmit(handleDevpostSubmit)}
      className='flex min-w-0 flex-col gap-5 overflow-x-scroll md:overflow-visible'
    >
      <div>
        <h3 className='font-bold'>DevPost project page Link</h3>
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
          ...register("devPostLink"),
        }}
        error={errors.devPostLink && errors.devPostLink.message}
      />

      <div className='space-y-5'>
        <h3 className='font-bold'>Main Prize Track</h3>
        <ComboboxInput
          query={comboboxQuery}
          setQuery={setComboboxQuery}
          name={"prizeTrack"}
          options={["Justice", "Sustainability", "Health", "Education"]}
          control={control}
          error={errors.prizeTrack && errors.prizeTrack.message}
        />
      </div>
      <button
        type='submit'
        className='relative flex h-16 w-full items-center justify-center rounded-md bg-white px-3 py-1.5 font-subtext text-2xl leading-6 text-blue-imperial shadow-sm transition-colors hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-royal disabled:bg-white/50'
      >
        {isExploding && <ConfettiExplosion className='fixed' />}
        {isPending ? (
          <div
            role='status'
            className='flex w-full items-center justify-center'
          >
            <svg
              aria-hidden='true'
              className='h-6 w-6 animate-spin fill-white text-blue-imperial/30'
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
        ) : (
          <span>Submit</span>
        )}
      </button>
    </form>
  )
}
