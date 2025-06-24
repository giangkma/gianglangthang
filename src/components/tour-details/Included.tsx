import React from 'react'

const data = {
  trekking: {
    body: [
      {
        title: `✅ Chi phí trên <span className="text-orange-600">ĐÃ</span> bao
              gồm:`,
        items: [
          '🛡️ Bảo hiểm du lịch <b>(tối đa 50.000.000đ/người)</b>',
          '🚐 Đưa đón từ Hà Nội tới điểm leo',
          '🍱 3 bữa ăn chính trong 2 ngày',
          '💧 Nước uống, găng tay, áo mưa, miếng dán giữ nhiệt',
          '🧳 Porter vác tối đa 3kg hành lý/khách (thêm sẽ tính thêm phí)',
          '🧭 Leader hướng dẫn kinh nghiệm, nhiệt tình'
        ],
        color: 'green'
      },
      {
        title: `⚠️ Chi phí trên <span className="text-red-600">CHƯA</span> bao
              gồm:`,
        items: [
          '🍽️ Ăn uống tại trạm nghỉ, chi phí cá nhân',
          '🛏️ Phòng riêng, yêu cầu nâng hạng xe (nếu có)',
          '📌 Mọi chi phí phát sinh sẽ thông báo trước và cần KH đồng ý',
          '💼 Dịch vụ thuê thêm ngoài tour',
          '🚧 Phí cao tốc, tiền tip porter (nếu có)',
          '🚿 Tắm nước nóng tại lán <b>(50k/người)</b>'
        ],
        color: 'red'
      }
    ]
  }
}

import { TypeTour } from 'domain'
interface IProps {
  type: TypeTour
}

export const Included = ({ type }: IProps) => {
  return (
    <section
      id="included"
      className="bg-white py-8 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-green-900 sm:mb-12 mb-6 text-center uppercase tracking-wider">
          Lưu ý về chi phí khi đặt tour bên GLT
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-10 gap-5">
          {data[type].body.map((option, index) => (
            <div
              key={index}
              className={`bg-${option.color}-50 p-8 rounded-3xl shadow-lg border-l-4 border-${option.color}-500`}
            >
              <h3
                className={`text-xl font-bold text-${option.color}-700 mb-4`}
                dangerouslySetInnerHTML={{ __html: option.title }}
              ></h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
                {option.items.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
