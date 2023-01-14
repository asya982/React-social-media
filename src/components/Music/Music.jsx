import React from "react";
import styles from "./Music.module.css";
import Song from "./Song/Song";

const Music = (props) => {
  let songsList = props.music.map((song) => (
    <Song
      key={song.id}
      song={song.songName}
      artist={song.artist}
      isPlaying={song.isPlaying}
      playStop={props.playStop}
      duration={song.duration}
      id={song.id}
    />
  ));

  return (
    <div className={styles.Music}>
      <h2>My music</h2>
      {songsList}
    </div>
  );
};

export default Music;
