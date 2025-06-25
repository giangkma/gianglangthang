import { BodyTrekking } from 'components/tour-details/BodyTrekking'
import { NameTour } from 'domain/index'
import { Helmet } from 'react-helmet-async'

export const TaChiNhu = () => {
  return (
    <>
      <Helmet>
        <title>Tour Tà Chì Nhù 2979m | Giang Lang Thang</title>
        <meta
          name="description"
          content="Chinh phục đỉnh Tà Chì Nhù – thiên đường săn mây huyền thoại tại Yên Bái, phù hợp cho người mới bắt đầu hành trình trekking."
        />
        <meta
          property="og:title"
          content="Tour Tà Chì Nhù 2979m | Giang Lang Thang"
        />
        <meta
          property="og:description"
          content="Trekking đỉnh Tà Chì Nhù nổi tiếng với biển mây bồng bềnh, hành trình nhẹ nhàng nhưng giàu cảm xúc."
        />
        <meta property="og:image" content="/assets/tours/ta-chi-nhu/1.png" />
      </Helmet>
      <BodyTrekking name={NameTour.TA_CHI_NHU} />
    </>
  )
}
