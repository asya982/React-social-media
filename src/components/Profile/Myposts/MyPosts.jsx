import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <section className={style.posts}>
      <div>
        <h5>New post</h5>
        <textarea>What's new</textarea>
        <button>Post</button>
      </div>
      <div className={style.posts}>
        posts
        <Post message="Hello" likes="200" />
        <Post message="I`m learning" likes="300" />
        <Post message="React" likes="250" />
      </div>
    </section>
  );
};

export default MyPosts;
