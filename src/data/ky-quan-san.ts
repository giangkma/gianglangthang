import { APP_CONST, NameTour, TypeTour } from 'domain/index'

export const KyQuanSan = {
  name: NameTour.KY_QUAN_SAN,
  type: TypeTour.TREKKING,
  home: {
    title: 'Ky Quan San 3046M',
    description: 'Hành trình 35km / 2 chiều – đỉnh núi đẹp nhất Tây Bắc',
    backgroundImage: '/assets/tours/ky-quan-san/1.png'
  },
  about: {
    title: 'Đôi chút về Ky Quan San (Bạch Mộc Lương Tử)',
    description: `Ky Quan San được biết đến với tên gọi cũ là Bạch Mộc Lương Tử, là đỉnh núi được đánh giá cao về trải nghiệm, độ đẹp và độ khó vừa phải để bất cứ ai cũng có thể chinh phục một lần trong đời.
    <br />
    <br />
Ky Quan San có địa hình đa dạng từ đồi trọc, rừng tre nứa, rừng đỗ quyên, rừng lá phong, rừng cây cổ thụ, rừng trúc lùn tới những dòng suối và vách đá cheo leo rêu phủ kín. Ban đầu, ở độ cao thấp là những đường mòn xuyên qua làng bản, nương ruộng bậc thang và rừng thảo quả. Lên cao hơn, đường đi nằm trên những sườn núi có tầm nhìn thoáng đãng và thảm thực vật phong phú. Tại đỉnh Ky Quan San đem đến góc nhìn toàn vẹn, các dãy núi bao quanh trùng điệp hiện lên một khung cảnh rất hùng vĩ.
<br />
    <br />
Nổi bật nhất, và tạo nên thương hiệu cho Ky Quan San chính là bình minh trên biển mây siêu đẹp tại Đồi Muối, ở độ cao 2100m, cũng chính là điểm hạ trại của hành trình. Cảm giác đứng trên đỉnh Núi Muối, bất ngờ và mãn nhãn thực sự khi trọn vẹn ánh mắt là một thiên đường mây dưới nền trời xanh biếc. 
`,
    notice:
      '3 ngày với 35km tổng cung, thảm thực vật cực kì đẹp và đa dạng nhất Tây Bắc, nếu chia ra thì mỗi ngày trekk khoảng 10km, độ khó tương đối, nếu bạn nào chưa leo bao giờ mà có sức khỏe tốt thì vẫn có thể tham gia được. Nhưng mình khuyên là nên bắt đầu với cung leo 2 ngày trước để làm quen đã nha!',
    image: '/assets/tours/ky-quan-san/2.png'
  },
  schedule: {
    title: 'Lịch trình 3 ngày 3 đêm – Chinh phục Ky Quan San',
    description: 'Phương tiện di chuyển: xe 16,29 chỗ',
    schedule: [
      {
        day: 'Ngày 0 & 1: Hà Nội - Lào Cai - Núi Muối',
        activities: [
          `🕗 20h: Tập trung tại ${APP_CONST.location}, khởi hành đi homestay Mường Hum - Lào Cai.`,
          '🕑 2h sáng: Tới homestay nghỉ ngơi, sạc năng lượng cho hành trình phía trước.',
          '🕕 6h: Thức dậy, vệ sinh cá nhân, dùng bữa sáng và chuẩn bị hành trang leo núi.',
          '🕖 7h: Di chuyển bằng ô tô đến điểm dừng chân gần chân núi.',
          '🕣 8h30: Lên xe ôm đi tiếp vào điểm leo chính (20 phút).',
          '🕘 9h15: Sắp xếp đồ đạc, khởi động và bắt đầu hành trình trekking.',
          '🕛 12h: Dừng chân nghỉ ngơi và dùng bữa trưa giữa núi rừng.',
          '🕟 16h30: Đến lán nghỉ tại Núi Muối, cùng nhau đón hoàng hôn tuyệt đẹp.',
          '🕡 18h30: Dùng bữa tối, giao lưu đoàn. Tối muộn cùng nhau ngắm sao trời ở Núi Muối.',
          '🕤 21h30: Nghỉ ngơi, sẵn sàng cho ngày chinh phục đỉnh.'
        ]
      },
      {
        day: 'Ngày 2: Chinh phục Ky Quan San',
        activities: [
          '🕔 5h: Thức dậy sớm, di chuyển ra mỏm đá săn bình minh tại Núi Muối. Sau đó quay về uống cafe/trà gừng và ăn sáng nhẹ.',
          '🕖 7h: Khởi động và bắt đầu hành trình chinh phục Ky Quan San.',
          '🕛 12h: Chạm đỉnh Ky Quan San - một trong "tứ đại đỉnh đèo" Tây Bắc. Check-in và nghỉ trưa bên dưới đỉnh.',
          '🕑 14h: Quay trở về lại lán Núi Muối.',
          '🕕 18h: Vệ sinh cá nhân, nghỉ ngơi và đón hoàng hôn lần thứ 2 trên Núi Muối.',
          '🕖 19h: Giao lưu, dùng bữa tối và ngắm sao lần nữa giữa thiên nhiên hùng vĩ.',
          '🕤 21h30: Nghỉ đêm tại lán, khép lại ngày trekking đầy cảm xúc.'
        ]
      },
      {
        day: 'Ngày 3: Trở về',
        activities: [
          '🕠 5h30: Ai còn sức có thể dậy sớm đón bình minh lần 2. Nếu mệt, có thể nghỉ ngơi thêm tại lán.',
          '🕢 7h30: Thu dọn đồ đạc và bắt đầu hành trình trở xuống chân núi.',
          '🕛 12h: Về tới chân núi, dùng bữa trưa và nghỉ ngơi trên xe.',
          '🕜 13h30: Xe trung chuyển đón đoàn về điểm tập kết ô tô lớn.',
          '🕑 14h: Di chuyển về nhà nghỉ để vệ sinh cá nhân.',
          '🕓 16h: Lên xe khách về TP. Lào Cai, nghỉ ngơi',
          '🕡 17h30: Cả đoàn dừng nghỉ ăn tối trước khi về',
          '🕡 18h30: Xe khách khởi hành về lại Hà Nội.',
          '🕚 23h: Về đến Hà Nội, kết thúc hành trình - chia tay trong lưu luyến.'
        ]
      }
    ]
  },
  isHaveCharity: true,

  cost: {
    value: 3500000,
    description:
      '💰 Đặt trước 500k/khách bao gồm xe, lán nghỉ, porter, ăn uống',
    isHaveDiscount: true
  }
}
