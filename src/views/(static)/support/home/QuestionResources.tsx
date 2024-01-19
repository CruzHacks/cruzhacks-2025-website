import React from "react"
import Card from "../../../../components/Card"
import Button from "../../../../components/Button"

const QuestionResources: React.FC = () => {
  return (
    <Card title='Have a Question?'>
      <div className='flex flex-col items-center gap-10'>
        {/* <img className='w-2/3' alt='People Graphic' src={People} /> */}
        <p className='w-4/5 text-center'>
          Our organizing team is available throughout the whole event. If
          there&apos;s anything you need please contact us through discord or
          find an organizer in person.
        </p>

        <p className='w-4/5 text-center'>
          Login to your dashboard to find our 2024 Discord Invite Link.
        </p>

        <div className='flex w-full flex-col gap-3'>
          <Button
            text='Join Our General Discord'
            link='https://discord.gg/rGjDTCk3Nx'
            type='full'
            override='w-full'
          />
          <Button
            text='Join Our 2024 Event Discord'
            link='/portal/hacker'
            type='clear'
            override='w-full'
          />
        </div>
        <a
          className='text-blue-button underline'
          href='https://docs.google.com/document/d/e/2PACX-1vQMV0TiHt3CiEraUKBhTJ3a0lDoyawcQzLgqOhvDgAzS42WUX1AfDmFlYwgDySs9TmEkh1Cm0110qLx/pub'
        >
          Go to Hack Pack
        </a>
      </div>
    </Card>
  )
}

export default QuestionResources
