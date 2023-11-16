import React, { useEffect } from "react"
import { z } from "zod"
import {
  AppDemographicsSchema,
  AppLogisticsSchema,
  AppShortResponseSchema,
  AppSocialsSchema,
  AppUserSchema,
} from "../../utils/types"
import { useNavigate } from "react-router-dom"
import { useAppState } from "../../hooks/useAppState"
import ProgressBar from "../../components/ProgressBar"
import {
  getCurrentSection,
  isSectionValid,
} from "../../utils/hackerapplication"

const appSchemas = {
  user: AppUserSchema,
  demographics: AppDemographicsSchema,
  short_response: AppShortResponseSchema,
  logistics: AppLogisticsSchema,
  socials: AppSocialsSchema,
  waivers: z.object({}),
}

const sections = Object.keys(appSchemas)

const ProgressBarWrapper = () => {
  const [appState] = useAppState()
  const navigate = useNavigate()

  const isSectionEmpty = (key: string) => !appState || !(key in appState)

  const currentSection = getCurrentSection()

  // Construct progress bar props
  const steps = sections.map(key => {
    return {
      name: key,
      valid:
        !isSectionEmpty(key) && key !== currentSection
          ? isSectionValid(
              appSchemas[key as keyof typeof appSchemas],
              appState[key]
            )
          : undefined,
    }
  })

  const activeStep =
    currentSection === "review"
      ? sections.length
      : sections.indexOf(currentSection)

  const navSection = (section: string) => {
    if (sections.indexOf(section) == -1) {
      console.error(
        `Can't navigate to section "${section}": Section does not exist`
      )
      return
    }

    if (section == currentSection) return

    navigate(`/apply/${section}`)
  }

  // Navigate to beginning of form if section is empty on first render
  useEffect(() => {
    if (currentSection != sections[0] && isSectionEmpty(currentSection)) {
      navigate(`/apply/${sections[0]}`)
    }
  }, [])

  return (
    <div className='flex items-center justify-between'>
      <ProgressBar steps={steps} activeStep={activeStep} navStep={navSection} />
    </div>
  )
}

export default ProgressBarWrapper
