import { NameTour } from 'domain/index'
import { LaoThan } from './lao-than'
import { NhiuCoSan } from './nhiu-co-san'
import { LungCung } from './lung-cung'
import { PhuSaPhin } from './phu-sa-phin'
import { KyQuanSan } from './ky-quan-san'
import { TaChiNhu } from './ta-chi-nhu'
import { Samu } from './samu'
import { NguChiSon } from './ngu-chi-son'
import { Putaleng } from './putaleng'
import { TaChiNhuNamNghiep } from './ta-chi-nhu-nam-nghiep'
import { HamLon } from './ham-lon'
import { YTy } from './y-ty'
import { HangDeCho } from './hang-de-cho'
import { TamDao } from './tam-dao'

export const DATA = {
  [NameTour.LAO_THAN]: LaoThan,
  [NameTour.NHIU_CO_SAN]: NhiuCoSan,
  [NameTour.LUNG_CUNG]: LungCung,
  [NameTour.PHU_SA_PHIN]: PhuSaPhin,
  [NameTour.KY_QUAN_SAN]: KyQuanSan,
  [NameTour.TA_CHI_NHU]: TaChiNhu,
  [NameTour.SAMU]: Samu,
  [NameTour.NGU_CHI_SON]: NguChiSon,
  [NameTour.PUTALENG]: Putaleng,
  [NameTour.TA_CHI_NHU_NAM_NGHIEP]: TaChiNhuNamNghiep,
  [NameTour.HAM_LON]: HamLon,
  [NameTour.Y_TY]: YTy,
  [NameTour.HANG_DE_CHO]: HangDeCho,
  [NameTour.TAM_DAO]: TamDao
}

