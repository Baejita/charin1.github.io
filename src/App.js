import React from "react";
import logoMFP from "./logoMFPWhite.png";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src={logoMFP} alt="logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">แจ้งปัญหา/รับเรื่องร้องเรียน</a>
        </li>
        <li>
          <a href="#">สมัครสมาชิกพรรค</a>
        </li>
        <li>
          <a href="#">อาสาก้าวไกลอยุธยา</a>
        </li>
        <li>
          <a href="#">ติดตามข้อมูลข่าวสาร</a>
        </li>
      </ul>
      <div>
        <button className="button" type="charin">
          สส.ชริน วงศ์พันธ์เที่ยง
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
