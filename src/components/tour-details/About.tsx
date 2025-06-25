import { DATA } from 'data'
import { formatCurrency, NameTour } from 'domain'
import React from 'react'
import { TourBookingForm } from './TourBookingForm'

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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
        {/* Left - Nội dung giới thiệu */}

        <div className="flex items-center lg:col-span-2">
          <div className="text-gray-800 text-justify">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-800">
              {data.about.title}
            </h2>
            <div
              className="text-sm sm:text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: data.about.description }}
            />
          </div>
        </div>

        <TourBookingForm data={data} />
      </div>

      {data.about.notice && (
        <div className="flex mt-4 sm:mt-12 items-start gap-4 bg-white border border-orange-300 p-4 rounded-xl shadow-sm max-w-[40rem] mx-auto">
          <img
            src="/assets/user.png"
            alt="Người dùng"
            className="w-10 h-10 rounded-full object-cover border border-gray-300"
          />

          <div className="bg-orange-50 border border-orange-200 rounded-lg px-4 py-3 relative">
            <p
              className="text-sm sm:text-base text-gray-700 italic leading-relaxed"
              dangerouslySetInnerHTML={{ __html: data.about.notice }}
            ></p>
            <p className="mt-2 text-sm text-orange-600 font-medium">
              – GLT, Hướng dẫn viên trekking
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
