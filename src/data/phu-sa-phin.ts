import { APP_CONST, NameTour, TypeTour } from 'domain'

export const PhuSaPhin = {
  name: NameTour.PHU_SA_PHIN,
  type: TypeTour.TREKKING,
  home: {
    title: 'Phu Sa Phìn 2868m',
    description: 'Hành trình 16km / 2 chiều – chinh phục sống lưng khủng long',
    backgroundImage: '/assets/tours/phu-sa-phin/1.png'
  },
  about: {
    title: 'Đôi chút về Phu Sa Phìn',
    description: `Phu Sa Phìn được biết đến với tên gọi cũ là Tà Xùa (2.868m) là ngọn núi gồm 3 đỉnh ở xã Bản Công, Trạm Tấu, Yên Bái. 
    <br />
    <br />
Đường leo PSP theo hướng Hang Chú không quá khó, không nhiều dốc, từ chân núi hướng Hang Chú lên đỉnh chỉ vào khoảng 4km
<br />
Ngọn núi này được dân mê xê dịch ví như một huyền thoại, bởi khung cảnh hùng vĩ với những đỉnh núi nhô lên giữa biển mây, tảng đá đầu rùa khổng lồ vươn ra mép vực và dãy núi trập trùng tựa sống lưng khủng long. Dù không thuộc top 10 đỉnh núi cao nhất Việt Nam, Tà Xùa vẫn là một thử thách không hề dễ dàng. Địa hình nơi đây đa dạng với những con dốc dài, rừng già rêu phong bao phủ, đòi hỏi sức bền và ý chí chinh phục. Nhưng đổi lại, khung cảnh ngoạn mục từ độ cao này chắc chắn sẽ khiến mọi công sức bỏ ra trở nên xứng đáng.
<br />
<br />
Đặc biệt là đoạn đường lên lán nghỉ đêm với “sống lưng khủng long” chênh vênh giữa bốn bề núi rừng mang thương hiệu của ngọn núi này.
`,
    notice:
      'Phu Sa Phìn - Hang Chú là cung trekking có độ khó vừa phải, ngày đầu leo 4km là tới đỉnh, ngày 2 sẽ đi về để chinh phục Sống Lưng Khủng Long kì vĩ. Cung đường không quá dài nhưng có nhiều đoạn dốc liên tục, phù hợp với người đã có sức bền hoặc từng trekking. Phu Sa Phìn đẹp quanh năm, đặc biệt vào mùa săn mây. Cần chuẩn bị thể lực cơ bản, giày tốt và tinh thần thoải mái. Đây là lựa chọn lý tưởng nếu bạn muốn một cung vừa phải nhưng cảnh đẹp đặc sắc.',
    image: '/assets/tours/phu-sa-phin/2.png'
  },
  schedule: {
    title: 'Lịch trình 2 ngày 2 đêm – Chinh phục Phu Sa Phìn',
    description: 'Phương tiện: xe 16,29 chỗ',
    schedule: [
      {
        day: 'Ngày 0: Hà Nội – Yên Bái',
        activities: [
          `🕗 20h: Tập trung tại ${APP_CONST.location}, khởi hành tới Homestay Trạm Tấu – bắt đầu hành trình khám phá núi rừng.`,
          '🕑 2h sáng: Đoàn đến homestay, nghỉ ngơi dưỡng sức chuẩn bị cho hành trình trekking ngày mai.'
        ]
      },
      {
        day: 'Ngày 1: Hành trình bắt đầu',
        activities: [
          '🕕 6h: Thức dậy, vệ sinh cá nhân, dùng bữa sáng và kiểm tra lại đồ trekking.',
          '🕖 7h: Xe đưa đoàn đến điểm leo Hang Chú.',
          '🕤 9h30: Lên xe ôm vào sâu điểm leo.',
          '🕙 10h: Sắp xếp đồ đạc, khởi động và bắt đầu leo.',
          '🕛 12h: Nghỉ ăn trưa giữa thiên nhiên rừng núi.',
          '🕒 15h: Check-in chóp đỉnh, sau đó quay lại lán nghỉ.',
          '🕔 17h: Về đến lán nghỉ, vệ sinh cá nhân, ngắm hoàng hôn tuyệt đẹp.',
          '🕕 18h: Dùng bữa tối và giao lưu cùng đoàn.',
          '🕘 21h: Nghỉ ngơi, lấy lại năng lượng cho ngày chinh phục tiếp theo.'
        ]
      },
      {
        day: 'Ngày 2: Chinh phục đỉnh & trở về',
        activities: [
          '🕕 6h: Đón bình minh tuyệt đẹp tại lán.',
          '🕖 7h: Ăn sáng nhẹ và chuẩn bị hành trang.',
          '🕗 8h: Bắt đầu hành trình xuống núi, check-in sống lưng khủng long hùng vĩ.',
          '🕛 12h: Nghỉ ăn trưa dọc đường, thư giãn giữa thiên nhiên.',
          '🕒 15h: Về đến chân núi, xe đón về lại homestay nghỉ ngơi.',
          '🕠 15h30: Xe đưa đoàn quay về homestay tắm rửa, thư giãn.',
          '🕢 17h30: Lên xe rời Trạm Tấu, bắt đầu hành trình trở về Hà Nội.',
          '🕗 18h30: Dừng chân ăn tối tại thị xã Nghĩa Lộ.',
          '🕙 22h30: Về tới Hà Nội, kết thúc hành trình nhiều trải nghiệm đáng nhớ.'
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
