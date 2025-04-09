import React, { useState } from "react"
import { foodInfo } from "./foodInfo"
import { workshopInfo } from "./workshopInfo"

import { classNames } from "../../../../utils/string"
import Card from "../../../../components/Card"

const WorkshopsFood: React.FC = () => {
  const [slider, setSlider] = useState(true)
  const [workshopDay, setWorkshopDay] = useState(0)
  const [foodDay, setFoodDay] = useState(0)

  const workshop = (
    <div className='flex flex-col gap-10 text-black'>
      <div className='flex justify-center'>
        {workshopInfo.map((item, i) => {
          return (
            <div key={i} className='flex items-center font-subtext'>
              <button
                className={classNames(
                  workshopDay == i
                    ? "bg-off_white text-dark_orange"
                    : "text-off_white",
                  "text-thin cursor-pointer rounded-full border-2 border-dark_orange/70 p-1 px-3 text-sm"
                )}
                onClick={() => setWorkshopDay(i)}
                onKeyDown={() => setWorkshopDay(i)}
              >
                {"Day " + (i + 1)}
              </button>

              {i != workshopInfo.length - 1 && (
                <div className='h-0.5 w-5 bg-dark_orange/70' />
              )}
            </div>
          )
        })}
      </div>

      <div className='border-b-2 border-off_white' />

      <ul className='flex h-72 flex-col gap-5 overflow-y-scroll'>
        {workshopInfo[workshopDay].events.map((workshop, i) => {
          return (
            <li className='flex items-center justify-between font-subtext' key={i}>
              <div>
                <p className='text-white font-bold'>{workshop.title}</p>
                <p className='text-off_white/70'>{workshop.location}</p>
                <p className='text-off_white'>{workshop.hostedBy}</p>
              </div>
              <div className='w-5 md:w-2/6'></div>
              <div className='text-thin shrink-0 text-right'>
                <p className='text-off_white'>{workshop.startTime}-</p>
                <p className='text-off_white'>{workshop.endTime}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )

  const food = (
    <div className='flex flex-col gap-10 text-off_white'>
      <div className='flex justify-center'>
        {foodInfo.map((item, i) => {
          return (
            <div key={i} className='flex items-center font-subtext'>
              <button
                className={classNames(
                  foodDay == i ? "bg-off_white text-dark_orange" : "text-off_white",
                  "text-thin cursor-pointer rounded-full border-2 border-dark_orange/70 p-1 px-3 text-sm"
                )}
                onClick={() => setFoodDay(i)}
                onKeyDown={() => setFoodDay(i)}
              >
                {"Day " + (i + 1)}
              </button>
              {i != foodInfo.length - 1 && (
                <div className='h-0.5 w-5 bg-dark_orange/70' />
              )}
            </div>
          )
        })}
      </div>

      <div className='border-b-2 border-off_white' />

      <div className='space-y-10'>
        <ul className='flex flex-col gap-5 overflow-y-scroll'>
          {foodInfo[foodDay].events.map((meal, i) => {
            return (
              <li className='flex items-center justify-between' key={i}>
                <div>
                  <p className='text-white font-bold'>{meal.title}</p>
                  <p className='text-off_white'>{meal.provider}</p>
                </div>
                <div className='w-5 md:w-2/6'></div>
                <div className='text-thin shrink-0 text-right'>
                  <p className='text-off_white'>{meal.time}</p>
                </div>
              </li>
            )
          })}
        </ul>

        <ul className='space-y-3 rounded-lg bg-off_white/30 p-5 text-white font-bold font-subtext'>
          <li>
            All meals will have dietary accomedations (vegan, vegetarian,
            dairy-free, egg-free, gluten-free, halal, nut-free, seed-free,
            etc.).
          </li>
          <li>Snacks and drinks will be provided at each meal as well.</li>
        </ul>
      </div>
    </div>
  )

  return (
    <Card>
      <div className='flex flex-col items-center gap-10'>
        <div className='flex w-fit items-center justify-between rounded-xl text-sm text-off_white lg:text-xl'>
          <button
            className={classNames(
              slider && "bg-dark_orange text-off_white",
              "cursor-pointer rounded-xl p-3 px-9 font-title uppercase"
            )}
            onClick={() => setSlider(true)}
            onKeyDown={() => setSlider(true)}
          >
            Workshops
          </button>
          <button
            className={classNames(
              !slider && "bg-dark_orange text-off_white",
              "cursor-pointer rounded-xl p-3 px-9 font-title uppercase"
            )}
            onClick={() => setSlider(false)}
            onKeyDown={() => setSlider(false)}
          >
            Food
          </button>
        </div>
      </div>

      <h3 className='my-5 text-center text-off_white font-subtext font-bold'>
        {slider ? workshopInfo[workshopDay].date : foodInfo[foodDay].date}
      </h3>

      {slider ? workshop : food}
    </Card>
  )
}

export default WorkshopsFood
