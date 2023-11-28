import React from "react"
import { classNames } from "../utils/string"

const TwinkleStar = ({
  i = 0,
  className,
  children,
}: {
  i?: number
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={classNames(
        className,
        "absolute -z-20 aspect-square animate-twinkle"
      )}
      style={{ animationDelay: `-${i * 1.8}s` }}
    >
      {children}
    </div>
  )
}

const Star = ({ i = 1, className }: { i?: number; className?: string }) => (
  <TwinkleStar i={i} className={className}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      viewBox='0 0 31 35'
      fill='none'
    >
      <path
        d='M17.8379 9.97851L14 0L10.6508 11.7222C10.2326 13.1858 9.27385 14.4357 7.96863 15.2188L0 20L7.26654 22.5433C8.99352 23.1477 10.3503 24.5072 10.9514 26.2353L14 35L18.227 24.0099C18.7267 22.7105 19.6627 21.6254 20.8747 20.9404L30.5 15.5L22.1634 13.6877C20.189 13.2585 18.5632 11.8643 17.8379 9.97851Z'
        fill='#F6D21B'
      />
    </svg>
  </TwinkleStar>
)

export default Star
