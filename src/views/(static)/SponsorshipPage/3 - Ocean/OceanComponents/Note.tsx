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
          text='View CruzHacks 2026 Sponsorship Packet'
          link='https://docs.google.com/presentation/d/1x0X03CSs2gZMYsVk3OqJggVFroZA-Ee5A0iIUuy9YS8/edit?usp=sharing'
          type='full'
        />
      </div>
    </div>
  )
}

export default Notes
