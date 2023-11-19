import React, { useState } from "react"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"
import { auth } from "../utils/firebaseapp"
import {
  ArrowLeftIcon,
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline"
import TextInput from "../components/inputs/TextInput"
import toast from "react-hot-toast"

// HELP: This component uses react-hook-form to handle data validation and input
// specific errors. Follow this tutorial to learn more about how Zod is used in
// react-hook-form to validate the schema:
// https://react-hook-form.com/get-started#SchemaValidation

const formSchema = z
  .object({
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    name: z.string().min(1, "Please include your name"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .min(1, "Password is required"),
    passwordConfirm: z.string().min(1, "Password confirmation is required"),
  })
  .refine(data => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  })

type FormSchemaType = z.infer<typeof formSchema>

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({ resolver: zodResolver(formSchema) })
  const [loading, setLoading] = useState(false)

  const handleRegister: SubmitHandler<FormSchemaType> = async data => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(userCredential => {
        updateProfile(userCredential.user, { displayName: data.name })
        console.log("User Account Created:", userCredential.user)
      })
      .catch(error => {
        console.error(error)
        toast.error("Error creating account")
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
      <div className='flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <h2 className='mt-8 py-6 font-title text-5xl leading-10'>
              Sign Up
            </h2>
            <p className='font-subtext'>
              Already have an account?{" "}
              <Link to='/login' className='font-semibold text-blue-button'>
                Login
              </Link>
            </p>
          </div>

          <div className='mt-10'>
            <div>
              <form
                onSubmit={handleSubmit(handleRegister)}
                className='space-y-10'
              >
                <TextInput
                  Icon={EnvelopeIcon}
                  inputProps={{ ...register("email"), placeholder: "Email" }}
                  error={errors.email && errors.email.message}
                />
                <TextInput
                  Icon={UserIcon}
                  inputProps={{ ...register("name"), placeholder: "Full Name" }}
                  error={errors.name && errors.name.message}
                />
                <TextInput
                  Icon={LockClosedIcon}
                  inputProps={{
                    ...register("password"),
                    type: "password",
                    placeholder: "Password",
                  }}
                  error={errors.password && errors.password.message}
                />
                <TextInput
                  Icon={LockClosedIcon}
                  inputProps={{
                    ...register("passwordConfirm"),
                    type: "password",
                    placeholder: "Confirm Password",
                  }}
                  error={
                    errors.passwordConfirm && errors.passwordConfirm.message
                  }
                />
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
                      <span>Sign Up</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
