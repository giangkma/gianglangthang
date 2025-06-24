import { useState, useRef, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { ScrollToTop } from 'components/common/ScrollToTop'
import { Contact } from 'components/common/Contact'
import { NavTab } from './NavTab'
import { Footer } from 'components/common/Footer'

export const TourLayout = () => {
  return (
    <div>
      <Contact />
      <ScrollToTop />
      <NavTab />
      <Outlet />
      <Footer />
    </div>
  )
}
