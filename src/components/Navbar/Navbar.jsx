import React from "react";
import { NavLink } from "react-router-dom";
import FriendsContainer from "../Friends/FriendsContainer";
import style from "./Navbar.module.css";

const Navbar = ({friends}) => {
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
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? style.active : null)}
            to="/users"
          >
            Users
          </NavLink>
        </li>
      </ul>
      <FriendsContainer friendsData={friends} />
    </nav>
  );
};

export default Navbar;
