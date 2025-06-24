import { DATA } from 'data'
import { NameTour } from 'domain'
import React from 'react'

interface IProps {
  name: NameTour
}

export const Schedule = ({ name }: IProps) => {
  const data = DATA[name]

  return (
    <section
      id="schedule"
      className="bg-[#f2f2ed] w-full sm:py-12 px-4 sm:px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-8 text-center uppercase">
          {data.schedule.title}
          <p className="text-sm text-gray-600 italic mb-2 font-medium">
            ({data.schedule.description})
          </p>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-8 gap-3">
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
