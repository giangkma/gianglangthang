import { BodyTour } from 'components/tour-details/BodyTour'
import { NameTour, TypeTour } from 'domain/index'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

export const TamDao = () => {
  return (
    <>
      <Helmet>
        <title>Tour hiking Tam Đảo | Giang Lang Thang</title>
        <meta
          name="description"
          content="Hiking tắm suối, tắm thác, ngắm cảnh đẹp tại Tam Đảo."
        />
        <meta
          property="og:title"
          content="Tour hiking Tam Đảo | Giang Lang Thang"
        />
        <meta
          property="og:description"
          content="Trải nghiệm tour hiking Tam Đảo với những hoạt động thú vị như tắm suối, tắm thác và ngắm cảnh đẹp."
        />
        <meta property="og:image" content="/assets/tours/tam-dao/1.png" />
      </Helmet>
      <BodyTour type={TypeTour.TAMDAO} name={NameTour.TAM_DAO} />
    </>
  )
}
