import React from 'react'

export const TourStart = () => {
  return (
    <div>
      <ul className="text-gray-700 text-sm sm:text-base list-disc list-inside space-y-3 text-justify leading-relaxed">
        <li>
          Tour khởi hành khi có đủ <strong>tối thiểu 8 khách</strong>.
        </li>
        <li>
          Mỗi tour thường từ <strong>10–12 khách</strong>, được dẫn dắt bởi ít
          nhất 1 leader. Trường hợp đông (15–20 khách) sẽ có thêm leader hoặc
          porter để đảm bảo tỷ lệ 1 người có kinh nghiệm hỗ trợ{' '}
          <strong>2–3 khách</strong>.
        </li>
        <li>
          Lịch trình có thể thay đổi trong điều kiện{' '}
          <strong>thời tiết xấu</strong>, yếu tố <strong>an toàn</strong>, hoặc
          tùy thuộc thể lực thực tế của đoàn.
        </li>
      </ul>
    </div>
  )
}
