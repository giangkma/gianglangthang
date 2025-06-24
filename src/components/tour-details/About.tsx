import React from 'react'

const data = {
  title: 'Đôi chút về Lảo Thẩn',
  description: `Lảo Thẩn, độ cao 2860m được ví như Nóc nhà Y Tý, nằm tại xã Bát Xát
            tỉnh Lào Cai, với địa hình không quá khó khăn mà lại có khá nhiều
            điểm check in đẹp, Lảo Thẩn là đỉnh núi phù hợp cho người mới khai
            cuộc.
            <br />
            <br />
            Thời điểm lý tưởng nhất để bạn bắt đầu hành trình Trekking Lảo Thẩn
            Y Tý chính là từ tháng 9 đến tháng 4 hàng năm. Bởi lúc này thời tiết
            rất lý tưởng, ít mưa nên đường đi leo núi cũng được đảm bảo an toàn
            hơn.
            <br />
            <br />
            Chưa hết, ở từng thời điểm bạn sẽ tận hưởng được những khung cảnh
            tuyệt vời ở nơi đây. Là một đỉnh săn mây quốc dân với tỉ lệ dính mây
            cực kỳ cao, view thoáng ít bị che chắn.
            <br />
            <br />
            Nếu bạn muốn tìm một chuyến trekking khởi đầu nhẹ nhàng thì Lảo Thẩn
            là lựa chọn hợp lý, cung đường nhẹ nhàng cho người mới bắt đầu, trẻ
            em cũng có thể tham gia.`,
  image: './assets/lao-than/2.png'
}

export const About = () => {
  return (
    <section
      id="about"
      className="bg-[#f2f2ed] w-full py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-gray-800 text-justify">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-800">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
          </p>
        </div>

        <div>
          <img
            src={data.image}
            className="w-full h-80 rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}
