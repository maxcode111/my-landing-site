import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import youtube from './img/youtube.png';
import tesla from './img/tesla.png';
import habr from './img/habr.png';
import './CarouselBox.css';
import { CarouselItem } from 'react-bootstrap';
import SlideProps from './SlideProps';
function CarouselBox() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} controls = {false}>
      <CarouselItem>
      <SlideProps img = {youtube} name = "Видеохостинговый сайт компании Youtube" time = "3 рабочих недели" cost = "10 млн рублей" rewiev = "Мне понравилось работать с Магомедом, потому что он все время был на связи и предлагал свои решения, когда мы заходили в тупик с дизайном. Мне нужны были закрывающие документы для бухгалтерии, и Артем — тот редкий фрилансер, у которого с документами все в порядке"/>
      </CarouselItem>
      <CarouselItem>
      <SlideProps img = {tesla} name = "Сайт по продаже электромобилей Tesla" time = "1 рабочая неделя" cost = "3 млн рублей" rewiev = "Мага лучший просто, это я Илон Маск, если бы не Мага , то я никогда не добился бы таких продаж своих электромобилей через сайт, спасибо ему большое, Илон Маск и Мага братья навек"/>
      </CarouselItem>
      <CarouselItem>
      <SlideProps img = {habr} name = "Сайт-форум с айти направлением Habr" time = "4 рабочих дня" cost = "1 млн рублей" rewiev = "Мне понравилось работать с Магомедом, потому что он все время был на связи и предлагал свои решения, когда мы заходили в тупик с дизайном. Мне нужны были закрывающие документы для бухгалтерии, и Артем — тот редкий фрилансер, у которого с документами все в порядке"/>
      </CarouselItem>
    </Carousel>
  );
}

export default CarouselBox;