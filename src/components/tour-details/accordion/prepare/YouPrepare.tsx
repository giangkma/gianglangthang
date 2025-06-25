import { TypeTour } from 'domain/index'
import React from 'react'

const data = {
  trekking: {
    body: {
      title: '🎒 Bạn cần chuẩn bị',
      items: [
        '👟 Giày thể thao tốt, rộng hơn chân 1–2 size (ưu tiên giày trekking chuyên dụng)',
        '🧥 Áo khoác gió, giữ nhiệt; quần nhanh khô (nên mang 3 bộ, 2 bộ dùng trekk, 1 bộ mặc lúc về)',
        '🔋 Sạc dự phòng (vì trên lán không có điện)',
        '🧼 Đồ vệ sinh cá nhân, dép đi trong lán',
        '🍫 Đồ ăn vặt, năng lượng',
        '🧢 Nón tai bèo (nếu trời nắng)'
      ]
    }
  }
}

interface IProps {
  type: TypeTour
}

export const YouPrepare = ({ type }: IProps) => {
  const option = data[type].body
  return (
    <div>
      <div className="bg-white p-2">
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {option.items.map((item, idx) => (
            <li key={idx} className="text-sm sm:text-base">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
