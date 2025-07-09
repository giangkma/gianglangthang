import { APP_CONST, NameTour, TypeTour } from 'domain/index'

export const NhiuCoSan = {
  name: NameTour.NHIU_CO_SAN,
  type: TypeTour.TREKKING,
  home: {
    title: 'Nhìu Cồ San 2965m',
    description: 'Hành trình 20km / 2 chiều – chinh phục đỉnh',
    backgroundImage: '/assets/tours/nhiu-co-san/1.png'
  },
  about: {
    title: 'Đôi chút về Nhìu Cồ San',
    description: `Nằm ở huyện Bát Xát, tỉnh Lào Cai, đỉnh núi Nhìu Cồ San còn có tên gọi khác là Sừng Trâu. 
    <br />
    <br />
    Địa hình ở Nhìu Cồ San rất đa dạng và thú vị. Đường tới chân núi để bắt đầu trek khá khó đi, đặc biệt vào mùa mưa đường trơn trượt. Ban đầu là những đồi thấp với cây bụi, đồng cỏ và vách đá. Leo cao hơn, bạn sẽ bước vào khu rừng nguyên sinh với những thân cây gỗ cao và to ụ, những tán lá phong đổ màu ngỡ như khung cảnh ở trời Âu đầy thơ mộng.
    <br />
    <br />
Đặc biệt, có thể coi Thác Ong Chúa là biểu tượng của Nhìu Cồ San. Từ trên vách núi cao hàng trăm mét, dòng nước trắng xóa đổ xuống giống như dải lụa khổng lồ. Vào những đợt gió mùa lạnh giá, Nhìu Cồ San thường chìm trong băng giá. Bạn có thể bắt gặp hình ảnh cây lá “hóa thủy tinh” trong khu rừng đầy mê hoặc.
`,
    notice:
      '⚠️ Lưu ý: Để đảm bảo an toàn, bạn nên có sức khỏe tốt, không mắc các bệnh về tim mạch, huyết áp. Nếu có vấn đề về sức khỏe, hãy tham khảo ý kiến bác sĩ trước khi tham gia.',
    image: '/assets/tours/nhiu-co-san/2.png'
  },
  schedule: {
    title: 'Lịch trình 2 ngày 2 đêm – Chinh phục Nhìu Cồ San',
    description: 'Phương tiện di chuyển: xe 16,29 chỗ',
    schedule: [
      {
        day: 'Ngày 0: Hà Nội - Lào Cai (xe 16,29 chỗ)',
        activities: [
          `20h: Tập trung tại ${APP_CONST.location} để xuất phát tới homestay Mường Hum nghỉ ngơi`,
          '2h sáng: Tới homestay nhận phòng, nghỉ ngơi'
        ]
      },
      {
        day: 'Ngày 1: Hành trình bắt đầu',
        activities: [
          '6h: Dậy vệ sinh, ăn sáng và chuẩn bị đồ leo',
          '7h: Ô tô chở đến ngã 3 xã Dền Sáng',
          '8h: Xe ôm đón và đưa vào điểm leo',
          '9h15: Sắp xếp đồ và bắt đầu leo',
          '11h15: Đoàn tới Thác Ong Chúa – điểm check-in mang thương hiệu của Nhìu Cồ San',
          '12h: Dừng nghỉ ăn trưa',
          '16h30: Tới lán nghỉ ngơi đón hoàng hôn',
          '18h: Ăn tối, và giao lưu đoàn',
          '21h: Nghỉ ngơi'
        ]
      },
      {
        day: 'Ngày 2: Chinh phục đỉnh',
        activities: [
          '4h: Dậy vệ sinh cá nhân và ăn sáng với cafe + trà gừng',
          '5h: Bắt đầu leo lên đỉnh đón bình minh',
          '7h30: Checkin đỉnh Nhìu Cồ San',
          '8h30: Xuống núi (xuống theo hướng cây cô đơn, không quay lại đường cũ)',
          '12h: Dừng nghỉ ăn trưa',
          '13h30: Về điểm xe ôm đón',
          '14h30: Lên xe ôm về homestay',
          '15h30: Về homestay tắm và vệ sinh cá nhân trước khi lên xe về Hà Nội',
          '17h: Ăn tối tại tp Lào Cai tổng kết',
          '23h00: Về tới điểm đón Hà Nội, chia tay nhau'
        ]
      }
    ]
  },
  isHaveCharity: true,

  cost: {
    value: 2600000,
    description: '💰 Đặt cọc trước 50% bao gồm xe, lán nghỉ, porter, ăn uống',
    isHaveDiscount: true
  }
}
