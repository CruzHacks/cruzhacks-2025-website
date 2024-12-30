import React from "react"
import { FAQsInfo } from "./FaqInfo"
import Card from "../../../../components/Card"

const FAQCard: React.FC = () => {
  return (
    <Card>
      <div className='mb-5'>
        <h2 className='text-center font-title text-2xl font-bold uppercase text-off_white md:text-3xl'>
          FAQ's
        </h2>
      </div>
      <ul className='flex flex-col gap-10 text-off_white font-subtext'>
        {FAQsInfo.map((faq, i) => {
          return (
            <li key={i}>
              <h4 className='font-bold'>{faq.question}</h4>
              <p className='mt-1 font-subtext'>{faq.answer}</p>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export default FAQCard
