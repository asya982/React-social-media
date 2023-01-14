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
        {slicedPages.map((p) => (
          <span
            className={props.currentPage === p && styles.selected}
            onClick={(e) => props.onPageChanged(p)}
          >
            {p}
          </span>
        ))}
      </div>
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
