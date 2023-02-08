import React from "react";
import style from "./Header.module.css";
import logo from "./../../assets/images/icon.png";
import { NavLink } from "react-router-dom";

const Header = ({ isAuth, userId, login, userLogout, avatar }) => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={logo} alt="icon" />
      </div>
      <div className={style.loginBlock}>
        {isAuth ? (
          <>
            <NavLink to={"/profile/" + userId}>
              <img src={avatar} className="avatar" alt={login} />
              {login}
            </NavLink>
            <button onClick={userLogout}>Log out</button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
