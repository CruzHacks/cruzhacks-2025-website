import React, { useEffect } from "react"
import useAuth from "../../../hooks/useAuth"
import useApplicationStatus from "../../../hooks/useApplicationStatus"
import toast from "react-hot-toast"
import { classNames } from "../../../utils/string"
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline"
import useApplicationStatusMutation from "../../../hooks/useApplicationStatusMutation"
import Modal from "../../../components/Modal"

const rsvpToText = (rsvp?: boolean) => {
  if (rsvp) return "I will be attending"
  else if (rsvp === false) return "I will not be attending"
  return "Not confirmed"
}

import { deleteApplication } from "../../../utils/apis/firebase"


const DashboardApplicant = () => {
  const {
    auth: { user },
  } = useAuth()

  const [openDeclineModal, setOpenDeclineModal] = React.useState(false)
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false)

  const fullName = user?.displayName || user?.email || "Hacker"

  const {
    data: applicationStatus,
    error,
    isError: isFetchError,
    isLoading: isFetchLoading,
  } = useApplicationStatus(user?.email || "")

  const applicationStatusMutation = useApplicationStatusMutation()

  const handleConfirmAttendance = () => {
    applicationStatusMutation.mutate({ email: user?.email ?? "", rsvp: true })
  }

  const handleDeclineAttendance = () => {
    applicationStatusMutation.mutate({ email: user?.email ?? "", rsvp: false })
  }

  const handleDeleteApplication = () => {
    deleteApplication(user?.email || "")
  }

  useEffect(() => {
    if (
      applicationStatus?.status === "accepted" &&
      applicationStatus?.rsvp === undefined
    ) {
      toast("Please confirm your attendance", { icon: "👆" })
    }
  }, [applicationStatus])

  return (
    <div className='space-y-10 px-10'>
      <div className='space-y-3'>
        <p className='font-subtext capitalize'>Welcome {fullName},</p>
        <h1 className='font-title text-4xl'>Application Portal Dashboard</h1>
      </div>

      <Modal
        Icon={ExclamationCircleIcon}
        iconStyling='text-error'
        title='Confirm Decline Attendance'
        description='Are you sure you want to decline your attendance to CruzHacks 2024? This cannot be undone.'
        actionText='I will not be attending'
        actionFunc={handleDeclineAttendance}
        open={openDeclineModal}
        setOpen={setOpenDeclineModal}
      />

      <Modal
        Icon={ExclamationCircleIcon}
        iconStyling='text-error'
        title='Confirm Withdrawal Application'
        description='Are you sure you want to withdrawal your application? This will delete your account as well and cannot be undone. If nothing happens please relog and try this action again.'
        actionText='Withdrawal Application'
        actionFunc={handleDeleteApplication}
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
      />

      <div className='h-full w-full max-w-4xl grow space-y-5 rounded-3xl bg-off_white/30 px-10 py-5 md:p-10 lg:mb-16 border-2 border-off_white'>
        <h2 className='font-title text-lg'>Application status:</h2>
        <p className='font-subtext'>
          {isFetchLoading && <span className='italic'>loading...</span>}
          {isFetchError && (
            <span className='italic text-error'>{error.message}</span>
          )}

          {!isFetchLoading && !isFetchError && applicationStatus && (
            <span
              className={classNames(
                applicationStatus.status == "accepted" && "text-success",
                applicationStatus.status == "rejected" && "text-pink",
                "capitalize"
              )}
            >
              {applicationStatus.status}
              <div></div>
            </span>
          )}
        </p>

        {!isFetchLoading &&
          !isFetchError &&
          applicationStatus?.status === "accepted" && (
            <>
              <h2 className='font-title text-lg'>Attendance confirmation:</h2>
              <p className='font-subtext'>
                <span
                  className={classNames(
                    applicationStatus.rsvp === true && "text-pink",
                    applicationStatus.rsvp === false && "text-error",
                    applicationStatus.rsvp === undefined && "text-white/50"
                  )}
                >
                  {rsvpToText(applicationStatus.rsvp)}
                </span>
              </p>
              {applicationStatus.rsvp !== false && (
                <div className='flex w-fit flex-col gap-5 md:flex-row'>
                  {applicationStatus.rsvp === undefined && (
                    <button
                      type='button'
                      className='inline-flex items-center gap-x-1.5 rounded-md bg-success px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error'
                      onClick={handleConfirmAttendance}
                    >
                      <CheckCircleIcon
                        className='-ml-0.5 h-5 w-5'
                        aria-hidden='true'
                      />
                      Confirm Attendance
                    </button>
                  )}
                  <button
                    type='button'
                    className='inline-flex items-center gap-x-1.5 rounded-md bg-error px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error'
                    onClick={() => setOpenDeclineModal(true)}
                  >
                    <XCircleIcon
                      className='-ml-0.5 h-5 w-5'
                      aria-hidden='true'
                    />
                    Decline Attendance
                  </button>
                </div>
              )}
            </>
          )}
      </div>

      {applicationStatus && applicationStatus.status === "submitted" &&(
        <div className="flex items-center flex-col">
          <p className=" font-subtext text-lg">We are still in the process of reviewing applications, check back soon!</p>
          <p className=" font-subtext text-md">To make changes to your application, please email contact@cruzhacks.com</p>
        
          <button 
            className="border-dark_orange bg-dark_orange/30 px-10 py-4 border-2 rounded-2xl mt-8 "
            onClick={() => setOpenDeleteModal(true)}
          >
            <p className=" text-off_white text-lg font-subtext">Withdrawal Application</p>
          </button>
        </div>
      )}
      

      {applicationStatus && applicationStatus.status === "accepted" && (
        <div className='space-y-10 pt-10'>
          <div className='space-y-3'>
            <h1 className='font-title text-2xl'>My Hackathon Checklist</h1>
            <p>Make sure to get these tasks done before the event!</p>
          </div>

          <div className='space-y-10'>
            <div className='h-full w-full max-w-4xl grow space-y-5 rounded-3xl bg-[#4659FF]/10 px-10 py-5 md:p-10'>
              <h3 className='font-title text-lg'>1. Accept Invitation</h3>
              <p className='font-subtext'>
                Let us know if you will be joining us! Confirm or decline your
                attendance. We want to make sure we are ready to give you the
                best experience at CruzHacks 2024.
              </p>
            </div>

            <div className='h-full w-full max-w-4xl grow space-y-5 rounded-3xl bg-[#4659FF]/10 px-10 py-5 md:p-10'>
              <h3 className='font-title text-lg'>2. Join our Discord server</h3>
              <p className='font-subtext'>
                <a
                  href='https://discord.gg/rGjDTCk3Nx'
                  target='_blank'
                  rel='noreferrer'
                  className='font-subtext text-blue-button'
                >
                  Join our Discord server
                </a>{" "}
                to stay up to date with all the latest announcements and to meet
                other hackers!
              </p>
            </div>
          </div>
        </div>
      )}

      {applicationStatus && applicationStatus.status === "rejected" && (
        <div className='mt-10 max-w-4xl space-y-3'>
          <h1 className='font-title text-2xl'>Hope to See You Next Year</h1>
          <p className='font-subtext leading-8'>
            Thank you for your interest in attending CruzHacks 2024. We had a
            large number of applicants this year, and we appreciate the time and
            effort you put into your CruzHacks 2024 application. Unfortunately,
            we are unable to offer you a spot at CruzHacks 2024 at this time.
          </p>
          <p className='font-subtext leading-8'>
            The selection process is one of our most critical processes and we
            carefully review each written response to make our decision
            regarding your application. At this time, we are unable to respond
            to individual inquiries about your application decision. We highly
            encourage you to apply again to CruzHacks 2024 next year, and attend
            some of the other MLH-affiliated hackathons in the meantime.
          </p>
          <p className='pt-5 font-subtext leading-8'>
            Sincerely,
            <br />
            The CruzHacks 2024 Student Organizers
          </p>
        </div>
      )}
    </div>
  )
}

export default DashboardApplicant
