import React from "react";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo userInfo={props.state.userInfo} />
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;
