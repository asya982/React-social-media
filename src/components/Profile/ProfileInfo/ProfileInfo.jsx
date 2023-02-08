import React from "react";
import styles from "./ProfileInfo.module.css";
import banner from "./../../../assets/images/banner.png";
import userIcon from "./../../../assets/images/login.png";
import ProfileStatus from "./ProfileStatusClassComponent";
import Contacts from "./Contacts/Contacts";

const ProfileInfo = ({userInfo, status, updateStatus, currentUser}) => {

  return (
    <>
      <img className={styles.banner} src={banner} alt="back" />
      <section className={styles.description}>
        <img
          className={styles.avatar}
          src={
            userInfo.photos.large ? userInfo.photos.large : userIcon
          }
          alt="avatar"
        />
        <div className={styles.userInfo}>
          <h2>{userInfo.fullName}</h2>
          <ProfileStatus
            status={status}
            updateStatus={updateStatus}
            userId={userInfo.userId}
            currentUser={currentUser}
          />
          <p>
            About: <span>{userInfo.aboutMe}</span>
          </p>
          <p>
            Job status:{" "}
            <span>
              {userInfo.lookingForAJob
                ? userInfo.lookingForAJobDescription
                : " Enjoying my life"}
            </span>
          </p>
         <Contacts userInfo={userInfo}/>
        </div>
      </section>
    </>
  );
};

export default ProfileInfo;
