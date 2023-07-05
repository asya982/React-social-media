import React from "react";
import styles from "./Users.module.css";
import User from "./User/User";
import Pagination from "../common/Pagination/Pagination";

const Users = (props) => {
  const { totalUsersCount, pageSize, currentPage, changeFollowingState, followingInProgres, getUsers} = props;
  return (
    <div className={styles.Users}>
      <Pagination totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} getUsers={getUsers}/>
      {props.users.map((u, index) => (
        <User
          {...u}
          key={index}
          avatar={u.photos.small}
          changeFollowState={changeFollowingState}
          followingInProgres={followingInProgres}
        />
      ))}
    </div>
  );
};

export default Users;
