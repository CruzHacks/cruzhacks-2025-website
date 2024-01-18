import React from "react"
import Button from "../../../../components/Button"
import Card from "../../../../components/Card"

const Rules: React.FC = () => {
  return (
    <Card title='Rules and Policies'>
      <div className='md:px-10'>
        <p className='mb-10 font-subtext'>
          Cruzhacks values the importance of a safe and all-inclusive space. We
          welcome students from all backgrounds. Review our rules and policies
          below.
        </p>

        <div className='flex flex-col items-stretch gap-5'>
          <Button
            text='Code of Conduct'
            link='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
            type='full'
          />
          <Button
            text='CruzHacks 2024 Rules'
            link='https://github.com/CruzHacks/hackathon-rules/blob/master/Rules.md'
            type='clear'
          />
          {/* <Button
            text='COVID Safety Policy'
            link='https://docs.google.com/document/u/1/d/1aq7xN3c8t8AWS-yDBcvqu4EMYmw0025HAoCFuOVld7c'
            type='clear'
          /> */}
          <Button
            text='Participant & Release Agreement'
            link='https://docs.google.com/document/d/1298VyEqrSIvbzM3U8nvLQsLtY78Vi2mbndr3d5w0UKk'
            type='clear'
          />
        </div>
      </div>
    </Card>
  )
}

export default Rules
