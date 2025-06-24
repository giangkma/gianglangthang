import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Contact } from 'components/common/Contact'
import { Footer } from 'components/common/Footer'

export const HomeLayout = () => {
  return (
    <div>
      <Contact />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
