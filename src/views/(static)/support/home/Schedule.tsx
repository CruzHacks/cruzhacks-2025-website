import React, { useState } from "react"
import { classNames } from "../../../../utils/string"
import Card from "../../../../components/Card"

const scheduleInfo = [
  {
    date: "Friday, April 11th",
    events: [
      ["Event Begins. Start of registration/check-in for all participants", "4:00PM"],
      ["Opening Ceremony", "6:00PM - 8:00PM"],
      ["Dinner", "8:00PM - 9:30PM"],
      ["Ongoing Workshops", "8:00PM - 9:00PM"],
      ["Hacking Begins!", "9:00 pm"],
    ],
  },
  {
    date: "Saturday, April 12th",
    events: [
      ["Breakfast", "8:00AM - 9:30AM"],
      ["Workshops Continue", "9:00AM - 5:00PM"],
      ["Lunch", "12:00PM - 1:30PM"],
      ["Dinner", "6:00PM - 7:30PM"],
    ],
  },
  {
    date: "Sunday, April 13th",
    events: [
      ["Devpost Soft Deadline", "7:30AM"],
      ["Breakfast", "9:00AM"],
      ["Code Freeze/ Submit Project", "9:00AM"],
      ["Judging Begins", "11:30AM"],
      ["Lunch", "12:30PM - 2:00PM"],
      ["Closing Ceremony", "2:15PM"],
      ["CruzHacks 2025 Concludes", "4:00PM"],
    ],
  },
]

const Schedule: React.FC = () => {
  const [day, setDay] = useState(0)

  return (
    <Card>
      <div className='mb-5'>
        <h2 className='text-center font-title text-2xl font-bold uppercase text-off_white md:text-3xl'>
          Schedule
        </h2>
        <h3 className='text-center text-off_white font-subtext'>{scheduleInfo[day].date}</h3>
      </div>

      {/* <div>
        <p className="text-center text-off_white font-subtext">We&apos;re actively working on finalizing logistics to ensure the best possible experience for you. Stay tuned for updates coming soon!</p>
      </div> */}

      <div className='flex flex-col gap-10'>
        <div className='flex justify-center'>
          {scheduleInfo.map((schedule, i) => {
            return (
              <div key={i} className='flex items-center'>
                <button
                  className={classNames(
                    day == i ? "bg-off_white text-dark_orange" : "text-off_white",
                    "font-subtext cursor-pointer rounded-full border-2 border-dark_orange/70 p-1 px-3 text-sm"
                  )}
                  onClick={() => setDay(i)}
                  onKeyDown={() => setDay(i)}
                >
                  {"Day " + (i + 1)}
                </button>
                {i != scheduleInfo.length - 1 && (
                  <div className='h-0.5 w-5 bg-dark_orange/70' />
                )}
              </div>
            )
          })}
        </div>

        <div className='border-b-2 border-off_white' />
        <ul className='flex h-80 flex-col gap-5'>
          <ul className='flex flex-col overflow-y-scroll py-2'>
            {scheduleInfo[day].events.map((schedule, i) => {
              return (
                <li className='flex w-full items-start justify-start' key={i}>
                  <p className='-mt-1.5 w-20 shrink-0 text-right text-[#FFF]'>
                    {schedule[1]}
                  </p>

                  <div>
                    <div className='flex flex-col items-center px-5'>
                      <div className='h-3 w-3 rounded-full bg-dark_orange' />

                      {i != scheduleInfo[day].events.length - 1 && (
                        <div className='h-20 w-0.5 bg-dark_orange' />
                      )}
                    </div>
                  </div>
                  <p className='-mt-1.5 text-[#FFF] font-subtext'>{schedule[0]}</p>
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
