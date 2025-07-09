import { BodyTour } from 'components/tour-details/BodyTour'
import { NameTour, TypeTour } from 'domain/index'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

export const HangDeCho = () => {
  return (
    <>
      <Helmet>
        <title>Tour Háng Đề chơ | Giang Lang Thang</title>
        <meta
          name="description"
          content="Khám phá Háng Đề Chơ - chiếc thác đẹp nhất vùng Tây Bắc, trekking nhẹ nhàng, cảnh quan ấn tượng."
        />
        <meta
          property="og:title"
          content="Tour Háng Đề chơ | Giang Lang Thang"
        />
        <meta
          property="og:description"
          content="Khám phá Háng Đề Chơ - chiếc thác đẹp nhất vùng Tây Bắc, trekking nhẹ nhàng, cảnh quan ấn tượng."
        />
        <meta property="og:image" content="/assets/tours/hang-de-cho/1.png" />
      </Helmet>
      <BodyTour name={NameTour.HANG_DE_CHO} type={TypeTour.HIKING} />
    </>
  )
}
