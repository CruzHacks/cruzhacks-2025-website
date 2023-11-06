import { Menu, Transition } from "@headlessui/react"
import Avatar from "boring-avatars"
import React, { Fragment } from "react"
import { classNames } from "../../utils/string"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../../utils/firebaseapp"

const profileNavigation = [{ name: "Home", href: "/" }]

const colors = [
  "#190CA6",
  "#13E4CA",
  "#F9D318",
  "#F9A318",
  "#ECBC50",
  "#E558F4",
  "#8924F1",
]

interface AvatarButtonProps {
  email: string
  direction: "left" | "down"
}

const AvatarButton = ({ email, direction }: AvatarButtonProps) => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await auth
      .signOut()
      .then(() => {
        console.log("User signed out")
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        navigate("/")
      })
  }

  return (
    <Menu as='div' className='relative ml-3'>
      <div>
        <Menu.Button className='relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'>
          <span className='absolute -inset-1.5' />
          <span className='sr-only'>Open profile menu</span>
          <Avatar size={30} name={email} variant='beam' colors={colors} />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items
          className={classNames(
            direction === "down" && "mt-2 origin-top-right",
            direction === "left" && "left-16 -mt-20 origin-bottom-left",
            "absolute right-0 z-10 w-48 rounded-md bg-blue-imperial py-1 shadow-lg ring-4 ring-white/5 focus:outline-none"
          )}
        >
          {profileNavigation.map(item => (
            <Menu.Item key={item.name}>
              {/* TODO: Change <a> to Next/Link without breaking Headless UI Menu */}
              {({ active }) => (
                <Link
                  to={item.href}
                  className={classNames(
                    active ? "bg-blue-royal/60" : "",
                    "block px-4 py-2 text-sm text-white"
                  )}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}
          <Menu.Item>
            {({ active }) => (
              <button
                className={classNames(
                  active ? "bg-blue-royal/60" : "",
                  "block w-full px-4 py-2 text-left text-sm text-pink"
                )}
                onClick={handleLogout}
              >
                Log out
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default AvatarButton
