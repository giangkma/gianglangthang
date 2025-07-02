import { APP_CONST, NameTour, TypeTour } from 'domain/index'

export const TaChiNhu = {
  name: NameTour.TA_CHI_NHU,
  type: TypeTour.TREKKING,
  home: {
    title: 'Tà Chì Nhù 2979m',
    description: 'Hành trình 20km / 2 chiều – săn mây 360 độ cực đỉnh',
    backgroundImage: '/assets/tours/ta-chi-nhu/1.png'
  },
  about: {
    title: 'Đôi chút về Tà Chì Nhù',
    description: `Đường lên đỉnh Tà Chì Nhù, nóc nhà của Yên Bái thuộc địa bàn khu vực bản Xà Hồ, huyện Trạm Tấu. Với độ cao 2979m, Tà Chì Nhù xếp thứ 7 trong top 10 ngọn núi cao nhất Việt Nam – một trong những địa điểm săn mây lý tưởng hay còn được gọi với cái tên “ Thiên đường mây nơi hạ giới “. 
    <br />
    <br />
    Đứng trên đỉnh Tà Chì Nhù, chỉ cần với tay bạn có thể chạm được tới mây, đắm chìm trong không gian như chốn bồng lai. Nhiều người cho rằng, những áng mây không chỉ xuất hiện ở trên đầu mà nằm ngang tầm mắt, mềm mại như dải lụa bao phủ khắp mọi nơi.
    <br />
    <br />

Điểm nhấn đặc biệt nhất tại đây có lẽ là cánh đồng hoa tím rạng rỡ dưới màn mây vào cuối thu. Không khó để thấy những dãy núi hùng vĩ được phủ một sắc tím tinh tú, mang hương hoa thơm dịu, xung quanh là đàn dê, đàn ngựa của các hộ dân bản địa người Mông chăn thả. Tất cả đều khiến bạn ngỡ ngàng như bước ra từ một bức tranh thiên nhiên thơ mộng đầy tính cổ tích.
`,
    notice:
      'Tà Chì Nhù được mệnh danh là “thiên đường săn mây” với biển mây dày đặc bao quanh đỉnh 360 độ và ánh hoàng hôn đẹp mê hồn. Dù là núi cao gần 3.000m, cung đường trekking lại không quá khó (chủ yếu là dốc thoai thoải liên tục nên leo khá mệt) phù hợp với người có sức khỏe tốt và đam mê chụp ảnh thiên nhiên. Địa hình chủ yếu là đồi trọc, đường đất và dốc dài, ít rừng rậm nên dễ đi hơn các cung khác. Thời gian trekking thường là 2 ngày 1 đêm. Cực kỳ lý tưởng cho người mới muốn thử sức ở độ cao lớn.',
    image: '/assets/tours/ta-chi-nhu/2.png'
  },
  schedule: {
    title: 'Lịch trình 2 ngày 2 đêm – Chinh phục Tà Chì Nhù',
    description: 'Phương tiện di chuyển: xe 16,29 chỗ',
    schedule: [
      {
        day: 'Ngày 0: Hà Nội – Yên Bái',
        activities: [
          `🕗 20h: Tập trung tại ${APP_CONST.location} để khởi hành tới Homestay Trạm Tấu.`,
          '🕐 1h30 sáng: Đoàn đến nơi, nhận phòng và nghỉ ngơi dưỡng sức.'
        ]
      },
      {
        day: 'Ngày 1: Hành trình bắt đầu',
        activities: [
          '🕕 6h: Dậy vệ sinh cá nhân, ăn sáng và chuẩn bị hành lý leo núi.',
          '🕖 7h: Di chuyển bằng ô tô tới điểm leo Mồ Chi.',
          '🕗 8h: Bắt đầu hành trình trekking.',
          '🕛 12h: Nghỉ ăn trưa giữa thiên nhiên núi rừng.',
          '🕟 16h30: Đến lán nghỉ, ngắm hoàng hôn giữa biển mây Tà Chì Nhù.',
          '🕕 18h: Dùng bữa tối, giao lưu đoàn, nghỉ đêm giữa núi rừng.',
          '🕘 21h: Nghỉ ngơi sớm để chuẩn bị chinh phục đỉnh sáng hôm sau.'
        ]
      },
      {
        day: 'Ngày 2: Chinh phục đỉnh & trở về',
        activities: [
          '🕓 4h: Dậy vệ sinh cá nhân và ăn sáng nhẹ.',
          '🕔 5h: Bắt đầu leo lên đỉnh Tà Chì Nhù đón bình minh rực rỡ.',
          '🕡 6h30 - 7h: Check-in trên đỉnh, săn mây và ghi lại khoảnh khắc tuyệt vời.',
          '🕗 8h30: Bắt đầu hành trình xuống núi.',
          '🕛 12h: Nghỉ trưa tại điểm dừng giữa đường.',
          '🕒 15h: Về đến chân núi, xe đón về homestay tắm rửa, nghỉ ngơi.',
          '🕠 17h30: Bắt đầu lên xe quay về Hà Nội.',
          '🕡 18h30: Cả đoàn dừng nghỉ ăn tối trước khi về tại Nghĩa Lộ',
          '🕘 23h: Về tới Hà Nội, kết thúc hành trình đáng nhớ.'
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
