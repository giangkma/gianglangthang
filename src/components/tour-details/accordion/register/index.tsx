import { Facebook, MessageCircle } from 'lucide-react'
import React from 'react'

export const Register = () => {
  return (
    <div>
      <ul className="text-gray-700 text-sm sm:text-base list-disc list-inside space-y-3 leading-relaxed">
        <li>
          Sau khi quý khách đã <b>xem kĩ</b> thông tin tour về giá&nbsp;cả,
          lưu&nbsp;ý, các chính&nbsp;sách... Thì tiếp theo xin mời quý khách
          liên&nbsp;hệ với GLT qua các nền&nbsp;tảng:{' '}
          <a
            href="https://facebook.com/gianglangthangg"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 hover:underline hover:text-orange-600 transition text-blue-600"
          >
            Facebook,&nbsp;
          </a>
          <a
            href="https://zalo.me/0986202220"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 hover:underline hover:text-orange-600 transition text-blue-600"
          >
            Zalo&nbsp;
          </a>
          hoặc gọi Hotline{' '}
          <a
            href="tel:0986202220"
            className="inline-flex items-center gap-2 hover:underline hover:text-orange-600 transition text-blue-600"
          >
            0986.202.220
          </a>{' '}
          để được tư&nbsp;vấn và kiểm&nbsp;tra tình&nbsp;trạng tour.
        </li>
        <li>
          Cung cấp đầy đủ thông tin: <strong>họ tên, số điện thoại</strong> và
          số lượng người tham gia.
        </li>
        <li>
          Thanh toán <strong>đặt cọc 50%</strong> để giữ chỗ. Phần còn lại sẽ
          được thanh toán sau khi tour hoàn thành.
        </li>
        <li>
          Sau khi hoàn tất đăng ký, bạn sẽ nhận được{' '}
          <strong>form xác nhận</strong> và hướng dẫn chuẩn bị cho tour.
        </li>
        <li>
          Trước ngày khởi hành từ <b>3-5 ngày</b>, GLT tạo nhóm Zalo và mời bạn
          vào để trao đổi và chuẩn bị cho tour.
        </li>
      </ul>
    </div>
  )
}
