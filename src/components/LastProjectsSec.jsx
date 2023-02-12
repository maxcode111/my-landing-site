import './LastProjectsSec.css'

import React from 'react'
import CarouselBox from './CarouselBox'

export default function LastProjectsSec() {
  return (
    <div className='LastPWrapp'>
        <div className="LastWDiv">
      <h1 className="worksText">Последние проекты</h1>
      <div className="CarouselDiv"><CarouselBox/></div>
      </div>
    </div>
  )
}
