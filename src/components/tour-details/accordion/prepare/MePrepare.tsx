import { TypeTour } from 'domain/index'
import React from 'react'

const data = {
  trekking: {
    body: {
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
        '💧 Nước lọc đóng chai',
        '🧢 Nón tai bèo'
      ]
    },
    images: [
      '/assets/vat-dung/1.png',
      '/assets/vat-dung/2.png',
      '/assets/vat-dung/3.png',
      '/assets/vat-dung/4.png'
    ]
  },
  summer: {
    body: {
      title: '🎁 Giang chuẩn bị cho bạn',
      items: [
        '🎒 Balo trekking',
        '🧢 Nón tai bèo',
        '💧 Nước suối đóng chai',
        '🍫 Gậy trekking, găng tay'
      ]
    },
    images: []
  },
  hiking: {
    body: {
      title: '🎁 Giang chuẩn bị cho bạn',
      items: [
        '🎒 Balo trekking',
        '🧢 Nón tai bèo',
        '💧 Nước suối đóng chai',
        '🍫 Gậy trekking, găng tay'
      ]
    },
    images: []
  }
}

interface IProps {
  type: TypeTour
}

export const MePrepare = ({ type }: IProps) => {
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
      <div className="flex mt-4 items-center justify-center gap-4">
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
  )
}
