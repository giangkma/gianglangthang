import React from 'react'
import Masonry from 'react-masonry-css'
import { Image } from 'antd'
import { NameTour } from 'domain'
import { PictureOutlined } from '@ant-design/icons'

interface IProps {
  name: NameTour
}

export const MoreImages = ({ name }: IProps): JSX.Element => {
  const imageUrls = Array.from(
    { length: 16 },
    (_, i) => `/assets/tours/${name}/anh-dep/${i + 1}.png`
  )

  const breakpointColumnsObj = {
    default: 4,
    1280: 3,
    1024: 3,
    768: 2
  }

  return (
    <section
      id="more-images"
      className="bg-gradient-to-b from-green-50 to-white py-6 px-6 sm:px-10 md:px-16 lg:px-24"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700 flex items-center justify-center gap-2">
          <PictureOutlined className="text-xl sm:text-2xl" />
          Một vài hình ảnh đẹp về tour
        </h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Khoảnh khắc đáng nhớ trong từng bước chân
        </p>
      </div>

      <div className="max-h-[600px] overflow-y-auto pr-2 scroll-smooth custom-scrollbar">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex sm:gap-6 gap-3"
          columnClassName="masonry-column flex flex-col"
        >
          {imageUrls.map((url, index) => (
            <div key={index} className="">
              <Image
                src={url}
                alt={`Tour image ${index + 1}`}
                className="w-full object-cover hover:shadow-lg transition-shadow duration-300"
                preview={{
                  mask: (
                    <span className="text-white font-semibold">Xem ảnh</span>
                  )
                }}
              />
            </div>
          ))}
        </Masonry>
      </div>

      <div className="mt-10 text-center text-gray-600">
        <p className="text-sm sm:text-base italic">
          Hãy cùng lưu giữ những khoảnh khắc đáng giá nhất của chuyến đi!
        </p>
      </div>
    </section>
  )
}
