import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const mapDispatchToProps = (dispatch) => ({
  onAddPost: () => {
    dispatch(addPostActionCreator());
  },
  updateNewPostText: (text) => {
    dispatch(updateNewPostTextActionCreator(text));
  },
});

const mapStateToProps = (state) => ({
  postData: state.profilePage.profile.postData,
  avatar: state.profilePage.profile.userInfo.photos.small,
  userName: state.profilePage.profile.userInfo.fullName,
  newPostText: state.profilePage.newPostText,
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
