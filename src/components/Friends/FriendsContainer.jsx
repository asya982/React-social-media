import React from "react";
import { connect } from "react-redux";
import { getFriends } from "../../redux/navbarReducer";
import Friends from "./Friends";

class FriendsContainer extends React.Component {
  componentDidMount = () => {
    this.props.getFriends();
  };
  render = () => <Friends {...this.props} />;
}

export default connect(null, { getFriends })(FriendsContainer);
