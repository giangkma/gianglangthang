import { APP_CONST, NameTour, TypeTour } from 'domain/index'

export const YTy = {
  name: NameTour.Y_TY,
  type: TypeTour.HIKING,
  home: {
    title: 'Y Tý + Thác Rồng',
    description:
      'Trải nghiệm hiking vượt rừng thảo quả tại Y Tý, săn mây và checkin thác Rồng hùng vĩ.',
    backgroundImage: '/assets/tours/y-ty/1.png'
  },
  about: {
    title: 'Đôi chút về Y Tý và Tour',
    description: `2 địa điểm trong tour gồm Y Tý + thác Rồng đều cực kì đẹp và nổi tiếng trong cộng đồng xê dịch. 
    <br/>
    <br/>
1. Y Tý còn là vùng đất tập trung sinh chủ yếu của 4 dân tộc chính là Hà Nhì, H'Mông, Dao, Kinh nên bản sắc văn hóa dân tộc rất đa dạng và vô cùng độc đáo. Y Tý khiến du khách không khỏi ngất ngây trước cảnh đẹp của cánh đồng bất tận, bầu trời mây lãng mạng hòa cùng dãy núi cao hùng vĩ. Tất cả mang đến khung cảnh hài hòa cho khu du lịch Y Tý và thu hút nhiều khác du lịch tham quan.
<br/>
<br/>
2. Thác Rồng nằm ở khu vực giữa thôn Trung Hồ và thôn Pờ Hồ Thấp, xã Trung Lèng Hồ, huyện Bát Xát, tỉnh Lào Cai. Ngoài cái tên Thác Rồng, người dân ở đây còn gọi tên khác là thác Bạch Long vì có độ cao và dòng chảy mạnh trông giống như một con rồng uốn lượn giữa khung cảnh thiên nhiên hùng vĩ đẹp đến lạ kỳ

`,
    image: '/assets/tours/y-ty/2.png',
    notice:
      'Đây là 1 tour dưỡng sinh, trải nghiệm, cung đường hiking suối tại Y Tý không khó, cảnh quan đẹp, buổi chiều còn về homestay Y Tý đón hoàng hôn và săn mây nữa, thời tiết se se lạnh đem lại cảm giác dễ chịu lắm.'
  },
  schedule: {
    title: 'Lịch trình tour Y Tý',
    description: 'Phương tiện di chuyển: xe 16,29 chỗ',
    schedule: [
      {
        day: 'Ngày 0: Hà Nội - Lào Cai',
        activities: [
          '🕗 20h00: Tập trung tại cổng Tòa án quận Nam Từ Liêm để xuất phát đi homestay tại Lào Cai nghỉ ngơi',
          '🕐 0h30 – 1h sáng: Đến homestay, nhận phòng và nghỉ ngơi để lấy sức cho hành trình ngày mai.'
        ]
      },
      {
        day: 'Ngày 1: Khám phá rừng thảo quả',
        activities: [
          '🕕 6h: Đoàn thức giấc vệ sinh cá nhân và ăn sáng',
          '🕖 7h30: Bắt đầu di chuyển vào Y Tý',
          '🕙 10h: Tới điểm leo, HDV hướng dẫn KH hiking',
          '🕥 10h30: Vào khu rừng thảo quả, men theo dòng suối checkin',
          '🕦 11h30: Tới điểm ăn trưa nghỉ ngơi (gà xôi thịt lợn...)',
          '🕐 13h: Tiếp tục di chuyển qua thác tới bãi cỏ (người dân đặt tên là bãi sân bay) để checkin',
          '🕜 14h30: Xe đón đoàn về homestay ở Y Tý săn mây',
          '🕒 15h: Đoàn tới Y Tý, khám phá công viên Choản Thèn, ngắm hoàng hôn chill chill',
          '🕔 17h: Về homestay Y Tý nhận phòng, tắm',
          '🕖 19h: Ăn tối, giao lưu đoàn'
        ]
      },
      {
        day: 'Ngày 2: Săn thác',
        activities: [
          '🕕 6h: Thức dậy và tận hưởng không khí trong lành và ăn sáng',
          '🕢 7h30: Đoàn lên xe di chuyển vào sâu bên trong Y Tý, khám phá những thửa ruộng bậc thang tuyệt đẹp',
          '🕙 10h00: Đoàn di chuyển về thác Rồng',
          '🕛 12h00: Tới thác check-in và ăn trưa tại thác',
          '🕑 14h: Di chuyển về homestay tại Mường Hum để tắm, nghỉ ngơi',
          '🕓 16h: Lên xe về lại TP. Lào Cai ăn tối',
          '🕠 17h30: Ăn tối, kết thúc chuyến đi',
          '🕣 18h30: Xuất phát về Hà Nội',
          '🕚 23h: Về tới Hà Nội, kết thúc hành trình đáng nhớ'
        ]
      }
    ]
  },
  isHaveCharity: false,

  cost: {
    value: 2400000,
    description:
      '💰 Đặt trước 300k/khách bao gồm xe, lán nghỉ, porter, ăn uống',
    isHaveDiscount: true
  }
}
