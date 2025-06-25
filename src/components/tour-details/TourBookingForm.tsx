import React from 'react'
import { DatePicker, Input, Select } from 'antd'
import dayjs from 'dayjs'
import { formatCurrency } from 'domain'

const { Option } = Select

export const TourBookingForm = ({ data }: { data: any }) => {
  return (
    <div className="relative col-span-1">
      <div className="lg:sticky top-24 bg-white shadow-xl rounded-2xl p-6 border border-orange-200 w-full">
        <p className="text-gray-500 mb-1 text-sm">Giá</p>
        <h3 className="text-4xl font-extrabold drop-shadow-sm text-orange-600 mb-4">
          {formatCurrency(data.cost.value)}
        </h3>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-orange-500">📅</span>
            <DatePicker
              format="DD/MM/YYYY"
              defaultValue={dayjs()}
              className="w-full border border-orange-200 rounded-lg px-3 py-2"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-orange-500">👤</span>
            <Select
              defaultValue={1}
              className="w-full border h-10 border-orange-200 rounded-lg"
            >
              {[1, 2, 3, 4, 5].map((v) => (
                <Option key={v} value={v}>
                  {v}
                </Option>
              ))}
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-orange-500">📞</span>
            <Input
              type="tel"
              placeholder="Số điện thoại"
              className="w-full border border-orange-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-lg shadow transition duration-200">
            Yêu cầu tư vấn
          </button>
          {/* lưu ý */}
          <p className="text-xs text-gray-500 mt-2">
            Trước khi thanh toán, Quý khách vui lòng liên hệ GLT để xác nhận chi
            phí và lịch trình khởi hành tour.
          </p>
        </div>
      </div>
    </div>
  )
}
