import { NameTour, TypeTour } from 'domain'
import React from 'react'
import { Home } from './Home'
import { About } from './About'
import { Schedule } from './Schedule'
import { Prepare } from './Prepare'
import { Cost } from './Cost'
import { Included } from './Included'
import { Policy } from './Policy'
import { Charity } from './Charity'
import { MoreImages } from './MoreImages'

interface IProps {
  name: NameTour
}

export const BodyTrekking = ({ name }: IProps) => {
  return (
    <div>
      <Home name={name} />
      <About name={name} />
      <Schedule name={name} />
      <Prepare type={TypeTour.TREKKING} />
      <Cost name={name} />
      <Included name={name} type={TypeTour.TREKKING} />
      <Policy />
      <Charity />
      <MoreImages name={name} />
    </div>
  )
}
