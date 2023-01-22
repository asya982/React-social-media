import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile } from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { withRouter } from "../../hoc/withRouter";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    this.props.getProfile(userId);
  }

  render = () => {
    return <Profile {...this.props} />;
  };
}

const mapStateToProps = (state) => ({
  userInfo: state.profilePage.profile.userInfo,
});

export default compose(
  connect(mapStateToProps, { getProfile }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
