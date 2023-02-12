import React from 'react'
import FeatProps from './FeatProps'
import './FeatursSection.css'
import firstFeat from './img/feat1.png'
import secFeat from './img/feat2.png'
import thirdFeat from './img/feat3.png'
import foruthtFeat from './img/feat4.png'
import fifthFeat from './img/feat5.png'
import sixthFeat from './img/feat6.png'

export default function FeatursSection() {
  return (
    <div className='FeatursWrapp'>
        <div className="FeatDiv">
      <h1 className='workWithMe'>Со мной удобно работать</h1>
      <div className="featsBox">
        <div className="upperFeats">
      <FeatProps img = {firstFeat} name = "По договору" desc = "Предоставлю все документы для бухгалтерии: договоры, счета и акты. Работаю как ИП без НДС."/>
      <FeatProps img = {secFeat} name = "Точно в срок" desc = "В договоре прописана моя  ответственность за срок проекта. Если просрочу — плачу неустойку. "/>
      <FeatProps img = {thirdFeat} name = "Ценник под вас" desc = "Если у вас нетиповой проект, сделаю рассчет цены за работу и объясню, как складывается цена."/>
      </div>
      <div className="lowerFeats">
      <FeatProps img = {foruthtFeat} name = "Премежуточные итоги" desc = "Показываю работу поэтапно, а не в последий момент перед крайним сроком. "/>
      <FeatProps img = {fifthFeat} name = "Хостинг и домен " desc = "Если мы договорились о цене проекта, в неё входит всё: домен и хостинг на год + SSL сертификат."/>
      <FeatProps img = {sixthFeat} name = "Не брошу после сдачи" desc = "Научу вас или вашего сотрудника пользоваться сайтом, запишу видео-инструкции."/>
      </div>
      </div>
      </div>
    </div>
  )
}
