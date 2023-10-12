import ProfileStatus from "./ProfileStatus";
import Contacts from "./Contacts/Contacts";
import styles from "./ProfileInfo.module.css";
import FollowUnfollow from "../../common/FollowUnfollow/FollowUnfollow";

const ProfileData = ({
  status,
  updateStatus,
  userInfo,
  goToEditMode,
  ...props
}) => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.nameEdit}>
        <h2>{userInfo.fullName}</h2>
        {props.isOwner && <button onClick={goToEditMode}>Edit</button>}
      </div>
      <ProfileStatus
        status={status}
        updateStatus={updateStatus}
        userId={userInfo.userId}
        isOwner={props.isOwner}
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
      <Contacts userInfo={userInfo} />
      {!props.isOwner && <FollowUnfollow id={userInfo.userId} { ...props} />}
    </div>
  );
};

export default ProfileData;
