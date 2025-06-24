import { Image } from 'antd'
import { NameTour } from 'domain'
import React from 'react'

interface IProps {
  name: NameTour
}

export const MoreImages = ({ name }: IProps) => {
  return (
    <section
      id="more-images"
      className="bg-green-50 sm:py-12 px-6 sm:px-10 md:px-16 lg:px-24 pb-32"
    >
      <h2 className="text-2xl sm:text-4xl font-extrabold text-green-800 mb-10 uppercase tracking-wider text-center">
        Một vài hình ảnh đẹp về tour
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {Array.from(
          { length: 16 },
          (_, i) => `/assets/tours/${name}/anh-dep/${i + 1}.png`
        ).map((url, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={url}
              alt={`Tour image ${index + 1}`}
              className="w-full aspect-square object-cover"
              preview={{ mask: 'Xem ảnh' }}
              style={{ borderRadius: '0.75rem' }}
            />
          </div>
        ))}
      </div>
      <div className="mt-8 text-center text-gray-600">
        <p className="text-sm sm:text-base">
          Hãy cùng khám phá những khoảnh khắc tuyệt vời trong chuyến trekking
          này!
        </p>
      </div>
    </section>
  )
}
