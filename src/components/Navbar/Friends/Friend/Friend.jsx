import React from "react";
import styles from './../Friends.module.css'

const Friend = (props) => {
  return (
    <div className={styles.friend}>
      <img src={props.img} alt={props.name} className='avatar' />
      <p>{props.name}</p>
    </div>
  );
};

export default Friend;