import { Image } from 'antd'
import React from 'react'

export const Charity = () => {
  return (
    <section id="charity" className="bg-green-50 py-10">
      <h2 className="title-section">
        Kết hợp
        <br />
        <span className="color-primary">trekking & thiện nguyện</span>
      </h2>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div>
          <p className="text-gray-700 text-justify text-base sm:text-lg leading-relaxed">
            Trong mỗi chuyến đi,{' '}
            <span className="text-green-700 font-semibold">
              Giang Lang Thang
            </span>{' '}
            luôn dành tâm&nbsp;huyết để kết&nbsp;hợp hoạt&nbsp;động thiện
            &nbsp;nguyện.
            <br />
            Mỗi khách tham gia tour trekking mùa đông sẽ đóng&nbsp;góp{' '}
            <span className="text-orange-600 font-bold">50.000đ</span> vào quỹ,
            góp&nbsp;phần mang&nbsp;đến{' '}
            <span className="text-red-600 font-bold">giá&nbsp;trị thật sự</span>{' '}
            cho bà&nbsp;con và các em&nbsp;nhỏ vùng&nbsp;cao hẻo&nbsp;lánh.
            <br />
            Giang cam&nbsp;kết mọi khoản đóng&nbsp;góp đều được sử dụng{' '}
            <span className="font-semibold text-green-700">
              công&nbsp;khai, rõ&nbsp;ràng, minh&nbsp;bạch và hiệu&nbsp;quả !
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
