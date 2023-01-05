import React from "react";
import MyPosts from "./Myposts/MyPosts";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo userInfo={props.state.userInfo} />
      <MyPosts postData = {props.state.postData} newPostText={props.state.newPostText} dispatch={props.dispatch} userInfo={props.state.userInfo}/>
    </div>
  );
};

export default Profile;
