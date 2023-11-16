import React from "react"
import { Combobox } from "@headlessui/react"
import { CheckIcon } from "@heroicons/react/24/solid"
import { classNames } from "../../utils/string"
import { Controller } from "react-hook-form"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

interface ComboboxInputProps {
  query: string
  setQuery: (query: string) => void
  options: string[]

  name: string
  control: any
  error?: string
}

const ComboboxInput = ({
  query,
  setQuery,
  options,

  name,
  control,
  error,
}: ComboboxInputProps) => {
  const filteredoptions =
    query === ""
      ? options
      : options.filter(options => {
          return options.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <div className='self-center'>
      <Controller
        name={name}
        control={control}
        defaultValue=''
        render={({ field: { onChange, value } }) => (
          <Combobox
            as='div'
            value={value}
            onChange={e => onChange(e)}
            className='w-[21rem]'
          >
            <div className='relative mt-2'>
              <Combobox.Input
                className={classNames(
                  error
                    ? "bg-error/10 text-error ring-error/10 placeholder:text-error/60 focus:ring-error/50"
                    : "bg-white/10 text-white ring-white/5 placeholder:text-white/50 focus:ring-white/40",
                  "w-full truncate rounded-md border-0 py-5 pl-3 pr-10 text-center font-subtext shadow-sm ring ring-inset focus:ring sm:leading-6"
                )}
                placeholder='Choose'
                onChange={event => setQuery(event.target.value)}
                displayValue={(options: string) => options}
              />
              <Combobox.Button className='absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none'>
                <ChevronDownIcon
                  className={classNames(
                    error ? "text-error" : "text-white",
                    "h-6 w-6"
                  )}
                  aria-hidden='true'
                />
              </Combobox.Button>

              {filteredoptions.length > 0 && (
                <Combobox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-blue-imperial py-1 shadow-lg ring-1 ring-white/5 focus:outline-none sm:text-sm'>
                  {filteredoptions.map(person => (
                    <Combobox.Option
                      key={person}
                      value={person}
                      className={({ active }) =>
                        classNames(
                          "relative cursor-default select-none py-2 pl-3 pr-9",
                          active
                            ? "bg-blue-royal/60 text-white"
                            : "text-white/80"
                        )
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={classNames(
                              selected && "text-pink",
                              "block truncate font-subtext"
                            )}
                          >
                            {person}
                          </span>

                          {selected && (
                            <span
                              className={classNames(
                                selected && "text-pink",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className='h-5 w-5'
                                aria-hidden='true'
                              />
                            </span>
                          )}
                        </>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              )}
            </div>
          </Combobox>
        )}
      />
      {error && <p className='mt-2 text-error'>{error}</p>}
    </div>
  )
}

export default ComboboxInput
