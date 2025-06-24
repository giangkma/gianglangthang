export enum TypeTour {
  TREKKING = 'trekking'
}

export enum NameTour {
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
    total: 327689348,
    used: 197050500,
    link: 'https://docs.google.com/spreadsheets/d/17wYO4--LjsMO_3Stht4JgJ7f_I5S0mZtbqFvcseSoJo/edit?usp=sharing'
  }
}

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  }).format(value)
}
