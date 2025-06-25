import React from 'react'

export const Payment = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-sm mx-auto">
        <h3 className="text-lg font-bold text-green-800 mb-2 uppercase tracking-wide text-center">
          Thông tin chuyển khoản
        </h3>

        <p className="text-gray-700 text-sm mb-1">
          Quét mã để chuyển tiền đến:
        </p>
        <p className="text-base font-semibold text-gray-900">
          DANG TRUONG GIANG
        </p>
        <p className="text-sm text-gray-700 mb-3 font-mono tracking-wide">
          754 754 2000
        </p>

        <img
          src="/assets/chuyen-khoan/1.png"
          alt="QR chuyển khoản"
          className="w-[180px] rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />

        <p className="mt-4 text-xs text-gray-500 italic text-center">
          Sử dụng Internet Banking hoặc App ngân hàng để quét mã.
          <br />
          Trước khi thanh toán, Quý khách vui lòng liên hệ GLT để xác nhận chi
          phí và lịch trình khởi hành tour.
        </p>
      </div>
    </div>
  )
}
