import React from "react"
import Card from "../../../../components/Card"

const EventInfo: React.FC = () => {
  return (
    <Card introTitle='Need Something?' title='Event Info'>
      <div className='flex flex-col gap-5 md:gap-10 md:px-20'>
        <div className='flex flex-col gap-2'>
          <p className='font-bold'>WiFi</p>
          <p>UCSC_Guest</p>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='font-bold'>Color Legend</p>
          <p>Organizers: Black Shirt/Black Jackets</p>
          <p>Mentors/Judges: Blue Shirt</p>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='font-bold'>Discord</p>
          <p>Discord will be used for communication during the event.</p>
          <p>
            Join our Discord{" "}
            <a
              className='text-blue-button hover:underline'
              href='https://discord.gg/rGjDTCk3Nx'
            >
              here
            </a>
            .
          </p>
        </div>

        <div>
          <p className='font-bold'>Emergency Contacts</p>
          <div className='mt-5 flex flex-col gap-5 md:px-5'>
            <div className='flex flex-col gap-2'>
              <p className='font-bold'>UC Police Dispatch</p>
              <p>831-459-2231 ext 1</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-bold'>Santa Cruz Fire Department</p>
              <p>831-420-5678</p>
            </div>
          </div>
        </div>
        <div className='md:h-5'></div>
      </div>
    </Card>
  )
}

export default EventInfo
