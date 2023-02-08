import React from "react";
import styles from "../ProfileInfo.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "@mui/material";


const Contacts = ({userInfo}) => {
  const availableSites = ["facebook", "twitter", "instagram", "github"];

  let contacts = Object.keys(userInfo.contacts)
    .filter((contact) => availableSites.includes(contact))
    .map((contact, index) => {
      return {
        site: contact,
        link: userInfo.contacts[contact],
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
  );
};

export default Contacts;
