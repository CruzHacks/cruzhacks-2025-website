import React from "react"
import { approveApplication, denyApplication } from "../utils/apis/firebase"
import toast from "react-hot-toast"


interface AcceptButtonsProps {
    email: string
    onClick: () => void
}


export const AcceptButtons = ({ email, onClick }: AcceptButtonsProps) => {

    const handleSubmit = async (accept: boolean) => {
        try {
            if (accept) {
                await approveApplication(email)
                toast.success("Application accepted")
            } else {
                await denyApplication(email)
                toast.error("Application denied")
            }
        } catch (err) {
            toast.error("Error updating application")
            console.error(err)
        }   
    }

  return (
    <div className='bg-red flex w-full flex-row justify-between md:justify-center md:gap-10'>
        <button
            type='button'
            className="flex h-10 w-24 items-center justify-evenly rounded-2xl border-2 border-[#F03A47] bg-[#F03A47] px-4 font-subtext text-[#FFF]"
            onClick={() => {
                onClick()
                handleSubmit(false)
            }}
        >
            <p>Deny</p>
        </button>
        <button
            type='button'
            className='flex h-10 w-24 items-center justify-evenly rounded-2xl border-2 border-[#A1E887] bg-[#A1E887] px-4 font-subtext text-[#000]'
            onClick={() => {
                onClick()
                handleSubmit(true)
            }}
        >
            <p>Accept</p>
        </button>
    </div>
  )
}
