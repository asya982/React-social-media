import React from "react";
import style from "./Header.module.css";
import logo from "./icon.png";

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt="icon" />
    </header>
  );
};

export default Header;
