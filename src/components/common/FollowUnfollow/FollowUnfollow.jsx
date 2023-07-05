import React from "react";
import styles from "./FollowUnfollow.module.css";

const FollowUnfollow = ({
  id,
  followed,
  followingInProgres,
  changeFollowState,
}) => {
  
  return (
    <div className={styles.FollowUnfollow}>
      {followed ? (
        <button
          onClick={() => {
            changeFollowState(id, false);
          }}
          disabled={followingInProgres.some((userId) => userId === id)}
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={() => {
            changeFollowState(id, true);
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
