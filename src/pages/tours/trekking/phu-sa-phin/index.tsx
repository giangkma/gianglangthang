import { BodyTour } from 'components/tour-details/BodyTour'
import { NameTour } from 'domain/index'
import { Helmet } from 'react-helmet-async'

export const PhuSaPhin = () => {
  return (
    <>
      <Helmet>
        <title>Tour Phu Sa Phìn – Hang Chú | Giang Lang Thang</title>
        <meta
          name="description"
          content="Trekking Phu Sa Phìn và Xím Vàng – hành trình nhẹ nhàng, nhiều view sống ảo, thích hợp cho người mới bắt đầu."
        />
        <meta
          property="og:title"
          content="Tour Phu Sa Phìn – Hang Chú | Giang Lang Thang"
        />
        <meta
          property="og:description"
          content="Đỉnh Phu Sa Phìn huyền thoại với sống lưng khủng long, mây trời bao phủ – một trải nghiệm không thể bỏ lỡ."
        />
        <meta property="og:image" content="/assets/tours/ta-xua/1.jpg" />
      </Helmet>
      <BodyTour name={NameTour.PHU_SA_PHIN} />
    </>
  )
}
