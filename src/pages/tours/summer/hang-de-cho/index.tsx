import { BodyTour } from 'components/tour-details/BodyTour'
import { NameTour } from 'domain/index'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

export const LaoThan = () => {
  return (
    <>
      <Helmet>
        <title>Tour Lảo Thẩn 2860m | Giang Lang Thang</title>
        <meta
          name="description"
          content="Trekking nhẹ nhàng, cảnh quan ấn tượng, kết hợp thiện nguyện tại Lào Cai."
        />
        <meta
          property="og:title"
          content="Tour Lảo Thẩn 2860m | Giang Lang Thang"
        />
        <meta
          property="og:description"
          content="Trải nghiệm tour trekking Lảo Thẩn độc đáo, dành cho người mới bắt đầu."
        />
        <meta property="og:image" content="/assets/tours/lao-than/1.png" />
      </Helmet>
      <BodyTour name={NameTour.LAO_THAN} />
    </>
  )
}
