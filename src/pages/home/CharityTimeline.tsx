import { Image } from 'antd'
import { APP_CONST, formatCurrency } from 'domain'
import { useCountUp } from 'hooks/useCountUp'
import React, { useEffect, useRef, useState } from 'react'

interface EventItem {
  date: string
  title: string
  description: string
  image: string[]
  result: string
}

const events: EventItem[] = [
  {
    date: '09/2024 - 04/2025',
    title:
      '🎉 Khởi nguồn hành trình -&nbsp;Sức&nbsp;mạnh&nbsp;của&nbsp;sự&nbsp;Lan&nbsp;Toả',
    description: `Quỹ được thành lập với mong muốn lan tỏa yêu thương tới cộng đồng khó khăn, và đã nhanh chóng nhận được rất nhiều những sự ủng hộ của các khách tham gia tour, của các nhà hảo tâm biết tới quỹ. Chúng tớ đã sử dụng quỹ công khai, minh bạch, mua sữa, quần áo ấm để cùng các bạn thực hiện các chuyến thiện nguyện. 
       <br />
      Đã có trên 100 tour kết hợp thiện nguyện được tổ chức, với sự tham gia của hàng nghìn bạn trẻ yêu thiên nhiên và muốn đóng góp cho cộng đồng.`,
    image: [
      '/assets/tu-thien/1.png',
      '/assets/tu-thien/5.png',
      '/assets/tu-thien/3.png',
      '/assets/tu-thien/4.png'
    ],
    result: 'Gây quỹ được gần 320 triệu VNĐ từ cộng đồng.'
  },
  {
    date: '12/2024',
    title: '🎁 Hành Trình Yêu Thương 01 -&nbsp;Lùng&nbsp;Cúng',
    description:
      'Ấp ủ từ lâu, chuyến thiện nguyện đầu tiên đã diễn ra thành công. Tớ không chỉ muốn dừng lại ở phát sữa, quần áo, mà còn muốn mang đến những món quà ý nghĩa, thiết thực cho bà con vùng cao. Đem tới điểm trưởng những cơ sở vật chất mới, giúp điểm trường khang trang hơn, giúp các em nhỏ có điều kiện học tập tốt hơn. Và Tớ đã tổ chức chuyến HTYT đầu tiên tại Lùng Cúng, Yên Bái này, với sự tham gia của 17 anh/chị/em',
    image: [
      '/assets/htyt/1/1.png',
      '/assets/htyt/1/2.png',
      '/assets/htyt/1/3.png',
      '/assets/htyt/1/4.png'
    ],
    result:
      'Trao tặng 105 áo khoác, 320 đôi tất, 25 chiếc chăn phao, 100 tượng tô màu...và nhiều phần quà ý nghĩa khác, tổng giá trị 14 triệu VNĐ.'
  },
  {
    date: '01/2025',
    title: '📚 Hành Trình Yêu Thương 02 -&nbsp;Lảo&nbsp;Thẩn',
    description: `
      Trong chuyến đi thứ 2 của Hành trình yêu thương, GLT cùng mọi người trong đoàn đã tổ chức và trao tặng các món quà đến các em nhỏ và người dân tại Lảo Thẩn, cùng nhau vui chơi và gói những chiếc bánh chưng thật đẹp. Trong những ngày sát Tết, được quây quần cùng mọi người, không khí của ngày thiện nguyện thật sự đã vui hơn bao giờ hết.
       <br />❤️Cảm ơn cô Sen, cô Huyền cùng các cô giáo tại điểm trường, cảm ơn các anh bên thôn, xã, biên phòng đã tạo điều kiện, giúp đỡ đoàn em thực hiện thành công chương trình này 🥰`,
    image: [
      '/assets/htyt/2/1.png',
      '/assets/htyt/2/2.png',
      '/assets/htyt/2/3.png',
      '/assets/htyt/2/4.png'
    ],
    result:
      'Nồi cơm điện, 20 gói mứt tết, 100 đôi dép, 2 quạt sưởi, 1 loa kéo...và nhiều phần quà ý nghĩa khác, tổng giá trị 18 triệu VNĐ.'
  },
  {
    date: '03/2025',
    title: '🧒 Hành Trình Yêu Thương 03 -&nbsp;Hà&nbsp;Giang',
    description: `💐 Trong chuyến đi thứ 3 của Hành trình yêu thương, GLT cùng mọi người trong đoàn đã tổ chức và trao tặng các món quà đến các em nhỏ và người dân tại thôn Lủng Chư, cùng nhau vui chơi và giao lưu với các bé tại điểm trường. 
     <br />
💌 Khi nhìn thấy sự hạnh phúc và hân hoan hiện lên trên gương mặt các em nhỏ, người dân và cả các thành viên trong đoàn, Giang Lang Thang mong muốn sẽ tổ chức được nhiều hơn các buổi thiện nguyện tại các địa điểm khác nhau, được nhiều người biết đến hơn và các chương trình sẽ đa dạng hơn.`,
    image: [
      '/assets/htyt/3/1.png',
      '/assets/htyt/3/2.png',
      '/assets/htyt/3/3.png',
      '/assets/htyt/3/4.png'
    ],
    result:
      'Trao tặng 150 áo khoác, 440 đôi tất, 150 dôi dép...và nhiều phần quà ý nghĩa khác, tổng giá trị 11.5 triệu VNĐ.'
  },
  {
    date: '04/2025',
    title: '🩺 Hành Trình Yêu Thương 04 -&nbsp;Tà&nbsp;Xùa',
    description: `🫶 Trong không khí cả nước hướng về Miền Nam đón chào ngày 30/4, kỉ niệm 50 năm giải phóng, thống nhất đất nước. Thì chúng tớ lại chọn 1 cách rất riêng để thể hiện lòng yêu nước của mình ❤, chúng tớ đã cùng nhau sắp xếp hành trang để tới với mảnh đất Sơn La xinh đẹp để lan toả yêu thương tới những bà con vùng cao trong ngày thống nhất.
    <br />
    🥳 Với 21 thành viên, chúng tớ đã đem tới cho gần 100 em nhỏ điểm trường mầm non Tà Xùa B thuộc địa phận Tà Xùa, Bắc Yên, Sơn La rất nhiều những phần quà như áo, sách, bút...những hoạt động trải nghiệm thú vị như tô tượng, chơi trò chơi dân gian, xem phim...đem tới cho bà con quần áo, nhu yếu phẩm...Và đặc biệt là HTYT4 đã sơn sửa lại điểm trường, giúp các em có 1 môi trường học tập khang trang, sạch sẽ hơn.`,
    image: [
      '/assets/htyt/4/1.png',
      '/assets/htyt/4/2.png',
      '/assets/htyt/4/3.png',
      '/assets/htyt/4/4.png'
    ],
    result:
      'Trao tặng gần 100 suất quà áo khoác, tất, mũ, 100 tượng tô màu...và nhiều phần quà ý nghĩa khác kèm theo chi phí sơn sửa lại điểm trường tổng giá trị 40 triệu VNĐ.'
  }
]

