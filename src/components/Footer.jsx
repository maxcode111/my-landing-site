import React from "react";
import "./Footer.css";
import Succes from "./Succes";
import github from './img/github-mini.png'
import twitter from './img/twitter-mini.png'
import facebook from './img/facebook-mini.png'
import instagram from './img/instagram-mini.png'

export default function Footer() {
  return (
    <div className="FootWrapp">
      <div className="FootContentDiv">
        <h1 className="contactText">Свяжитесь со мной</h1>
        <div className="contentFooterDiv">
          <div>
            <div className="yellowDiv"></div>
            <div className="formDiv">
              <div className="icallDiv">
                Можете просто оставить заявку, я позвоню вам сегодня
              </div>
              <input type="text" placeholder="Ваше имя" className="nameInput" />
              <input
                type="text"
                placeholder="Ваш телефон"
                className="phoneInput"
              />
              <Succes />
            </div>
          </div>
          <div>
          <div className="forFlex">
            <p className="phoneText">Телефон</p>
            <p className="mailText">Почта</p>
          </div>
          <div className="forFlexSecond">
            <p className="number">+7 800 555 35 35</p>
            <p className="email">magomed.isaev.98@list.ru</p>
            </div>
            <p className="socSites">Соцсети</p>
            <ul className="socUl">
                <li><a href="http://telegram.com">t.me/Jnec1337</a></li>
                <li><a href="http://vk.com">vk.me/Magomed.Isaev</a></li>
                <li><a href="http://facebook.com">fb.me/IsaevMagomed</a></li>
            </ul>
            <ul className="socIcons">
                <li><a href="https://github.com/maxcode111"><img src={github} alt="" /></a></li>
                <li><a href="http://twitter.com"><img src={twitter} alt="" /></a></li>
                <li><a href="http://instagram.com"><img src={instagram} alt="" /></a></li>
                <li><a href="http://facebook.com"><img src={facebook} alt="" /></a></li>
            </ul>
            <a href = "https://www.gnivc.ru/on_gnivts/information_disclosure/pdp/#:~:text=%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F%D0%B5%D1%82%20%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D1%86%D0%B5%D0%BB%D0%B8,%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%B5%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D0%B5%D0%B9%20%D0%A1%D0%B0%D0%B9%D1%82%D0%B0." className="politic">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </div>
  );
}
