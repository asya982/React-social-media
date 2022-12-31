import React, { useState } from "react";
import style from "./Post.module.css";

const Post = (props) => {
  const [likes, setLikes] = useState(props.likes);
  return (
    <div className={style.item}>
      <div className={style.container}>
        <img
          src="https://i.pinimg.com/564x/64/3a/e9/643ae95c09984ea6064d92305b5fe4b1.jpg"
          alt="avatar"
          className={style.avatar}
        />
        <div className={style.likes}>
          <span>{likes}</span>
          <button onClick={() => setLikes(likes + 1)}>Like</button>
        </div>
      </div>
      <div className={style.container}>
        <h5>{props.userName}</h5>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Post;
