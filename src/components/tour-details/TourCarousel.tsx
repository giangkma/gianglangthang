import React from 'react'
import Slider from 'react-slick'
import { ChevronLeftIcon, ChevronRightIcon, Flame } from 'lucide-react'
import { LIST_TOURS } from 'data'
import { formatCurrency } from 'domain'
import { useNavigate } from 'react-router-dom'

interface TourItem {
  name: string
  image: string
  location: string
  date: string
}

const NextArrow = (props: any) => {
  const { onClick } = props
  return (
    <button
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hover:bg-pink-100"
      onClick={onClick}
    >
      <ChevronRightIcon className="h-5 w-5 text-pink-600" />
    </button>
  )
}

const PrevArrow = (props: any) => {
  const { onClick } = props
  return (
    <button
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hover:bg-pink-100"
      onClick={onClick}
    >
      <ChevronLeftIcon className="h-5 w-5 text-pink-600" />
    </button>
  )
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2
      }
    }
  ]
}

export const TourCarousel = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <section className="relative bg-white py-8 px-4 md:px-8 lg:px-16">
      <h2 className="title-section">Các Tour Khác</h2>
      <div className="relative">
        <Slider {...settings}>
          {LIST_TOURS.map((tour, idx) => (
            <div key={idx} className="px-2 ">
              <div className="bg-pink-50 relative h-full rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 max-w-[200px] mx-auto">
                {tour.label && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] px-2 py-1 rounded-full flex items-center gap-1 z-10">
                    <Flame size={14} /> {tour.label}
                  </span>
                )}
                <img
                  onClick={() => navigate(tour.link || '#')}
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-32 object-cover cursor-pointer hover:scale-115 transition-transform duration-300"
                />
                <div className="p-3 text-center">
                  <h3 className="text-sm font-semibold line-clamp-1 text-pink-700">
                    {tour.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {tour.duration} - {tour.level}
                  </p>
                  <p className="text-red-600 font-bold text-sm">
                    {formatCurrency(tour.price)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
