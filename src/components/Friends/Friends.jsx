import React from "react";
import { NavLink } from "react-router-dom";
import Friend from "./Friend/Friend";
import styles from "./Friends.module.css";

const Friends = (props) => {
  let friend = props.friendsData.map((friend) => (
    <Friend img={friend.img} name={friend.name} key={friend.id} />
  ));
  return (
    <div className={styles.Friends}>
      <NavLink to={"/friends"}>Friends</NavLink>
      <div className={styles.friendItems}>{friend}</div>
    </div>
  );
};

export default Friends;
