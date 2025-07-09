import { APP_CONST, NameTour, TypeTour } from 'domain/index'

export const TamDao = {
  name: NameTour.TAM_DAO,
  type: TypeTour.TAMDAO,
  home: {
    title: 'Hiking Tam Đảo',
    description: 'Hành trình 5km vượt suối, tắm thác',
    backgroundImage: '/assets/tours/tam-dao/1.png'
  },
  about: {
    title: 'Đôi chút về Tour Tam Đảo',
    description: `Nếu bạn nghĩ rằng Tam Đảo chỉ có thị trấn Tam Đảo...thì thật ra còn VQG Tam Đảo cũng nhiều điều thú vị lắm, Tam Đảo có nhiều rừng, nhiều suối, nhiều thác, và đây là 1 cung hiking trong số đó. 
<br/>
<br/>
Tổng cung chỉ 5km, rất phù hợp với đi về trong ngày, đường hiking chủ yếu là đi ở suối => mát mẻ và thoáng, phù hợp với đi mùa hè, cứ nóng là nhảy xuống bơi...quãng đường đi không dốc nhưng dễ trơn do đá suối, nên khuyên mọi người là nên đi tổ ong nha, tiện lội suối và độ bám cũng rất tốt
<br/>
<br/>
Cách HN 70km, chúng ta sẽ cùng nhau đi oto tới điểm trekk, ăn trưa trong thác và đi về, dự kiến là 16h là chúng ta về tới HN rồi
<br/>
<br/>
Tour này sẽ yêu cầu có thể lực và đã từng đi trekk trước đây nha, vì cung leo cũng khá khó`,
    image: '/assets/tours/tam-dao/2.png',
    notice:
      'Quãng đường ngắn thôi nhưng khá thử thách, vì đi trong suối nên sẽ có những đoạn trơn trượt, cần có sức khỏe tốt và có kinh nghiệm đi trekk trước đây rồi, nên tour này sẽ không phù hợp với người mới bắt đầu trekking nha. Nếu bạn chưa từng đi trekk thì hãy tham khảo các tour khác của Giang Lang Thang nhé.'
  },
  schedule: {
    title: 'Lịch trình tour Tam Đảo trong ngày',
    description: 'Phương tiện di chuyển: xe 16,29 chỗ',
    schedule: [
      {
        day: 'Ngày 1: Khám phá Tam Đảo',
        activities: [
          `🕔 5h30: Tập trung tại ${APP_CONST.location} để điểm danh và lên xe`,
          '🕗 8h: Tới điểm trekk, HDV hướng dẫn quý khách chuẩn bị đồ đạc, hướng dẫn kỹ năng trek cho chuyến đi. Sau khi khởi động, đoàn xuất phát chinh phục thác',
          '🕥 10h30: HDV chuẩn bị đồ ăn trưa xong bao gồm: gà luộc, xôi, thịt lợn quay, xúc xích, hoa quả... (ăn trưa trước xong mới vào thác)',
          '🕛 12h: Sau khi xuyên qua suối, băng qua những vùng nước trong vắt thì cũng ta tới điểm cuối của hành trình và chiếc thác Ba Khe xinh đẹp. Quý khách bắt đầu nhảy xuống làn nước xanh trong vắt để bơi, chèo lên tảng đá thử thách bản thân (nếu chưa biết bơi, bên G sẽ chuẩn bị áo phao cho các bạn nhé, kèm 1 khoá học bơi cấp tốc ^^)',
          '🕓 14h: Đoàn nghỉ ngơi xong, dọn dẹp và xuất phát ra về, lúc về men bơi thoải mái nhé (vì những đoạn vào đẹp là nhảy xuống vùng nước đó =)))',
          '🕔 17h: Về tới ô tô, quý khách lấy đồ sạch thay và trở về HN',
          '🕖 19h: Đoàn trở về tới điểm đón Tòa Án, kết thúc hành trình'
        ]
      }
    ]
  },
  isHaveCharity: false,

  cost: {
    value: 750000,
    description: '💰 Đặt cọc trước 50% chi phí tour',
    isHaveDiscount: false
  }
}
