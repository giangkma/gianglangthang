import { HeartHandshake, PartyPopper, Users, Utensils } from 'lucide-react'
import React from 'react'

export const About = () => {
  return (
    <div className="container mx-auto">
      <section className="sm:py-16 py-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="sm:text-4xl text-3xl font-bold my-4 text-green-800 uppercase">
            Khám&nbsp;phá & Lan&nbsp;toả
          </h2>
          <h3 className="sm:text-3xl text-xl text-orange-600 font-semibold mb-4 uppercase">
            Giang Lang Thang Travel
          </h3>
          <p className="text-gray-700 leading-relaxed tracking-normal text-justify">
            <span className="block mb-2">
              <strong className="text-primary font-semibold">
                Giang Lang Thang
              </strong>{' '}
              không chỉ là nơi cung&nbsp;cấp các hành&nbsp;trình trekking chinh
              &nbsp;phục thiên&nbsp;nhiên, mà còn là mang đến những
              chuyến&nbsp;đi đầy ý&nbsp;nghĩa dành cho cộng&nbsp;đồng.
            </span>
            <span className="block">
              Với mỗi lượt tham gia tour, bạn đang đóng góp{' '}
              <strong className="text-rose-600 font-semibold">
                50.000đ vào Quỹ&nbsp;Thiện&nbsp;Nguyện
              </strong>{' '}
              để tặng sữa, quần áo, sách vở và xây dựng trường học cho trẻ em
              vùng cao còn nhiều khó&nbsp;khăn.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm text-gray-800">
          <div className="flex items-start gap-3">
            <Users className="text-green-700 mt-1 w-12 h-12" />
            <div>
              <h4 className="font-semibold text-lg mb-1">
                Hướng dẫn viên trẻ trung:
              </h4>
              <p>
                Năng&nbsp;động, nhiệt&nbsp;tình, tận tâm với nghề, mang đến trải
                nghiệm
                <br />
                thân&nbsp;thiện và an&nbsp;toàn.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Utensils className="text-green-700 mt-1 w-12 h-12" />
            <div>
              <h4 className="font-semibold text-lg mb-1">Đồ ăn chất lượng:</h4>
              <p>
                Thực đơn phong phú, đầy đủ dinh&nbsp;dưỡng, cung&nbsp;cấp bữa ăn
                chay theo yêu&nbsp;cầu của quý khách&nbsp;hàng.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <HeartHandshake className="text-green-700 mt-1 w-12 h-12" />
            <div>
              <h4 className="font-semibold text-lg mb-1">
                Du lịch kết hợp thiện&nbsp;nguyện:
              </h4>
              <p>
                Trực tiếp tham gia trao quà cho các bé học&nbsp;sinh
                vùng&nbsp;cao tại các điểm&nbsp;trường mà đoàn leo&nbsp;núi đi
                qua.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <PartyPopper className="text-green-700 mt-1 w-12 h-12" />
            <div>
              <h4 className="font-semibold text-lg mb-1">
                Nguồn năng lượng tích cực:
              </h4>
              <p>
                Tour nhà GLT chủ yếu là những người&nbsp;trẻ, yêu&nbsp;thích
                khám phá và làm việc thiện, mang đến không&nbsp;khí vui&nbsp;vẻ,
                sôi&nbsp;nổi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
