import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeftIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid"
import { classNames } from "../utils/string"
import { Link } from "react-router-dom"
import React, { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../utils/firebaseapp"

// This component uses react-hook-form to handle data validation and input
// specific errors. Follow this tutorial to learn more about how Zod is used in
// react-hook-form to validate the schema:
// https://react-hook-form.com/get-started#SchemaValidation

const formSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .min(1, "Password is required"),
})

type FormSchemaType = z.infer<typeof formSchema>

export default function Login() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({ resolver: zodResolver(formSchema) })

  const handleLogin: SubmitHandler<FormSchemaType> = async data => {
    setLoading(true)
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        setError(false)
      })
      .catch(err => {
        setError(true)
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className='min-w-screen flex min-h-screen flex-1 items-center justify-center'>
      <Link to='/' className='fixed left-5 top-5'>
        <ArrowLeftIcon className='h-8 w-auto' />
      </Link>
      <div className='w-full max-w-sm lg:w-96'>
        <div className='space-y-4'>
          <h2 className='mt-8 font-title text-5xl leading-10'>Log In</h2>
          <p className='font-subtext'>
            Not a member?{" "}
            <Link
              to='/signup'
              className='font-semibold text-blue-button hover:text-blue-chinese'
            >
              Create an account
            </Link>
          </p>
        </div>

        <div className='mt-10'>
          <div>
            <form onSubmit={handleSubmit(handleLogin)} className='space-y-6'>
              <div>
                <label
                  htmlFor='email'
                  className='text-gray-900 block text-sm font-medium leading-6'
                >
                  Email
                </label>
                <div className='relative mt-2 rounded-md shadow-sm'>
                  <input
                    type='email'
                    {...register("email")}
                    name='email'
                    id='email'
                    className={classNames(
                      errors.email
                        ? "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500"
                        : "",
                      "ring-gray-300 placeholder:text-gray-400 focus:ring-green-800 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    )}
                    placeholder='you@example.com'
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby='password-error'
                  />
                  {errors.email && (
                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                      <ExclamationCircleIcon
                        className='text-red-500 h-5 w-5'
                        aria-hidden='true'
                      />
                    </div>
                  )}
                </div>

                {errors.email && (
                  <p className='text-red-600 mt-2 text-sm' id='email-error'>
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='text-gray-900 block text-sm font-medium leading-6'
                >
                  Password
                </label>
                <div className='relative mt-2 rounded-md shadow-sm'>
                  <input
                    type='password'
                    {...register("password")}
                    name='password'
                    id='password'
                    className={classNames(
                      errors.password
                        ? "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500"
                        : "",
                      "ring-gray-300 placeholder:text-gray-400 focus:ring-green-800 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    )}
                    aria-invalid={errors.password ? "true" : "false"}
                    aria-describedby='password-error'
                  />
                  {errors.password && (
                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                      <ExclamationCircleIcon
                        className='text-red-500 h-5 w-5'
                        aria-hidden='true'
                      />
                    </div>
                  )}
                </div>

                {errors.password && (
                  <p className='text-red-600 mt-2 text-sm' id='email-error'>
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className='flex items-center justify-between'>
                <div className='text-sm leading-6'>
                  <a
                    href='/'
                    className='text-green-800 hover:text-green-700 font-semibold'
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='flex h-16 w-full items-center justify-center rounded-md bg-white px-3 py-1.5 font-subtext text-2xl leading-6 text-blue-imperial shadow-sm transition-colors hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-royal disabled:bg-white/50'
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
                    <span>Log In</span>
                  )}
                </button>
              </div>
            </form>
          </div>
          <div>
            {error && (
              <span className='text-rose-500 mt-10 text-xs'>Invalid Login</span>
            )}
          </div>

          <div className='mt-10'>
            <div className='relative'>
              <div className='w-full border-t' />
              <div className='relative flex justify-center text-sm font-medium leading-6'></div>
            </div>

            <div className='mt-6 grid grid-cols-2 gap-4'>
              <a
                href='/'
                className='flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]'
              >
                <svg
                  className='h-5 w-5'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
                </svg>
                <span className='text-sm font-semibold leading-6'>Twitter</span>
              </a>

              <a
                href='/'
                className='flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]'
              >
                <svg
                  className='h-5 w-5'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='text-sm font-semibold leading-6'>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
