import React, { useState } from "react"
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { classNames } from "../../utils/string"
import { ExclamationCircleIcon } from "@heroicons/react/24/solid"
import { useAuth } from "../../contexts/auth"
import validator from "validator"
import { submitApplication } from "../../utils/functionsApi"

// This component uses react-hook-form to handle data validation and input
// specific errors. Follow this tutorial to learn more about how Zod is used in
// react-hook-form to validate the schema:
// https://react-hook-form.com/get-started#SchemaValidation

// Schema pulled from 2023 Hacker Application form:
// https://docs.google.com/forms/d/1qtk6kBBq6jZ9rprDl-U_4Pvl5vhJ30PH2B759A-xA1k/edit
export const ApplicationSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  phone_number: z
    .string()
    .min(1, "A phone number is required")
    .refine(validator.isMobilePhone, "Invalid phone number"),

  // Demographic Section
  age: z
    .number()
    .min(12, "Must be at least 12 years old")
    .max(100, "Invalid age"),
  country: z.string(), // possibly use api to pull countries
  school: z.string(), // possibly use api to pull schools
  education_level: z.string(), // create enum
  graduation_year: z.string().optional(), // date picker or radio button,
  highest_education_level: z.string().optional(), // create enum
  ucsc_college_affiliation: z.string().optional(), // create enum
  area_of_study: z.string(), // possibly use api to pull countries
  first_hackathon: z.boolean().optional(),

  ethnic_background: z.string().array(),
  pronouns: z.string(),
  gender: z.string(),
  sexual_orientation: z.string(),
  underepresented_group: z.boolean().optional(),
})

export type ApplicationSchema = z.infer<typeof ApplicationSchema>

const Application = () => {
  const {
    auth: { user },
  } = useAuth()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationSchema>({ resolver: zodResolver(ApplicationSchema) })

  const handleApplicationSubmit: SubmitHandler<
    ApplicationSchema
  > = async data => {
    if (!user) {
      setError("User not logged in")
      return
    }

    setLoading(true)
    const { message } = await submitApplication({ user, application: data })
    alert(message)
  }

  return (
    <div className='max-w-xl border-2 p-10'>
      <form
        onSubmit={handleSubmit(handleApplicationSubmit)}
        className='space-y-6'
      >
        <div>
          <label
            htmlFor='first_name'
            className='text-gray-900 block text-sm font-medium leading-6'
          >
            First Name
          </label>
          <div className='relative mt-2 rounded-md shadow-sm'>
            <input
              type='text'
              {...register("first_name")}
              name='first_name'
              id='first_name'
              className={classNames(
                errors.first_name
                  ? "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500"
                  : "",
                "ring-gray-300 placeholder:text-gray-400 focus:ring-green-800 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              )}
              placeholder='you@example.com'
              aria-invalid={errors.first_name ? "true" : "false"}
              aria-describedby='password-error'
            />
            {errors.first_name && (
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                <ExclamationCircleIcon
                  className='text-red-500 h-5 w-5'
                  aria-hidden='true'
                />
              </div>
            )}
          </div>

          {errors.first_name && (
            <p className='text-red-600 mt-2 text-sm' id='email-error'>
              {errors.first_name.message}
            </p>
          )}
        </div>

        <div>
          <button
            type='submit'
            className='bg-green-800 hover:bg-green-700 focus-visible:outline-green-800 disabled:bg-gray-500 flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
          >
            {loading ? (
              <div role='status'>
                <svg
                  aria-hidden='true'
                  className='fill-gray-200 text-gray-200 dark:text-green-800 mr-2 h-6 w-6 animate-spin'
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
              <span>Submit Application</span>
            )}
          </button>
        </div>
      </form>

      <div>
        {error && <span className='text-rose-500 mt-10 text-xs'>{error}</span>}
      </div>
    </div>
  )
}

export default Application
