import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";
import userIcon from "./../../../assets/images/login.png";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo = ({
  userInfo,
  status,
  updateStatus,
  currentUser,
  isOwner,
  saveProfile,
  ...props
}) => {
  const getFileFromUser = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  let [editmode, setEditMode] = useState(false);

  return (
    <>
      <section className={styles.description}>
        <div className={styles.userPhoto}>
          <img
            className={styles.avatar}
            src={userInfo.photos.large || userIcon}
            alt="avatar"
          />
          {isOwner && (
            <div className={styles.addPhoto}>
              <label htmlFor="photo">
                Change Photo
                <input id="photo" type={"file"} onChange={getFileFromUser} />
                <AddAPhotoIcon />
              </label>
            </div>
          )}
        </div>
        {editmode && isOwner ? (
          <ProfileDataForm
            {...props}
            userInfo={userInfo}
            isOwner={isOwner}
            status={status}
            updateStatus={updateStatus}
            saveProfile={saveProfile}
            saveChanges={() => setEditMode(false)}
          />
        ) : (
          <ProfileData
            {...props}
            userInfo={userInfo}
            isOwner={isOwner}
            status={status}
            updateStatus={updateStatus}
            goToEditMode={() => setEditMode(true)}
          />
        )}
      </section>
    </>
  );
};

export default ProfileInfo;
