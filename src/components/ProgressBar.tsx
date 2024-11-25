import React from "react"
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { classNames } from "../utils/string"

const LineSegment = ({ active }: { active: boolean }) => {
  return (
    <div
      className={classNames(
        active ? "bg-medium_yellow" : "bg-dark_orange",
        "flex h-0.5 w-full "
      )}
    />
  )
}

const BubbleSegment = ({
  valid,
  current,
}: {
  valid?: boolean
  current: boolean
}) => {
  return (
    <div
      className={classNames(
        valid !== undefined
          ? valid
            ? current
              ? "border-white bg-deep_orange"
              : "border-deep_orange bg-medium_yellow"
            : "border-error bg-error"
          : current
          ? "border-deep_orange bg-medium_yellow"
          : "border-deep_orange bg-deep_orange",
        "h-5 w-5 rounded-full  border-2 text-black"
      )}
    >
      {valid == undefined ? (
        <div className='h-4 w-4' />
      ) : valid ? (
        <CheckIcon className='h-4 w-4' aria-hidden='true' />
      ) : (
        <XMarkIcon className='h-4 w-4' aria-hidden='true' />
      )}
    </div>
  )
}

interface ProgressBarProps {
  steps: { name: string; valid?: boolean }[]
  activeStep: number
  navStep?: (section: string) => void
}

const ProgressBar = ({ steps, activeStep, navStep }: ProgressBarProps) => {
  return (
    <div className='relative flex w-full flex-row flex-nowrap items-center'>
      {steps.map((step, index) => (
        <div
          key={index}
          className={
            index === 0
              ? "relative flex flex-row items-center justify-end"
              : "relative flex w-full flex-row items-center justify-end"
          }
        >
          {index !== 0 && (
            <LineSegment
              active={step.valid !== undefined || index == activeStep}
            />
          )}
          {navStep ? (
            <button
              onClick={() => navStep(step.name)}
              disabled={step.valid == undefined && index !== activeStep}
            >
              <BubbleSegment valid={step.valid} current={index == activeStep} />
            </button>
          ) : (
            <BubbleSegment valid={step.valid} current={index == activeStep} />
          )}
        </div>
      ))}
    </div>
  )
}

export default ProgressBar
