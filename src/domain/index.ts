export enum TypeTour {
  TREKKING = 'trekking',
  HAMLON = 'hamlon',
  TAMDAO = 'tamdao',
  HIKING = 'hiking'
}

export interface ICreateBookingSaleBody {
  tour: string
  date: string
  people: number
  phone: string
}

export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^(0|\+84)(3|5|7|8|9)\d{8}$/
  return phoneRegex.test(phone)
}

export enum NameTour {
  HAM_LON = 'ham-lon',
  HANG_DE_CHO = 'hang-de-cho',
  Y_TY = 'y-ty',
  TAM_DAO = 'tam-dao',

  LAO_THAN = 'lao-than',
  NHIU_CO_SAN = 'nhiu-co-san',
  LUNG_CUNG = 'lung-cung',
  KY_QUAN_SAN = 'ky-quan-san',
  PHU_SA_PHIN = 'phu-sa-phin',
  TA_CHI_NHU = 'ta-chi-nhu',
  SAMU = 'samu',
  NGU_CHI_SON = 'ngu-chi-son',
  PUTALENG = 'putaleng',
  TA_CHI_NHU_NAM_NGHIEP = 'ta-chi-nhu-nam-nghiep'
}

export const APP_CONST = {
  location: 'cổng Toà án Quận Nam Từ Liêm',
  charity: {
    total: 338969348,
    used: 214113500,
    link: 'https://docs.google.com/spreadsheets/d/17wYO4--LjsMO_3Stht4JgJ7f_I5S0mZtbqFvcseSoJo/edit?usp=sharing'
  }
}

export const breakpointColumnsObj = {
  default: 4,
  1280: 3,
  1024: 3,
  768: 2
}

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  }).format(value)
}
