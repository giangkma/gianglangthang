import { APP_CONST, NameTour, TypeTour } from 'domain/index'

export const HangDeCho = {
  name: NameTour.HANG_DE_CHO,
  type: TypeTour.HIKING,
  home: {
    title: 'Thác Háng Đề Chơ',
    description:
      'Khám phá chiếc thác đẹp nhất nhì Tây Bắc, trekking qua những tán rừng xanh mướt để lên đỉnh thác',
    backgroundImage: '/assets/tours/hang-de-cho/1.png'
  },
  about: {
    title: 'Đôi chút về Háng Đề Chơ',
    description: `Háng Đề Chơ (tên gọi khác là Háng Tề Chơ) một con thác ẩn mình trong rừng già của huyện Trạm Tấu, con thác cao hơn 100m, nằm ở độ cao 1800m. Dòng thác Háng Đề Chơ tuôn chảy mãnh liệt, tạo gió và thổi tung bay những bọt nước trắng xóa. Đứng cách thác một con dốc với khoảng 10 phút đi bộ vẫn nghe tiếng thác đổ ào ạt.
<br/>
<br/>
Thác Háng Đề Chơ được biết đến từ rất lâu nhưng bây giờ vẫn là một vùng thác cực kỳ hoang sơ, nơi điểm thác không có nhà dân, chỉ có một láng nhỏ từ hướng Làng Nhì. Dưới chân thác là vùng hồ lớn, nhiều tảng đá lớn để check-in, nước dưới chân thác chậm rãi chảy không dữ dội như lúc con thác đổ - cách chân thác tầm 100m thôi lượng bọt nước bay ra cũng đủ làm người ta ướt nhẹp.`,
    image: '/assets/tours/hang-de-cho/2.png',
    notice:
      'Nếu bạn yêu thích thiên nhiên, thích tắm thác và muốn trải nghiệm trekking qua những tán rừng xanh mướt thì Háng Đề Chơ là lựa chọn tuyệt vời. Đây là một cung trekking không quá khó, phù hợp với người mới bắt đầu, trẻ em cũng có thể tham gia.'
  },
  schedule: {
    title: 'Lịch trình tour Hàm Lợn trong ngày',
    description: 'Di chuyển tự túc hoặc ghép xe thuê oto nếu đủ từ 10 người',
    schedule: [
      {
        day: 'Ngày 1: Hà Nội – Yên Bái (xe 16, 29 chỗ)',
        activities: [
          `🕔 6h30: Tập trung tại ${APP_CONST.location} để xuất phát đi Nghĩa Lộ`,
          '🕢 7h30: Đoàn dừng nghỉ ăn sáng',
          '🕢 12h: Đoàn dừng nghỉ ăn trưa tại Nghĩa Lộ',
          '🕚 14h: Tới trung tâm xã Làng Nhì, lên xe ôm đi chuyển vào thác, quãng đường dài 4km',
          '🕛 15h: Tới nhà sàn ở chân thác, gửi đồ và xuống thác checkin, nhóm lửa, nướng ngô khoai, cafe trà gừng và tắm tại thác',
          '🕔 17h: Quay lại nhà sàn thay quần áo, nhận chỗ nghỉ ngơi (Vì ở sâu bên trong thác nên điều kiện ăn ngủ cũng sẽ không được hiện đại)',
          '🕖 19h: Dùng bữa tối tại nhà sàn hoặc lều ở thác, giao lưu đoàn, hát hò tâm sự đêm khuya',
          '🕙 22h: Đi nghỉ ngơi nhé'
        ]
      },
      {
        day: 'Ngày 2: Khám phá thác 2',
        activities: [
          '🕕 6h: Thức dậy và tận hưởng không khí trong lành và ăn sáng',
          '🕖 7h: HDV phát gậy, nước cho khách và xuất phát lên thác 2 (cách home 4km đường rừng)',
          '🕙 10h: Tới thác 2 checkin',
          '🕚 11h: Đi chuyển về đỉnh thác 1 checkin và tắm',
          '🕧 12h30: Dừng nghỉ ăn trưa',
          '🕜 13h30: Đi chuyển về nhà sàn soạn đồ và di chuyển về',
          '🕒 15h: Lên xe ôm ra trung tâm xã',
          '🕓 16h: Lên xe ôtô di chuyển về Hà Nội',
          '🕓 17h: Đoàn đi tắm khoáng nóng tại Bản Hốc - Văn Chấn',
          '🕕 18h30: Dừng nghỉ ăn tối',
          '🕙 22h-23h: Về tới Hà Nội, kết thúc hành trình'
        ]
      }
    ]
  },
  isHaveCharity: false,

  cost: {
    value: 1750000,
    description:
      '💰 Đặt trước 200k/khách bao gồm xe, lán nghỉ, porter, ăn uống',
    isHaveDiscount: true
  }
}
