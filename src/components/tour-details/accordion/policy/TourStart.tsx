import { TypeTour } from 'domain/index'
import React from 'react'
const DATA = {
  trekking: {
    items: [
      'Tour khởi hành khi có đủ <strong>tối thiểu 8 khách</strong>.',
      `Mỗi tour thường từ <strong>10–12 khách</strong>, được dẫn dắt bởi ít
          nhất 1 leader. Trường hợp đông (15–20 khách) sẽ có thêm leader hoặc
          porter để đảm bảo tỷ lệ 1 người có kinh nghiệm hỗ trợ
          <strong>2–3 khách</strong>.`,
      `Lịch trình có thể thay đổi trong điều kiện
          <strong>thời tiết xấu</strong>, yếu tố <strong>an toàn</strong>, hoặc
          tùy thuộc thể lực thực tế của đoàn.`
    ]
  },
  hamlon: {
    items: [
      'Tour khởi hành khi có đủ <strong>tối thiểu 12 khách</strong>.',
      `Mỗi tour thường từ <strong>30–35 khách</strong>, được dẫn dắt bởi ít
          nhất 5 leader, đảm bảo tỷ lệ 1 người có kinh nghiệm hỗ trợ
          <strong>5–7 khách</strong>.`,
      `Lịch trình có thể thay đổi trong điều kiện
          <strong>thời tiết xấu</strong>, yếu tố <strong>an toàn</strong>, hoặc
          tùy thuộc thể lực thực tế của đoàn.`
    ]
  },
  tamdao: {
    items: [
      'Tour khởi hành khi có đủ <strong>tối thiểu 8 khách</strong>.',
      `Mỗi tour thường từ <strong>10–12 khách</strong>, được dẫn dắt bởi ít
          nhất 1 leader. Trường hợp đông (15–20 khách) sẽ có thêm leader hoặc
          porter để đảm bảo tỷ lệ 1 người có kinh nghiệm hỗ trợ
          <strong>2–3 khách</strong>.`,
      `Lịch trình có thể thay đổi trong điều kiện
          <strong>thời tiết xấu</strong>, yếu tố <strong>an toàn</strong>, hoặc
          tùy thuộc thể lực thực tế của đoàn.`
    ]
  },
  hiking: {
    items: [
      'Tour khởi hành khi có đủ <strong>tối thiểu 8 khách</strong>.',
      `Mỗi tour thường từ <strong>10–12 khách</strong>, được dẫn dắt bởi ít
          nhất 1 leader. Trường hợp đông (15–20 khách) sẽ có thêm leader hoặc
          porter để đảm bảo tỷ lệ 1 người có kinh nghiệm hỗ trợ
          <strong>2–3 khách</strong>.`,
      `Lịch trình có thể thay đổi trong điều kiện
          <strong>thời tiết xấu</strong>, yếu tố <strong>an toàn</strong>, hoặc
          tùy thuộc thể lực thực tế của đoàn.`
    ]
  }
}

interface IProps {
  type: TypeTour
}

export const TourStart = ({ type }: IProps) => {
  const option = DATA[type].items
  return (
    <div>
      <ul className="text-gray-700 text-sm sm:text-base list-disc list-inside space-y-3 text-justify leading-relaxed">
        {option.map((item, idx) => (
          <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </div>
  )
}
