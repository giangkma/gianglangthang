import { NameTour, TypeTour } from 'domain/index'
import { Home } from './Home'
import { About } from './About'
import { Schedule } from './Schedule'
import { Charity } from './Charity'
import { MoreImages } from './MoreImages'
import { TourCarousel } from './TourCarousel'
import { TourNoticeAccordion } from './accordion'

interface IProps {
  name: NameTour
  type?: TypeTour
}

export const BodyTour = ({ name, type = TypeTour.TREKKING }: IProps) => {
  return (
    <>
      <Home name={name} />
      <About name={name} />
      <Schedule name={name} />
      <TourNoticeAccordion type={type} name={name} />
      <MoreImages name={name} />
      <TourCarousel />
      <Charity />
    </>
  )
}
