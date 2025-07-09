import React, { useEffect, useRef, useState } from 'react'
import { Navbar } from 'components/layouts/tour/Navbar'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

export const NavTab = () => {
  const [activeSection, setActiveSection] = useState('#home')
  const [isScrolled, setIsScrolled] = useState(false)

  const sections = [
    { href: '#home', label: '🏠 Tổng quan' },
    { href: '#about', label: '🗻 Giới thiệu' },
    { href: '#schedule', label: '📅 Lịch trình' },
    { href: '#notice', label: '❌ Lưu ý' },
    { href: '#images', label: '📸 Ảnh tour' },
    { href: '#charity', label: '❤️ Thiện nguyện' }
  ]

  const tabRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)

      const offsetY = scrollY + 100
      let current = '#home'
      for (const section of sections) {
        const el = document.querySelector(section.href)
        if (el instanceof HTMLElement && el.offsetTop <= offsetY) {
          current = section.href
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Tự scroll tab ra giữa màn hình khi activeSection thay đổi
  useEffect(() => {
    const tab = tabRefs.current[activeSection]
    if (tab && tab.scrollIntoView) {
      tab.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      })
    }
  }, [activeSection])

  // Scroll đến section khi click tab
  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navigate = useNavigate()

  return (
    <>
      <div
        className={classNames(
          'fixed sm:right-6 right-2 transition-all duration-300 z-50',
          {
            'top-14': isScrolled,
            'top-20': !isScrolled
          }
        )}
      >
        <Navbar />
      </div>

      <nav
        className={`sticky top-0 z-40 bg-white/80 backdrop-blur-lg shadow-md w-full overflow-x-auto border-b border-green-100 rounded-b-2xl transition-all duration-300 ${
          isScrolled ? 'py-1' : 'py-3'
        }`}
      >
        <div
          className={`flex w-fit mx-auto gap-2 sm:gap-4 px-2 sm:px-4 transition-all duration-300 text-green-800 whitespace-nowrap ${
            isScrolled ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'
          }`}
        >
          <img
            onClick={() => navigate('/')}
            src="/assets/logo.png"
            alt="Giang Lang Thang Logo"
            className="h-8 inline-block mr-2 cursor-pointer"
          />
          {sections.map((item) => (
            <a
              key={item.href}
              ref={(el) => (tabRefs.current[item.href] = el)}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`relative group px-3 py-1.5 rounded-xl transition-all duration-300 ${
                activeSection === item.href
                  ? 'bg-orange-500 text-white'
                  : 'text-green-800 hover:text-white hover:bg-orange-500'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}
