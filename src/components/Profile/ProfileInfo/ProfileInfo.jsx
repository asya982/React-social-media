import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => (
  <>
    <img
      className={styles.banner}
      src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png"
      alt="back"
    />
    <section className={styles.description}>
      <img
        className={styles.avatar}
        src="https://i.pinimg.com/564x/64/3a/e9/643ae95c09984ea6064d92305b5fe4b1.jpg"
        alt="avatar"
      />
      <h2>description</h2>
    </section>
  </>
);

export default ProfileInfo;
