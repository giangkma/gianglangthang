import { APP_CONST, NameTour, TypeTour } from 'domain/index'

export const HamLon = {
  name: NameTour.HAM_LON,
  type: TypeTour.SUMMER,
  home: {
    title: 'Hàm Lợn 462m',
    description:
      'Hành trình 8km dễ dàng, khám phá đỉnh Hàm Lợn - nóc nhà Thủ đô.',
    backgroundImage: '/assets/tours/ham-lon/1.png'
  },
  about: {
    title: 'Đôi chút về Hàm Lợn',
    description: `Núi Hàm Lợn là một trong những đường trekking và cắm trại hot nhất hiện nay nằm tọa lạc tại huyện Sóc Sơn, cách trung tâm Hà Nội khoảng 40km theo hướng cao tốc Bắc Thăng Long – Nội Bài. Nơi đây sở hữu độ cao 462 mét giúp cho Hàm Lợn trở thành ngọn núi cao nhất thuộc dãy núi Độc Tôn. Tuy rằng địa hình khá phức tạp và hiểm trở nhưng đường đi lại không quá khó để di chuyển lên đây luôn là điểm đến cho những buổi cắm trại thư giãn cuối tuần của mọi người.
<br />
<br />
Vẻ đẹp của núi Hàm Lợn càng được thêm tô điểm khi ngay bên cạnh là hồ Núi Bàu trong veo và rộng lớn. Sự đối lập của núi rừng thông bạt ngàn, kỳ bí và hồ nước yên ả, mênh mông tạo nên một bầu không khí trong lành, nguyên sơ và mát mẻ`,
    image: '/assets/tours/ham-lon/2.png',
    notice:
      'Cung đường trekking Hàm Lợn có độ dài khoảng 8km, thời gian trekking mất khoảng 5 tiếng cả đi lẫn về. Đường đi không quá khó phù hợp với người mới bắt đầu làm quen với trekking, đặc biệt là các bạn trẻ. Tuy nhiên, do địa hình có nhiều dốc đoạn đầu nên các bạn cần chuẩn bị sức khỏe tốt để có thể chinh phục đỉnh núi.'
  },
  schedule: {
    title: 'Lịch trình tour Hàm Lợn trong ngày',
    description: 'Di chuyển tự túc hoặc ghép xe thuê oto nếu đủ từ 10 người',
    schedule: [
      {
        day: 'Ngày 1: Khám phá Hàm Lợn',
        activities: [
          '🕓 7h: Tập trung tại Trang Thiều Camping - Hàm Lợn (hoặc đi cùng leader từ HN địa điểm Leader sẽ nhắn mn trong nhóm nha)',
          '🕔 7h30: Tới điểm trek quý khách ăn sáng và chuẩn bị trek. HDV hướng dẫn quý khách chuẩn bị đồ đạc, hướng dẫn kỹ nẵng trek cho chuyến đi. Sau khi khởi động đoàn xuất phát chinh phục nóc nhà Thủ Đô.',
          '🕡 9h: Quý khách đến đồi sim, tai đây quý khách có thể nhìn được toàn cảnh thị trấn Sóc Sơn.',
          '🕣 10h: Sau khi xuyên qua rừng thông, đồi hoa sim và những vạt cỏ xanh mướt thì chúng ta chạm đỉnh Cột Cờ – Nóc nhà của Thủ Đô, cả đoàn ăn mừng và chụp với nhau những bức ảnh kỉ niệm',
          '🕛 10h30: Quý khách bắt đầu xuống núi quay về điểm ăn trưa ',
          '🕐 12h30: Về tới điểm ăn trưa, quý khách dùng bữa trưa tự túc theo gợi ý của leader (ăn uống sẽ là chi phí tự túc mà mn đóng góp cùng nhau)',
          '🕡 14h: Đoàn nghỉ ngơi, tắm tráng bằng nước sạch và di chuyển về Hà Nội kết thúc hành trình'
        ]
      }
    ]
  },
  cost: {
    value: 100000,
    description: '💰 Đặt cọc trước 100% chi phí tour',
    isHaveDiscount: true
  }
}
