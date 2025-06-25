import React from 'react'

export const Children = () => {
  return (
    <div>
      <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-2">
        <li>👶 Trẻ &lt;6 tuổi: 50% giá tour</li>
        <li>👧 Trẻ &lt;10 tuổi: 70% giá tour</li>
        <li>🧒 &gt;=10 tuổi: giá người lớn</li>
        <li>👨‍👩‍👧 Nhóm ≥3 người: giảm 70k/người</li>
        <li>🎁 Hoàn thành tour: tặng 100k cho tour kế tiếp</li>
      </ul>
    </div>
  )
}
