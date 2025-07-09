import React from 'react'

export const Policy = () => {
  return (
    <div className="bg-white p-2">
      <div className="">
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
            📌 Trường hợp bất khả kháng (do thiên nhiên):{' '}
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
    </div>
  )
}
