import React from "react";
import Loader from "../Loader/Loader";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  if (!props.userInfo) {
    return <Loader />;
  }
  return (
    <div>
      <ProfileInfo userInfo={props.userInfo} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
