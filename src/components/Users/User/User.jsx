import React from "react";
import styles from "./User.module.css";
import userIcon from "./../../../assets/images/login.png";
import { NavLink } from "react-router-dom";

const User = (props) => {
  return (
    <div className={styles.User}>
      <div className={styles.followed}>
        <NavLink to={"/profile/" + props.id}>
          <img
            className={styles.avatar}
            src={props.avatar ? props.avatar : userIcon}
            alt={props.userName}
          />
        </NavLink>
        {props.followed ? (
          <button
            onClick={() => {
              props.changeFollowState(props.id, false);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={() => {
              props.changeFollowState(props.id, true);
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div className={styles.info}>
        <div>
          <h2>{props.userName}</h2>
          <p>{props.status}</p>
        </div>
        <div className={styles.location}>
          <p>{props.location?.city || "Somewhere"},</p>
          <p>{props.location?.country || "in the world"}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
