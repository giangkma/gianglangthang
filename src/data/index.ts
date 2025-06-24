import { NameTour } from 'domain'
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
  [NameTour.TA_CHI_NHU_NAM_NGHIEP]: TaChiNhuNamNghiep
}
