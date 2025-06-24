import { Image } from 'antd'
import React from 'react'

export const Charity = () => {
  return (
    <section
      id="charity"
      className="bg-green-50 py-10 px-6 sm:px-10 md:px-16 lg:px-24"
    >
      <h2 className="text-2xl sm:text-4xl font-extrabold text-green-800 mb-6 uppercase tracking-wider text-center">
        Kết hợp
        <br />
        <span className="text-orange-600">trekking & từ thiện</span>
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Trong mỗi chuyến đi,{' '}
            <span className="text-green-700 font-semibold">
              Giang Lang Thang
            </span>{' '}
            luôn dành tâm huyết để kết hợp hoạt động thiện nguyện.
            <br />
            Mỗi khách tham gia tour sẽ đóng góp{' '}
            <span className="text-orange-600 font-bold">50.000đ</span> vào quỹ,
            góp phần mang đến{' '}
            <span className="text-red-600 font-bold">giá trị thật sự</span> cho
            cộng đồng vùng cao.
            <br />
            Giang cam kết mọi khoản đóng góp đều được sử dụng{' '}
            <span className="font-semibold text-green-700">
              công khai, rõ ràng và minh bạch
            </span>
            .
          </p>
          <div className="mt-6 text-sm text-gray-600 italic">
            Ví dụ: 1 tour 12 khách ={' '}
            <span className="text-orange-600 font-bold">600.000đ</span> gửi tặng
            cho các em nhỏ.
          </div>
        </div>

        {/* Image group */}
        <div className="grid grid-cols-2 gap-4">
          {Array.from(
            { length: 2 },
            (_, i) => `/assets/tu-thien/${i + 1}.png`
          ).map((url, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={url}
                alt={`Tour image ${index + 1}`}
                className="aspect-square object-cover"
                preview={{ mask: 'Xem ảnh' }}
                style={{ borderRadius: '0.75rem' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
