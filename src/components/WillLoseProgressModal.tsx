import React, { Dispatch, Fragment, SetStateAction } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { ExclamationCircleIcon } from "@heroicons/react/24/outline"

interface WillLoseProgressModalProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function WillLoseProgressModal({
  open,
  setOpen,
}: WillLoseProgressModalProps) {
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
          <div className='fixed inset-0 bg-blue-imperial/70 transition-opacity' />
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
              <Dialog.Panel className='relative overflow-hidden rounded-lg bg-blue-imperial px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'>
                <div>
                  <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pink/20'>
                    <ExclamationCircleIcon
                      className='h-8 w-8 text-error'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='mt-3 text-center sm:mt-5'>
                    <Dialog.Title
                      as='h3'
                      className='text-base font-semibold leading-6 text-white'
                    >
                      Submit Application Before Leaving
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p className='text-sm text-white/70'>
                        If you leave this page, you will lose all progress on
                        your hacker application
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-6'>
                  <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-md bg-blue-button/50 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-button/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-button'
                    onClick={() => setOpen(false)}
                  >
                    Dismiss
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
