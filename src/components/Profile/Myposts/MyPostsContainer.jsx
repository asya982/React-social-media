import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
