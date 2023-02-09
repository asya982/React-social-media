import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus } from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { withRouter } from "../../hoc/withRouter";

class ProfileContainer extends React.Component {

  componentDidUpdate(previousProps) {
    if (previousProps.router.params.userId !== this.props.router.params.userId) {
      this.props.getProfile(this.props.currentUser);
      this.props.getStatus(this.props.currentUser);
    }
  }

  componentDidMount() {
    let userId = this.props.router.params.userId || this.props.currentUser ;
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render = () => {
    return <Profile {...this.props} />;
  };
}

const mapStateToProps = (state) => ({
  userInfo: state.profilePage.profile.userInfo,
  status: state.profilePage.status,
  currentUser: state.auth.id
});

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
