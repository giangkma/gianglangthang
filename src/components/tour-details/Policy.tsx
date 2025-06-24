import React from 'react'

export const Policy = () => {
  return (
    <section
      id="policy"
      className="bg-green-50 sm:py-10 py-6 px-6 sm:px-10 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-center text-green-900 sm:mb-12 mb-6 uppercase tracking-wider">
          Chính sách <br />
          <span className="text-red-600">hoàn & huỷ</span> tour
        </h2>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
            {/* Chính sách hoàn hủy */}
            <div className="p-8">
              <h3 className="text-xl font-bold text-orange-600 mb-4 flex items-center">
                <span className="text-2xl mr-2">📋</span> Hoàn & huỷ tour
              </h3>
              <div className="space-y-4 text-gray-700 text-sm sm:text-base">
                <p>
                  ⏱️ Hủy trước 5 ngày:{' '}
                  <strong className="text-green-700">Hoàn 100% cọc</strong>
                </p>
                <p>
                  📆 Hủy 3–5 ngày:{' '}
                  <strong className="text-yellow-600">Hoàn 50% cọc</strong>
                </p>
                <p>
                  ⛔ Hủy 1–3 ngày:{' '}
                  <strong className="text-red-500">Không hoàn cọc</strong>
                </p>
                <p>
                  📌 Trường hợp bất khả kháng:{' '}
                  <strong className="text-green-700">Hoàn 100%</strong>
                </p>
              </div>

              <div className="mt-6 p-4 bg-orange-100 border-l-4 border-orange-400 rounded">
                <p className="text-sm text-gray-800">
                  🔁 <strong>Chuyển tour = huỷ tour</strong> & đăng ký lại:
                  <br />✔ Trước 3 ngày: hoàn 100%
                  <br />✔ 1–3 ngày: hoàn 50%
                  <br />✘ Trước 1 ngày: không hoàn cọc
                </p>
              </div>
            </div>

            {/* Đặc biệt */}
            <div className="p-8 bg-gray-50">
              <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="text-2xl mr-2">⭐</span> Điều kiện tour
              </h3>
              <ul className="text-gray-700 text-sm sm:text-base list-disc list-inside space-y-2">
                <li>Tour chạy khi đủ từ 8 khách trở lên</li>
                <li>
                  Nhóm thường 10–12 người, dẫn dắt bởi 1 leader, 1 tour có thể
                  có từ 15-20 khách, đông khách thì số leader và porter cũng sẽ
                  đông hơn để đảm bảo cứ 2-3 khách sẽ đi cùng 1 người có kinh
                  nghiệm, để đảm bảo an toàn và hỗ trợ tốt nhất
                </li>
                <li>
                  Tour có thể thay đổi lịch trình nếu thời tiết xấu hoặc không
                  đảm bảo an toàn, hoặc tuỳ thể lực của khách!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
