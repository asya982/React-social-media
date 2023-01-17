import { connect } from "react-redux";
import { playStop } from "../../redux/musicReducer";
import Music from "./Music";

const mapStateToProps = (state) => ({
  music: state.musicPage.music,
});

const MusicContainer = connect(mapStateToProps, {playStop})(Music);

export default MusicContainer;
