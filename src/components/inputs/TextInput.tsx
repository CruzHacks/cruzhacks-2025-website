import React from "react"
import { classNames } from "../../utils/string"
import { ExclamationCircleIcon } from "@heroicons/react/24/solid"
import { HeroIcon } from "../../utils/types"

interface TextInputProps {
  Icon?: HeroIcon
  error?: string
  inputProps?: any
}

// TODO: Fix wack autofill styling
const TextInput = ({ Icon, error, inputProps }: TextInputProps) => {
  return (
    <div>
      <div
        className={classNames(
          error
            ? "bg-error/10 text-error ring-error/10 focus-within:ring-error/50"
            : "mb-7 bg-text_white/30 text-text_white ring-text_white/20 focus-within:ring-text_white/70",
          "relative flex gap-3 rounded-md p-4 shadow-sm ring ring-inset"
        )}
      >
        {Icon ? (
          <Icon
            className={classNames(error ? "text-error" : "text-text_white", "w-8")}
          />
        ) : (
          <div className='w-8'></div>
        )}
        <input
          {...inputProps}
          aria-invalid={error ? "true" : "false"}
          className={classNames(
            error
              ? "border-dark_orange/90 text-dark_orange placeholder:text-error/60 focus:border-error/80 "
              : "border-text_white/60 text-text_white placeholder:text-text_white/90 focus:border-text_white/80",
            "mr-5 block w-full truncate border-0 border-b-2 bg-transparent p-0 pr-5 font-subtext ring-0 focus:ring-0"
          )}
        />
        {error && (
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-8'>
            <ExclamationCircleIcon className='h-5 w-5' aria-hidden='true' />
          </div>
        )}
      </div>
      {error && (
        <p
          className='text mt-2 h-5 text-error'
          id={inputProps["aria-describedby"] || ""}
        >
          {error}
        </p>
      )}
    </div>
  )
}

export default TextInput
