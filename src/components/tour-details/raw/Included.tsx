import React, { useEffect } from 'react'

const DATA = {
  trekking: {
    body: [
      {
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

const PRICE_MOTOR = {
  [NameTour.TA_CHI_NHU_NAM_NGHIEP]: '400k 2 chiều',
  [NameTour.NHIU_CO_SAN]: '400k 2 chiều',
  [NameTour.PUTALENG]: '150k 2 chiều',
  [NameTour.SAMU]: 'chiều lên 60k, về 100k (nếu sử dụng)',
  [NameTour.PHU_SA_PHIN]: '150k 1 chiều',
  [NameTour.KY_QUAN_SAN]: '100k 2 chiều',
  [NameTour.LUNG_CUNG]: '600k 2 chiều (gần 20km 1 chiều)',
  [NameTour.LAO_THAN]: undefined,
  [NameTour.NGU_CHI_SON]: undefined,
  [NameTour.TA_CHI_NHU]: undefined
}

import { NameTour, TypeTour } from 'domain/index'
interface IProps {
  type: TypeTour
  name: NameTour
}

export const Included = ({ type, name }: IProps) => {
  const [data, setData] = React.useState<typeof DATA>(DATA)

  useEffect(() => {
    if (!!PRICE_MOTOR[name]) {
      setData((prev) => ({
        ...prev,
        trekking: {
          ...prev.trekking,
          body: prev.trekking.body.map((option) => {
            if (option.title.includes('CHƯA')) {
              return {
                ...option,
                items: [
                  ...option.items,
                  `🚗 Chi phí xe ôm vào điểm leo: <b>${PRICE_MOTOR[name]}</b>`
                ]
              }
            }
            return option
          })
        }
      }))
    }
  }, [])

  return (
    <section
      id="included"
      className="bg-white py-8 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="title-section">Lưu ý về chi phí khi đặt tour bên GLT</h2>

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
