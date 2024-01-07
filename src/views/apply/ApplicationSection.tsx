import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppState } from "../../hooks/useAppState"
import {
  mergeAppState,
  notifyValidationErrors,
} from "../../utils/hackerapplication"
import ApplicationRenderStep from "./ApplicationRenderStep"
import { z } from "zod"

interface SectionProps {
  section: string
  sectionSchema: z.AnyZodObject
  steps: any[]
  nextSection: string
}

const ApplicationSection = ({
  section,
  sectionSchema,
  steps,
  nextSection,
}: SectionProps) => {
  const navigate = useNavigate()
  const [appState, setAppState] = useAppState()

  const [step, setStep] = useState(0)

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
        navigate(`/j7hxc5p6ri/apply/${nextSection}`)
      } catch (err) {
        notifyValidationErrors(err)
      }
      return
    }

    setStep(step + 1)
  }

  const navBackward = () => {
    setStep(step - 1)
  }

  return (
    <div className='flex h-full grow flex-col md:gap-5'>
      <p className='mb-2 font-subtext uppercase text-white/50'>
        Step {step + 1} of {steps.length}
      </p>
      <div className='flex h-full grow flex-col pb-10'>
        {/* Super Important! Key must be unique so each react-hook-form instance on step is initliazed fresh */}
        {/* TODO: Better key would be constructed from fields */}
        <ApplicationRenderStep
          key={new Date().getTime()}
          step={steps[step]}
          section={section}
          sectionSchema={sectionSchema}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          navForward={navForward}
          navBackward={navBackward}
        />
      </div>
    </div>
  )
}

export default ApplicationSection
