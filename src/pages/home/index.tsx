import { About } from './About'
import { CharityTimeline } from './CharityTimeline'
import { ListTours } from './ListTours'
import { useRef } from 'react'

export const Home = () => {
  const tourRef = useRef<HTMLDivElement | null>(null)

  const scrollToTour = () => {
    tourRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Intro Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/anh-dep.png')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Cùng <span className="">Giang&nbsp;Lang&nbsp;Thang</span> <br />
            <span className="text-xl sm:text-3xl font-medium block mt-6">
              Biến những chuyến đi trở thành hành&nbsp;trình&nbsp;ý&nbsp;nghĩa
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl drop-shadow-md">
            Nơi kết hợp giữa <b>Du&nbsp;Lịch</b>&nbsp;và&nbsp;
            <b>Thiện&nbsp;Nguyện</b> <br />
          </p>
          <button
            onClick={scrollToTour}
            className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg transition"
          >
            Khám Phá Tour Ngay
          </button>
        </div>
      </section>

      <About />

      {/* Tour Section with ref */}
      <div ref={tourRef}>
        <ListTours />
      </div>
      {/* Charity Section */}
      <CharityTimeline />
    </div>
  )
}
