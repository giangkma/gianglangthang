import { APP_CONST, NameTour, TypeTour } from 'domain'

export const NguChiSon = {
  name: NameTour.NGU_CHI_SON,
  type: TypeTour.TREKKING,
  home: {
    title: 'Ngũ Chỉ Sơn 2858m',
    description: 'Hành trình 12km / 2 chiều – Tả Giàng Phình - Tả Giàng Phình ',
    backgroundImage: '/assets/tours/ngu-chi-son/1.png'
  },
  about: {
    title: 'Đôi chút về Ngũ Chỉ Sơn',
    description: `Ngũ Chỉ Sơn thuộc dãy Hoàng Liên Sơn, giáp ranh giữa xã Sơn Bình, huyện Tam Đường (Lai Châu) và xã Tả Giàng Phình, huyện Sa Pa. Ngũ Chỉ Sơn có 5 ngọn núi chính, thẳng đứng ở độ cao gần 2850m so với mực nước biển.
    <br />
    <br />
Cách trung tâm thị trấn Tam Đường 25km, cách Khu du lịch Sa Pa chừng gần 40km dãy núi Ngũ Chỉ Sơn như năm ngón tay xòe thẳng lên trời, được đánh giá là dãy núi hùng vĩ nhất vùng Tây Bắc bốn mùa mây trắng vờn quanh, thảm thực vật trong rừng nguyên sinh phong phú, là điểm đến trong mơ của nhiều du khách ưa du lịch mạo hiểm.
Quãng đường bao quanh sườn núi là những khu rừng nguyên sinh có cách đây hàng trăm năm và cả những cánh đồng lúa bạt ngàn đang trổ bông.
    <br />
    <br />
Để leo đến đỉnh Ngũ Chỉ Sơn ở Sapa ước tính quãng đường khoảng 12km, chủ yếu là đường mòn xuyên qua những cánh rừng nguyên sinh hay men theo những núi đá cao nhấp nhô mây mù bao phủ quanh năm.`,
    notice: `Ngũ Chỉ Sơn là một trong những cung trekking khó và thử thách nhất ở miền Bắc. Địa hình dốc đứng, nhiều đoạn phải leo đá, bám rễ cây hoặc bò dốc khiến hành trình đòi hỏi thể lực và kỹ thuật. Đổi lại, bạn sẽ được chiêm ngưỡng cảnh quan độc đáo với 5 đỉnh núi xếp như bàn tay giữa biển mây. Ngũ Chỉ Sơn chỉ phù hợp với trekker có kinh nghiệm, sức khoẻ tốt và tinh thần thép. Không khuyến khích người mới hoặc sức yếu thử sức với cung này.`,
    image: '/assets/tours/ngu-chi-son/2.png'
  },
  schedule: {
    title: 'Lịch trình 2 ngày 2 đêm – Chinh phục Ngũ Chỉ Sơn',
    description: 'Phương tiện: xe 16,29 chỗ',
    schedule: [
      {
        day: 'Ngày 0: Hà Nội – Sapa (xe 16, 29 chỗ)',
        activities: [
          `🕗 20h: Tập trung tại ${APP_CONST.location} để khởi hành đi thị trấn Sapa.`,
          '🕑 2h sáng: Đến homestay tại Sapa, nghỉ ngơi lấy sức.'
        ]
      },
      {
        day: 'Ngày 1: Hành trình bắt đầu',
        activities: [
          '🕕 6h: Dậy vệ sinh cá nhân, ăn sáng và chuẩn bị hành lý.',
          '🕖 7h: Xe đưa đoàn đến điểm leo Tả Giàng Phình.',
          '🕣 8h30: Sắp xếp đồ đạc và bắt đầu trekking.',
          '🕛 12h: Nghỉ trưa giữa thiên nhiên núi rừng.',
          '🕑 14h: Tới lán nghỉ, ai còn sung sức có thể leo lên đỉnh luôn (cách 2km).',
          '🕕 18h: Ăn tối, giao lưu cùng đoàn giữa khung cảnh đại ngàn.',
          '🕘 21h: Nghỉ ngơi tại lán.'
        ]
      },
      {
        day: 'Ngày 2: Chinh phục đỉnh',
        activities: [
          '🕓 4h: Dậy vệ sinh cá nhân, thưởng thức café và trà gừng ấm nóng.',
          '🕔 5h: Xuất phát chinh phục đỉnh đón bình minh.',
          '🕕 6h30: Checkin săn mây trên đỉnh Ngũ Chỉ Sơn – thiên đường giữa mây trời.',
          '🕣 8h30: Xuống núi, về lán thu dọn đồ đạc.',
          '🕛 12h: Nghỉ ăn trưa giữa hành trình về lại thế giới phồn hoa.',
          '🕔 16h: Về tới homestay, tắm rửa, nghỉ ngơi.',
          '🕕 17h: Dạo quanh Sapa và tổ chức tổng kết hành trình.',
          '🕗 18h: Lên xe về Hà Nội.',
          '🕚 23h: Về đến điểm đón Hà Nội, chia tay nhau trong lưu luyến.'
        ]
      }
    ]
  },
  cost: {
    value: 2600000,
    description: '💰 Đặt cọc trước 50% bao gồm xe, lán nghỉ, porter, ăn uống',
    isHaveDiscount: true
  }
}
