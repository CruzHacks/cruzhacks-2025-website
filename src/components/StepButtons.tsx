import React from "react"
import { classNames } from "../utils/string"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

interface StepButtonsProps {
  isFirstStep: boolean
  isLastStep: boolean
  navBackward: () => void
}

export const StepButtons = ({
  isFirstStep,
  isLastStep,
  navBackward,
}: StepButtonsProps) => {
  return (
    <div className='flex w-full flex-row justify-between md:justify-center md:gap-10'>
      <button
        type='button'
        className={classNames(
          !isFirstStep
            ? "border-white text-white"
            : "cursor-not-allowed border-white/20 text-white/20",
          "flex h-10 w-24 items-center justify-between gap-1 rounded-2xl border-2 border-white bg-transparent px-4"
        )}
        onClick={navBackward}
        disabled={isFirstStep}
      >
        <ChevronLeftIcon className='mr-2 h-4 w-4' />
        <p>Back</p>
      </button>
      {!isLastStep ? (
        <button
          className='flex h-10 w-24 items-center justify-between gap-1 rounded-2xl border-2 border-none bg-white px-4 font-subtext text-blue-royal'
          type='submit'
        >
          <p>Next</p>
          <ChevronRightIcon className='ml-2 h-4 w-4' />
        </button>
      ) : (
        <button
          className='flex h-10 w-44 items-center justify-between gap-1 rounded-2xl border-2 border-none bg-white px-4 font-subtext text-blue-royal'
          type='submit'
        >
          <p>Next Section</p>
          <ChevronRightIcon className='ml-2 h-4 w-4' />
        </button>
      )}
    </div>
  )
}
