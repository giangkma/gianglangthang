import React, { useEffect, useState } from 'react'

export const NavTab = () => {
  const [activeSection, setActiveSection] = useState('#home')
  const sections = [
    { href: '#home', label: '🏠 Trang chủ' },
    { href: '#about', label: '🗻 Giới thiệu' },
    { href: '#schedule', label: '📅 Lịch trình' },
    { href: '#prepare', label: '🎒 Chuẩn bị' },
    { href: '#cost', label: '💰 Chi phí' },
    { href: '#included', label: '📦 Bao gồm' },
    { href: '#policy', label: '📄 Chính sách' },
    { href: '#charity', label: '❤️ Thiện nguyện' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100 // Offset to trigger earlier
      let current = '#home'

      for (const section of sections) {
        const el = document.querySelector(section.href)
        if (el instanceof HTMLElement && el.offsetTop <= scrollY) {
          current = section.href
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: { preventDefault: () => void }, href: any) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg shadow-md w-full overflow-x-auto whitespace-nowrap flex px-4 py-3 gap-5 text-sm sm:text-base font-medium text-green-800 border-b border-green-100 rounded-b-2xl">
      {sections.map((item) => (
        <a
          key={item.href}
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
    </nav>
  )
}
