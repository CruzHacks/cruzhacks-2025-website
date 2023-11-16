import React, { useState } from "react"
import { AppUserSchema } from "../../../utils/types"
import { useNavigate } from "react-router-dom"
import { useAppState } from "../../../hooks/useAppState"
import Step01 from "./Step01"
import Step02 from "./Step02"
import {
  mergeAppState,
  notifyValidationErrors,
} from "../../../utils/hackerapplication"

export interface StepProps {
  isFirstStep: boolean
  isLastStep: boolean
  navForward: (data: any) => void
  navBackward: () => void
}

const section = "user"
const sectionSchema = AppUserSchema
const steps = [Step01, Step02]
const nextSection = "demographics"

const UserSection = () => {
  const navigate = useNavigate()
  const [appState, setAppState] = useAppState()

  const [step, setStep] = useState(0)
  const CurrentStep = steps[step]

  // RenderStep props
  const isFirstStep = step === 0
  const isLastStep = step === steps.length - 1

  const navForward = (data: any) => {
    const _appState = mergeAppState(section, data, appState)
    setAppState(_appState)

    // Navigate to next section if this is the last step
    if (isLastStep) {
      try {
        sectionSchema.parse(_appState[section])
        navigate(`/apply/${nextSection}`)
      } catch (err) {
        notifyValidationErrors(err)
      }
      return
    }

    setStep(step + 1)
  }

  return (
    <div className='flex h-full grow flex-col md:gap-5'>
      <p className='mb-2 font-subtext uppercase text-white/50'>
        Step {step + 1} of {steps.length}
      </p>
      <div className='flex h-full grow flex-col pb-10'>
        <CurrentStep
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          navForward={navForward}
          navBackward={() => setStep(step - 1)}
        />
      </div>
    </div>
  )
}

export default UserSection
