import React, { useCallback } from 'react'
import { DatePicker, Input, Select, Spin } from 'antd'
import dayjs from 'dayjs'
import { formatCurrency, validatePhoneNumber } from 'domain/index'
import { toast } from 'react-toastify'
import { postBookingSale } from 'apis/form'
import { useDebounce } from 'hooks/useDebounce'

const { Option } = Select

export const TourBookingForm = ({ data }: { data: any }) => {
  const [date, setDate] = React.useState(dayjs())
  const [people, setPeople] = React.useState(1)
  const [phone, setPhone] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = useCallback(async () => {
    try {
      if (!phone || !date || !people) {
        toast.error('Vui lòng điền đầy đủ thông tin.')
        return
      }
      if (!validatePhoneNumber(phone)) {
        toast.error('Số điện thoại không hợp lệ.')
        return
      }
      setLoading(true)
      const res = await postBookingSale({
        tour: data.home.title,
        phone,
        date: date.format('DD/MM/YYYY'),
        people
      })
      toast.success('Yêu cầu tư vấn thành công!')
    } catch (err) {
      toast.error('Có lỗi xảy ra.')
    } finally {
      setLoading(false)
    }
  }, [people, phone, date, data.name])

  return (
    <div className="relative col-span-1">
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
          <Spin size="large" />
        </div>
      )}
      <div className="lg:sticky top-24 bg-white shadow-xl rounded-2xl p-6 border border-orange-200 w-full">
        <p className="text-gray-500 mb-1 text-sm">Giá</p>
        <h3 className="text-4xl font-extrabold drop-shadow-sm text-orange-600 mb-2">
          {formatCurrency(data.cost.value)}
        </h3>
        <p className="text-gray-500 mb-4 text-xs">{data.cost.description}</p>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-orange-500">📅</span>
            <DatePicker
              format="DD/MM/YYYY"
              onChange={(date) => setDate(date || dayjs())}
              defaultValue={date}
              className="w-full border border-orange-200 rounded-lg px-3 py-2"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-orange-500">👤</span>
            <Select
              defaultValue={people}
              onChange={setPeople}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Số điện thoại"
              className="w-full border border-orange-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-lg shadow transition duration-200"
          >
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
