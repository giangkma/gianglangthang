import { BodyTour } from 'components/tour-details/BodyTour'
import { NameTour, TypeTour } from 'domain/index'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

export const HamLon = () => {
  return (
    <>
      <Helmet>
        <title>Tour Hàm Lợn 100k | Giang Lang Thang</title>
        <meta
          name="description"
          content="Trekking nhẹ nhàng, khám phá đỉnh Hàm Lợn 462m - nóc nhà Thủ đô cùng Giang Lang Thang."
        />
        <meta
          property="og:title"
          content="Tour Hàm Lợn 462m | Giang Lang Thang"
        />
        <meta
          property="og:description"
          content="Trải nghiệm trekking Hàm Lợn lý tưởng cho người mới bắt đầu – chỉ cách Hà Nội 40km!"
        />
        <meta property="og:image" content="/assets/tours/ham-lon/1.png" />
      </Helmet>
      <BodyTour type={TypeTour.HAMLON} name={NameTour.HAM_LON} />
    </>
  )
}
