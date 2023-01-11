import axios from "axios";
import React from "react";
import User from "./User/User";
import styles from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(responce => props.setUsers(responce.data.items));
  }

  return (
    <div className={styles.Users}>
      {props.users.map((u) => (
        <User
          key={u.id}
          avatar={u.photos.small}
          status={u.status}
          location={u.location}
          followed={u.followed}
          userName={u.name}
          changeFollowState={props.changeFollowState}
          id={u.id}
        />
      ))}
    </div>
  );
};

export default Users;
