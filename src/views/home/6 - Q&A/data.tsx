import React from "react"
import { Link } from "react-router-dom"

const faqs = [
  [
    {
      question: "What is CruzHacks?",
      answer: (
        <>
          CruzHacks is UCSC&apos;s largest hackathon. It is a three day event
          where you can work with others on new software and/or hardware
          projects. You&apos;ll be able to build your ideas, network, and show
          off your talent. Ideas can be formed through teams or individually.
          There are hundreds of students, mentors, sponsors, and judges that can
          help push your vision forward. The event also includes workshops
          geared towards students of all levels to learn and improve their
          technical skills
        </>
      ),
    },
    {
      question: "When does the hackathon take place? How long is it?",
      answer: (
        <>
          CruzHacks 2024 will take place in CruzHacks is a 3 day event that
          starts Friday night and ends Sunday afternoon. This year, it will take
          place on January 19-21, 2024.
        </>
      ),
    },
    {
      question: "Who can participate?",
      answer: (
        <>
          All students studying at a high school, college/university, and other
          alternative schools (such as bootcamps) can{" "}
          <Link to='/apply/user' className='text-blue-button'>
            apply!
          </Link>{" "}
          CruzHacks is open to designers, project managers, artists, and anyone
          else interested in creating! Mentors will be available to help you
          through any technical difficulties. No coding or technical experience
          is necessary!
        </>
      ),
    },
    {
      question: "How much does this cost?",
      answer: (
        <>
          Thanks to our generous sponsors, CruzHacks 2024 is free for our
          student attendees, mentors, judges, and volunteers! We will cover all
          meals for the entire duration of the event. Note: CruzHacks 2024 may
          be unable to cover travel costs.
        </>
      ),
    },
    {
      question: "Do I need any previous experience?",
      answer: (
        <>
          Nope! No experience is required. We&apos;re looking for applicants who
          are passionate about learning something new and creating a vision. 25%
          of hackers in 2021 and 47% in 2020 were first time hackers.
        </>
      ),
    },
    {
      question: "What should I bring?",
      answer: (
        <>
          Some essential things to bring include a laptop (with charger), an
          empty bag for swag, a change of clothes if you plan on spending the
          night, and a sleeping bag/blanket if you&apos;re not local to Santa
          Cruz!
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
    {
      question: "What are the prize tracks?",
      answer: (
        <>
          CruzHacks 2024 offers 4 main prize tracks: Health Hacks, Justice
          Hacks, Sustainability Hacks, and Education Hacks. Hackers can submit
          their project to one of these 4 main prize tracks. We also offer 4
          category prizes: Best Beginner, Best AI Hack, Best UI/UX Hack, and
          Best Slug Hack. Hackers are judged on category prizes based on
          eledgebility. There will also be sponsors hosting some of their own
          prize tracks (as well as some secret prizes). Hackers can submit their
          project to any number of sponsored prize tracks.{" "}
          <Link className='text-blue-button' to='/#prize-tracks'>
            See the Prize Track descriptions Here.
          </Link>
        </>
      ),
    },
  ],
  // Right -------------------------------------------------->
  [
    {
      question: "How do I sign up?",
      answer: (
        <>
          Applications are open now{" "}
          <Link className='text-blue-button' to='/apply/user'>
            here
          </Link>{" "}
          and close on December 15th. To stay updated, follow us on Instagram
          and Twitter @cruzhacks and
          <a
            target='_blank'
            rel='noreferrer'
            href='https://discord.gg/rGjDTCk3Nx'
            className='text-blue-button'
          >
            join our discord
          </a>
          .
        </>
      ),
    },
    {
      question: "Will there be people there to help me with my project?",
      answer: (
        <>
          Yes! Mentors with various skills are present throughout the event to
          assist anyone on their project.
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
      question: "Will CruzHacks be in-person? Where is it located?",
      answer: (
        <>
          CruzHacks will be in-person this year! It will be located at UC Santa
          Cruz. (More specific location details to come!)
        </>
      ),
    },
    {
      question:
        "Do I need to have a team to apply? Is there a limit to the size of each team?",
      answer: (
        <>
          It is not necessary to have a team at the time of application nor at
          the actual event! If you choose to build a team, there can be a
          maximum of 4 people. However, we accept all applicants individually,
          and once decisions are released, you can form a team with other
          accepted applicants.
        </>
      ),
    },
    {
      question: "Can I become a judge or mentor?",
      answer: (
        <>
          For CruzHacks 2024, mentors and judges will not be allowed to
          participate as hackers. In addition, judges cannot be a current high
          school or undergraduate college student. Mentors that are in the
          industry/working professionally are preferred, but we will still
          evaluate mentor applications from high school or undergraduate college
          students based on their experience.{" "}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://docs.google.com/forms/d/1sVqGzsxBtBCuByJk7MZjCzJ6llk707GgU6Ou_xvJqIA/edit'
            className='text-blue-button'
          >
            Click here to apply.
          </a>
        </>
      ),
    },
    {
      question:
        "Can I help out another way if I don't want to be a Hacker, but am not eligible to be a judge or mentor?",
      answer: (
        <>
          If you are a current UCSC student, you&apos;re welcome to volunteer
          with us! Volunteers are invaluable in helping us set up, clean up, and
          everything in between!{" "}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://docs.google.com/forms/d/e/1FAIpQLSdlg_PvCJG2b2tfJZ6W5uriE6Ip2Nlhw0wESbaTqG8jtCXY2A/viewform?usp=sf_link'
            className='text-blue-button'
          >
            Click here to apply.
          </a>
        </>
      ),
    },
  ],
]
export default faqs
