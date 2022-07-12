import React from "react";
import logo from "../../assets/images/logo.png";
import Carousel from "../Carousel/carousel";
import NavBar from "../NavBar/navBar";
import "./style.scss";

function Header() {
  return (
    <div className="banner-container">
      <img src={logo} alt="logo" />
      <NavBar />
      <div className="carousel">
        <Carousel />
      </div>
    </div>
  );
}
export default Header;
