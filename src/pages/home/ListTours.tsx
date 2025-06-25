import React from 'react'
import { TourCard } from './TourCard'
import { DATA, LIST_TOURS } from 'data'
import { formatCurrency } from 'domain'

export const ListTours = () => {
  return (
    <div>
      <section id="tours" className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
          Tour Trekking
          <br />
          <span className="text-xl sm:text-2xl text-orange-600">
            đang mở bán{' '}
            <span className="text-lg sm:text-xl">(bắt đầu từ 30/8/2025)</span>
          </span>
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {LIST_TOURS.map((tour, index) => (
            <TourCard
              title={tour.title}
              image={tour.image}
              label={tour.label}
              duration={tour.duration}
              level={tour.level}
              price={formatCurrency(tour.price)}
              description={tour.description}
              link={tour.link || '#'}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
