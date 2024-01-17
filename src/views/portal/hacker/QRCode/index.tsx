import React from "react"
import QRCode from "react-qr-code"
import useAuth from "../../../../hooks/useAuth"

const QRCodeHacker = () => {
  const {
    auth: { user },
  } = useAuth()

  return (
    <div className='space-y-10 overflow-x-clip px-4 sm:px-6 lg:px-8'>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='font-title text-2xl font-semibold leading-6'>
            Check-In QR Code
          </h1>
          <p className='text-gray-700 mt-2 text-sm'>
            Present this QR code to a CruzHacks Organizer to check-in to the
            event.
          </p>
        </div>
      </div>

      <div className='flex w-full items-center justify-center md:justify-start'>
        <div className='flex w-full items-center justify-center rounded-3xl bg-[#4659FF]/10 p-5 md:w-fit md:space-y-10 md:p-10'>
          {user ? (
            <QRCode value={user.uid} />
          ) : (
            // SHOULD NEVER HAPPEN
            <p className='text-error'>No User</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default QRCodeHacker
