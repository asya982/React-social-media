import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import style from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? style.active : null)}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? style.active : null)}
            to="/dialogs"
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? style.active : null)}
            to="/news"
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? style.active : null)}
            to="/music"
          >
            Music
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? style.active : null)}
            to="/settings"
          >
            Settings
          </NavLink>
        </li>
      </ul>
      <Friends friendsData={props.state.friends} />
    </nav>
  );
};

export default Navbar;
