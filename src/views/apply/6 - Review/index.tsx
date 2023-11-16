import React, { useState } from "react"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { useAppState } from "../../../hooks/useAppState"
import ConfettiExplosion from "react-confetti-explosion"
import toast from "react-hot-toast"
import { submitApplicationUnauthed } from "../../../utils/apis/cloudFunctions"
import AllDoneModal from "../../../components/AllDoneModal"

// TODO: printout responses
const ReviewSection = () => {
  const [appState, setAppState] = useAppState()
  const [isExploding, setIsExploding] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [openModal, setOpenModal] = useState(false)

  const submitApplication = async () => {
    try {
      setIsLoading(true)
      await submitApplicationUnauthed(appState)
      setIsExploding(true)
      setAppState({ ...appState, form_submitted: true })
      setOpenModal(true)
    } catch (err) {
      console.error(err)
      if (err instanceof Error) toast.error(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    // ApplicationSection
    <>
      <AllDoneModal open={openModal} setOpen={setOpenModal} />
      <div className='flex h-full grow flex-col md:gap-5'>
        <p className='mb-2 font-subtext uppercase text-white/50'>REVIEW</p>
        <div className='flex h-full grow flex-col pb-10'>
          {/* ApplicationRenderStep */}
          <div className='flex h-full grow flex-col items-center justify-between gap-10'>
            <div className='flex h-full grow flex-col items-stretch justify-center gap-10 md:items-center md:justify-start'>
              {/* Block */}
              <h1 className='pb-2 text-center font-title text-xl md:text-2xl lg:text-4xl'>
                You&apos;re Almost done!
              </h1>

              <div className='max-w-md space-y-5 rounded-3xl bg-white/10 p-5 text-center font-subtext text-sm ring-2 ring-inset ring-white/10'>
                <p>
                  Click on the check bubbles above to review your responses from
                  that section.
                </p>
                <p>Please review your responses and click “submit.”</p>
                <p>
                  Decisions will be sent in late December or January to the
                  email address you provided. Make sure to read the email, as it
                  will contain instructions on confirming your spot at CruzHacks
                  2024.
                </p>
              </div>
            </div>
            {/* navButton */}
            <div className='flex w-full flex-col items-center justify-center md:gap-10'>
              <button
                className='flex h-10 w-32 items-center justify-between gap-1 rounded-2xl border-2 border-none bg-gradient-to-r from-[#00D1FF] to-[#0029FF] px-4 font-subtext text-white'
                type='button'
                onClick={submitApplication}
              >
                {!isLoading ? (
                  <>
                    <p>Submit</p>
                    <ChevronRightIcon className='ml-2 h-4 w-4' />
                  </>
                ) : (
                  <div
                    role='status'
                    className='flex w-full items-center justify-center'
                  >
                    <svg
                      aria-hidden='true'
                      className='h-6 w-6 animate-spin fill-white text-white/20'
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
                )}
              </button>

              {isExploding && <ConfettiExplosion className='fixed' />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewSection
