import React from 'react'
import { TourCard } from './TourCard'
import { DATA } from 'data'
import { formatCurrency } from 'domain'

const tourData = [
  {
    title: 'Tour leo núi Lảo Thẩn 2860m',
    image: '/assets/tours/lao-than/1.png',
    label: 'Tour Bán Chạy',
    duration: '2N2Đ',
    level: 'Độ khó: Cơ bản',
    price: DATA['lao-than'].cost.value,
    description:
      'Lảo Thẩn là lựa chọn lý tưởng cho người mới trekking với biển mây hùng vĩ và khung cảnh yên bình ở Y Tý.',
    link: '/tours/lao-than'
  },
  {
    title: 'Tour leo núi Lùng Cúng 2913m',
    image: '/assets/tours/lung-cung/1.png',
    duration: '2N2Đ',
    label: 'Tour Bán Chạy',
    level: 'Độ khó: Trung bình',
    price: DATA['lung-cung'].cost.value,
    description:
      'Lùng Cúng mang đến cảm giác mộc mạc, nguyên sơ cùng trải nghiệm văn hóa bản địa đặc trưng vùng Tây Bắc.',
    link: '/tours/lung-cung'
  },
  {
    title: 'Tour leo núi Phu Sa Phìn 2963m',
    image: '/assets/tours/phu-sa-phin/1.png',
    label: 'Tour Bán Chạy',
    duration: '2N2Đ',
    level: 'Độ khó: Trung bình',
    price: DATA['phu-sa-phin'].cost.value,
    description:
      'Phu Sa Phìn là hành trình trekking ít người đặt chân đến, với rừng già nguyên sinh và không khí trong lành giữa đại ngàn Điện Biên.',
    link: '/tours/phu-sa-phin'
  },
  {
    title: 'Tour Tà Chì Nhù – săn mây đỉnh cao',
    image: '/assets/tours/ta-chi-nhu/2.png',
    duration: '2N2Đ',
    label: 'Tour Bán Chạy',
    level: 'Độ khó: Trung bình',
    price: DATA['ta-chi-nhu'].cost.value,
    description:
      'Đỉnh Tà Chì Nhù là thiên đường săn mây với khung cảnh thơ mộng và không khí trong lành giữa núi rừng.',
    link: '/tours/ta-chi-nhu'
  },
  {
    title: 'Tour leo núi Ngũ Chỉ Sơn 2.865m',
    image: '/assets/tours/ngu-chi-son/1.png',
    label: 'Khám phá mới',
    duration: '2N2Đ',
    level: 'Độ khó: Thách thức',
    price: DATA['ngu-chi-son'].cost.value,
    description:
      'Ngũ Chỉ Sơn sở hữu 5 đỉnh nhọn vươn lên trời xanh – là cung đường lý tưởng cho người yêu thích mạo hiểm và độc lạ.',
    link: '/tours/ngu-chi-son'
  },
  {
    title: 'Tour leo núi Samu 2.913m',
    image: '/assets/tours/samu/1.png',
    label: 'Tour Bán Chạy',
    duration: '2N2Đ',
    level: 'Độ khó: Thách thức',
    price: DATA['samu'].cost.value,
    description:
      'Chinh phục đỉnh Samu với địa hình mềm mại và những cánh rừng nguyên sinh còn giữ được vẻ hoang sơ nguyên bản.',
    link: '/tours/samu'
  },
  {
    title: 'Tour leo núi Nhìu Cồ San 2965m',
    image: '/assets/tours/nhiu-co-san/1.png',
    duration: '2N2Đ',
    level: 'Độ khó: Thách thức',
    label: 'Tour Hot',
    price: DATA['nhiu-co-san'].cost.value,
    description:
      'Trải nghiệm cung đường mây trắng và địa hình núi đá độc đáo tại Nhìu Cồ San – điểm đến mới nổi gần Sa Pa.',
    link: '/tours/nhiu-co-san'
  },
  {
    title: 'Tour leo núi Bạch Mộc Lương Tử (Ky Quan San) 3046m',
    image: '/assets/tours/ky-quan-san/1.png',
    label: 'Tour Hot',
    duration: '2N2Đ',
    level: 'Độ khó: Thách thức',
    price: DATA['ky-quan-san'].cost.value,
    description:
      'Bạch Mộc Lương Tử là một trong những cung núi đẹp nhất Việt Nam, nổi bật với cảnh bình minh và biển mây cuồn cuộn.',
    link: '/tours/ky-quan-san'
  },
  {
    title: 'Tour leo núi Putaleng 3049m',
    image: '/assets/tours/putaleng/1.png',
    label: 'Tour Bán Chạy',
    duration: '3N2Đ',
    level: 'Độ khó: Thách thức',
    price: DATA['putaleng'].cost.value,
    description:
      'Khám phá đỉnh Putaleng – nơi được mệnh danh là mái nhà thứ hai của Đông Dương với rừng nguyên sinh hoang sơ.',
    link: '/tours/putaleng'
  }
]

export const ListTours = () => {
  return (
    <div>
      <section id="tours" className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
          Tour Trekking đang mở bán{' '}
          <span className="text-xl sm:text-2xl">(bắt đầu từ 30/8/2025)</span>
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tourData.map((tour, index) => (
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
