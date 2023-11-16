import React from "react"
import { useParams } from "react-router-dom"
import useApplicationShortResponses from "../../../../hooks/useApplicationShortResponses"

const ApplicationsReviewAdmin = () => {
  const { email } = useParams()
  if (!email) {
    return <div>No Email provided</div>
  }

  // TODO: Response schema was updated since this dashboard was implemented, so
  // update rendering to match

  const {
    // data: shortResponses,
    error,
    // isLoading,
    isError,
  } = useApplicationShortResponses(email)

  return (
    <div className='space-y-10'>
      <h1 className='font-title text-xl'>
        Hacker Application - <span className='font-subtext'>{email}</span>
      </h1>
      {!isError ? (
        <div className='flex w-full items-center justify-center'>
          <div className='w-full max-w-4xl space-y-10 rounded-lg bg-white/10 p-10 ring ring-inset ring-white/20'>
            {/* {!isLoading
              ? shortResponses?.responses.map((response, i) => (
                  <div key={i} className='space-y-2'>
                    <h2 className='font-title text-lg leading-7'>
                      {response.question}
                    </h2>
                    <p className='font-subtext leading-5'>{response.answer}</p>
                  </div>
                ))
              : [...Array(5).keys()].map(i => (
                  <div key={i} className='space-y-2'>
                    <h2 className='h-7 animate-pulse rounded bg-white/10'> </h2>
                    <p className='h-5 animate-pulse rounded bg-white/10'></p>
                    <p className='h-5 animate-pulse rounded bg-white/10'></p>
                    <p className='h-5 w-1/3 animate-pulse rounded bg-white/10'></p>
                  </div>
                ))} */}
          </div>
        </div>
      ) : (
        <div className='flex min-h-full w-full flex-col items-center justify-center p-10'>
          <p className='font-subtext leading-8 text-error'>
            Error while fetching users:
          </p>
          <p className='break-all font-subtext leading-8 text-error'>
            {JSON.stringify(error)}
          </p>
        </div>
      )}
    </div>
  )
}

export default ApplicationsReviewAdmin
