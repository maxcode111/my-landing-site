import React from 'react'
import './MyRoad.css'
import RoadAccordion from './RoadAccordion'

export default function MyRoad() {
  return (
    <div className='MyRoadWrapp'>
      <div className="MyRoadContentDiv">
        <p className="myroad" id="roader">Мой путь развития как Front-End разработчика</p>
        <div className="forRoad"><RoadAccordion/></div>
      </div>
    </div>
  )
}
