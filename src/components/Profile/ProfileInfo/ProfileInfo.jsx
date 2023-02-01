import React from "react";
import styles from "./ProfileInfo.module.css";
import banner from "./../../../assets/images/banner.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "@mui/material";
import userIcon from "./../../../assets/images/login.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  const availableSites = ["facebook", "twitter", "instagram", "github"];

  let contacts = Object.keys(props.userInfo.contacts)
    .filter((contact) => availableSites.includes(contact))
    .map((contact, index) => {
      return {
        site: contact,
        link: props.userInfo.contacts[contact],
        id: index,
      };
    });

  let socialMediaName = (name) => {
    switch (name) {
      case availableSites[0]:
        return <FacebookIcon />;
      case availableSites[1]:
        return <TwitterIcon />;
      case availableSites[2]:
        return <InstagramIcon />;
      case availableSites[3]:
        return <GitHubIcon />;
      default:
        return null;
    }
  };

  return (
    <>
      <img className={styles.banner} src={banner} alt="back" />
      <section className={styles.description}>
        <img
          className={styles.avatar}
          src={
            props.userInfo.photos.large ? props.userInfo.photos.large : userIcon
          }
          alt="avatar"
        />
        <div className={styles.userInfo}>
          <h2>{props.userInfo.fullName}</h2>
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
            userId={props.userInfo.userId}
            currentUser={props.currentUser}
          />
          <p>
            About: <span>{props.userInfo.aboutMe}</span>
          </p>
          <p>
            Job status:{" "}
            <span>
              {props.userInfo.lookingForAJob
                ? props.userInfo.lookingForAJobDescription
                : " Enjoying my life"}
            </span>
          </p>
          <p className={styles.contacts}>
            Contacts:
            {contacts.map((contact, index) => {
              return contact.link ? (
                <Link
                  href={contact.link}
                  id={contact.id}
                  color="inherit"
                  target="_blank"
                  key={index}
                >
                  {socialMediaName(contact.site)}
                </Link>
              ) : null;
            })}
          </p>
        </div>
      </section>
    </>
  );
};

export default ProfileInfo;
