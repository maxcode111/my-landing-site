import React from 'react'
import ContactsModal from './ContactsModal'
import DropDownNav from './DropDownNav'
import logoPic from './img/logo-no-background.png'
import './NavBar.css'
import { Link } from 'react-scroll';


export default function NavBar() {
  return (
    <div className='NavWrapp'>
      <a href="./" className='logoA'><img src={logoPic} alt="logo" className='logoPic'/></a>
      <ul className="navUl">
        <li><Link to="roader" spy={true} smooth={true} offset={-30} duration={100}><p className="roadlink">Путь развития</p></Link></li>
        <li><DropDownNav/></li>
        <li><p>ЗАКАЗАТЬ ЗВОНОК</p></li>
        <li><ContactsModal/></li>
      </ul>
    </div>
  )
}
