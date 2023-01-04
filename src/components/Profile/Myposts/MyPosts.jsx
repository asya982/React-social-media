import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.postData.map((item) => (
    <Post userName="ILoveDimkins" message={item.message} likes={item.likes} />
  ));

  let newPostElement = React.createRef();

  let updateTextPost = () => {
    let newText = newPostElement.current.value;
    props.updateTextPost(newText);
  };

  return (
    <section className={style.posts}>
      <h3>My posts</h3>
      <div className={style.newPost}>
        <textarea
          ref={newPostElement}
          onChange={updateTextPost}
          value={props.newPostText}
        ></textarea>
        <button onClick={props.addPost}>Post</button>
      </div>
      <div>{postElements}</div>
    </section>
  );
};

export default MyPosts;
