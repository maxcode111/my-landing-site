import React from 'react'
import NavBar from './NavBar'
import './TopHead.css'
import TopInfo from './TopInfo'

export default function TopHead() {
  return (
    <div className='TopHeadWrapp'>
      <NavBar/>
      <TopInfo/>
    </div>
  )
}
