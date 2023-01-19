import React from "react";
import styles from "./Users.module.css";
import User from "./User/User";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let currrent = props.currentPage;
  let previous = currrent - 5 < 0 ? 0 : currrent - 5;
  let next = currrent + 5;
  let slicedPages = pages.slice(previous, next);

  return (
    <div className={styles.Users}>
      <div className={styles.usersCount}>
        {slicedPages.map((p, index) => (
          <span
            className={props.currentPage === p ? styles.selected : undefined}
            onClick={ () => props.getUsers(p) }
            key={index}
          >
            {p}
          </span>
        ))}
      </div>
      {props.users.map((u, index) => (
        <User
          {...u}
          key={index}
          avatar={u.photos.small}
          changeFollowState={props.changeFollowingState}
          followingInProgres={props.followingInProgres}
        />
      ))}
    </div>
  );
};

export default Users;
