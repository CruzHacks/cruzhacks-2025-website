import React from "react"
import { classNames } from "../../../../utils/string"
import useUsers from "../../../../hooks/useUsers"
import useAuth from "../../../../hooks/useAuth"
import { auth } from "../../../../utils/firebaseapp"
import { sendPasswordResetEmail } from "firebase/auth"
import toast from "react-hot-toast"

const UsersAdmin = () => {
  const {
    auth: { user: currentUser },
  } = useAuth()
  // TODO: Pagination
  const { data: users, error, isLoading, isError } = useUsers(currentUser)

  const handleNewUser = () => {
    alert("This feature is not yet implemented.")
  }

  const sendPasswordReset = (email: string) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent")
      })
      .catch(err => {
        console.error(err)
        toast.error(err.message)
      })
  }

  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='font-title text-2xl font-semibold leading-6'>Users</h1>
          <p className='text-gray-700 mt-2 text-sm'>
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        {/* <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
          <button
            type='button'
            className='block cursor-not-allowed rounded-md bg-pink px-3 py-2 text-center font-subtext text-sm font-semibold text-white shadow-sm hover:bg-pink/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            onClick={handleNewUser}
          >
            Add user
          </button>
        </div> */}
      </div>
      <div className='mt-8 flow-root'>
        <div className='-mx-4 -my-2 sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle'>
            <table className='min-w-full border-separate border-spacing-0'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='sticky top-0 z-10 hidden border-b border-white/20 bg-blue-imperial/50 py-3.5 pl-4 pr-3 text-left text-sm font-semibold backdrop-blur sm:table-cell sm:pl-6 lg:pl-8'
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='sticky top-0 z-10 border-b border-white/20 bg-blue-imperial/50 px-3 py-3.5 text-left text-sm font-semibold text-white backdrop-blur'
                  >
                    Email
                  </th>
                  <th
                    scope='col'
                    className='sticky top-0 z-10 border-b border-white/20 bg-blue-imperial/50  py-3.5 pl-3 pr-4 text-left text-sm font-semibold backdrop-blur md:px-3'
                  >
                    Role
                  </th>
                  <th
                    scope='col'
                    className='sticky top-0 z-10 hidden border-b border-white/20 bg-blue-imperial/50 py-3.5 pl-3 pr-4 text-left text-sm font-semibold backdrop-blur md:px-3 lg:table-cell'
                  >
                    UID
                  </th>
                  <th
                    scope='col'
                    className='sticky top-0 z-10 hidden border-b border-white/20 bg-blue-imperial/50 py-3.5 backdrop-blur sm:table-cell sm:pr-6 lg:pr-8'
                  >
                    <span className='sr-only'>Send Password Reset</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {!isError &&
                  (!isLoading
                    ? users &&
                      users.map((user, userIdx) => (
                        <tr key={user.email}>
                          <td
                            className={classNames(
                              userIdx !== users.length - 1
                                ? "border-b border-white/20"
                                : "",
                              user.displayName
                                ? user.email === currentUser?.email &&
                                    "text-orange"
                                : "text-white/50",
                              "hidden whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:table-cell sm:pl-6 lg:pl-8"
                            )}
                          >
                            {user.displayName || "—"}
                          </td>
                          <td
                            className={classNames(
                              userIdx !== users.length - 1
                                ? "border-b border-white/20"
                                : "",
                              user.email === currentUser?.email
                                ? "text-orange"
                                : "",
                              "whitespace-nowrap px-3 py-4 text-sm"
                            )}
                          >
                            {user.email}
                          </td>
                          <td
                            className={classNames(
                              userIdx !== users.length - 1
                                ? "border-b border-white/20"
                                : "",
                              user.email === currentUser?.email
                                ? "text-orange"
                                : "",
                              "whitespace-nowrap py-4 pl-3 pr-4 text-sm sm:px-3"
                            )}
                          >
                            {user.role}
                          </td>
                          <td
                            className={classNames(
                              userIdx !== users.length - 1
                                ? "border-b border-white/20"
                                : "",
                              user.email === currentUser?.email
                                ? "text-orange"
                                : "",
                              "hidden whitespace-nowrap py-4 font-subtext text-sm md:px-3 lg:table-cell"
                            )}
                          >
                            {user.uid}
                          </td>
                          <td
                            className={classNames(
                              userIdx !== users.length - 1
                                ? "border-b border-white/20"
                                : "",
                              "relative hidden whitespace-nowrap py-4 text-right text-sm font-medium sm:table-cell sm:pr-8 lg:pr-8"
                            )}
                          >
                            <button
                              type='button'
                              onClick={() => sendPasswordReset(user.email)}
                              className='text-pink'
                            >
                              Send Password Reset
                              <span className='sr-only'>, {user.email}</span>
                            </button>
                          </td>
                        </tr>
                      ))
                    : // Loading State
                      [...Array(20).keys()].map(i => (
                        <tr key={i}>
                          <td
                            key={i + 100}
                            className='hidden py-4 pl-4 pr-3 text-sm font-medium sm:table-cell sm:pl-6 lg:pl-8'
                          >
                            <div className='h-6 w-40 animate-pulse rounded bg-white/30 '></div>
                          </td>
                          <td key={i + 200} className='px-3 py-4'>
                            <div className='h-6 w-40 animate-pulse rounded bg-white/30 '></div>
                          </td>
                          <td key={i + 300} className='px-3 py-4'>
                            <div className='h-6 w-16 animate-pulse rounded bg-white/30 '></div>
                          </td>
                          <td
                            key={i + 400}
                            className='hidden px-3 py-4 md:table-cell'
                          >
                            <div className='h-6 w-60 animate-pulse rounded bg-white/30 '></div>
                          </td>
                          <td className='relative py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-8 lg:pr-8'>
                            <button className='cursor-not-allowed text-pink/50'>
                              Send Password Reset
                            </button>
                          </td>
                        </tr>
                      )))}
              </tbody>
            </table>
            {isError && (
              <div className='flex min-h-full w-full flex-col items-center justify-center bg-error/10 p-10'>
                <p className='font-subtext leading-8 text-error'>
                  Error while fetching users:
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

export default UsersAdmin
