import React from 'react'
import { TourCard } from './TourCard'
import { DATA, LIST_TOURS } from 'data'
import { formatCurrency } from 'domain/index'

export const ListTours = () => {
  return (
    <div className="bg-gray-50 py-12">
      <section id="tours" className=" container sm:px-12 px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
          NHỮNG TOUR TREKKING NỔI BẬT
          <br />
          <span className="text-xl sm:text-2xl text-orange-600">
            <span className="text-lg sm:text-xl">(khởi hành từ 30/8/2025)</span>
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
