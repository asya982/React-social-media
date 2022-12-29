import React from "react";
import style from './Navbar.module.css';

const Navbar = () => {
 return (
    <nav className={style.nav}>
        <ul>
          <li><a className={`${style.item} ${style.active}`} href='#s'>Profile</a></li>
          <li><a className={style.item} href='#s'>Messages</a></li>
          <li><a className={style.item} href='#s'>News</a></li>
          <li><a className={style.item} href='#s'>Music</a></li>
          <li><a className={style.item} href='#s'>Settings</a></li>
        </ul>
      </nav>
 );
};

export default Navbar;