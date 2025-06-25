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
}

export const BodyTrekking = ({ name }: IProps) => {
  return (
    <>
      <Home name={name} />
      <About name={name} />
      <Schedule name={name} />
      <TourNoticeAccordion type={TypeTour.TREKKING} name={name} />
      <Charity />
      <MoreImages name={name} />
      <TourCarousel />
    </>
  )
}
