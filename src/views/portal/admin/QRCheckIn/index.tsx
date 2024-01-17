import React from "react"
import { useZxing } from "react-zxing"
import { checkInUser } from "../../../../utils/apis/cloudFunctions"
import toast from "react-hot-toast"
import { classNames, isString } from "../../../../utils/string"
import { CameraIcon } from "@heroicons/react/24/outline"
import type { User } from "firebase/auth"
import useAuth from "../../../../hooks/useAuth"

const QRCheckInContainer: React.FC = () => {
  const {
    auth: { user },
  } = useAuth()

  const { ref } = useZxing({
    onDecodeResult: result => {
      console.log(result)
      handleScanUID(result.getText())
    },
    timeBetweenDecodingAttempts: 50,
    onError: error => {
      console.error(error)
    },
  })
  const [lastScanned, setLastScanned] = React.useState<User>()

  const handleScanUID = async (result: string) => {
    try {
      if (!user) throw "No user session found"
      const uid = result
      const hacker = await checkInUser(user, uid)

      setLastScanned(hacker)
      toast.success(`Successfully checked in ${hacker.displayName}`)
    } catch (error) {
      if (error && isString((error as Error).message)) {
        const errorMessage = (error as Error).message
        toast.error(errorMessage)
      }
    }
  }

  return (
    <div className='space-y-10 overflow-x-clip px-4 sm:px-6 lg:px-8'>
      <div className='space-y-3'>
        <h1 className='font-title text-2xl font-semibold leading-6'>
          Check-In QR Code Scanner
        </h1>
        <p className=''>
          Scan a Hacker&apos;s QR Code in the camera box below to check them in
          at the beginning of the event.
        </p>
      </div>

      <div className='flex w-full min-w-0 flex-col items-center justify-center gap-5 md:flex-row md:items-stretch'>
        <div className='flex w-fit max-w-80 flex-col items-center justify-center gap-3 rounded-3xl bg-[#4659FF]/10 p-5 md:p-10'>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            ref={ref}
            className='aspect-square h-auto w-full bg-blue-imperial'
          />

          <p className='w-full max-w-80 text-center font-subtext text-sm text-white/70'>
            When prompted, make sure to enable{" "}
            <CameraIcon className='-mt-0.5 inline-block h-4 w-4' /> permissions.
          </p>
        </div>
        {lastScanned && (
          <div className='flex w-full max-w-80 flex-col gap-3 rounded-3xl bg-[#4659FF]/10 p-5 md:max-w-none md:p-10'>
            <h2 className='font-title'>Last Scanned</h2>
            <ul className='list-disc space-y-3 ps-8'>
              <li className='font-subtext font-semibold'>
                Name:{" "}
                <span
                  className={classNames(
                    !lastScanned.displayName
                      ? "italic text-pink/70"
                      : "text-pink",
                    "font-normal"
                  )}
                >
                  {lastScanned.displayName ?? "< NO NAME >"}
                </span>
              </li>
              <li className='font-subtext font-semibold'>
                Email:{" "}
                <span
                  className={classNames(
                    !lastScanned.email ? "italic text-pink/90" : "text-pink",
                    "font-normal"
                  )}
                >
                  {lastScanned.email ?? "< NO NAME >"}
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

const QRCheckIn = () => <QRCheckInContainer />

export default QRCheckIn
