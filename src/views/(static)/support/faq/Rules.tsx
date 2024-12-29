import React from "react"
import Button from "../../../../components/Button"
import Card from "../../../../components/Card"

const Rules: React.FC = () => {
  return (
    <Card>
      <div className='mb-5'>
        <h2 className='text-center font-title text-2xl font-bold uppercase text-off_white md:text-3xl'>
          Rules and Policies
        </h2>
      </div>
      <div className='md:px-10'>
        <p className='text-center text-off_white mb-10 font-subtext'>
          Cruzhacks values the importance of a safe and all-inclusive space. We
          welcome students from all backgrounds. Review our rules and policies
          below.
        </p>

        <div className='flex flex-col items-stretch gap-5'>
          <a
          className='bg-off_white/25 text-center font-subtext text-off_white p-4 rounded-lg border-off_white/70 border-2 w-full'
          href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
          >
            Code of Conduct
          </a>
          
          <a
          className='bg-off_white/25 text-center font-subtext text-off_white p-4 rounded-lg border-off_white/70 border-2 w-full'
          href='https://github.com/CruzHacks/hackathon-rules/blob/master/Rules.md'
          >
            CruzHacks2025 Rules
          </a>

          <a 
          className='bg-off_white/25 text-center font-subtext text-off_white p-4 rounded-lg border-off_white/70 border-2 w-full'
          href='https://docs.google.com/document/d/e/2PACX-1vRpuRz1HdQNinOPhP45YKZ2byY79aFhZSlbZOwjMuPx7BC4NxL-KWo4Dr1NXrQG-dy66IZMz40yzq8O/pub'
          >
            Participant & Release Agreement
          </a>
        </div>
      </div>
    </Card>
  )
}

export default Rules
