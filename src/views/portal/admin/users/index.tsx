import React, { useEffect, useState } from "react"
import { classNames } from "../../../../utils/string"
import { getUsers } from "../../../../utils/functionsApi"
import { useAuth } from "../../../../contexts/auth"
import { UserBasics } from "../../../../utils/types"

const UsersAdmin = () => {
  const {
    auth: { user },
  } = useAuth()
  const [users, setUsers] = useState<UserBasics[]>([])

  useEffect(() => {
    if (!user) return

    getUsers(user).then(res => {
      if ("message" in res) {
        console.error(res.message)
        return
      }

      setUsers(res.users)
    })
  }, [])

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
        <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
          <button
            type='button'
            className='block rounded-md bg-pink px-3 py-2 text-center font-subtext text-sm font-semibold text-white shadow-sm hover:bg-pink/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
          >
            Add user
          </button>
        </div>
      </div>
      <div className='mt-8 flow-root'>
        <div className='-mx-4 -my-2 sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle'>
            <table className='min-w-full border-separate border-spacing-0'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='sticky top-0 z-10 border-b border-white/20 bg-blue-imperial/50 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white backdrop-blur sm:pl-6 lg:pl-8'
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='sticky top-0 z-10 hidden border-b border-white/20 bg-blue-imperial/50 px-3 py-3.5 text-left text-sm font-semibold backdrop-blur sm:table-cell'
                  >
                    Email
                  </th>
                  <th
                    scope='col'
                    className='sticky top-0 z-10 border-b border-white/20 bg-blue-imperial/50 px-3 py-3.5 text-left text-sm font-semibold backdrop-blur'
                  >
                    Role
                  </th>
                  <th
                    scope='col'
                    className='sticky top-0 z-10 border-b border-white/20 bg-blue-imperial/50 py-3.5 pl-3 pr-4 backdrop-blur sm:pr-6 lg:pr-8'
                  >
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, userIdx) => (
                  <tr key={user.email}>
                    <td
                      className={classNames(
                        userIdx !== users.length - 1
                          ? "border-b border-white/20"
                          : "",
                        user.displayName ? "text-white" : "text-white/50",
                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-6 lg:pl-8"
                      )}
                    >
                      {user.displayName || "—"}
                    </td>
                    <td
                      className={classNames(
                        userIdx !== users.length - 1
                          ? "border-b border-white/20"
                          : "",
                        "hidden whitespace-nowrap px-3 py-4 text-sm sm:table-cell"
                      )}
                    >
                      {user.email}
                    </td>
                    <td
                      className={classNames(
                        userIdx !== users.length - 1
                          ? "border-b border-white/20"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm"
                      )}
                    >
                      {user.role}
                    </td>
                    <td
                      className={classNames(
                        userIdx !== users.length - 1
                          ? "border-b border-white/20"
                          : "",
                        "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-8 lg:pr-8"
                      )}
                    >
                      <p className='hover:text-indigo-900 cursor-not-allowed text-pink/50'>
                        Edit
                        <span className='sr-only'>, {user.displayName}</span>
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersAdmin
