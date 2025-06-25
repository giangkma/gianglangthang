import React, { useEffect, useState } from 'react'

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b shadow-sm bg-white transition-all duration-300 ${
        scrolled ? 'py-1' : 'py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300">
        <img
          src="/assets/logo.png"
          alt="Giang Lang Thang Logo"
          className="h-10 inline-block mr-2 cursor-pointer"
        />
        <nav className="flex gap-6 text-gray-700 font-medium">
          <a href="#tours">🗻 Tour Trekking</a>
          <a href="#charity">❤️ Quỹ Từ Thiện</a>
        </nav>
      </div>
    </header>
  )
}
