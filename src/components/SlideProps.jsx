import React from "react";
import "./SlideProps.css";
import feedback from "./img/feedback-icon.png";
import time from "./img/time-icon.png";
import cost from "./img/cost-icon.png";

export default function SlideProps(props) {
  return (
    <div className="SlidePropsWrapp">
      <img src={props.img} alt="123" className="slidePropsPic" />
      <div style={{ marginLeft: "65px" }}>
        <h1 className="slidePropsName">{props.name}</h1>
        <div className="upperSlideProps">
          <div>
            <img src={time} alt="" style={{ marginTop: "8px" }} />
          </div>
          <div className="timeDiv">
            <p className="timeText">Сроки</p>
            <p className="timeProps">{props.time}</p>
          </div>
          <div style={{marginLeft : "100px"}}>
              <img src={cost} alt=""  style={{ marginTop: "8px" }}/>
            </div>
            <div className="costDiv">
              <p className="costText">Стоимость</p>
              <p className="costProps">{props.cost}</p>
            </div>
        </div>
        <div className="lowerSlideProps">
            <div className="forPicDiv"><img src={feedback} alt="" style={{marginRight : "16px"}}/></div>
            <div className="forTextDiv">
            <p className="costText">Отзыв клиента</p>
              <div className="rewievProps">{props.rewiev}</div>
            </div>
        </div>
      </div>
    </div>
  );
}
