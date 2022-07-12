import React from "react";
import fixlogo from "../../assets/images/suachua.png";
import './style.scss'
function servicesBar() {
  return (
    <div className="bar-container">
      <div className="bar-1">
        <img src={fixlogo} alt="logo" />
        <p>Sửa Chữa</p>
      </div>
    </div>
  );
}
export default servicesBar;
