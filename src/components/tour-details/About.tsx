import { DATA } from 'data'
import { NameTour } from 'domain'
import React from 'react'

interface IProps {
  name: NameTour
}

export const About = ({ name }: IProps) => {
  const data = DATA[name]

  return (
    <section
      id="about"
      className="bg-[#f2f2ed] w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-gray-800 text-justify">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-800">
            {data.about.title}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: data.about.description }} />
          </p>
        </div>

        <div>
          <img
            src={data.about.image}
            className="w-full h-80 rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}
