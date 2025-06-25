import { BodyTrekking } from 'components/tour-details/BodyTrekking'
import { NameTour, TypeTour } from 'domain/index'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

export const LungCung = () => {
  return (
    <>
      <Helmet>
        <title>Tour Lùng Cúng 2913m | Giang Lang Thang</title>
        <meta
          name="description"
          content="Lùng Cúng – điểm đến lý tưởng cho hành trình leo núi kết hợp săn mây, ngắm bình minh tại Yên Bái."
        />
        <meta
          property="og:title"
          content="Tour Lùng Cúng 2913m | Giang Lang Thang"
        />
        <meta
          property="og:description"
          content="Chinh phục đỉnh Lùng Cúng nhẹ nhàng, cảnh sắc hùng vĩ, lý tưởng cho người yêu thiên nhiên và khám phá."
        />
        <meta property="og:image" content="/assets/tours/lung-cung/1.jpg" />
      </Helmet>
      <BodyTrekking name={NameTour.LUNG_CUNG} />
    </>
  )
}
