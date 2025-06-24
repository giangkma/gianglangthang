import { BodyTrekking } from 'components/tour-details/BodyTrekking'
import { NameTour, TypeTour } from 'domain'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

export const KyQuanSan = () => {
  return (
    <>
      <Helmet>
        <title>Tour Ky Quan San 3046m | Giang Lang Thang</title>
        <meta
          name="description"
          content="Trekking Ky Quan San – một trong những đỉnh núi đẹp nhất phía Bắc, ngoạn mục giữa biển mây."
        />
        <meta
          property="og:title"
          content="Tour Ky Quan San 3046m | Giang Lang Thang"
        />
        <meta
          property="og:description"
          content="Hành trình chinh phục Ky Quan San dành cho người mê khám phá và yêu thiên nhiên hoang sơ."
        />
        <meta property="og:image" content="/assets/tours/ky-quan-san/1.jpg" />
      </Helmet>
      <BodyTrekking name={NameTour.KY_QUAN_SAN} />
    </>
  )
}
