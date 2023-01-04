import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialog.module.css";

const Dialog = (props) => {
  let isActive = (navData) => (navData.isActive ? style.active : null);
  return (
    <div className={style.dialog}>
      <img src={props.img} alt={props.name} className='avatar'/>
      <NavLink to={"/dialogs/" + props.id} className={isActive}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
