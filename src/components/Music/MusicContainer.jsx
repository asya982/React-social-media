import { connect } from "react-redux";
import { playStopAC } from "../../redux/musicReducer";
import Music from "./Music";

const mapStateToProps = (state) => ({
  music: state.musicPage.music,
});

const mapDispatchToProps = (dispatch) => ({
  playStop: (id) => {
    dispatch(playStopAC(id));
  },
});

const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);

export default MusicContainer;
