import { BodyTrekking } from 'components/tour-details/BodyTrekking'
import { NameTour } from 'domain'
import { Helmet } from 'react-helmet-async'

export const NguChiSon = () => {
  return (
    <>
      <Helmet>
        <title>Tour Ngũ Chỉ Sơn 2858m | Giang Lang Thang</title>
        <meta
          name="description"
          content="Ngũ Chỉ Sơn – đỉnh núi mới nổi giữa lòng Sapa với hình dáng 5 ngón tay độc đáo và cảnh quan kỳ vĩ."
        />
        <meta
          property="og:title"
          content="Tour Ngũ Chỉ Sơn 2858m | Giang Lang Thang"
        />
        <meta
          property="og:description"
          content="Khám phá vẻ đẹp huyền bí của Ngũ Chỉ Sơn – cung trekking mới mẻ, đầy thử thách và quyến rũ."
        />
        <meta property="og:image" content="/assets/tours/ngu-chi-son/1.jpg" />
      </Helmet>
      <BodyTrekking name={NameTour.NGU_CHI_SON} />
    </>
  )
}
