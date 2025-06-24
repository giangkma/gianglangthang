import { HeartHandshake, PartyPopper, Users, Utensils } from 'lucide-react'
import React from 'react'

export const About = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 sm:py-16 py-4 grid md:grid-cols-2 sm:gap-12 gap-4 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-green-800">
            Khám phá & Lan toả
          </h2>
          <h3 className="text-3xl font-semibold mb-4 uppercase">
            Giang Lang Thang Tour
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Giang Lang Thang không chỉ là hành trình trekking chinh phục thiên
            nhiên, mà còn là chuyến đi đầy ý nghĩa dành cho cộng đồng. Mỗi khách
            tham gia tour, bạn đang đóng góp{' '}
            <strong>50.000đ vào Quỹ Thiện Nguyện</strong> để tặng sữa, quần áo,
            sách vở và xây dựng trường học cho trẻ em vùng cao còn nhiều khó
            khăn.
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
                Năng động, nhiệt tình, tận tâm với nghề, mang đến trải nghiệm
                thân thiện và an toàn.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Utensils className="text-green-700 mt-1 w-12 h-12" />
            <div>
              <h4 className="font-semibold text-lg mb-1">Đồ ăn chất lượng:</h4>
              <p>
                Thực đơn phong phú, đủ dinh dưỡng, có cả mặn - chay theo yêu
                cầu.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <HeartHandshake className="text-green-700 mt-1 w-12 h-12" />
            <div>
              <h4 className="font-semibold text-lg mb-1">
                Du lịch kết hợp thiện nguyện:
              </h4>
              <p>
                Trực tiếp tham gia trao quà cho các bé tại điểm đến cùng đội
                nhóm.
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
                Tour nhà G chủ yếu là những người trẻ, yêu thích khám phá và làm
                việc thiện, mang đến không khí vui vẻ, sôi nổi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
