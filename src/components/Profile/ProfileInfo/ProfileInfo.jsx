import React from "react";
import styles from "./ProfileInfo.module.css";
import banner from './../../../assets/images/banner.png'

const ProfileInfo = (props) => {
  return (
    <>
      <img
        className={styles.banner}
        src={banner}
        alt="back"
      />
      <section className={styles.description}>
        <img
          className={styles.avatar}
          src={props.userInfo.avatar}
          alt="avatar"
        />
        <div className={styles.userInfo}>
          <h2>{props.userInfo.userName}</h2>
          <p>
            About: <span>{props.userInfo.description}</span>
          </p>
          <p>
            Age: <span>{props.userInfo.age}</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default ProfileInfo;
