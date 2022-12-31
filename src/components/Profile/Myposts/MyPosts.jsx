import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postData = [
    { id: 1, message: "Hello", likes: 200 },
    { id: 2, message: "I`m learning", likes: 300 },
    { id: 3, message: "React", likes: 250 },
    { id: 4, message: "Dimkins loves ketchub", likes: 2500000000 },
  ];

  let postElements = postData.map((item) => <Post userName="ILoveDimkins" message={item.message} likes={item.likes} />);

  return (
    <section className={style.posts}>
      <h3>My posts</h3>
      <div className={style.newPost}>
        <textarea placeholder="What's new?"></textarea>
        <button>Post</button>
      </div>
      <div>
        {postElements}
      </div>
    </section>
  );
};

export default MyPosts;
