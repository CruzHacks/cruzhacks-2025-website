import React from "react"
import { FAQsInfo } from "./FaqInfo"
import Card from "../../../components/Card"

const FAQCard: React.FC = () => {
  return (
    <Card title='FAQ'>
      <ul className='flex flex-col gap-16'>
        {FAQsInfo.map((faq, i) => {
          return (
            <li key={i}>
              <h4 className='font-title md:text-2xl'>{faq.question}</h4>
              <p className='mt-2 md:text-xl'>{faq.answer}</p>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export default FAQCard
