/* eslint-disable no-unused-vars */
import React from "react";
import "./testimonials.css";
import next from "../../assets/next-icon.png";
import back from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testmonials = () => {

     const slider = useRef()
     let tx = 0

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25
    }
    slider.current.style.transform = `translate(${tx}%)`
}
    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25
    }
    slider.current.style.transform = `translate(${tx}%)`
    }
  return (
    <div className="test">
      <img src={next} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Jhon Sina</h3>
                  <span>Paris, France</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat impedit ut aperiam obcaecati, praesentium natus at
                tenetur aspernatur. Cum saepe necessitatibus libero. Expedita
                ipsum, aliquid a iusto alias facere sint?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Mark Zakerburg</h3>
                  <span>Paris, France</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat impedit ut aperiam obcaecati, praesentium natus at
                tenetur aspernatur. Cum saepe necessitatibus libero. Expedita
                ipsum, aliquid a iusto alias facere sint?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Jhon Sina</h3>
                  <span>Paris, France</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat impedit ut aperiam obcaecati, praesentium natus at
                tenetur aspernatur. Cum saepe necessitatibus libero. Expedita
                ipsum, aliquid a iusto alias facere sint?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Jhon Sina</h3>
                  <span>Paris, France</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat impedit ut aperiam obcaecati, praesentium natus at
                tenetur aspernatur. Cum saepe necessitatibus libero. Expedita
                ipsum, aliquid a iusto alias facere sint?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testmonials;