export const LIST_TOURS = [
  {
    title: 'Săn Mây Y Tý + Thác Rồng',
    image: '/assets/tours/y-ty/1.png',
    label: 'Tour Mới',
    duration: '2N2Đ',
    level: 'Độ khó: 2/10',
    price: DATA['y-ty'].cost.value,
    description:
      'Combo trải nghiệm hiking rừng thảo quả, săn mây y tý và checkin thác Rồng hùng vĩ.',
    link: '/tours/y-ty'
  },
  {
    title: 'Hàm Lợn 462m',
    image: '/assets/tours/ham-lon/1.png',
    label: 'Tour Siêu Hot',
    duration: 'Trong ngày',
    level: 'Độ khó: 3/10',
    price: DATA['ham-lon'].cost.value,
    description:
      'Hàm Lợn là lựa chọn lý tưởng cho người mới bắt đầu trekking, chỉ cách Hà Nội 40km với cảnh quan tuyệt đẹp.',
    link: '/tours/ham-lon'
  },
  {
    title: 'Háng Đề Chơ',
    image: '/assets/tours/hang-de-cho/1.png',
    label: 'Tour Mới',
    duration: '2N1Đ',
    level: 'Độ khó: 3/10',
    price: DATA['hang-de-cho'].cost.value,
    description:
      'Hàm Lợn là lựa chọn lý tưởng cho người mới bắt đầu trekking, chỉ cách Hà Nội 40km với cảnh quan tuyệt đẹp.',
    link: '/tours/hang-de-cho'
  },
  {
    title: 'Hiking Tam Đảo',
    image: '/assets/tours/tam-dao/1.png',
    label: 'Tour Mới',
    duration: 'Trong ngày',
    level: 'Độ khó: 4/10',
    price: DATA['tam-dao'].cost.value,
    description:
      'Hàm Lợn là lựa chọn lý tưởng cho người mới bắt đầu trekking, chỉ cách Hà Nội 40km với cảnh quan tuyệt đẹp.',
    link: '/tours/tam-dao'
  },
  {
    title: 'Lảo Thẩn 2860m',
    image: '/assets/tours/lao-than/1.png',
    label: 'Tour Bán Chạy',
    duration: '2N2Đ',
    level: 'Độ khó: 5/10',
    price: DATA['lao-than'].cost.value,
    description:
      'Lảo Thẩn là lựa chọn lý tưởng cho người mới trekking với biển mây hùng vĩ và khung cảnh yên bình ở Y Tý.',
    link: '/tours/lao-than'
  },
  {
    title: 'Lùng Cúng 2913m',
    image: '/assets/tours/lung-cung/1.png',
    duration: '2N2Đ',
    label: 'Tour Bán Chạy',
    level: 'Độ khó: 6/10',
    price: DATA['lung-cung'].cost.value,
    description:
      'Lùng Cúng mang đến cảm giác mộc mạc, nguyên sơ cùng trải nghiệm văn hóa bản địa đặc trưng vùng Tây Bắc.',
    link: '/tours/lung-cung'
  },
  {
    title: 'Tà Chì Nhù 2979m',
    image: '/assets/tours/ta-chi-nhu/2.png',
    duration: '2N2Đ',
    label: 'Tour Bán Chạy',
    level: 'Độ khó: 7/10',
    price: DATA['ta-chi-nhu'].cost.value,
    description:
      'Đỉnh Tà Chì Nhù là thiên đường săn mây với khung cảnh thơ mộng và không khí trong lành giữa núi rừng.',
    link: '/tours/ta-chi-nhu'
  },
  {
    title: 'Phu Sa Phìn 2963m',
    image: '/assets/tours/phu-sa-phin/1.png',
    label: 'Tour Bán Chạy',
    duration: '2N2Đ',
    level: 'Độ khó: 7/10',
    price: DATA['phu-sa-phin'].cost.value,
    description:
      'Phu Sa Phìn là hành trình trekking ít người đặt chân đến, với rừng già nguyên sinh và không khí trong lành giữa đại ngàn Điện Biên.',
    link: '/tours/phu-sa-phin'
  },
  {
    title: 'Ngũ Chỉ Sơn 2865m',
    image: '/assets/tours/ngu-chi-son/1.png',
    label: 'Khám phá mới',
    duration: '2N2Đ',
    level: 'Độ khó: 8/10',
    price: DATA['ngu-chi-son'].cost.value,
    description:
      'Ngũ Chỉ Sơn sở hữu 5 đỉnh nhọn vươn lên trời xanh – là cung đường lý tưởng cho người yêu thích mạo hiểm và độc lạ.',
    link: '/tours/ngu-chi-son'
  },
  {
    title: 'Samu 2913m',
    image: '/assets/tours/samu/1.png',
    label: 'Tour Bán Chạy',
    duration: '2N2Đ',
    level: 'Độ khó: 8/10',
    price: DATA['samu'].cost.value,
    description:
      'Chinh phục đỉnh Samu với địa hình mềm mại và những cánh rừng nguyên sinh còn giữ được vẻ hoang sơ nguyên bản.',
    link: '/tours/samu'
  },
  {
    title: 'Nhìu Cồ San 2965m',
    image: '/assets/tours/nhiu-co-san/1.png',
    duration: '2N2Đ',
    level: 'Độ khó: 8.5/10',
    label: 'Tour Hot',
    price: DATA['nhiu-co-san'].cost.value,
    description:
      'Trải nghiệm cung đường mây trắng và địa hình núi đá độc đáo tại Nhìu Cồ San – điểm đến mới nổi gần Sa Pa.',
    link: '/tours/nhiu-co-san'
  },
  {
    title: 'Ky Quan San 3046m',
    image: '/assets/tours/ky-quan-san/1.png',
    label: 'Tour Hot',
    duration: '2N2Đ',
    level: 'Độ khó: 9/10',
    price: DATA['ky-quan-san'].cost.value,
    description:
      'Bạch Mộc Lương Tử là một trong những cung núi đẹp nhất Việt Nam, nổi bật với cảnh bình minh và biển mây cuồn cuộn.',
    link: '/tours/ky-quan-san'
  },
  {
    title: 'Putaleng 3049m',
    image: '/assets/tours/putaleng/1.png',
    label: 'Tour Bán Chạy',
    duration: '3N2Đ',
    level: 'Độ khó: 9/10',
    price: DATA['putaleng'].cost.value,
    description:
      'Khám phá đỉnh Putaleng – nơi được mệnh danh là mái nhà thứ hai của Đông Dương với rừng nguyên sinh hoang sơ.',
    link: '/tours/putaleng'
  }
]
