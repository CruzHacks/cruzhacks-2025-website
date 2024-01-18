import React, { Dispatch, Fragment, SetStateAction } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { EnvelopeIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom"

interface CheckEmailModalProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function CheckEmailModal({
  open,
  setOpen,
}: CheckEmailModalProps) {
  const navigate = useNavigate()

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-90'
          leave='ease-in duration-200'
          leaveFrom='opacity-90'
          leaveTo='opacity-0'
        >
          <div className='bg-opacity-\75 bg-gray-500 fixed inset-0 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'>
                <div>
                  <div className='bg-green-100 mx-auto flex h-12 w-12 items-center justify-center rounded-full'>
                    <EnvelopeIcon
                      className='text-green-600 h-6 w-6'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='mt-3 text-center sm:mt-5'>
                    <Dialog.Title
                      as='h3'
                      className='text-gray-900 text-base font-semibold leading-6'
                    >
                      Email Confirmation Sent
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p className='text-gray-500 text-sm'>
                        Please check your email to finish setting up your
                        CruzHacks Account
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-6'>
                  <button
                    type='button'
                    className='bg-green-800 hover:bg-green-700 focus-visible:outline-green-700 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                    onClick={() => navigate("/login")}
                  >
                    Go back to login
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
