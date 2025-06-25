import { APP_CONST, NameTour, TypeTour } from 'domain'

export const Samu = {
  name: NameTour.SAMU,
  type: TypeTour.TREKKING,
  home: {
    title: 'Samu - U Bò 2860m',
    description: 'Hành trình 23km hướng Xím Vàng - Làng Chếu',
    backgroundImage: '/assets/tours/samu/1.png'
  },
  about: {
    title: 'Đôi chút về Samu - U Bò',
    description: `Rừng Samu nằm trong rừng đặc dụng Tà Xùa cực kỳ nổi tiếng với các loài hoa và mang vẻ đẹp hoang sơ, đầy huyền bí. 
Nơi đây là điểm trekking mới mẻ, ít người biết đến nhưng lại mang vẻ đẹp hoang sơ, hùng vĩ và đầy bí ẩn.
<br />
<br />
Bước đến nơi đây, bạn sẽ ngỡ như lạc vào xứ sở thần tiên khi cỏ dại xanh mướt đệm dưới chân, những cây cổ thụ trăm năm tuổi ngả bóng xuống rừng rêu đẹp tuyệt diệu. 
<br />
<br />
Trekking Samu đặc biệt so với nhiều những cung đường trekking núi cao miền Bắc bởi bạn sẽ thực sự đến với rừng già tự nhiên, thảm thực vật cực kỳ phong phú chứ không phải lối mòn đất trống đồi trọc. 
<br />
Cũng chính vì điều đó, đỉnh núi cao 2.756m này thời gian gần đây đang trở nên nổi tiếng và được cực kỳ nhiều người yêu thích.`,
    notice:
      'Samu là cung trekking mới nổi, hướng leo Xím Vàng - Làng Chếu dài khoảng 23km. Cung đường không quá khó nhưng khá dài, chủ yếu đi xuyên rừng, băng qua rừng rêu, nếu có mưa thì rất lầy lội và ma mị. Phù hợp với người đã có thể lực cơ bản, có kinh nghiệm trekking và thích trải nghiệm thiên nhiên hoang sơ, ít dấu chân du lịch. Cần chuẩn bị kỹ về thể lực, giày chống trơn hoặc ủng.',
    image: '/assets/tours/samu/2.png'
  },
  schedule: {
    title: 'Lịch trình 2 ngày 2 đêm – Chinh phục Samu - U Bò',
    description: 'Phương tiện: xe 16,29 chỗ',
    schedule: [
      {
        day: 'Ngày 0: Hà Nội – Tà Xùa (Sơn La)',
        activities: [
          `🕗 20h: Tập trung tại ${APP_CONST.location} để bắt đầu hành trình tới thị trấn Tà Xùa – Sơn La.`,
          '🕑 2h sáng: Đoàn đến homestay, nghỉ ngơi lấy sức chuẩn bị cho hành trình.'
        ]
      },
      {
        day: 'Ngày 1: Hành trình bắt đầu',
        activities: [
          '🕕 6h: Dậy vệ sinh, ăn sáng và săn mây huyền thoại trên dãy Tà Xùa.',
          '🕢 7h30: Di chuyển bằng ô tô tới điểm đón xe ôm Xím Vàng.',
          '🕣 8h30: Sắp xếp hành lý, chuẩn bị và bắt đầu hành trình leo núi.',
          '🕛 12h: Nghỉ ăn trưa giữa thiên nhiên đại ngàn.',
          '🕟 16h30: Tới lán nghỉ, vệ sinh cá nhân và nghỉ ngơi.',
          '🕕 18h: Ăn tối, giao lưu cùng các thành viên trong đoàn.',
          '🕘 21h: Ngủ nghỉ để chuẩn bị cho ngày chinh phục đỉnh.'
        ]
      },
      {
        day: 'Ngày 2: Chinh phục đỉnh Samu',
        activities: [
          '🕓 4h: Dậy vệ sinh cá nhân và khởi động nhẹ, uống cafe + trà gừng làm nóng cơ thể.',
          '🕔 5h: Bắt đầu hành trình chinh phục đỉnh Samu – săn bình minh tuyệt đẹp.',
          '🕕 6h: Check-in săn mây huyền thoại trên đỉnh Samu.',
          '🕣 8h30: Bắt đầu hành trình xuống núi.',
          '🕛 12h: Nghỉ ăn trưa tại cây thần kỳ bên đường.',
          '🕒 15h: Về lại điểm xe ôm đón.',
          '🕕 16h30: Lên xe ôm về Bắc Yên nghỉ ngơi.',
          '🕢 17h30: Về homestay tắm rửa, thu dọn đồ cá nhân.',
          '🕖 19h: Ăn tối và lên xe khách về lại thị trấn Bắc Yên.',
          '🕚 23h - 0h: Về tới Hà Nội, kết thúc hành trình chinh phục Tà Xùa đáng nhớ.'
        ]
      }
    ]
  },
  cost: {
    value: 2800000,
    description: '💰 Đặt cọc trước 50% bao gồm xe, lán nghỉ, porter, ăn uống',
    isHaveDiscount: true
  }
}
