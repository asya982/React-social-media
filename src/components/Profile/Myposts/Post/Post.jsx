import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img
        src="https://i.pinimg.com/564x/64/3a/e9/643ae95c09984ea6064d92305b5fe4b1.jpg"
        alt="avatar"
        className={style.avatar}
      />
      <p>{props.message}</p>
      <div className={style.likes}>
        <span>{props.likes}</span>
        <button>Like</button>
      </div>
    </div>
  );
};

export default Post;
