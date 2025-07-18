import { DATA } from 'data'
import { NameTour } from 'domain/index'
import React, { useEffect, useState } from 'react'

interface IProps {
  name: NameTour
}

export const Home = ({ name }: IProps) => {
  const data = DATA[name as keyof typeof DATA]
  return (
    <div>
      <section
        className="relative w-full bg-cover bg-center sm:min-h-screen min-h-[70vh]"
        style={{
          backgroundImage: `url(${data.home.backgroundImage})`
        }}
        id="home"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 flex flex-col items-center pt-20 sm:pt-20 px-4 sm:px-6 md:px-10 text-center text-white">
          <h2 className="text-base sm:text-lg md:text-xl uppercase font-semibold tracking-widest drop-shadow-xl">
            Cùng <span className="text-orange-400">Giang Lang Thang</span> muôn
            nơi
          </h2>
          {data.isHaveCharity && (
            <p className="mt-2 text-xs sm:text-sm md:text-base max-w-xl drop-shadow-md">
              Kết hợp trekking và thiện nguyện - Cam kết trích
              <span className="text-pink-400 font-semibold">
                {' '}
                50.000đ/khách{' '}
              </span>
              <br />
              vào Quỹ Thiện Nguyện <b>"Hành Trình Yêu Thương"</b>
            </p>
          )}
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide text-green-300 drop-shadow-2xl">
            {data.home.title}
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-base drop-shadow-md">
            {data.home.description}
          </p>

          <div className="mt-4 relative sm:mt-6 bg-primary font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition-all duration-300 shadow-xl">
            <a href="https://facebook.com/gianglangthangg" target="_blank">
              Đăng ký ngay
            </a>
          </div>
          <a
            href="https://www.tiktok.com/@gianglangthangvn"
            target="_blank"
            rel="noopener"
            className="mt-3 sm:mt-4 text-[10px] sm:text-xs md:text-sm opacity-90 drop-shadow-sm"
          >
            Tiktok: #gianglangthang
          </a>
        </div>
      </section>
    </div>
  )
}
