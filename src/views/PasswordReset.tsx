import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"
import React, { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../utils/firebaseapp"
import TextInput from "../components/inputs/TextInput"
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline"
import toast from "react-hot-toast"
import cloud1 from "../assets/PageDividers/cloud.svg"
import cloud2 from "../assets/PageDividers/cloud2.svg"
import cloud3 from "../assets/PageDividers/cloud3.svg"

export default function PasswordReset(){
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    
    const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        try {
            await sendPasswordResetEmail(auth, email)
            toast.success("Password reset email sent! Check your inbox.")
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error("Error sending password reset email: " + error.message)
            } else {
                toast.error("An unknown error occurred.")
            }
        }
    }
    return (
        <div className='min-w-screen flex min-h-screen flex-1 items-center justify-center px-6 bg-sunset-gradient'>
            <Link to='/' className='fixed left-5 top-5 z-10'>
                <ArrowLeftIcon className='h-8 w-auto' />
            </Link>
    
            <div className="absolute left-0 top-0 w-60 z-2">
                <img src= {cloud1} alt="cloud1"></img>
            </div>
    
            <div className="absolute -right-20 top-16 w-3/5">
                <img src= {cloud2} alt="cloud2"></img>
            </div>
    
            <div className = "absolute left-2 bottom-80 w-1/3">
                <img src= {cloud3} alt="cloud3"></img>
            </div>

        <div className=' max-w-sm space-y-10 bg-[#EFA370]/30 p-12 border-2 rounded-2xl text-text_white text-center z-10'>
            <h2 className='mt-2 font-heading text-5xl leading-10 bg-[#EFA370]/24 font-bold'>Password Reset</h2>

            <form onSubmit={handlePasswordReset} className="space-y-10">
                <TextInput
                    Icon={EnvelopeIcon}
                    inputProps={{
                        type: "email",
                        value: email,
                        onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
                        placeholder: "Email",
                    }}
                />
                <button
                    type="submit"
                    disabled={loading}
                    className='flex h-16 w-full items-center justify-center rounded-md bg-text_white px-3 py-1.5 font-subtext text-2xl leading-6 text-deep_orange shadow-sm transition-colors hover:bg-text_white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-royal disabled:bg-white/50'
                >
                    {loading ? "Sending..." : "Send Reset Email"}
                </button>
            </form>
        </div>

          
        </div>
    )
}
