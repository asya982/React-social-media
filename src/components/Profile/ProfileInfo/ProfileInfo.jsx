import React from "react";
import styles from "./ProfileInfo.module.css";
import banner from './banner.png'

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
          src="https://i.pinimg.com/564x/64/3a/e9/643ae95c09984ea6064d92305b5fe4b1.jpg"
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
