import { NavTab } from 'components/common/NavTab'
import { About } from 'components/tour-details/About'
import { Charity } from 'components/tour-details/Charity'
import { Cost } from 'components/tour-details/Cost'
import { Home } from 'components/tour-details/Home'
import { Included } from 'components/tour-details/Included'
import { MoreImages } from 'components/tour-details/MoreImages'
import { Policy } from 'components/tour-details/Policy'
import { Prepare } from 'components/tour-details/Prepare'
import { Schedule } from 'components/tour-details/Schedule'
import { TypeTour } from 'domain'
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
        <meta property="og:image" content="./assets/lao-than/1.png" />
      </Helmet>
      <Home />
      <NavTab />
      <About />
      <Schedule />
      <Prepare type={TypeTour.TREKKING} />
      <Cost />
      <Included type={TypeTour.TREKKING} />
      <Policy />
      <Charity />
      <MoreImages />
    </>
  )
}
