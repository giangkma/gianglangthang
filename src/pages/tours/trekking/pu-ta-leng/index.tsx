import { BodyTour } from 'components/tour-details/BodyTour'
import { NameTour } from 'domain/index'
import { Helmet } from 'react-helmet-async'

export const Putaleng = () => {
  return (
    <>
      <Helmet>
        <title>Tour Putaleng | Giang Lang Thang</title>
        <meta
          name="description"
          content="Chinh phục cung Putaleng, nơi hội tụ vẻ đẹp nguyên sơ, ngắm mùa hoa Đỗ Quyên đỏ rực vào tháng 3"
        />
        <meta property="og:title" content="Tour Putaleng | Giang Lang Thang" />
        <meta
          property="og:description"
          content="Hành trình 3 ngày 3 đêm đặc biệt, kết hợp săn mây, leo núi và khám phá bản làng Sì Thâu Chải xinh đẹp, bình yên."
        />
        <meta property="og:image" content="/assets/tours/putaleng/1.png" />
      </Helmet>
      <BodyTour name={NameTour.PUTALENG} />
    </>
  )
}
