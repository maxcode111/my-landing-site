import React from 'react'
import './FeatProps.css'

export default function FeatProps(props) {
  return (
    <div>
      <img src={props.img} alt="pic" />
      <div className="FeatPropsName">{props.name}</div>
      <div className="FeatPropsDesc">{props.desc}</div>
    </div>
  )
}
