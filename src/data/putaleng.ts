import { APP_CONST, NameTour, TypeTour } from 'domain/index'

export const Putaleng = {
  name: NameTour.PUTALENG,
  type: TypeTour.TREKKING,
  home: {
    title: 'Pu-Ta-Leng 3049m',
    description: 'Hành trình 28km hướng Tả Lèng - Sì Thầu Chải',
    backgroundImage: '/assets/tours/putaleng/1.png'
  },
  about: {
    title: 'Đôi chút về Putaleng',
    description: `Putaleng là đỉnh cao thứ 3 trong những đỉnh núi cao nhất Việt Nam. Những dòng suối trong mát, những khu rừng rêu phong cổ kính có lẽ là thương hiệu mà không ngọn núi nào sánh được. 
    <br/>
    <br/>
Đỉnh Putaleng từ lâu đã được bình chọn là một trong những rừng rậm nhiệt đới đặc trưng và đẹp nhất của nước ta. 
Do vậy, tour trekking Putaleng chắc chắn sẽ đem lại cho bạn nhiều trải nghiệm mới lạ.
<br/>
<br/>
Hành trình leo núi Putaleng đi xuyên qua cánh rừng nguyên sinh của Việt Nam với thảm thực vật đa dạng, rêu và địa y phủ gần như kín các thân cây cổ thụ đến cả những tảng đá. Qua những đoạn suối trong vắt róc rách chảy, rừng trúc thâm u, những gốc cây đỗ quyên cao nghều thả xuống cả thảm hoa rực rỡ và êm ái, qua những con dốc liên tiếp vắt kiệt sức người đi… và qua đủ mọi cung bậc cảm xúc suốt chặng hành trình…`,
    notice:
      'Putaleng là cung trekking khó và dài, được mệnh danh là “nóc nhà thứ hai” của miền Bắc sau Fansipan. Hành trình khoảng 28km qua rừng rậm nguyên sinh, suối, dốc cao và nhiều đoạn đá trơn. Đỉnh cao gần 3.050m, là một trong ba ngọn núi cao nhất Việt Nam. Phù hợp với trekker có kinh nghiệm, thể lực tốt và tinh thần bền bỉ. Cảnh quan kỳ vĩ, nhiều hoa đỗ quyên vào tháng 3–4, nhưng cung đường thử thách không dành cho người mới. Chuẩn bị kỹ về thể lực, giày leo núi và tinh thần là điều bắt buộc.',
    image: '/assets/tours/putaleng/2.png'
  },
  schedule: {
    title: 'Lịch trình 3 ngày 3 đêm – Chinh phục Putaleng',
    description: 'Phương tiện di chuyển: xe 16,29 chỗ',
    schedule: [
      {
        day: 'Ngày 0 & 1: Hà Nội – Sapa - Hồ Thầu',
        activities: [
          `🕖 19h: Tập trung tại ${APP_CONST.location}, khởi hành đi thị trấn Sapa.`,
          '🕑 2h sáng: Đoàn đến homestay nghỉ ngơi, nạp năng lượng cho hành trình chinh phục đỉnh cao phía trước.',
          '🕕 6h: Dậy vệ sinh cá nhân, ăn sáng và chuẩn bị đồ leo.',
          '🕖 7h: Di chuyển bằng ô tô đến điểm xe ôm Tả Lèng.',
          '🕤 9h30: Sắp xếp đồ đạc và bắt đầu hành trình trekking.',
          '🕛 12h: Nghỉ ăn trưa trong rừng, tiếp tục di chuyển.',
          '🕒 15h-16h: Đến lán nghỉ, ai khỏe có thể tiếp tục leo lên đỉnh check-in với cột chóp.',
          '🕕 18h: Ăn tối và giao lưu trong không khí ấm cúng giữa núi rừng.',
          '🕘 21h: Nghỉ đêm tại lán Hồ Thầu.'
        ]
      },
      {
        day: 'Ngày 2: Lán nghỉ Sì Thâu Chải',
        activities: [
          '🕓 4h: Dậy vệ sinh cá nhân, săn bình minh, ăn sáng.',
          '🕔 5h: Bắt đầu hành trình chinh phục đỉnh chóp.',
          '🕡 6h30: Check-in đỉnh, sau đó xuống đón đồ, quay lại lán.',
          '🕗 8h: Thu dọn hành lý, di chuyển sang lán Sì Thâu Chải.',
          '🕛 12h: Nghỉ ăn trưa, check-in dọc đường ngắm rừng già nguyên sinh.',
          '🕓 16h: Tới lán nghỉ Sì Thâu Chải, tắm rửa và nghỉ ngơi.',
          '🕕 18h: Ăn tối và giao lưu cùng đoàn.',
          '🕘 21h: Nghỉ ngơi.'
        ]
      },
      {
        day: 'Ngày 3: Hành trình trở về',
        activities: [
          '🕡 6h30: Dậy vệ sinh, thưởng thức cafe/trà gừng ngắm bình minh.',
          '🕢 7h30: Khởi động, bắt đầu trek về lại chân núi.',
          '🕛 12h: Nghỉ ăn trưa ven đường.',
          '🕞 13h30: Tới bản Sì Thâu Chải tắm rửa, nghỉ ngơi.',
          '🕔 15h: Ô tô đón khách về thị trấn Sapa ăn tối.',
          '🕕 18h: Tản bộ dạo chơi Sapa, mua quà địa phương.',
          '🕖 21h: Lên xe khách về Hà Nội (hành trình 5-6 tiếng).',
          '🕐 2h-5h sáng: Về tới điểm đón ban đầu tại Nam Từ Liêm, kết thúc hành trình.'
        ]
      }
    ]
  },
  isHaveCharity: true,

  cost: {
    value: 3700000,
    description:
      '💰 Đặt trước 500k/khách bao gồm xe, lán nghỉ, porter, ăn uống',
    isHaveDiscount: true
  }
}
