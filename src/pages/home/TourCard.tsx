import { Flame, Clock, Mountain } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function TourCard({
  title,
  image,
  label,
  duration,
  level,
  price,
  description,
  link = '#'
}: {
  title: string
  image: string
  label?: string
  duration: string
  level: string
  price: string
  description: string
  link?: string
}) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (link && link !== '#') navigate(link)
  }

  return (
    <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group cursor-pointer">
      {/* Image */}
      <div onClick={handleClick} className="relative h-52 overflow-hidden">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        {label && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 z-10">
            <Flame size={14} /> {label}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="bg-white p-4 text-sm space-y-2">
        <h3
          className="font-semibold sm:text-xl text-gray-800 hover:text-green-700 transition uppercase"
          onClick={handleClick}
        >
          {title}
        </h3>

        <div className="flex items-center gap-4 text-gray-500 text-xs">
          <span className="flex items-center gap-1">
            <Clock size={14} /> {duration}
          </span>
          <span className="flex items-center gap-1">
            <Mountain size={14} /> {level}
          </span>
        </div>

        <p className="text-gray-600 line-clamp-2">{description}</p>

        <div className="text-red-600 font-bold text-xl">{price}</div>
      </div>
    </div>
  )
}
