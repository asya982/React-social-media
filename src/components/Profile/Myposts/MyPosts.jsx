import React from "react";
import { useForm } from "react-hook-form";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const PostForm = (props) => {
  let { register, handleSubmit, reset } = useForm();

  let addPost = ({ postText }) => {
    if (postText.trim()) {
      props.onAddPost(postText);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(addPost)}>
      <textarea {...register("postText")}></textarea>
      <button>Post</button>
    </form>
  );
};

const MyPosts = (props) => {
  let postElements = props.postData.map((item) => (
    <Post
      userName={props.userName}
      key={item.id}
      avatar={props.avatar}
      {...item}
    />
  ));

  return (
    <section className={style.posts}>
      <h3>My posts</h3>
      <div className={style.newPost}>
        <PostForm
          onAddPost={props.onAddPost}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
      <div>{postElements.reverse()}</div>
    </section>
  );
};

export default MyPosts;
