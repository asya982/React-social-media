import React from "react";
import styles from "./../Friends.module.css";
import login from "../../../assets/images/login.png";
import { NavLink } from "react-router-dom";

const Friend = (props) => {
  return (
    <div >
      <NavLink to={"/profile/" + props.id} className={styles.friend}>
        <img src={props.img || login} alt={props.name} className="avatar" />
        <p className={styles.friendName}>{props.name}</p>
      </NavLink>
    </div>
  );
};

export default Friend;
