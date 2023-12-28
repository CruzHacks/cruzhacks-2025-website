import React from "react"
import {
  classNames,
  objectToCSV,
  timestampFilename,
} from "../../../../utils/string"
import { useNavigate } from "react-router-dom"
import useApplications from "../../../../hooks/useApplications"
import { ApplicationStatus } from "../../../../utils/types"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"
import toast from "react-hot-toast"

const LOADING_ENTRIES = 50

const formatTime = (time: any) => {
  const d = time.toDate()

  return `${d.toLocaleDateString()} at ${d.toLocaleTimeString()}`
}

const AppStatus = ({ status }: { status: ApplicationStatus }) => {
  if (status === "rejected") {
    return (
      <span className='inline-flex items-center rounded-md bg-error/10 px-2 py-1 text-xs font-medium text-error ring-1 ring-inset ring-error/20'>
        Rejected
      </span>
    )
  }

  if (status === "accepted") {
    return (
      <span className='inline-flex items-center rounded-md bg-success/10 px-2 py-1 text-xs font-medium text-success ring-1 ring-inset ring-success/20'>
        Accepted
      </span>
    )
  }

  return (
    <span className='inline-flex items-center rounded-md bg-gold/10 px-2 py-1 text-xs font-medium text-gold ring-1 ring-inset ring-gold/20'>
      Needs Review
    </span>
  )
}

// TODO: Pagination

// TODO: Compose generic table component: tables are reused; loading styling
// should be same as data styling (bug prone to require manual updates)

