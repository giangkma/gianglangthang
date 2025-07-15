import { APP_CONST, NameTour, TypeTour } from 'domain/index'

export const LaoThan = {
  name: NameTour.LAO_THAN,
  type: TypeTour.TREKKING,
  home: {
    title: 'Lảo Thẩn 2860m',
    description: 'Hành trình 16km / 2 chiều – chinh phục đỉnh mây',
    backgroundImage: '/assets/tours/lao-than/3.png'
  },
  about: {
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
    image: '/assets/tours/lao-than/2.png',
    notice:
      'Lảo Thẩn là một cung trekking không khó, rất phù hợp với người mới, chưa có kinh nghiệm trekking. Có tỉ lệ săn mây cao nên Lảo Thẩn hiện đang là một trong những cung trekking được yêu thích nhất tại Tây Bắc. Dù dễ nhưng bạn vẫn cần có sức khỏe tốt, không mắc các bệnh về tim mạch, huyết áp. Nếu có vấn đề về sức khỏe, hãy tham khảo ý kiến bác sĩ trước khi tham gia.'
  },
  schedule: {
    title: 'Lịch trình 2 ngày 2 đêm – Chinh phục Lảo Thẩn',
    description: 'Phương tiện di chuyển: xe 16,29 chỗ',
    schedule: [
      {
        day: 'Ngày 0: Hà Nội - Lào Cai',
        activities: [
          `🕗 20h: Tập trung tại ${APP_CONST.location}, khởi hành đến homestay TP. Lào Cai.`,
          '🕐 0h30 – 1h sáng: Đến homestay, nhận phòng và nghỉ ngơi để lấy sức cho hành trình ngày mai.'
        ]
      },
      {
        day: 'Ngày 1: Hành trình bắt đầu',
        activities: [
          '🕖 7h: Thức dậy, vệ sinh cá nhân và dùng bữa sáng ở gần homestay.',
          '🕗 8h: Di chuyển đến điểm bắt đầu hành trình leo núi.',
          '🕚 11h: Đến điểm trekking Lảo Thẩn. Đoàn có thể nghỉ và ăn trưa tại chân núi hoặc đi sâu vào rừng mới ăn tùy điều kiện thời tiết.',
          '🕓 16h: Tới lán nghỉ, nghỉ ngơi. Ai khỏe có thể tiếp tục leo đỉnh để săn mây hoàng hôn.',
          '🕕 18h: Dùng bữa tối, giao lưu lửa trại cùng đoàn.',
          '🕘 21h: Nghỉ ngơi, sẵn sàng cho ngày chinh phục đỉnh.'
        ]
      },
      {
        day: 'Ngày 2: Chinh phục đỉnh',
        activities: [
          '🕓 4h: Dậy sớm, vệ sinh cá nhân, dùng trà gừng và bữa sáng nhẹ.',
          '🕔 5h: Bắt đầu leo đỉnh đón ánh bình minh tuyệt đẹp trên mây.',
          '🕡 6h30 – 7h: Check-in đỉnh Lảo Thẩn ở độ cao 2860m.',
          '🕣 8h30: Bắt đầu xuống núi.',
          '🕛 12h: Nghỉ ngơi và dùng bữa trưa tại chân núi.',
          '🕐 13h30: Thu dọn đồ đạc, chuẩn bị trở lại homestay, tắm rửa, nghỉ ngơi.',
          '🕡 17h30: Cả đoàn dừng nghỉ ăn tối trước khi về',
          '🕚 23h: Về đến Hà Nội, kết thúc hành trình ý nghĩa.'
        ]
      }
    ]
  },
  isHaveCharity: true,

  cost: {
    value: 2700000,
    description:
      '💰 Đặt cọc trước 300k/khách bao gồm xe, lán nghỉ, porter, ăn uống',
    isHaveDiscount: true
  }
}
