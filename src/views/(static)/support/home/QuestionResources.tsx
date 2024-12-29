import React from "react"
import Card from "../../../../components/Card"
import Button from "../../../../components/Button"

const QuestionResources: React.FC = () => {
  return (
    <Card>
      <div className='mb-5'>
        <h2 className='text-center font-title text-2xl font-bold uppercase text-off_white md:text-3xl'>
          Have a Question?
        </h2>
      </div>
      <div className='flex flex-col items-center gap-10'>
        {/* <img className='w-2/3' alt='People Graphic' src={People} /> */}
        <p className='w-4/5 text-center text-off_white font-subtext'>
          Our organizing team is available throughout the whole event. If
          there&apos;s anything you need please contact us through discord or
          find an organizer in person.
        </p>


        <div className='flex w-full flex-col gap-3'>
          <a
            href="https://discord.gg/rGjDTCk3Nx"
            className="bg-off_white/25 text-center font-subtext text-off_white p-4 rounded-lg border-off_white/70 border-2"
          >
            Join Our General Discord
          </a>
        </div>
        <a
          className='text-off_white font-subtext underline'
          href='https://docs.google.com/document/d/e/2PACX-1vQMV0TiHt3CiEraUKBhTJ3a0lDoyawcQzLgqOhvDgAzS42WUX1AfDmFlYwgDySs9TmEkh1Cm0110qLx/pub'
        >
          Go to Hack Pack
        </a>
      </div>
    </Card>
  )
}

export default QuestionResources
