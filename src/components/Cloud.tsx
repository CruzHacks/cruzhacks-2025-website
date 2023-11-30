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
  const child = (
    <div
      className={classNames(
        className,
        "absolute -z-10 flex w-1/3 animate-bounce-slow opacity-80 md:w-fit"
      )}
      style={{ animationDelay: `-${i * 2}s` }}
    >
      {children}
    </div>
  )

  // Transition if side defined
  if (leftSide !== undefined) {
    return (
      <Transition
        appear={true}
        show={true}
        enter='transition-all duration-[3s] ease-out'
        enterFrom={classNames(
          leftSide ? "-translate-x-40" : "translate-x-40",
          "opacity-0 scale-[140%]"
        )}
        enterTo='opacity-80 scale-100'
        className='w-full'
      >
        {child}
      </Transition>
    )
  }

  return child
}

// Top Left Cloud
export const Cloud1 = ({ className }: { className?: string }) => (
  <BounceCloud i={1} leftSide={true} className={className}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='363'
      height='97'
      viewBox='0 0 363 97'
      fill='none'
    >
      <path
        d='M229.749 32.3966C203.279 15.6368 173.112 -15.4167 105.274 9.059C48.0152 39.227 15.0293 18.1666 1.33711 50.0418C-12.3551 81.917 82.6967 85.3317 122.7 77.3629C163.13 69.3093 221.658 80.5883 256.511 89.3161C308.79 102.408 359.825 98.9925 362.936 77.3629C366.048 55.7333 254.021 47.765 229.749 32.3966Z'
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
      width='407'
      height='90'
      viewBox='0 0 407 90'
      fill='none'
    >
      <path
        d='M242.977 10.5206C274.426 25.9226 309.851 14.1304 323.633 6.30907C400.222 0.263384 407 20.7482 407 34.5859C407 48.4237 329.733 69.4811 283.643 86.327C237.554 103.173 185.365 56.8466 178.587 52.6351L178.47 52.5623C171.768 48.3965 168.103 46.118 113.52 63.4647C58.6193 80.9122 32.1859 70.6843 15.9191 69.4811C-0.347732 68.2778 -24.7479 27.9679 63.3639 34.5859C151.476 41.204 157.246 25.7712 189.102 6.30892C193.128 3.84917 203.665 -8.73194 242.977 10.5206Z'
        fill='url(#paint0_linear_823_116)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_823_116'
          x1='-2.50477e-06'
          y1='45.6254'
          x2='347.703'
          y2='45.6254'
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
      width='373'
      height='61'
      viewBox='0 0 373 61'
      fill='none'
    >
      <path
        d='M168.304 4.88279C201.577 -10.6725 232.535 15.1978 265.305 23.2996C298.074 31.4013 394.491 37.3953 368.654 51.3855C342.816 65.3758 255.268 59.9747 255.268 59.9747H29.6651C-33.3527 59.9747 14.5408 31.8887 75.668 25.4073C136.795 18.926 126.712 24.3269 168.304 4.88279Z'
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
      width='551'
      height='123'
      viewBox='0 0 551 123'
      fill='none'
    >
      <path
        d='M267.22 31.4647C230.489 49.203 190.172 0 143.558 0C35.943 0 -8.78503 42.0481 1.41406 59.1804C18.0156 87.0674 86.4218 60.082 116.511 71.8652C143.655 82.4955 194.193 109.568 219.724 118.77C273.553 138.171 334.506 84.8177 342.422 79.9674L342.559 79.8835C350.386 75.0858 354.667 72.4617 418.417 92.4396C482.537 112.534 513.409 100.754 532.408 99.3687C551.406 97.9828 579.904 51.5585 476.995 59.1804C374.086 66.8023 367.348 49.0287 330.142 26.6142C325.44 23.7814 313.133 9.29187 267.22 31.4647Z'
        fill='url(#paint0_linear_823_118)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_823_118'
          x1='551'
          y1='71.8944'
          x2='144.907'
          y2='71.8944'
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
      width='528'
      height='87'
      viewBox='0 0 528 87'
      fill='none'
    >
      <path
        d='M209.548 11.7297C250.975 -9.51394 298.992 2.8782 317.823 11.7297C317.823 11.7297 346.589 17.8045 364.696 23.5845C392.996 32.6184 536.441 33.4557 527.609 69.2796C522.861 88.5366 405.003 86.9719 404.71 86.968C404.701 86.9679 404.705 86.968 404.696 86.968H317.823H36.9346C-41.5259 86.968 18.1041 48.6114 94.2107 39.7598C170.317 30.9083 157.764 38.2843 209.548 11.7297Z'
        fill='#1A0CA7'
      />
    </svg>
  </BounceCloud>
)

// Tech Track Clouds
export const CloudTrack1 = ({ className }: { className?: string }) => (
  <BounceCloud i={5} className={className}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='526'
      height='97'
      viewBox='0 0 526 97'
      fill='none'
    >
      <path
        d='M332.914 32.3966C294.558 15.6368 250.846 -15.4167 152.545 9.059C69.5758 39.227 21.778 18.1666 1.93751 50.0418C-17.903 81.917 119.831 85.3317 177.797 77.3629C236.381 69.3093 321.19 80.5883 371.693 89.3161C447.448 102.408 521.399 98.9925 525.908 77.3629C530.417 55.7333 368.086 47.765 332.914 32.3966Z'
        fill='#1A0CA7'
      />
    </svg>
  </BounceCloud>
)

export const CloudTrack2 = ({ className }: { className?: string }) => (
  <BounceCloud i={6} className={className}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='407'
      height='90'
      viewBox='0 0 407 90'
      fill='none'
    >
      <path
        d='M242.977 10.5206C274.426 25.9226 309.851 14.1304 323.633 6.30907C400.222 0.263384 407 20.7482 407 34.5859C407 48.4237 329.733 69.4811 283.643 86.327C237.554 103.173 185.365 56.8466 178.587 52.6351L178.47 52.5623C171.768 48.3965 168.103 46.118 113.52 63.4647C58.6193 80.9122 32.1859 70.6843 15.9191 69.4811C-0.347732 68.2778 -24.7479 27.9679 63.3639 34.5859C151.476 41.204 157.246 25.7712 189.102 6.30892C193.128 3.84917 203.665 -8.73194 242.977 10.5206Z'
        fill='#1A0CA7'
      />
      <defs>
        <linearGradient
          id='paint0_linear_830_792'
          x1='-2.50477e-06'
          y1='45.6254'
          x2='347.703'
          y2='45.6254'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#190CA6' />
          <stop offset='1' stopColor='#190CA6' />
        </linearGradient>
      </defs>
    </svg>
  </BounceCloud>
)
