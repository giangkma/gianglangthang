import { DATA } from 'data'
import { formatCurrency, NameTour } from 'domain/index'
import React, { useState } from 'react'
import { TourBookingForm } from './TourBookingForm'

interface IProps {
  name: NameTour
}

export const About = ({ name }: IProps) => {
  const data = DATA[name as keyof typeof DATA]
  const [showFullNotice, setShowFullNotice] = useState(false)

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

      {/* Lời khuyên */}
      {data.about.notice && (
        <div className="mt-10 max-w-3xl mx-auto px-4 sm:px-0">
          <div className="flex items-start gap-4">
            <img
              src="/assets/user.png"
              alt="Hướng dẫn viên"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-gray-300 shadow"
            />
            <div className="flex-1 bg-white border border-orange-200 rounded-2xl px-5 py-4 shadow-lg relative">
              <div className="relative">
                <div
                  className={`text-sm sm:text-base text-gray-700 leading-relaxed italic pr-2 transition-all duration-300 ${
                    showFullNotice ? '' : 'line-clamp-4'
                  }`}
                  dangerouslySetInnerHTML={{ __html: data.about.notice }}
                />
                {!showFullNotice && (
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-orange-50 to-transparent pointer-events-none rounded-b-2xl" />
                )}
              </div>

              <button
                onClick={() => setShowFullNotice(!showFullNotice)}
                className="text-xs text-orange-600 underline mt-2"
              >
                {showFullNotice ? 'Thu gọn' : 'Xem thêm lời khuyên'}
              </button>

              <p className="mt-2 text-sm text-orange-700 font-medium">
                – GLT, Hướng dẫn viên trekking
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
