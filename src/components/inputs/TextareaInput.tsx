import React from "react"
import { classNames } from "../../utils/string"

interface TextareaInputProps {
  rows?: number
  inputProps?: any
  showCount?: boolean
  characterCount?: number
  error?: string
  maxLength?: number
}

const TextareaInput = ({
  rows = 4,
  error,
  inputProps,
  showCount = true,
  characterCount,
  maxLength = 1500,
}: TextareaInputProps) => {
  return (
    <div className='self-stretch'>
      <div
        className={classNames(
          error
            ? "bg-error/10 ring-error/10 focus-within:ring-error/50"
            : "bg-white/10 ring-white/5 focus-within:ring-white/40",
          "mt-2 gap-3 space-y-1 rounded-md p-4 pb-2 shadow-sm ring ring-inset"
        )}
      >
        <textarea
          rows={rows}
          className={classNames(
            error
              ? "text-error placeholder:text-error/60"
              : "text-white placeholder:text-white/60",
            "block w-full resize-none border-0 bg-transparent font-subtext shadow-sm focus:ring-0 sm:text-sm sm:leading-6"
          )}
          placeholder='Your answer'
          {...inputProps}
        />
        {showCount && (
          <p
            className={classNames(
              error ? "text-error" : "text-white",
              "w-full text-right font-subtext"
            )}
          >
            {characterCount || "0"}/{maxLength}
          </p>
        )}
      </div>

      {error && <p className='mt-2 text-error'>{error}</p>}
    </div>
  )
}

export default TextareaInput
