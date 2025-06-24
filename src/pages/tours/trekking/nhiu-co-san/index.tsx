import { BodyTrekking } from 'components/tour-details/BodyTrekking'
import { NameTour } from 'domain'
import { Helmet } from 'react-helmet-async'

export const NhiuCosan = () => {
  return (
    <>
      <Helmet>
        <title>Tour Nhìu Cồ San | Giang Lang Thang</title>
        <meta
          name="description"
          content="Chinh phục đỉnh Nhìu Cồ San – Checkin với chiếc thác đẹp nhất Lào Cai - Thác Ong Chúa"
        />
        <meta
          property="og:title"
          content="Tour Nhìu Cồ San | Giang Lang Thang"
        />
        <meta
          property="og:description"
          content="Tour trekking Nhìu Cồ San cảnh đẹp mê hồn và trải nghiệm ngủ lán săn mây không thể quên."
        />
        <meta property="og:image" content="/assets/tours/nhiu-co-san/1.png" />
      </Helmet>
      <BodyTrekking name={NameTour.NHIU_CO_SAN} />
    </>
  )
}
