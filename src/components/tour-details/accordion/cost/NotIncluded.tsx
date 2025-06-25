import { NameTour, TypeTour } from 'domain'
import React from 'react'

const DATA = {
  trekking: {
    body: {
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

interface IProps {
  type: TypeTour
  name: NameTour
}

export const NotIncluded = ({ type, name }: IProps) => {
  const [data, setData] = React.useState<typeof DATA>(DATA)
  React.useEffect(() => {
    if (!!PRICE_MOTOR[name]) {
      setData((prev) => ({
        ...prev,
        trekking: {
          ...prev.trekking,
          body: {
            ...prev.trekking.body,
            items: [
              ...prev.trekking.body.items,
              `🚗 Chi phí xe ôm vào điểm leo: <b>${PRICE_MOTOR[name]}</b>`
            ]
          }
        }
      }))
    }
  }, [name])

  const option = data[type].body

  return (
    <div className={`bg-red-50 p-4`}>
      <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
        {option.items.map((item, idx) => (
          <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </div>
  )
}
