import { TypeTour } from 'domain'
import React from 'react'

const data = {
  trekking: {
    body: [
      {
        title: '🎒 Bạn cần chuẩn bị',
        items: [
          '👟 Giày thể thao tốt, rộng hơn chân 1–2 size (ưu tiên giày trekking chuyên dụng)',
          '🧥 Áo khoác gió, giữ nhiệt; quần nhanh khô (nên mang 3 bộ, 2 bộ dùng trekk, 1 bộ mặc lúc về)',
          '🔋 Sạc dự phòng (vì trên lán không có điện)',
          '🧼 Đồ vệ sinh cá nhân, dép đi trong lán',
          '🍫 Đồ ăn vặt, năng lượng',
          '🧢 Nón tai bèo (nếu trời nắng)'
        ]
      },
      {
        title: '🎁 Giang chuẩn bị cho bạn',
        items: [
          '🎒 Balo trekking',
          '🦯 Gậy trekking chuyên dụng',
          '🔦 Đèn pin chuyên dụng',
          '🌧️ Bộ áo mưa',
          '🧤 2 đôi găng tay bảo hộ',
          '☕ Cốc inox uống cafe',
          '🏅 Huy chương chinh phục đỉnh',
          '🧳 Túi đựng đồ gửi porter',
          '🔥 Miếng dán giữ nhiệt',
          '💧 Nước lọc đóng chai'
        ]
      }
    ],
    images: [
      '/assets/vat-dung/1.png',
      '/assets/vat-dung/2.png',
      '/assets/vat-dung/3.png',
      '/assets/vat-dung/4.png'
    ]
  }
}

interface IProps {
  type: TypeTour
}

export const Prepare = ({ type }: IProps) => {
  return (
    <section
      id="prepare"
      className="bg-gradient-to-br from-green-50 to-white w-full py-10 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="title-section">
          Bạn cần chuẩn bị gì khi đi leo núi cùng Giang?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-10 mb-8 sm:mb-12">
          {data[type].body.map((option, index) => (
            <div
              key={index}
              className="bg-white border border-green-200 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                {option.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {option.items.map((item, idx) => (
                  <li key={idx} className="text-sm sm:text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          {data[type].images?.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={image}
                alt={`Prepare image ${index + 1}`}
                className="w-40 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
