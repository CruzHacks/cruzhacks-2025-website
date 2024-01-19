import React, { useState } from "react"
import { classNames } from "../../../../utils/string"
import Card from "../../../../components/Card"

const scheduleInfo = [
  {
    date: "Friday, January 19th",
    events: [
      ["Hacker Registration/ Dinner", "5:00 pm"],
      ["Opening Ceremony", "7:00 pm"],
      ["Hacking / Workshops Begin", "9:00 pm"],
    ],
  },
  {
    date: "Saturday, January 20th",
    events: [
      ["Breakfast", "9:00 am"],
      ["Workshops Continue", "9:00 am"],
      ["Lunch", "1:00 pm"],
      ["Dinner", "6:00 pm"],
      ["DevPost Soft Deadline", "10:00 pm"],
    ],
  },
  {
    date: "Sunday, January 21st",
    events: [
      ["Breakfast", "9:00 am"],
      ["Code Freeze/ Submit Project", "9:00 am"],
      ["Judging Begins", "11:30 am"],
      ["Lunch", "12:00 pm"],
      ["Closing Ceremony", "2:30 pm"],
      ["CruzHacks 2024 Concludes", "4:00 pm"],
    ],
  },
]

const Schedule: React.FC = () => {
  const [day, setDay] = useState(0)

  return (
    <Card>
      <div className='mb-5'>
        <h2 className='text-center font-title text-2xl font-bold uppercase text-blue-chinese md:text-3xl'>
          Schedule
        </h2>
        <h3 className='text-center text-black'>{scheduleInfo[day].date}</h3>
      </div>
      <div className='flex flex-col gap-10'>
        <div className='flex justify-center'>
          {scheduleInfo.map((schedule, i) => {
            return (
              <div key={i} className='flex items-center'>
                <button
                  className={classNames(
                    day == i ? "bg-blue-chinese text-white" : "text-black",
                    "text-thin cursor-pointer rounded-full border-2 border-black/50 p-1 px-3 text-sm"
                  )}
                  onClick={() => setDay(i)}
                  onKeyDown={() => setDay(i)}
                >
                  {"Day " + (i + 1)}
                </button>
                {i != scheduleInfo.length - 1 && (
                  <div className='h-0.5 w-5 bg-black/50' />
                )}
              </div>
            )
          })}
        </div>

        <div className='border-b-2 border-black/50' />
        <ul className='flex h-80 flex-col gap-5'>
          <ul className='flex flex-col overflow-y-scroll py-2'>
            {scheduleInfo[day].events.map((schedule, i) => {
              return (
                <li className='flex w-full items-start justify-start' key={i}>
                  <p className='-mt-1.5 w-20 shrink-0 text-right text-black/50'>
                    {schedule[1]}
                  </p>

                  <div>
                    <div className='flex flex-col items-center px-5'>
                      <div className='h-3 w-3 rounded-full bg-blue-chinese' />

                      {i != scheduleInfo[day].events.length - 1 && (
                        <div className='h-20 w-0.5 bg-blue-chinese' />
                      )}
                    </div>
                  </div>
                  <p className='-mt-1.5 text-black'>{schedule[0]}</p>
                </li>
              )
            })}
          </ul>
        </ul>
      </div>
    </Card>
  )
}

export default Schedule
