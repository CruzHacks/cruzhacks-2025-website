import React from "react"
import Card from "../../../components/Card"

const Rules: React.FC = () => {
  return (
    <Card title='Rules & Policies'>
      <div className='md:px-10'>
        <p className='font-nunito mb-10'>
          Cruzhacks values the importance of a safe and all-inclusive space. We
          welcome students from all backgrounds. Review our rules and policies
          below.
        </p>

        <div className='flex flex-col items-stretch gap-5'>
          <a href='https://github.com/CruzHacks/hackathon-rules/blob/master/Rules.md'>
            CruzHacks 2023 Rules
          </a>
          <a href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'>
            Code of Conduct 2023 Rules
          </a>
          <a href='https://docs.google.com/document/u/1/d/1aq7xN3c8t8AWS-yDBcvqu4EMYmw0025HAoCFuOVld7c'>
            COVID Safety Policy
          </a>
          <a href='https://docs.google.com/document/d/1298VyEqrSIvbzM3U8nvLQsLtY78Vi2mbndr3d5w0UKk'>
            Participant & Release Agreement
          </a>
        </div>
      </div>
    </Card>
  )
}

export default Rules
