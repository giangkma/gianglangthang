import { formatCurrency } from 'domain'
import React from 'react'

const data = {
  cost: 2600000,
  description: '💰 Đặt cọc trước 50% bao gồm xe, lán nghỉ, porter, ăn uống',
  isHaveDiscount: true,
  qrCodeImage: './assets/chuyen-khoan/1.png'
}

export const Cost = () => {
  return (
    <section
      id="cost"
      className="bg-gradient-to-b from-white to-green-100 pb-10 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Chi phí tour */}
        <div className="bg-white p-8 rounded-3xl shadow-2xl border-l-8 border-red-500">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-green-900 sm:mb-6 mb-4 uppercase tracking-wider text-center">
            Chi phí toàn bộ chuyến đi
          </h2>
          <p className="lg:text-5xl text-4xl font-black text-red-600 sm:mb-8 mb-4 drop-shadow-md">
            {formatCurrency(data.cost)}
          </p>

          <ul className="text-base sm:text-lg text-gray-800 space-y-4 leading-relaxed">
            <li>{data.description}</li>
            <li>
              🏦 CK cú pháp:{' '}
              <span className="font-semibold text-rose-700">
                hoten_tentour_ngay
              </span>
            </li>
            <li>
              📩 STK:{' '}
              <span className="font-semibold text-black">
                7547542000 - Techcombank - Dang Truong Giang
              </span>
            </li>
            <li>🔁 Thanh toán phần còn lại sau khi kết thúc tour</li>
          </ul>

          {data.isHaveDiscount && (
            <div className="mt-8 bg-green-50 p-5 rounded-xl border border-green-300">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                🎯 Ưu đãi đặc biệt
              </h3>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-2">
                <li>👶 Trẻ &lt;6 tuổi: 50% giá tour (có porter riêng)</li>
                <li>👧 Trẻ &lt;10 tuổi: 70% giá tour</li>
                <li>🧒 &gt;=10 tuổi: giá người lớn</li>
                <li>👨‍👩‍👧 Nhóm ≥3 người: giảm 70k/người</li>
                <li>🎁 Hoàn thành tour: tặng 100k cho tour kế tiếp</li>
              </ul>
            </div>
          )}
        </div>

        {/* QR Chuyển khoản */}
        <div className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-green-900 mb-4 uppercase tracking-wide text-center">
            Thông tin chuyển khoản
          </h3>
          <p className="text-base text-gray-700 mb-2">
            Quét mã để chuyển tiền đến:
          </p>
          <p className="text-lg font-semibold text-black">DANG TRUONG GIANG</p>
          <p className="text-base text-gray-700 mb-2">7547 5420 00</p>
          <img
            src={data.qrCodeImage}
            alt="QR chuyển khoản"
            className="w-full max-w-xs mx-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <p className="mt-6 text-sm text-gray-500 italic text-center">
            Sử dụng Internet Banking hoặc App ngân hàng
          </p>
        </div>
      </div>
    </section>
  )
}
