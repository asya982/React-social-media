import React from "react";
import styles from "./Song.module.css";

const Song = (props) => {
  let duration = `${Math.trunc(props.duration / 60)}:${props.duration % 60}`;
  let playStop = () => {
    props.playStop(props.id);
  };
  return (
    <div className={styles.song}>
      <button onClick={playStop}> {props.isPlaying ? "stop" : "play"} </button>
      <div className={styles.name}>
        <p>{props.song}</p>
        <p>{props.artist}</p>
      </div>
      <div className={styles.duration}>
        <span >{duration}</span>
      </div>
    </div>
  );
};

export default Song;
