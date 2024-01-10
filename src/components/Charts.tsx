import React from "react"
import { ReChartsArray } from "../utils/types"
import {
  Bar,
  Cell,
  Pie,
  PieChart as RechartsPieChart,
  BarChart as RechartBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LineChart as RechartsLineChart,
  Line,
  CartesianGrid,
} from "recharts"
import { Disclosure, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { classNames } from "../utils/string"

const COLORS = [
  "#E558F4", // Pink
  "#13E4CA", // Turquoise
  "#8925F1", // Purple
  "#F9D318", // Gold
  "#1795EB", // Blue-Button
  "#F9A318", // Orange
]

// Helper Functions

/**
 * Sort Rechart Objects by descending value with Other and No
 * Answer at the end
 * @param RechartObject Rechart Object
 * @returns Comparison value for sorting
 */
const nameToOrder = ({ name, value }: { name: string; value: number }) => {
  if (name === "No Answer") {
    return 2
  }
  if (name === "Other") {
    return 1
  }
  return -value
}

/**
 * Get the color of the bar
 * @param name name of the bar
 * @returns color of the bar
 */
const getBarColor = (name: string) => {
  if (name === "Other") {
    return COLORS[3]
  }
  if (name === "No Answer") {
    return COLORS[1]
  }

  return COLORS[0]
}

/**
 * Convert recharts array to pie chart data (values as percentages)
 * @param rechartsArray array of recharts objects for plotting
 * @returns array of recharts objects with values as percentages
 */
const rechartsArrayToPieChartData = (
  rechartsArray: ReChartsArray
): ReChartsArray => {
  const total = rechartsArray.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue.value),
    0
  )

  return rechartsArray.map(rechartsObject => {
    return {
      name: rechartsObject.name,
      value: Number(rechartsObject.value) / total,
    }
  })
}

/**
 * Format date ticks
 * @param tick tick to format
 * @returns formatted tick
 */
const dateTickFormatter = (tick: string) => {
  const date = new Date(tick)
  return `${date.getMonth() + 1}/${date.getDate()}`
}

// Components

const BarCustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || !payload.length) {
    return null
  }

  return (
    <div className='rounded-md border-white/50 bg-blue-royal p-2'>
      <p className='font-subtext text-white'>{`${payload[0].value}
      ${label ? " " + label : ""}`}</p>
    </div>
  )
}

const BarCustomLabel = ({ name, x, y, width, height, value }: any) => {
  return (
    <text
      x={width > 200 ? x + 20 : x + width + 5}
      y={y + height / 2}
      fill='#fff'
      textAnchor='start'
      dominantBaseline='central'
    >
      {value} {name}
    </text>
  )
}

export const BarChart = ({
  data,
  title,
}: {
  data: ReChartsArray
  title?: string
}) => {
  if (!data) {
    return (
      <div className='flex h-[400px] w-[400px] items-center justify-center bg-error/10'>
        <p className='text-center text-error'>No Data provided for {title}</p>
      </div>
    )
  }

  const barChartData = data.sort((a, b) => {
    const aOrder = nameToOrder(a)
    const bOrder = nameToOrder(b)

    return aOrder - bOrder
  })

  return (
    <div className='text-md flex h-full w-full flex-col items-center'>
      {title && <h3 className='text-center font-title capitalize'>{title}</h3>}
      <ResponsiveContainer width='100%' height='100%'>
        <RechartBarChart
          width={700}
          height={800}
          data={barChartData}
          layout='vertical'
          className='font-subtext text-xs'
        >
          <CartesianGrid strokeDasharray='3 3' stroke='#D3DAF4' opacity={0.2} />
          <Tooltip content={BarCustomTooltip} cursor={false} />
          <YAxis type='category' dataKey='name' display='none' width={0} />
          <XAxis type='number' display='none' />
          <Bar dataKey='value' fill={COLORS[0]} label={BarCustomLabel}>
            {barChartData.map(entry => (
              <Cell key={entry.name} fill={getBarColor(entry.name)} />
            ))}
          </Bar>
        </RechartBarChart>
      </ResponsiveContainer>
    </div>
  )
}

const PieCustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || !payload.length) {
    return null
  }

  return (
    <div className='rounded-md border-white/50 bg-blue-royal p-2'>
      <p className='font-subtext text-white'>{`${(
        payload[0].value * 100
      ).toFixed(2)}% ${payload[0].name}${label ? " " + label : ""}`}</p>
    </div>
  )
}