const ApplicationsAdmin = () => {
  const navigate = useNavigate()
  const { data: applications, error, isLoading, isError } = useApplications()

  const downloadApplicationsCsv = () => {
    if (!applications) {
      toast.error("No applications to download")
      return
    }

    const filename = timestampFilename("hacker_applications", "csv")
    const csvData = objectToCSV(applications)

    const blob = new Blob([csvData], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")

    a.setAttribute("hidden", "")
    a.setAttribute("href", url)
    a.setAttribute("download", filename)
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const handleReviewApplication = (email: string) => {
    const email_friendly = encodeURIComponent(email.replace(/\./g, " "))
    navigate(`/portal/admin/applications/review/${email_friendly}`)
  }

  return (
    <div className='overflow-x-clip px-4 sm:px-6 lg:px-8'>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='font-title text-2xl font-semibold leading-6'>
            Applications
          </h1>
          <p className='text-gray-700 mt-2 text-sm'>
            Hacker applications for this years hackathon.
          </p>
        </div>
        <div className='mt-4 flex gap-2 sm:ml-16 sm:mt-0 sm:flex-none'>
          <p className='block rounded-md bg-blue-button/10 px-3 py-2 text-center font-subtext text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
            {applications && applications?.length} Submissions
          </p>

          <button
            onClick={downloadApplicationsCsv}
            className='block rounded-md bg-blue-button/10 px-3 py-2 text-center font-subtext text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
          >
            <ArrowDownTrayIcon className='h-4 w-4 text-pink' />
          </button>
        </div>
      </div>
      <div className='mt-8 flow-root'>
        <div className='-mx-4 -my-2 sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle'>
            <table className='min-w-full border-separate border-spacing-0 overflow-x-scroll'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='sticky top-[3.8rem] z-10 hidden border-b border-white/20 bg-blue-imperial/50 py-3.5 pl-8 pr-3 text-left text-sm font-semibold backdrop-blur sm:table-cell lg:top-0'
                  >
                    Id
                  </th>
                  <th
                    scope='col'
                    className='sticky top-[3.8rem] z-10 border-b border-white/20 bg-blue-imperial/50 py-3.5 pl-4 text-left text-sm font-semibold text-white backdrop-blur sm:px-3 lg:top-0'
                  >
                    Email
                  </th>
                  <th
                    scope='col'
                    className='sticky top-[3.8rem] z-10 border-b border-white/20 bg-blue-imperial/50 px-3 py-3.5 text-left text-sm font-semibold text-white backdrop-blur lg:top-0'
                  >
                    Status
                  </th>
                  <th
                    scope='col'
                    className='sticky top-[3.8rem] z-10 hidden border-b border-white/20 bg-blue-imperial/50 px-3 py-3.5 text-left text-sm font-semibold text-white backdrop-blur sm:table-cell lg:top-0'
                  >
                    Time Submitted
                  </th>
                  <th
                    scope='col'
                    className='sticky top-[3.8rem] z-10 border-b border-white/20 bg-blue-imperial/50 py-3.5 pl-3 pr-4 backdrop-blur sm:pr-6 lg:top-0 lg:pr-8'
                  >
                    <span className='sr-only'>Review Application</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {!isError &&
                  (!isLoading
                    ? applications &&
                      applications.map((application, applicationIdx) => (
                        <tr key={application.email}>
                          {/* Application Id */}
                          <td
                            className={classNames(
                              applicationIdx !== applications.length - 1 &&
                                "border-b border-white/20",
                              "hidden whitespace-nowrap py-4 pl-8 pr-3 font-subtext text-sm sm:table-cell"
                            )}
                          >
                            {applicationIdx + 1}
                          </td>

                          {/* Application Email */}
                          <td
                            className={classNames(
                              applicationIdx !== applications.length - 1 &&
                                "border-b border-white/20",
                              "max-w-[10rem] truncate whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-3"
                            )}
                          >
                            {application.email}
                          </td>

                          {/* Application Status */}
                          <td
                            className={classNames(
                              applicationIdx !== applications.length - 1 &&
                                "border-b border-white/20",
                              "whitespace-nowrap px-3 py-4 text-sm font-medium"
                            )}
                          >
                            <AppStatus status={application.status} />
                          </td>

                          {/* Application Time Submitted */}
                          <td
                            className={classNames(
                              applicationIdx !== applications.length - 1 &&
                                "border-b border-white/20",
                              "hidden whitespace-nowrap px-3 py-4 text-sm md:table-cell"
                            )}
                          >
                            {formatTime(application._submitted)}
                          </td>

                          {/* Review Application Button */}
                          <td
                            className={classNames(
                              applicationIdx !== applications.length - 1 &&
                                "border-b border-white/20",
                              "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-8 lg:pr-8"
                            )}
                          >
                            <button
                              className='text-pink'
                              onClick={() =>
                                handleReviewApplication(application.email)
                              }
                            >
                              Review Application
                              <span className='sr-only'>
                                , {application.email}
                              </span>
                            </button>
                          </td>
                        </tr>
                      ))
                    : // Loading State
                      [...Array(LOADING_ENTRIES).keys()].map(loadingIdx => (
                        <tr key={loadingIdx}>
                          {/* Application Id */}
                          <td
                            className={classNames(
                              loadingIdx !== LOADING_ENTRIES - 1 &&
                                "border-b border-white/20",
                              "hidden py-4 pl-8 pr-3 text-sm font-medium sm:table-cell"
                            )}
                          >
                            <div className='h-6 w-5 animate-pulse rounded bg-white/30 '></div>
                          </td>

                          {/* Application Email */}
                          <td
                            className={classNames(
                              loadingIdx !== LOADING_ENTRIES - 1 &&
                                "border-b border-white/20",
                              "py-4 pl-4 pr-3 sm:pl-3"
                            )}
                          >
                            <div className='h-6 w-[10rem] animate-pulse rounded bg-white/30 '></div>
                          </td>

                          {/* Application Status */}
                          <td
                            className={classNames(
                              loadingIdx !== LOADING_ENTRIES - 1 &&
                                "border-b border-white/20",
                              "px-3 py-4"
                            )}
                          >
                            <div className='h-6 w-24 animate-pulse rounded bg-white/30 '></div>
                          </td>

                          {/* Application Time Submitted */}
                          <td
                            className={classNames(
                              loadingIdx !== LOADING_ENTRIES - 1 &&
                                "border-b border-white/20",
                              "hidden px-3 py-4 md:table-cell"
                            )}
                          >
                            <div className='h-6 w-44 animate-pulse rounded bg-white/30 '></div>
                          </td>

                          {/* Review Application Button */}
                          <td
                            className={classNames(
                              loadingIdx !== LOADING_ENTRIES - 1 &&
                                "border-b border-white/20",
                              "relative py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-8 lg:pr-8"
                            )}
                          >
                            <button className='cursor-not-allowed text-pink/50'>
                              Review Application
                            </button>
                          </td>
                        </tr>
                      )))}
              </tbody>
            </table>
            {isError && (
              <div className='flex min-h-full w-full flex-col items-center justify-center bg-error/10 p-10'>
                <p className='font-subtext leading-8 text-error'>
                  Error while fetching :
                </p>
                <p className='break-all font-subtext leading-8 text-error'>
                  {JSON.stringify(error)}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationsAdmin
