import React from 'react'
import { NameTour, TypeTour } from 'domain'

const DATA = {
  trekking: {
    body: {
      title: `✅ Chi phí trên <span className="text-orange-600">ĐÃ</span> bao
              gồm:`,
      items: [
        '🛡️ Bảo hiểm du lịch (Mức bồi thường tối đa <b>20.000.000đ/người</b> cho trường hợp xấu nhất)',
        '🚐 Đưa đón từ Hà Nội tới chân núi',
        '🍱 Chi phí các bữa ăn chính trong 2 ngày (nếu bạn là người ăn chay, hãy nói với Giang, để team có thể chuẩn bị tốt nhất)',
        '💧 Nước uống, găng tay, áo mưa, miếng dán giữ nhiệt...các đồ dùng của tour',
        '🧳 Chi phí porter vác đồ tối đa <b>3kg</b> hành lý trên 1 khách. nếu bạn cần porter vác nhiều đồ thì có thể thêm gói plus với chi phí <b>150k/người/ngày</b>, Hoặc gói premium, porter sẽ vác toàn bộ đồ cho bạn và theo kèm bạn 1v1 suốt hành trình với chi phí <b>500k/người/ngày</b>',
        '🧭 Chi phí leader có kinh nghiệm, hướng dẫn đoàn trong suốt hành trình'
      ],
      color: 'green'
    }
  }
}

interface IProps {
  type: TypeTour
  name: NameTour
}

export const Included = ({ type }: IProps) => {
  const option = DATA[type].body
  return (
    <div>
      <div className={`bg-green-50 p-8 `}>
        <h3
          className={`text-xl font-bold text-green-700 mb-4`}
          dangerouslySetInnerHTML={{ __html: option.title }}
        ></h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
          {option.items.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>
    </div>
  )
}
