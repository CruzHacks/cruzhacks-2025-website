import React from "react"

interface CardProps {
  children: React.ReactNode
  introTitle?: string
  title?: string
  override?: string
}

const Card: React.FC<CardProps> = ({
  children,
  introTitle,
  title,
  override,
}) => {
  return (
    <div
      className={
        "lg:p-50 rounded-xl p-10 shadow-md md:p-20 z-10 bg-[#C5787C]/50 " +
        (introTitle && "md:p-10") +
        " " +
        override
      }
    >
      {introTitle && (
        <h2 className='pb-5 text-sm uppercase text-darkgray md:pb-10 md:text-lg'>
          {introTitle}
        </h2>
      )}
      {title && (
        <h1
          className={
            "pb-5 text-2xl font-bold uppercase text-off_white md:pb-10 md:text-3xl " +
            (introTitle ? "text-left md:text-center" : "text-center")
          }
        >
          {title}
        </h1>
      )}
      {children}
    </div>
  )
}

export default Card
