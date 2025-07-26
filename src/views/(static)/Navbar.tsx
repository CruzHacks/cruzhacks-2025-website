import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import CruzHacksLogo from "../../assets/logos/CruzHacks - Orange.svg"
import AvatarButton from "../../components/AvatarButton"
import { classNames } from "../../utils/string"
import {
  ArchiveBoxIcon,
  ChevronDownIcon,
  InformationCircleIcon,
  MapIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/outline"
// import { Popover, Transition } from "@headlessui/react"

const navigation = [
  { name: "About", href: "/#about" },
  { name: "Prize Tracks", href: "/#prize-tracks" },
  { name: "The Team", href: "/team" },
  {
    name: "Support",
    sub_menu: [
      {
        name: "Support Hub",
        description: "Support links, schedules, and more",
        href: "/support",
        icon: InformationCircleIcon,
      },
      {
        name: "Resources",
        description: "Resources for hackers",
        href: "/support/resources",
        icon: ArchiveBoxIcon,
      },
      {
        name: "Maps",
        description: "Venue and parking maps",
        href: "/support/maps",
        icon: MapIcon,
      },
      {
        name: "FAQs",
        description: "Frequently asked questions",
        href: "/support/faq-and-rules",
        icon: QuestionMarkCircleIcon,
      },
    ],
  },
]

const Navbar = () => {
  const {
    isAuthenticated,
    auth: { user },
  } = useAuth()

  return (
    <>
      <div className='fixed z-[300] flex w-screen justify-center bg-[#0000]/20'>
        <div className='relative flex h-6 w-screen items-center justify-center px-6 py-8 pt-10 font-subtext md:text-xl lg:px-10 lg:justify-center'>
          <Link to='/#landing' className='left-10 lg:absolute'>
            <img
              className='hidden h-8 w-auto md:block lg:ml-48'
              src={CruzHacksLogo}
              alt='CruzHacks logo'
            />
          </Link>

          {/* links to all navbar pages */}
          {/* <div className="w-full mx-64 bg-orange flex justify-end">
            BEANS
          </div> */}

          {/* Announce applications open
          <div className="flex items-center gap-2 lg:gap-5">
            <h2 className="font-subtext text-off_white lg:text-2xl" >Applications are OPEN NOW!</h2>
            <Link to='/j7hxc5p6ri/apply'>
              <div className="bg-medium_yellow/65 px-4 lg:p-2 lg:px-5 rounded-full hover:bg-medium_yellow/85">
                <b>APPLY HERE</b>
              </div>
            </Link>
          </div> */}

          {/*
          <Link
            to='/support'
            className='font-subtext text-xs leading-6 hover:text-yellow-red md:text-lg'
          >
            Event Logistics
          </Link>
            */}

          {/* <div className='flex grow items-center justify-evenly font-light uppercase md:grow-0 md:gap-10 lg:gap-16'>
            {navigation.map(item => (
              <div key={item.name}>
                {!item.sub_menu ? (
                  
                ) : (
                  <>
                    <Link
                      to={item.sub_menu[0].href}
                      className='block font-subtext text-xs leading-6 hover:text-pink md:hidden md:text-xl'
                    >
                      {item.name}
                    </Link>
                    <Popover
                      className='relative hidden md:block'
                      key={item.name}
                    >
                      <Popover.Button className='inline-flex items-center gap-x-1 font-subtext text-xs uppercase leading-6 hover:text-pink focus:outline-none md:text-xl'>
                        <span>{item.name}</span>
                        <ChevronDownIcon
                          className='h-5 w-5'
                          aria-hidden='true'
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel className='absolute left-1/2 z-10 mt-6 flex w-screen max-w-max -translate-x-1/2 px-4'>
                          {({ close }) => (
                            <div className='w-screen max-w-sm flex-auto overflow-hidden rounded-3xl bg-blue-imperial text-sm leading-6 shadow-lg ring-2 ring-inset ring-white/5 focus:outline-none'>
                              <div className='grid grid-cols-1 gap-x-6 gap-y-1 p-4'>
                                {item.sub_menu.map(sub_item => (
                                  <Link
                                    to={sub_item.href}
                                    onClick={() => close()}
                                    key={sub_item.name}
                                  >
                                    <div className='group relative flex gap-x-6 rounded-lg p-4 hover:bg-blue-royal'>
                                      <div className='bg-gray-50 mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg'>
                                        <sub_item.icon
                                          className='h-6 w-6 text-orange'
                                          aria-hidden='true'
                                        />
                                      </div>
                                      <div>
                                        <p className='font-title font-semibold text-white'>
                                          {sub_item.name}
                                        </p>
                                        <span className='absolute inset-0' />
                                        <p className='mt-1 font-subtext text-white/80'>
                                          {sub_item.description}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  </>
                )}
              </div>
            ))}
          </div> */}

          {/* Desktop MLH Trust Badge */}

          <a
            id='mlh-trust-badge'
            className={classNames(
              isAuthenticated ? "right-24" : "right-[12.3rem]",
              "absolute top-0 hidden w-20 md:block"
            )}
            href='https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=red'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-blue.svg'
              alt='Major League Hacking 2026 Hackathon Season'
              className='w-full'
            />
          </a>
          
          {/*
          <div className='right-10 lg:absolute'>
            {!isAuthenticated ? (
              <Link
                to='/login'
                className='md:text-blue-white z-10 flex items-center justify-center gap-2 rounded-full px-6 py-3 font-subtext text-sm text-off_white shadow-lg md:bg-sponsor_light_orange/30 md:text-off_white'
              >
                <span className='hidden md:block'><b>LOGIN</b></span>
              </Link>
            ) : (
              <AvatarButton
                nav={[{ name: "Portal", href: "/portal" }]}
                email={user?.email || ""}
                direction='down'
              />
            )}
          </div>
          */}
        </div>
      </div>

      {/* Mobile MLH Trust Badge */}
      <a
        id='mlh-trust-badge'
        className='absolute right-5 z-10 block w-20 md:hidden'
        href='https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=blue'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src='https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-blue.svg'
          alt='Major League Hacking 2026 Hackathon Season'
          className='w-full'
        />
      </a>
    </>
  )
}

export default Navbar
