import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.postData.map((item) => (
    <Post userName={props.userInfo.userName} message={item.message} likes={item.likes} avatar={props.userInfo.avatar}/>
  ));

  let newPostElement = React.createRef();

  let onPostChange = () => {
    let newText = newPostElement.current.value;
    props.dispatch( updateNewPostTextActionCreator(newText) );
  };

  let addPost = () => {
    props.dispatch( addPostActionCreator() )
  };

  return (
    <section className={ style.posts }>
      <h3>My posts</h3>
      <div className={ style.newPost }>
        <textarea
          ref={ newPostElement }
          onChange={ onPostChange }
          value={ props.newPostText }
        ></textarea>
        <button onClick={ addPost }>Post</button>
      </div>
      <div>{ postElements }</div>
    </section>
  );
};

export default MyPosts;
