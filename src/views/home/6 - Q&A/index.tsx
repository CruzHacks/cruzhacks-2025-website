import React, { ReactElement, useState } from "react"
import { classNames } from "../../../utils/string"
import { StarIcon } from "@heroicons/react/24/outline"
import faqs from "./data"

import Grid from "../../../assets/illustrations/Grid.svg"
import Star from "../../../components/Star"

interface FAQItemProps {
  question: string
  answer: ReactElement
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <button
      className='rounded-2xl border-2 border-turquoise bg-blue-imperial'
      onClick={toggleOpen}
    >
      <div className='flex items-center justify-between gap-2 px-5 py-3'>
        <p className='text-left'>{question}</p>
        <StarIcon
          className={classNames(
            !open ? "rotate-0 fill-none" : "rotate-45 fill-turquoise",
            "h-6 w-6 shrink-0 text-turquoise transition-all"
          )}
        />
      </div>
      <div
        className={classNames(
          !open ? "invisible max-h-0 " : "max-h-[500rem] pb-5 text-white/90",
          "px-5 text-left font-subtext transition-all"
        )}
      >
        {answer}
      </div>
    </button>
  )
}

const QA = ({ id }: { id?: string }) => {
  return (
    <div
      className='-z-20 bg-top bg-repeat-y md:py-40'
      style={{
        backgroundImage: `url(${Grid})`,
        backgroundSize: "100% auto",
      }}
    >
      {/* Scroll Anchor*/}
      <div className='absolute -mt-32' id={id}></div>

      <Star className='left-24 -mt-4 h-7 md:left-52 md:-mt-10 md:h-8 lg:left-72 lg:h-10' />
      <Star
        i={2}
        className='left-10 mt-8 h-4 md:left-12 md:mt-8 md:h-5 lg:h-7'
      />
      <Star
        i={3}
        className='left-20 mt-16 h-2 md:left-36 md:mt-16 md:h-4 lg:left-52 lg:h-4'
      />
      <h2 className='py-10 text-center font-title text-3xl uppercase md:text-5xl'>
        Q&A
      </h2>
      <div className='flex w-full flex-col items-stretch justify-stretch gap-3 md:flex-row'>
        {faqs.map((faqSection, j) => (
          <div key={j} className='flex h-full w-full flex-col gap-3 md:w-1/2'>
            {faqSection.map(faq => (
              <FAQItem key={faq.question} {...faq} />
            ))}
            {j == 1 && (
              <div className='relative'>
                <Star
                  i={5}
                  className='right-16 mt-16 h-8 md:right-20 md:mt-10 md:h-8 lg:h-10'
                />
                <Star
                  i={7}
                  className='right-28 mt-10 h-4 md:right-32 md:mt-16 md:h-4 lg:right-40 lg:mt-20 lg:h-6'
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default QA
