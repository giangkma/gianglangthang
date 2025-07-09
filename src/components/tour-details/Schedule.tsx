import classNames from 'classnames'
import { DATA } from 'data'
import { NameTour } from 'domain/index'
import React from 'react'

interface IProps {
  name: NameTour
}

export const Schedule = ({ name }: IProps) => {
  const data = DATA[name as keyof typeof DATA]

  const lengthCol = data.schedule.schedule.length

  return (
    <section id="schedule" className="bg-[#f2f2ed] w-full sm:py-12 !pt-2">
      <div className="mx-auto container">
        <h2 className="title-section">
          {data.schedule.title}
          <p className="text-sm text-gray-600 italic mb-2 font-medium">
            ({data.schedule.description})
          </p>
        </h2>

        <div
          className={classNames('grid grid-cols-1 sm:gap-8 gap-3', {
            'md:grid-cols-3': lengthCol >= 3,
            'md:grid-cols-2': lengthCol === 2,
            'md:grid-cols-1': lengthCol === 1
          })}
        >
          {data.schedule.schedule.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-5">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                {item.day}
              </h3>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-2">
                {item.activities.map((activity, idx) => (
                  <li key={idx} className="">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
