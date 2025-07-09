import { TypeTour } from 'domain/index'
import React from 'react'

const DATA = {
  trekking: {
    items: [
      '👧 Trẻ &lt;10 tuổi: 70% giá tour',
      '🧒 &gt;=10 tuổi: giá người lớn (Lưu ý: tính theo năm sinh, không tính theo ngày sinh nhật)',
      '👨‍👩‍👧 Nhóm ≥3 người: giảm 70k/người',
      '🎁 Hoàn thành tour: tặng 100k cho tour trekking kế tiếp'
    ]
  },
  hamlon: {
    items: [
      '👶 Trẻ em bằng với giá người lớn',
      '🎁 Hoàn thành tour => miễn phí các tour Hàm Lợn kế tiếp'
    ]
  },
  tamdao: {
    items: [
      '👧 Tour này hiện tại chưa dành cho trẻ em &lt;10 tuổi',
      '👨‍👩‍👧 Nhóm ≥3 người: giảm 50k/người'
    ]
  },
  hiking: {
    items: [
      '👧 Trẻ &lt;10 tuổi: 70% giá tour',
      '🧒 &gt;=10 tuổi: giá người lớn (Lưu ý: tính theo năm sinh, không tính theo ngày sinh nhật)',
      '👨‍👩‍👧 Nhóm ≥3 người: giảm 50k/người'
    ]
  }
}

interface IProps {
  type: TypeTour
}

export const Children = ({ type }: IProps) => {
  const option = DATA[type].items

  return (
    <div>
      <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-2">
        {option.map((item, idx) => (
          <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </div>
  )
}
