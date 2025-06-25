import { APP_CONST, NameTour, TypeTour } from 'domain'

export const LungCung = {
  name: NameTour.LUNG_CUNG,
  type: TypeTour.TREKKING,
  home: {
    title: 'Lùng Cúng 2913m',
    description: 'Hành trình 16km / 2 chiều – săn hoàng hôn đẹp nhất Tây Bắc',
    backgroundImage: '/assets/tours/lung-cung/1.png'
  },
  about: {
    title: 'Đôi chút về Lùng Cúng',
    description: `Nằm ở độ cao 2913m, đỉnh Lùng Cúng được đặt theo tên một bản làng nằm sâu trong vùng núi hiểm trở bậc nhất tại xã Tú Lệ, huyện Văn Chấn, Yên Bái. 
     <br /> <br />
     Khi đã bắt đầu tuyến trekking Lùng Cúng, bạn sẽ được trải nghiệm đủ mọi địa hình của rừng núi với khung cảnh tuyệt đẹp. Là rừng nguyên sinh rậm rạp với những tảng đá to phủ rêu êm mướt. Là thung lũng đầy cỏ lau bát ngát gió với bốn bề là núi và xa xa là làng bản, ruộng bậc thang. 
      <br />
       <br />
     Là rừng trúc non tơ đan nhau chằng chịt chẳng thấy bầu trời. Cả những cây táo mèo to và già gốc dường như chỉ đợi đến mùa để bung nụ nở hoa.
      <br />
Còn đỉnh Lùng Cúng gây choáng ngợp với góc nhìn tứ phương, thoáng đãng và rất dễ gặp được biển mây. Trên đỉnh núi có những triền đồi rộng to như cả một sân bóng lớn với cỏ lúc nào cũng bạt ngàn trong gió lớn. Tất cả hứa hẹn sẽ mang đến cho bạn một trải nghiệm độc đáo, thú vị không thể nào quên!
`,
    notice:
      'Lùng Cúng đã quá nổi tiếng với mùa lá phong t11,12, nhưng thứ mà kiến mình ấn tượng nhất đó lại là Hoàng Hôn Lùng Cúng, nó đẹp một cách mà không thể tưởng tượng được, nếu có biển mây nữa thì hoàn hảo, tổng cung 15km có những đoạn khá dốc nhưng nhìn chung thì vẫn phù hợp để các bạn mới nhập môn có thể chinh phục được.',
    image: '/assets/tours/lung-cung/2.png'
  },
  schedule: {
    title: 'Lịch trình 2 ngày 2 đêm – Chinh phục Lùng Cúng',
    description: 'Phương tiện: xe 16,29 chỗ',
    schedule: [
      {
        day: 'Ngày 0: Hà Nội – Yên Bái',
        activities: [
          `🕗 20h: Tập trung tại ${APP_CONST.location} để khởi hành đi Homestay Tú Lệ.`,
          '🕐 1h30 sáng: Đoàn đến Homestay nghỉ ngơi, chuẩn bị cho hành trình hôm sau.'
        ]
      },
      {
        day: 'Ngày 1: Hành trình bắt đầu',
        activities: [
          '🕕 6h: Thức dậy, vệ sinh cá nhân và ăn sáng nhẹ.',
          '🕖 7h: Di chuyển bằng xe ôm tới điểm xuất phát.',
          '🕣 8h30: Bắt đầu hành trình trekking Lùng Cúng.',
          '🕛 12h: Dừng nghỉ ăn trưa giữa rừng.',
          '🕟 16h30: Đến lán nghỉ ngắm hoàng hôn tuyệt đẹp.',
          '🕕 18h: Ăn tối, giao lưu cùng đoàn trong không khí ấm cúng.',
          '🕘 21h: Nghỉ ngơi lấy sức cho ngày chinh phục đỉnh.'
        ]
      },
      {
        day: 'Ngày 2: Chinh phục đỉnh',
        activities: [
          '🕓 4h: Dậy sớm vệ sinh cá nhân, ăn sáng.',
          '🕔 5h: Bắt đầu leo lên đỉnh Lùng Cúng đón bình minh.',
          '🕡 6h30 – 7h: Check-in tại đỉnh Lùng Cúng cao 2913m.',
          '🕣 8h30: Bắt đầu hành trình xuống núi.',
          '🕛 12h: Dừng nghỉ ăn trưa giữa đường.',
          '🕑 14h: Về đến chân núi, kết thúc hành trình.',
          '🕒 15h: Tắm rửa và nghỉ ngơi tại homestay.',
          '🕟 16h30: Lên xe khởi hành về Hà Nội.',
          '🕢 17h30: Dừng ăn tối tại Nghĩa Lộ.',
          '🕚 23h: Về tới Hà Nội, kết thúc hành trình đầy kỷ niệm.'
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
