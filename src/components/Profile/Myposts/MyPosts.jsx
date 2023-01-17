import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.postData.map((item) => (
    <Post userName={props.userName} message={item.message} likes={item.likes} key={item.id} avatar={props.avatar}/>
  ));

  let onPostChange = (e) => {
    let newText = e.target.value;
    props.updateNewPostText(newText);
  };

  return (
    <section className={ style.posts }>
      <h3>My posts</h3>
      <div className={ style.newPost }>
        <textarea
          onChange={ onPostChange }
          value={ props.newPostText }
        ></textarea>
        <button onClick={ props.onAddPost }>Post</button>
      </div>
      <div>{ postElements.reverse() }</div>
    </section>
  );
};

export default MyPosts;
