import { BodyTrekking } from 'components/tour-details/BodyTrekking'
import { NameTour } from 'domain/index'
import { Helmet } from 'react-helmet-async'

export const Samu = () => {
  return (
    <>
      <Helmet>
        <title>Tour Samu U Bò | Giang Lang Thang</title>
        <meta
          name="description"
          content="Trải nghiệm săn mây Samu – cung đường trekking ma mị tại Bắc Yên, Sơn La."
        />
        <meta property="og:title" content="Tour Samu U Bò | Giang Lang Thang" />
        <meta
          property="og:description"
          content="Check-in Samu – khu rừng rêu ở trong chuyện cổ tích - một khung cảnh đầy mê hoặc."
        />
        <meta property="og:image" content="/assets/tours/samu/1.png" />
      </Helmet>
      <BodyTrekking name={NameTour.SAMU} />
    </>
  )
}
