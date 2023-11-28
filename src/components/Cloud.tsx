import React from "react"
import { classNames } from "../utils/string"
import { Transition } from "@headlessui/react"

const BounceCloud = ({
  i = 0,
  leftSide,
  className,
  children,
}: {
  i?: number
  leftSide?: boolean
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={classNames(
        className,
        "absolute -z-10 flex w-1/3 animate-bounce-slow md:w-fit"
      )}
      style={{ animationDelay: `-${i * 2}s` }}
    >
      {leftSide !== undefined ? (
        <Transition
          appear={true}
          show={true}
          enter='transition-all duration-[3s] ease-out'
          enterFrom={classNames(
            leftSide ? "-translate-x-full" : "translate-x-40",
            "opacity-0 scale-[140%]"
          )}
          enterTo='opacity-100 scale-100'
        >
          {children}
        </Transition>
      ) : (
        children
      )}
    </div>
  )
}

// Top Left Cloud
export const Cloud1 = ({ className }: { className?: string }) => (
  <BounceCloud i={1} leftSide={true} className={className}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='258'
      height='86'
      viewBox='0 0 258 86'
      fill='none'
    >
      <path
        d='M150 28.458C128.735 13.7358 104.5 -13.5424 50 7.95766C-16.5 62.9577 26.2106 36.6538 9.97298 50.9576C-33.1644 88.9576 80.3356 85.4576 112.473 78.4576C144.953 71.383 143.5 70.7909 171.5 78.4576C213.5 89.9576 254.5 86.9576 257 67.9576C259.5 48.9576 169.5 41.958 150 28.458Z'
        fill='#1A0CA7'
      />
    </svg>
  </BounceCloud>
)

// Top Right Clouds
export const Cloud2 = ({ className }: { className?: string }) => (
  <BounceCloud i={2} leftSide={false} className={className}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='301'
      height='76'
      viewBox='0 0 301 76'
      fill='none'
    >
      <path
        d='M179.243 9.28375C202.443 22.0838 228.577 12.2838 238.743 5.78375C295.244 0.759415 300.243 17.7835 300.243 29.2835C300.243 40.7835 243.243 58.2835 209.243 72.2835C175.243 86.2835 136.743 47.7835 131.743 44.2835L131.657 44.223C126.713 40.7609 124.009 38.8674 83.7434 53.2835C43.2434 67.7835 23.7435 59.2835 11.7435 58.2835C-0.256521 57.2835 -18.2565 23.7835 46.7435 29.2835C111.743 34.7835 116 21.958 139.5 5.78362C142.47 3.73942 150.243 -6.71625 179.243 9.28375Z'
        fill='url(#paint0_linear_742_4)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_742_4'
          x1='-1.84777e-06'
          y1='38.458'
          x2='256.5'
          y2='38.458'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#190CA6' />
          <stop offset='1' stopColor='#190CA6' />
        </linearGradient>
      </defs>
    </svg>
  </BounceCloud>
)

export const Cloud3 = ({ className }: { className?: string }) => (
  <BounceCloud i={3} leftSide={false} className={className}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='203'
      height='60'
      viewBox='0 0 203 60'
      fill='none'
    >
      <path
        d='M133.537 8.40899C159.937 -5.99101 190.537 2.40899 202.537 8.40899V59.4092H23.5371C-26.4629 59.4092 11.5371 33.4092 60.0371 27.4092C108.537 21.4092 100.537 26.409 133.537 8.40899Z'
        fill='#1A0CA7'
      />
    </svg>
  </BounceCloud>
)

// Bottom Left Cloud
export const Cloud4 = ({ className }: { className?: string }) => (
  <BounceCloud i={4} className={className}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='413'
      height='76'
      viewBox='0 0 413 76'
      fill='none'
    >
      <path
        d='M166.442 9.22514C134.529 22.0601 98.581 12.2333 84.5963 5.71557C6.87753 0.677494 0 17.7482 0 29.2796C0 40.8111 78.4064 58.3589 125.175 72.3972C171.944 86.4355 224.903 47.8302 231.78 44.3206L231.899 44.2599C238.7 40.7884 242.419 38.8896 297.807 53.3452C353.517 67.8849 380.34 59.3616 396.846 58.3589C413.353 57.3562 438.113 23.7646 348.702 29.2796C259.291 34.7946 253.436 21.934 221.111 5.71544C217.025 3.66565 206.332 -6.81861 166.442 9.22514Z'
        fill='url(#paint0_linear_742_6)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_742_6'
          x1='413'
          y1='38.4792'
          x2='60.1713'
          y2='38.4792'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#190CA6' />
          <stop offset='1' stopColor='#190CA6' />
        </linearGradient>
      </defs>
    </svg>
  </BounceCloud>
)

// Bottom Right Cloud
export const Cloud5 = ({ className }: { className?: string }) => (
  <BounceCloud i={5} className={className}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='278'
      height='60'
      viewBox='0 0 278 60'
      fill='none'
    >
      <path
        d='M183.291 8.41558C219.528 -5.99635 261.529 2.41061 278 8.41558V59.458H32.3067C-36.3227 59.458 15.8357 33.4365 82.4062 27.4315C148.977 21.4265 137.996 26.4305 183.291 8.41558Z'
        fill='#1A0CA7'
      />
    </svg>
  </BounceCloud>
)
