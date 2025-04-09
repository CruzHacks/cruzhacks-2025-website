import React from "react"
import Card from "../../../../components/Card"
import { Link } from "react-router-dom"

const EventInfo: React.FC = () => {
  return (
    <Card>
      <div className='mb-5'>
        <h2 className='text-center font-title text-2xl font-bold uppercase text-off_white md:text-3xl'>
          Event Info
        </h2>
      </div>
      <div className='flex flex-col gap-5 md:gap-10 md:px-20 font-subtext text-off_white'>
        <div className='flex flex-col gap-2'>
          <p className='font-bold'>WiFi</p>
          <li> CIVICWIFI-A Password: CivicSC19a </li>
          <li> CIVICWIFI-C Password: CivicSC19c </li>

          <li>  CIVICWIFI-D Password: CivicSC19d </li>

          <li> CIVICWIFI-E Password: CivicSC19e </li>

          <li>CIVICWIFI-F Password: CivicSC19f</li>

          <li> CIVICWIFI-G Password: CivicSC19g </li>

          <li>CIVICWIFI-H Password: CivicSC19f</li>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='font-bold'>Color Legend</p>
          <p>Organizers: Dark Blue Jackets</p>
          <p>Mentors/Judges: Tan Shirt</p>
          <p>Volunteers: Black Shirt</p>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='font-bold'>Discord</p>
          <p>Discord will be used for communication during the event.</p>
          <p>
            Join our 2025 Hacker Discord{" "}
            <Link
              className='text-dark_orange hover:underline'
              to='/portal/hacker'
            >
              in your dashboard
            </Link>
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
