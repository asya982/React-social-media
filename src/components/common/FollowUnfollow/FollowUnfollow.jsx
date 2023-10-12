import React from "react";
import styles from "./FollowUnfollow.module.css";
import { changeFollowingState } from "../../../redux/usersReducer";

const FollowUnfollow = ({
  id,
  followed,
  followingInProgres,
}) => {
  
  return (
    <div className={styles.FollowUnfollow}>
      {followed ? (
        <button
          onClick={() => {
            changeFollowingState(id, false);
          }}
          disabled={followingInProgres.some((userId) => userId === id)}
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={() => {
            changeFollowingState(id, true);
          }}
          disabled={followingInProgres.some((userId) => userId === id)}
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default FollowUnfollow;