export const PieChart = ({
  data,
  title,
  label,
  width = 400,
  height = 220,
}: {
  data: ReChartsArray
  title?: string
  label?: string
  width?: number
  height?: number
}) => {
  if (!data) {
    return (
      <div className='flex h-[400px] w-[400px] items-center justify-center bg-error/10'>
        <p className='text-center text-error'>No Data provided for {title}</p>
      </div>
    )
  }
  const pieChartData = rechartsArrayToPieChartData(data)

  return (
    <div className='text-md flex flex-col items-center'>
      {title && <h3 className='text-center font-title capitalize'>{title}</h3>}
      <RechartsPieChart
        width={width}
        height={height}
        className='font-subtext text-xs text-white'
      >
        <Tooltip
          content={props => <PieCustomTooltip {...props} label={label} />}
        />
        <Pie
          type='monotone'
          data={pieChartData}
          dataKey='value'
          name='name'
          stroke='none'
          innerRadius={60}
          outerRadius={80}
          label={entry => entry.name}
        >
          {data.map((_, index: number) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </RechartsPieChart>
    </div>
  )
}

const LineCustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || !payload.length) {
    return null
  }

  return (
    <div className='rounded-md border-white/50 bg-blue-royal p-2'>
      <p className='font-subtext text-white'>
        {payload[0].value}
        {label ? " " + label : ""}
      </p>
    </div>
  )
}

export const LineChart = ({
  data,
  title,
  label,
}: {
  title?: string
  width?: number
  height?: number
  label?: string
  data: ReChartsArray
}) => {
  return (
    <div className='text-md hidden h-[30rem] w-full min-w-full flex-col items-center gap-5 md:flex'>
      {title && <h3 className='font-title capitalize'>{title}</h3>}
      <ResponsiveContainer width='100%' height='100%'>
        <RechartsLineChart
          width={700}
          height={400}
          data={data}
          className='font-subtext text-xs '
        >
          <Tooltip
            content={props => <LineCustomTooltip {...props} label={label} />}
          />
          <CartesianGrid strokeDasharray='3 3' stroke='#D3DAF4' opacity={0.2} />
          <XAxis
            dataKey='name'
            stroke='#D3DAF4'
            tickFormatter={dateTickFormatter}
          />
          <YAxis dataKey='value' stroke='#D3DAF4' />
          <Line
            type='monotone'
            dataKey='value'
            dot={false}
            stroke={COLORS[0]}
            strokeWidth={5}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}

export const SimpleTable = ({
  title,
  fields,
  data,
  otherData,
}: {
  title: string
  fields: (keyof typeof data)[]
  data: { [key: string]: number }
  otherData: ReChartsArray
}) => {
  return (
    <div className='flex w-full max-w-xs grow flex-col items-center rounded-lg bg-blue-imperial px-10 py-5 ring-2 ring-inset ring-white/10'>
      <div className='flex w-full max-w-xs flex-col gap-2'>
        <p className='font-title underline'>{title}</p>
        {fields.map(field => {
          return (
            <div
              key={field}
              className='flex w-full max-w-xs justify-between gap-5'
            >
              <p className='font-bold text-pink'>{field}</p>
              <p>{data[field]}</p>
            </div>
          )
        })}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full max-w-xs justify-between gap-5'>
                <p className='flex items-center justify-center gap-1 font-bold text-gold'>
                  Other
                  <ChevronDownIcon
                    className={classNames(
                      open && "rotate-180 transform",
                      "h-4 w-4 text-gold transition-all"
                    )}
                  />
                </p>
                <p>{data["Other"]}</p>
              </Disclosure.Button>
              <Transition
                enter='transition duration-100 ease-out'
                enterFrom='transform scale-95 opacity-0'
                enterTo='transform scale-100 opacity-100'
                leave='transition duration-75 ease-out'
                leaveFrom='transform scale-100 opacity-100'
                leaveTo='transform scale-95 opacity-0'
              >
                <Disclosure.Panel
                  as='ul'
                  className='flex w-full flex-col justify-between gap-4 pl-6'
                >
                  {otherData &&
                    otherData.map(entry => {
                      return (
                        <li
                          key={entry.name}
                          className='list-disc text-xs font-bold text-gold'
                        >
                          {entry.name}
                        </li>
                      )
                    })}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <div className='flex w-full max-w-xs justify-between gap-5'>
          <p className='font-bold text-turquoise'>No Answer</p>
          <p>{data["No Answer"]}</p>
        </div>
      </div>
    </div>
  )
}
