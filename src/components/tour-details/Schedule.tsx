import React from 'react'

const data = {
  title: 'Lịch trình 2 ngày 2 đêm – Chinh phục Lảo Thẩn',
  description: 'Phương tiện: xe 16,29 chỗ',
  schedule: [
    {
      day: 'Ngày 0: Hà Nội - Lào Cai',
      activities: [
        '20h: Tập trung tại công Toà án Q. Nam Từ Liêm để xuất phát tới Homestay',
        '1h sáng: tới homestay nghỉ ngơi'
      ]
    },
    {
      day: 'Ngày 1: Hành trình bắt đầu',
      activities: [
        '6h: Dậy vệ sinh, ăn sáng và chuẩn bị đồ',
        '7h: Di chuyển đến điểm leo',
        '9h: Bắt đầu leo',
        '12h: Nghỉ ăn trưa',
        '16h: Tới lán nghỉ, ai khỏe có thể lên đỉnh luôn',
        '18h: Ăn tối, giao lưu đoàn',
        '21h: Nghỉ ngơi'
      ]
    },
    {
      day: 'Ngày 2: Chinh phục đỉnh',
      activities: [
        '4h: Dậy vệ sinh, ăn sáng',
        '5h: Bắt đầu leo đỉnh đón bình minh',
        '6h30 - 7h: Checkin đỉnh Lảo Thẩn',
        '8h30: Xuống núi',
        '12h: Ăn trưa tại chân núi',
        '13h: Sắp xếp đồ, về lại Lào Cai',
        '15h30: Tới homestay tắm rửa',
        '16h30: Lên xe về Hà Nội',
        '23h: Về tới Hà Nội'
      ]
    }
  ]
}

export const Schedule = () => {
  return (
    <section
      id="schedule"
      className="bg-[#f2f2ed] w-full sm:py-12 px-4 sm:px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-8 text-center uppercase">
          {data.title}
          <p className="text-sm text-gray-600 italic mb-2 font-medium">
            ({data.description})
          </p>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-8 gap-3">
          {data.schedule.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-5">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                {item.day}
              </h3>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-2">
                {item.activities.map((activity, idx) => (
                  <li key={idx} className="">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
