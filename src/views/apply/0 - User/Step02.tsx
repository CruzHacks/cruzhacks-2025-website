import React from "react"
import TextInput from "../../../components/inputs/TextInput"
import { LockClosedIcon } from "@heroicons/react/24/outline"
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { StepButtons } from "../../../components/StepButtons"
import { useAppState } from "../../../hooks/useAppState"
import { StepProps } from "."

const Step02Schema = z
  .object({
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirm_password: z.string().min(1, "Password confirmation is required"),
  })
  .refine(data => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  })

type Step02Schema = z.infer<typeof Step02Schema>

const Step02 = ({
  isFirstStep,
  isLastStep,
  navForward,
  navBackward,
}: StepProps) => {
  const [appState] = useAppState()
  const defaultValues = appState && appState.user ? appState.user : {}
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step02Schema>({
    defaultValues,
    resolver: zodResolver(Step02Schema),
  })

  /**
   * Refines form data to match Application Schema
   * @param data form data from schema
   * @returns valid Application Schema properties
   */
  const refineForm: SubmitHandler<Step02Schema> = data => {
    const { password } = data
    navForward({ password })
  }

  return (
    <form
      className='flex h-full grow flex-col justify-between gap-10'
      onSubmit={handleSubmit(refineForm)}
    >
      <div className='flex h-full grow flex-col items-stretch justify-center gap-10 md:items-center md:justify-start'>
        {/* Block */}
        <div className='flex w-full flex-col items-stretch justify-center sm:items-center'>
          <h1 className='mb-2 text-center font-title text-4xl'>Password</h1>
          <p className='max-w-xl pb-5 text-center font-subtext'>
            Please write down these credentials! You will need them to login
            later.
          </p>
        </div>

        {/* Block */}
        <div className='flex w-full flex-col items-stretch justify-center sm:items-center'>
          <TextInput
            Icon={LockClosedIcon}
            inputProps={{
              ...register("password"),
              type: "password",
              placeholder: "Password",
            }}
            error={errors.password && errors.password.message}
          />
        </div>

        {/* Block */}
        <div className='flex w-full flex-col items-stretch justify-center sm:items-center'>
          <TextInput
            Icon={LockClosedIcon}
            inputProps={{
              ...register("confirm_password"),
              type: "password",
              placeholder: "Confirm Password",
            }}
            error={errors.confirm_password && errors.confirm_password.message}
          />
        </div>
      </div>

      <StepButtons
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        navBackward={navBackward}
      />
    </form>
  )
}

export default Step02
