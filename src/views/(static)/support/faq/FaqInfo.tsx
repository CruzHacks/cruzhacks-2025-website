import React from "react"

const starterPack = (
  <a
    target='_blank'
    rel='noreferrer'
    href='https://github.com/CruzHacks/Cruzhacks-Hacker-Packs'
    className='text-blue'
  >
    &nbsp;starter packs
  </a>
)

export const FAQsInfo = [
  {
    question: "What should I bring?",
    answer: (
      <>
        Some essential things to bring include a laptop (with charger), an empty
        bag for swag, a change of clothes if you plan on spending the night, and
        a sleeping bag/blanket if you&apos;re not local to Santa Cruz!
      </>
    ),
  },
  {
    question: "What rules do I need to follow?",
    answer: (
      <>
        All CruzHacks 2024 participants will need to follow the{" "}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
          className='text-blue-button underline'
        >
          MLH Code of Conduct
        </a>
        , the{" "}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://docs.google.com/document/u/1/d/1298VyEqrSIvbzM3U8nvLQsLtY78Vi2mbndr3d5w0UKk/edit'
          className='text-blue-button underline'
        >
          CruzHacks 2024 Participant and Release Agreement
        </a>
        , and the{" "}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/CruzHacks/hackathon-rules/blob/master/Rules.md'
          className='text-blue-button underline'
        >
          CruzHacks 2024 Rules
        </a>
        .
      </>
    ),
  },
  {
    question: "How many people can be on my team?",
    answer: <>There is a maximum of 4 people per team.</>,
  },
  {
    question: "What if I don't know how to code?",
    answer: (
      <>
        No experience is required, if you&apos;re stuck reach out to our mentors
        on slack to get some pointers. If you&apos;re looking to get started,
        we&apos;ve provided some code {starterPack}. Cruzhacks is all about
        learning and trying something new, be sure to attend some of our
        workshops listed in the schedule!
      </>
    ),
  },
]
