import React from "react";
import styles from "./User.module.css";
import userIcon from "./../../../assets/images/login.png";
import { NavLink } from "react-router-dom";
import FollowUnfollow from "../../common/FollowUnfollow/FollowUnfollow";

const User = (props) => {
  return (
    <div className={styles.User}>
      <div className={styles.followed}>
        <NavLink to={"/profile/" + props.id}>
          <img
            className={styles.avatar}
            src={props.avatar || userIcon}
            alt={props.Name}
          />
        </NavLink>
        <FollowUnfollow
          id={props.id}
          followingInProgres={props.followingInProgres}
          followed={props.followed}
          changeFollowState={props.changeFollowState}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.status}>
          <h2>{props.name}</h2>
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
