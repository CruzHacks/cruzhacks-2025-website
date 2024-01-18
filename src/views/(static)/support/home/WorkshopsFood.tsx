import React, { useState } from "react"
import { Dietary, foodInfo } from "./foodInfo"
import { workshopInfo } from "./workshopInfo"

import GlutenFreeLogo from "../../../../assets/icons/Gluten Free.svg"
import VegetairanLogo from "../../../../assets/icons/Vegetarian.svg"
import VeganLogo from "../../../../assets/icons/Vegan.svg"
import { classNames } from "../../../../utils/string"
import Card from "../../../../components/Card"

const matchLogo = (symb: Dietary) => {
  switch (symb) {
    case Dietary.GlutenFree:
      return GlutenFreeLogo
    case Dietary.Vegetarian:
      return VegetairanLogo
    case Dietary.Vegan:
      return VeganLogo
  }
}

const WorkshopsFood: React.FC = () => {
  const [slider, setSlider] = useState(true)
  const [workshopDay, setWorkshopDay] = useState(0)
  const [foodDay, setFoodDay] = useState(0)

  const workshop = (
    <div className='flex flex-col gap-10 text-black'>
      <div className='flex justify-center'>
        {workshopInfo.map((item, i) => {
          return (
            <div key={i} className='flex items-center'>
              <button
                className={classNames(
                  workshopDay == i
                    ? "bg-blue-chinese text-white"
                    : "text-black",
                  "text-thin cursor-pointer rounded-full border-2 border-black/50 p-1 px-3 text-sm"
                )}
                onClick={() => setWorkshopDay(i)}
                onKeyDown={() => setWorkshopDay(i)}
              >
                {"Day " + (i + 1)}
              </button>

              {i != workshopInfo.length - 1 && (
                <div className='h-0.5 w-5 bg-black/50' />
              )}
            </div>
          )
        })}
      </div>

      <div className='border-b-2 border-black/50' />

      <ul className='flex h-72 flex-col gap-5 overflow-y-scroll'>
        {workshopInfo[workshopDay].events.map((workshop, i) => {
          return (
            <li className='flex items-center justify-between' key={i}>
              <div>
                <p className='text-black'>{workshop.title}</p>
                <p className='text-[#696969]'>{workshop.location}</p>
                <p className='text-[#A7A7A7]'>{workshop.hostedBy}</p>
              </div>
              <div className='w-5 md:w-2/6'></div>
              <div className='text-thin shrink-0 text-right'>
                <p className='text-darkgray'>{workshop.startTime}-</p>
                <p className='text-darkgray'>{workshop.endTime}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )

  const food = (
    <div className='flex flex-col gap-10 text-black'>
      <div className='flex justify-center'>
        {foodInfo.map((item, i) => {
          return (
            <div key={i} className='flex items-center'>
              <button
                className={classNames(
                  foodDay == i ? "bg-blue-chinese text-white" : "text-black",
                  "text-thin cursor-pointer rounded-full border-2 border-black/50 p-1 px-3 text-sm"
                )}
                onClick={() => setFoodDay(i)}
                onKeyDown={() => setFoodDay(i)}
              >
                {"Day " + (i + 1)}
              </button>
              {i != foodInfo.length - 1 && (
                <div className='h-0.5 w-5 bg-black/50' />
              )}
            </div>
          )
        })}
      </div>

      <div className='border-b-2 border-black/50' />

      <div className='space-y-10'>
        <ul className='flex flex-col gap-5 overflow-y-scroll'>
          {foodInfo[foodDay].events.map((meal, i) => {
            return (
              <li className='flex items-center justify-between' key={i}>
                <div>
                  <p className='text-black'>{meal.title}</p>
                  <p className='text-[#A7A7A7]'>{meal.provider}</p>
                </div>
                <div className='w-5 md:w-2/6'></div>
                <div className='text-thin shrink-0 text-right'>
                  <p className='text-darkgray'>{meal.time}</p>
                </div>
              </li>
            )
          })}
        </ul>

        <ul className='space-y-3 rounded-lg bg-[#dbdbdb] p-5 text-black'>
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
        <div className='flex w-fit items-center justify-between rounded-xl text-sm text-blue-chinese lg:text-xl'>
          <button
            className={classNames(
              slider && "bg-blue-chinese text-[#FFF]",
              "cursor-pointer rounded-xl p-3 px-9 font-title uppercase"
            )}
            onClick={() => setSlider(true)}
            onKeyDown={() => setSlider(true)}
          >
            Workshops
          </button>
          <button
            className={classNames(
              !slider && "bg-blue-chinese text-[#FFF]",
              "cursor-pointer rounded-xl p-3 px-9 font-title uppercase"
            )}
            onClick={() => setSlider(false)}
            onKeyDown={() => setSlider(false)}
          >
            Food
          </button>
        </div>
      </div>

      <h3 className='my-5 text-center text-black'>
        {slider ? workshopInfo[workshopDay].date : foodInfo[foodDay].date}
      </h3>

      {slider ? workshop : food}
    </Card>
  )
}

export default WorkshopsFood
