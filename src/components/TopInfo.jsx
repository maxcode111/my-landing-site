import React from 'react'
import Consult from './Consult'
import './TopInfo.css'
import Maga from './img/Maga.jpg'

export default function TopInfo() {
  return (
    <div className='TopInfoWrapp'>
        <div className="notPic">
      <h1 className='descName'>Фрилансер</h1>
      <p className="myName">Магомед Исаев</p>
      <div className="myDesc">Разрабатываю сайты для малого и среднего бизнеса. У меня можно заказать дизайн и верстку небольшого сайта или интернет-магазина</div>
        <Consult/>
        </div>
    <img src={Maga} alt="MAGA" className='MagaPic'/>
    </div>
  )
}
