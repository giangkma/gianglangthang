import { BodyTour } from 'components/tour-details/BodyTour'
import { NameTour } from 'domain/index'
import { Helmet } from 'react-helmet-async'
const NAME = NameTour.TA_CHI_NHU_NAM_NGHIEP

export const TaChiNhuNamNghiep = () => {
  return (
    <>
      <Helmet>
        <title>Tour Tà Chì Nhù - Nậm Nghiệp | Giang Lang Thang</title>
        <meta
          name="description"
          content="Tour kết hợp độc đáo giữa mùa hoa Sơn Trà, bản Nậm Nghiệp và đỉnh Tà Chì Nhù hùng vĩ – trải nghiệm săn mây và ngắm hoa chỉ có vào mùa xuân."
        />
        <meta
          property="og:title"
          content="Tour Tà Chì Nhù - Nậm Nghiệp | Giang Lang Thang"
        />
        <meta
          property="og:description"
          content="Vừa săn mây Tà Chì Nhù, vừa check-in với vườn hoa Sơn Trà trắng xoá bản làng, tour dành riêng cho tín đồ sống ảo và yêu thiên nhiên."
        />
        <meta
          property="og:image"
          content="/assets/tours/ta-chi-nhu-nam-nghiep/1.png"
        />
      </Helmet>
      <BodyTour name={NameTour.TA_CHI_NHU_NAM_NGHIEP} />
    </>
  )
}
