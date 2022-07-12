import React from "react";
import "./style.scss";
import { Input } from "reactstrap";

function NavBar() {
  return (
    <div className="topnav">
      <div className="topnav-left">
        <a>TRANG CHỦ</a>
        <a>GIỚI THIỆU</a>
        <a>TIN TỨC</a>
        <a>LIÊN HỆ</a>
        <div className="dropdown">
          <button className="dropbtn">SẢN PHẨM</button>
          <div className="dropdown-content">
            <a>HONDA</a>
            <a>TOYOTA</a>
            <a>Xem Tất Cả</a>
          </div>
        </div>
      </div>
      <div className="topnav-right">
        <form>
          <Input bsSize="sm" type="search" />
        </form>
        <a>Đăng nhập</a>
        <a>Đăng ký</a>
      </div>
    </div>
  );
}
export default NavBar;
