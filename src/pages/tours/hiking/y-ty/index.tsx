import { BodyTour } from 'components/tour-details/BodyTour'
import { NameTour, TypeTour } from 'domain/index'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

export const YTy = () => {
  return (
    <>
      <Helmet>
        <title>Tour Y Tý | Giang Lang Thang</title>
        <meta
          name="description"
          content="Combo trải nghiệm hiking rừng thảo quả, săn mây y tý và checkin thác Rồng hùng vĩ."
        />
        <meta property="og:title" content="Tour Y Tý | Giang Lang Thang" />
        <meta
          property="og:description"
          content="Combo trải nghiệm hiking rừng thảo quả, săn mây y tý và checkin thác Rồng hùng vĩ."
        />
        <meta property="og:image" content="/assets/tours/y-ty/1.png" />
      </Helmet>
      <BodyTour name={NameTour.Y_TY} type={TypeTour.HIKING} />
    </>
  )
}
