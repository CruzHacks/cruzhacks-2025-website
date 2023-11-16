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
    question: "What is Cruzhacks?",
    answer: (
      <>
        A non-profit, student-run, annual hackathon based in UC Santa Cruz. Each
        year we welcome hundreds of college and high school students interested
        in developing technology for social good. We strive to empower the next
        generation of creators by providing the tools, environment, and
        motivation to plausibly solve real-world problems.
      </>
    ),
  },
  {
    question: "How do you evaluate the applications?",
    answer: (
      <>
        The short answer responses are the most critical part of your
        application. Make sure to put effort into those responses!
      </>
    ),
  },
  {
    question: "Who can participate?",
    answer: (
      <>
        All students studying at a high school, college/university, and other
        alternative schools (such as bootcamps) can apply! CruzHacks is open to
        designers, project managers, artists, and anyone else interested in
        creating! Mentors will be available to help you through any technical
        difficulties. No coding or technical experience is necessary!
      </>
    ),
  },
  {
    question: "How much does this cost?",
    answer: (
      <>
        Thanks to our generous sponsors, CruzHacks 2024 is free for our student
        attendees, mentors, judges, and volunteers! We will cover all meals for
        the entire duration of the event. Note: CruzHacks 2024 may be unable to
        cover travel costs.
      </>
    ),
  },
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
          className='text-blue-button'
        >
          MLH Code of Conduct
        </a>
        , the{" "}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://docs.google.com/document/u/1/d/1298VyEqrSIvbzM3U8nvLQsLtY78Vi2mbndr3d5w0UKk/edit'
          className='text-blue-button'
        >
          CruzHacks 2024 Participant and Release Agreement
        </a>
        , the{" "}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/CruzHacks/hackathon-rules/blob/master/Rules.md'
          className='text-blue-button'
        >
          CruzHacks 2024 Rules
        </a>
        , and the{" "}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://docs.google.com/document/u/1/d/1aq7xN3c8t8AWS-yDBcvqu4EMYmw0025HAoCFuOVld7c/edit'
          className='text-blue-button'
        >
          CruzHacks 2024 COVID Safety Policy
        </a>
        .
      </>
    ),
  },
  // {
  //   question: "What are the prize tracks?",
  //   answer: (
  //     <>
  //       CruzHacks 2024 offers 4 main prize tracks (Health Hacks, Justice Hacks,
  //       Sustainability Hacks, and Fintech Hacks). Hackers can submit their
  //       project to one of these 4 main prize tracks. We also offer 4 category
  //       prizes (Best Beginner, Best UI/UX, New Technologies, and Best Slug
  //       Hack). Hackers can submit their project to any number of these 4
  //       categories. There will also be sponsors hosting some of their own prize
  //       tracks. Hackers can submit their project to any number of sponsored
  //       prize tracks.
  //     </>
  //   ),
  // },
  {
    question: "How many people can be on my team?",
    answer: <>There is a maximum of 4 people per team.</>,
  },
  {
    question:
      /* eslint-disable-next-line max-len*/
      "Do I need to have a team to apply? Is there a limit to the size of each team?",
    answer: (
      <>
        It is not necessary to have a team at the time of application nor at the
        actual event! If you choose to build a team, there can be a maximum of 4
        people. However, we accept all applicants individually, and once
        decisions are released, you can form a team with other accepted
        applicants.
      </>
    ),
  },
  {
    question: "What if I don't know how to code?",
    answer: (
      <>
        No experience is required, if you&apos;re stuck reach out to our mentors
        on discord to get some pointers. If you&apos;re looking to get started,
        we&apos;ve provided some code {starterPack}. Cruzhacks is all about
        learning and trying something new, be sure to attend some of our
        workshops listed in the schedule!
      </>
    ),
  },
]
