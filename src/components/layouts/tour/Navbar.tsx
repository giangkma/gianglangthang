import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const navigate = useNavigate()

  return (
    <div ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-md transition-all duration-300 flex flex-col justify-center items-center"
      >
        <span
          className={`block w-5 h-0.5 bg-white mb-1 transform transition duration-300 ${
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        ></span>
        <span
          className={`block w-5 h-0.5 bg-white mb-1 transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block w-5 h-0.5 bg-white transition duration-300 ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        ></span>
      </button>

      <div
        className={`absolute top-16 right-0 bg-white shadow-xl rounded-xl w-48 py-4 px-4 transform transition-all duration-500 ease-in-out origin-top-right ${
          isOpen
            ? 'scale-100 opacity-100'
            : 'scale-90 opacity-0 pointer-events-none'
        }`}
      >
        <ul className="text-sm text-gray-800 space-y-3">
          <li
            onClick={() => {
              navigate('/')
              setIsOpen(false)
            }}
            className="hover:text-green-600 cursor-pointer transition"
          >
            🏠 Trang chủ
          </li>
          <li className="hover:text-green-600 cursor-pointer transition">
            📅 Lịch tour
          </li>
        </ul>
      </div>
    </div>
  )
}
