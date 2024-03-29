import React from "react";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        {...props}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
