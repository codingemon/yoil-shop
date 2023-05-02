import React, { useState } from "react";
import imgOne from "./img/one.png";
import imgTwo from "./img/two.png";
import imgThree from "./img/three.png";
import imgThree2 from "./img/three2.png";
import imgFour from "./img/four.png";
import imgFive from "./img/five.png";
import "../component/TabBar.css";
import { Link } from "react-router-dom";

export default function TabBar() {
  const [imgThreeSrc, setImgThreeSrc] = useState(imgThree2);

  // 마우스가 이미지 위에 올라갔을 때 호출되는 이벤트 핸들러
  const handleImgThreeMouseOver = () => {
    // imgThree2의 상태 변수를 imgThree로 변경
    setImgThreeSrc(imgThree);
  };
  // 마우스가 이미지를 떠날 때 호출되는 이벤트 핸들러
  const handleImgThreeMouseLeave = () => {
    setImgThreeSrc(imgThree2);
  };

  return (
    <div className="tabBar-container">
      <div className="tabBar-nav">
        <div className="tabBar-icon">
          <Link to="/Menu">
            <img src={imgOne} className="tabBar-item" alt="one" />
          </Link>
        </div>
        <div className="tabBar-icon">
          <img src={imgTwo} className="tabBar-item" alt="two" />
        </div>
        <div className="tabBar-icon">
          <img
            src={imgThreeSrc}
            className="tabBar-item"
            alt="three"
            onMouseOver={handleImgThreeMouseOver}
            onMouseLeave={handleImgThreeMouseLeave}
          />
        </div>
        <div className="tabBar-icon">
          <img src={imgFour} className="tabBar-item" alt="four" />
        </div>
        <div className="tabBar-icon">
          <img src={imgFive} className="tabBar-item" alt="five" />
        </div>
      </div>
    </div>
  );
}
