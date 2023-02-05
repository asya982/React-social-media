import React from "react";
import style from "./Header.module.css";
import logo from "./../../assets/images/icon.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={logo} alt="icon" />
      </div>
      <div className={style.loginBlock}>
        {props.isAuth ? (
          <>
            <NavLink to={"/profile/" + props.userId}>
              <img src={props.avatar} className="avatar" alt={props.login} />
              {props.login}
            </NavLink>
            <button onClick={props.userLogout}>Log out</button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