export const CharityTimeline = (): JSX.Element => {
  const [refRaised, raised] = useCountUp(APP_CONST.charity.total)
  const [refUsed, used] = useCountUp(APP_CONST.charity.used)
  const [refRemain, remain] = useCountUp(
    APP_CONST.charity.total - APP_CONST.charity.used
  )

  return (
    <>
      <section
        id="charity"
        className="bg-white sm:py-16 py-8 px-4 md:px-8 lg:px-16"
      >
        <div className="">
          <div>
            <h2 className="text-3xl font-bold text-center text-green-800 mb-4">
              Quỹ Từ Thiện <br />
              <span className="text-orange-600">
                “Hành&nbsp;Trình&nbsp;Yêu&nbsp;Thương”
              </span>
            </h2>
            <p className="text-center text-gray-700 max-w-2xl mx-auto mb-4">
              "Chúng tôi là những người yêu thiên&nbsp;nhiên, đam&nbsp;mê
              khám&nbsp;phá và luôn mong muốn mang lại giá trị cho
              cộng&nbsp;đồng và xã&nbsp;hội.
              Quỹ&nbsp;“Hành&nbsp;Trình&nbsp;Yêu&nbsp;Thương” được thành lập với
              sứ mệnh kết&nbsp;hợp giữa du&nbsp;lịch và thiện &nbsp;nguyện, mang
              lại niềm&nbsp;vui và sự hỗ&nbsp;trợ cho những vùng đất còn
              khó&nbsp;khăn trên mảnh đất hình chữ S xinh&nbsp;đẹp!"
            </p>
          </div>
          <div className="mb-10 flex flex-col items-center">
            <img
              src="/assets/logo.png"
              alt="Charity Logo"
              className="w-32 h-32"
            />
            <p className="text-center text-gray-700 max-w-2xl mx-auto my-4">
              Ngày <b>7/8/2024</b>,{' '}
              <b>Giang Lang Thang - Du Lịch & Thiện Nguyện </b>
              chính&nbsp;thức được thành&nbsp;lập
              <br /> cùng với đó là quỹ&nbsp;từ&nbsp;thiện&nbsp;
              <b>"Hành&nbsp;Trình Yêu&nbsp;Thương"</b> cũng được ra&nbsp;đời!
            </p>
          </div>
        </div>

        <div className="space-y-20">
          {events.map((event, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                {event.image.map((n) => (
                  <Image
                    key={n}
                    src={n}
                    alt={event.title}
                    className="rounded-lg shadow-md object-cover"
                    height={150}
                  />
                ))}
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <p className="text-gray-500">
                  📆&nbsp;&nbsp;&nbsp;{event.date}
                </p>
                <h3
                  dangerouslySetInnerHTML={{ __html: event.title }}
                  className="text-xl font-bold text-pink-700 mt-2"
                ></h3>
                <p
                  className="text-gray-700 mt-3 text-justify"
                  dangerouslySetInnerHTML={{ __html: event.description }}
                ></p>
                <p className="text-green-700 font-medium mt-2">
                  Kết quả: {event.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-pink-50 to-white sm:py-16 py-10 px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
          Tổng quan gây quỹ từ&nbsp;09/2024&nbsp;đến&nbsp;nay
        </h2>
        <a
          href={APP_CONST.charity.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-center text-blue-600 hover:underline mb-6">
            Xem chi tiết quỹ tại đây !
          </p>
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div ref={refRaised} className="bg-white rounded-2xl shadow-lg p-6">
            <p className="text-4xl font-bold text-pink-600">
              {formatCurrency(raised)}
            </p>
            <p className="text-gray-600 mt-2">Tổng số tiền đã gây quỹ</p>
          </div>
          <div ref={refUsed} className="bg-white rounded-2xl shadow-lg p-6">
            <p className="text-4xl font-bold text-yellow-500">
              {formatCurrency(used)}
            </p>
            <p className="text-gray-600 mt-2">Đã sử dụng cho các hoạt động</p>
          </div>
          <div ref={refRemain} className="bg-white rounded-2xl shadow-lg p-6">
            <p className="text-4xl font-bold text-green-600">
              {formatCurrency(remain)}
            </p>
            <p className="text-gray-600 mt-2">Số dư còn lại trong quỹ</p>
          </div>
        </div>
      </section>
    </>
  )
}
