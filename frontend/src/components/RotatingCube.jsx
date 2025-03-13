import React from 'react';
import './RotatingCube.css'; 

import p_img1 from "../assets/p_img1.png"
import p_img2 from "../assets/p_img2.png"
import p_img3 from "../assets/p_img3.png"
import p_img4 from "../assets/p_img4.png"
import p_img5 from "../assets/p_img5.png"
import p_img6 from "../assets/p_img6.png"

const RotatingCube = () => {
  return (
    <div className="container">
        <div className="cube">
          <div className="face">
            <img src={p_img1} alt="" />
          </div>
          <div className="face">
            <img src={p_img2} alt="" />
          </div>
          <div className="face">
            <img src={p_img3} alt="" />
          </div>
          <div className="face">
            <img src={p_img4} alt="" />
          </div>
          <div className="face">
            <img src={p_img5} alt="" />
          </div>
          <div className="face">
            <img src={p_img6} alt="" />
          </div>
        </div>
    </div>
  );
};

export default RotatingCube;