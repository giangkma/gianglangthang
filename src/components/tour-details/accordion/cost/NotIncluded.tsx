import { NameTour, TypeTour } from 'domain/index'
import React from 'react'

const DATA = {
  trekking: {
    body: {
      items: [
        '🍽️ Ăn uống tại trạm nghỉ, chi phí cá nhân',
        '🛏️ Phòng riêng, yêu cầu nâng hạng xe (nếu có)',
        '💼 Dịch vụ thuê thêm ngoài tour (thuê thêm porter...)',
        '🚧 Phí cao tốc (trong trường hợp lịch trình không đi qua cao tốc nhưng khách hàng yêu cầu đi cao tốc) Ví dụ đối với các tour Samu, Phu Sa Phìn, Tà Chì Nhù...xe sẽ đi QL32, nếu khách hàng cần đón tại sân bay thì xe sẽ phải đi hướng cao tốc => phát sinh 300k/lượt cao tốc, chi phí này sẽ là phát sinh nha.',
        '💰 Tiền tip porter/leader (nếu có)',
        '🚿 Tắm nước nóng tại lán <b>(50k/người)</b>',
        '📌 Mọi chi phí phát sinh sẽ thông báo trước và cần KH đồng ý'
      ],
      color: 'red'
    }
  },
  hamlon: {
    body: {
      items: [
        '🍽️ Ăn uống trong hành trình leo, chi phí cá nhân',
        '🚐 Đưa đón từ Hà Nội tới chân núi',
        '🚿 Chi phí tắm, gửi xe, huy chương chinh phục đỉnh <b>70k/chiếc</b>',
        '📌 Mọi chi phí phát sinh sẽ thông báo trước và cần KH đồng ý'
      ],
      color: 'red'
    }
  },
  tamdao: {
    body: {
      items: [
        '🍽️ Ăn uống tại trạm nghỉ, chi phí cá nhân',
        '💰 Tiền tip porter/leader (nếu có)',
        '📌 Mọi chi phí phát sinh sẽ thông báo trước và cần KH đồng ý'
      ],
      color: 'red'
    }
  },
  hiking: {
    body: {
      items: [
        '🍽️ Ăn uống tại trạm nghỉ, chi phí cá nhân',
        '🛏️ Phòng riêng, yêu cầu nâng hạng xe (nếu có)',
        '📌 Mọi chi phí phát sinh sẽ thông báo trước và cần KH đồng ý',
        '💼 Dịch vụ thuê thêm ngoài tour (thuê thêm porter...)',
        '🚧 Phí cao tốc (trong trường hợp lịch trình không đi qua cao tốc nhưng khách hàng yêu cầu đi cao tốc) Ví dụ đối với các tour Samu, Phu Sa Phìn, Tà Chì Nhù...xe sẽ đi QL32, nếu khách hàng cần đón tại sân bay thì xe sẽ phải đi hướng cao tốc => phát sinh 300k/lượt cao tốc, chi phí này sẽ là phát sinh nha.',
        '💰 Tiền tip porter/leader (nếu có)',
        '📌 Mọi chi phí phát sinh sẽ thông báo trước và cần KH đồng ý'
      ],
      color: 'red'
    }
  }
}

const PRICE_MOTOR: Record<NameTour, string | undefined> = {
  [NameTour.TA_CHI_NHU_NAM_NGHIEP]: '400k 2 chiều',
  [NameTour.NHIU_CO_SAN]: '400k 2 chiều',
  [NameTour.PUTALENG]: '150k 2 chiều',
  [NameTour.SAMU]: 'chiều lên 60k, về 100k (nếu sử dụng)',
  [NameTour.PHU_SA_PHIN]: '150k 1 chiều',
  [NameTour.KY_QUAN_SAN]: '100k 2 chiều',
  [NameTour.LUNG_CUNG]: '600k 2 chiều (gần 20km 1 chiều)',
  [NameTour.LAO_THAN]: undefined,
  [NameTour.NGU_CHI_SON]: undefined,
  [NameTour.TA_CHI_NHU]: undefined,
  [NameTour.HAM_LON]: undefined,
  [NameTour.HANG_DE_CHO]: '250k 2 chiều',
  [NameTour.Y_TY]: '250k 2 chiều vào thác rồng',
  [NameTour.TAM_DAO]: undefined
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
