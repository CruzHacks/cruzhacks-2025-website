import React from "react"
import Button from "../../../../../components/Button"

const Notes = () => {
  return (
    <div>
      <div className='text-m m:text-lg mb-10 mt-5 text-center font-subtext text-[#FFFFFF] lg:text-2xl'>
        Note: We are open to working out custom packages on a case-by-case
        basis!
      </div>
      <div className='flex justify-center'>
        <Button
          text='View CruzHacks 2024 Sponsorship Packet'
          link='https://drive.google.com/file/d/1Hg2zUFu_5niwyyG9s9wrbefkDoeRunj9/view?usp=sharing'
          type='full'
        />
      </div>
    </div>
  )
}

export default Notes
