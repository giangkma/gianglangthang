import { APP_CONST, NameTour, TypeTour } from 'domain'

export const TaChiNhuNamNghiep = {
  name: NameTour.TA_CHI_NHU_NAM_NGHIEP,
  type: TypeTour.TREKKING,
  home: {
    title: 'Tà Chì Nhù - Nậm Nghiệp 2979m',
    description: 'Hành trình 16km / 2 chiều – săn mùa hoa Sơn Tra trắng rực rỡ',
    backgroundImage: '/assets/tours/ta-chi-nhu-nam-nghiep/1.png'
  },
  about: {
    title: 'Đôi chút về Tà Chì Nhù hướng Nậm Nghiệp',
    description: `Tà Chì Nhù, hay còn gọi là Phu Song Sung theo cách gọi của người dân tộc Thái hay Chung Chua Nhà theo cách gọi của người dân tộc Mông, là một đỉnh núi thuộc địa phận huyện Trạm Tấu, tỉnh Yên Bái, Việt Nam.
<br />
<br />
Để chinh phục Tà Chì Nhù hướng Nậm Nghiệp thì không quá khó vì đường đi dốc thoai thoải, đi qua bản làng dân tộc Mông, nhiều cây cối và rừng rêu … sau hành trình leo núi vất vả thì phần thưởng xứng đáng dành cho bạn là sự hùng vĩ, bao la của đất trời. Tổng cung leo là 16km nhưng nếu đi xe ôm thì chỉ còn 10km. Đặc biệt, vào tháng 3 hàng năm, hoa Sơn Tra nở trắng rừng, tạo nên khung cảnh tuyệt đẹp và thơ mộng.
<br />
<br />
Đắm chìm vào những bông hoa Sơn Tra nở trắng rừng đủ để bạn quên đi cái mệt. Sơn Tra còn có tên gọi quen thuộc là Táo Mèo, đây là một loài cây đặc trưng, mang lại giá trị kinh tế cho bà con ở các tỉnh Tây Bắc. Trước đây, cây thường mọc tự nhiên ở rừng, sau được người dân đưa về trồng khắp nơi trong bản.
`,
    notice:
      'Cung Tà Chì Nhù đi từ Nậm Nghệp là tuyến trekking mới, đi qua bản Nậm Nghiệp - bản làng người đồng bào Mông cao nhất Việt Nam, thời điểm thích hợp để đi cung này là tháng 3 - mùa hoa Sơn Tra trắng rực cả đồi. Cảnh quan đa dạng: rừng già, đồi cỏ, suối lớn, phù hợp với người mới leo.',
    image: '/assets/tours/ta-chi-nhu-nam-nghiep/2.png'
  },
  schedule: {
    title: 'Lịch trình 2 ngày 2 đêm – Chinh phục Tà Chì Nhù',
    description: 'Phương tiện: xe 16,29 chỗ',
    schedule: [
      {
        day: 'Ngày 0: Hà Nội – Sơn La (xe 16, 29 chỗ)',
        activities: [
          `🕖 19h: Tập trung tại ${APP_CONST.location}, khởi hành đi bản Ngọc Chiến – Sơn La.`,
          '🕑 2h sáng: Đoàn tới homestay tại bản, nghỉ ngơi lấy sức cho hành trình ngày mai.'
        ]
      },
      {
        day: 'Ngày 1: Hành trình bắt đầu',
        activities: [
          '🕢 7h30: Dậy vệ sinh cá nhân, ăn sáng và chuẩn bị hành trang.',
          '🕣 8h30: Xe ôm đón đoàn đến bản Nậm Nghiệp.',
          '🕘 9h: Check-in đồng hoa Sơn Tra siêu đẹp tại bản.',
          '🕥 10h30: Xe ôm tiếp tục đưa đoàn vào điểm trekking.',
          '🕛 12h: Nghỉ ăn trưa giữa thiên nhiên.',
          '🕟 16h30 - 17h: Đến lán nghỉ, ngắm hoàng hôn và check-in tại lán (vị trí ngắm hoàng hôn đỉnh cao).',
          '🕕 18h30: Ăn tối và giao lưu đoàn.',
          '🕘 21h: Nghỉ ngơi tại lán giữa rừng.'
        ]
      },
      {
        day: 'Ngày 2: Chinh phục đỉnh',
        activities: [
          '🕓 4h: Dậy sớm vệ sinh cá nhân và ăn sáng.',
          '🕔 5h: Bắt đầu leo lên đỉnh đón bình minh.',
          '🕕 6h - 7h: Check-in đỉnh Tà Chì Nhù – săn mây và bình minh cực phẩm.',
          '🕘 9h: Xuống núi.',
          '🕥 10h30: Nghỉ ăn trưa dọc đường.',
          '🕛 12h: Tới điểm xe ôm đón về lại bản Nậm Nghiệp.',
          '🕐 13h: Về tới homestay, nghỉ ngơi, tắm rửa.',
          '🕒 15h30: Bắt đầu hành trình trở về Hà Nội.',
          '🕠 17h30: Dừng chân tại thị xã Nghĩa Lộ – Yên Bái nghỉ ăn tối.',
          '🕤 23h - 0h: Về tới điểm đón ban đầu ở Hà Nội, kết thúc hành trình.'
        ]
      }
    ]
  },
  cost: {
    value: 2700000,
    description: '💰 Đặt cọc trước 50% bao gồm xe, lán nghỉ, porter, ăn uống',
    isHaveDiscount: true
  }
}
